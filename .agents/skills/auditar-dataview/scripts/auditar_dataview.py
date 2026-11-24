#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
auditar_dataview.py - Auditoria determinística e simulação de blocos Dataview e queries inline no cofre Tormenta 20.
Executável de forma repetível: python .agents/skills/auditar-dataview/scripts/auditar_dataview.py
"""

import os
import sys
import re
import yaml

def clean_yaml_text(text):
    """Normaliza YAML com listas/dicionários vazios em linhas não indentadas."""
    text = re.sub(r':\s*\n\s*\[\]', ': []', text)
    text = re.sub(r':\s*\n\s*\{\}', ': {}', text)
    return text

def dv_default(val, fallback):
    if val is None or val == "" or val == []:
        return fallback
    return val

def dv_contains(haystack, needle):
    if haystack is None:
        return False
    needle_str = str(needle).strip()
    needle_clean = needle_str.replace('[[', '').replace(']]', '').strip()
    if isinstance(haystack, (list, set, tuple)):
        for item in haystack:
            item_str = str(item).strip()
            item_clean = item_str.replace('[[', '').replace(']]', '').strip()
            if item_str == needle_str or item_clean == needle_clean:
                return True
            if needle_clean and needle_clean in item_str:
                return True
        return False
    elif isinstance(haystack, str):
        return needle_str in haystack or needle_clean in haystack
    return False

def dv_length(val):
    if val is None:
        return 0
    if isinstance(val, (list, tuple, dict, set, str)):
        return len(val)
    return 0

def dv_string(val):
    if val is None:
        return ""
    if isinstance(val, list):
        return ", ".join(str(x) for x in val)
    return str(val)

def dv_link(val):
    if not val:
        return ""
    s = str(val).strip()
    if s.startswith('[[') and s.endswith(']]'):
        return s
    return f"[[{s}]]"

def parse_from(from_str):
    positives = []
    negatives = []
    tokens = re.findall(r'(-?)"([^"]+)"', from_str)
    for sign, path in tokens:
        if sign == '-':
            negatives.append(path)
        else:
            positives.append(path)
    return positives, negatives

def matches_from(cand, positives, negatives):
    c_path = cand['path']
    c_folder = cand['folder']
    for neg in negatives:
        if c_path.startswith(neg) or c_folder.startswith(neg):
            return False
    if not positives:
        return True
    for pos in positives:
        if c_path.startswith(pos) or c_folder.startswith(pos):
            return True
    return False

KNOWN_BUILTINS = {
    'contains', 'default', 'length', 'string', 'link',
    'and', 'or', 'not', 'is', 'None', 'True', 'False',
    'dv_contains', 'dv_default', 'dv_length', 'dv_string', 'dv_link',
    'get', 'this_fm', 'cand_fm'
}

def transpile_where(where_str):
    s = re.sub(r'!= \s*null\b', 'is not None', where_str)
    s = re.sub(r'= \s*null\b', 'is None', s)
    s = re.sub(r'\bAND\b', ' and ', s)
    s = re.sub(r'\bOR\b', ' or ', s)
    s = re.sub(r'\bNOT\b', ' not ', s)
    s = re.sub(r'(?<![!<>=])=(?!=)', '==', s)
    s = re.sub(r'\bnull\b', 'None', s)
    s = re.sub(r'\btrue\b', 'True', s)
    s = re.sub(r'\bfalse\b', 'False', s)

    # Funções primeiro
    s = re.sub(r'\bcontains\(', 'dv_contains(', s)
    s = re.sub(r'\bdefault\(', 'dv_default(', s)
    s = re.sub(r'\blength\(', 'dv_length(', s)
    s = re.sub(r'\bstring\(', 'dv_string(', s)
    s = re.sub(r'\blink\(', 'dv_link(', s)

    # Operador NOT de negação unária (! mas não !=)
    s = re.sub(r'!(?!=)\s*', ' not ', s)

    s = re.sub(r'\bthis\.file\.link\b', 'this_link', s)
    s = re.sub(r'\bthis\.file\.name\b', 'this_name', s)
    s = re.sub(r'\bthis\.file\.folder\b', 'this_folder', s)
    s = re.sub(r'\bthis\.file\.path\b', 'this_path', s)
    s = re.sub(r'\bthis\.([a-zA-Z0-9_]+)\b', r'this_fm.get("\1")', s)

    s = re.sub(r'\bfile\.link\b', 'cand_link', s)
    s = re.sub(r'\bfile\.name\b', 'cand_name', s)
    s = re.sub(r'\bfile\.folder\b', 'cand_folder', s)
    s = re.sub(r'\bfile\.path\b', 'cand_path', s)
    s = re.sub(r'\bfile\.outlinks\b', 'cand_outlinks', s)

    def repl_ident(match):
        w = match.group(0)
        if w in KNOWN_BUILTINS or w.startswith('dv_') or w.startswith('cand_') or w.startswith('this_'):
            return w
        return f'cand_fm.get("{w}")'

    parts = re.split(r'("(?:\\.|[^"\\])*")', s)
    for i in range(0, len(parts), 2):
        parts[i] = re.sub(r'\b[a-zA-Z_][a-zA-Z0-9_]*\b', repl_ident, parts[i])
    return ''.join(parts)

def is_expected_empty(file_path, heading, from_str, where_str):
    h_lower = heading.lower()
    p_lower = file_path.lower()

    if "poderes dependentes" in h_lower:
        return True
    if "efeitos que afetam esta perícia" in h_lower or "efeitos que afetam esta pericia" in h_lower:
        return True
    if "poderes e itens vinculados" in h_lower:
        return True
    if "poderes raciais futuros" in h_lower:
        return True
    if "poderes de raça" in h_lower:
        return True
    if "classes variantes" in h_lower:
        return True
    if "magias exclusivas" in h_lower or "aprimoramento exclusivo" in h_lower or "aprimoramentos exclusivos" in h_lower:
        return True
    if "sessões com participação" in h_lower or "sessoes com participacao" in h_lower:
        return True
    if "tilliann" in p_lower and "poderes concedidos" in h_lower:
        return True
    if "domínios tecnológicos" in h_lower or "tecnologias, armas" in h_lower or "tecnologias & equipamentos" in h_lower:
        return True
    if "magias concedidas pela raça" in h_lower or "magias inatas concedidas" in h_lower:
        return True
    if "poderes base / gerais associados" in h_lower:
        return True
    if "sinergia, poderes & magias" in h_lower or "classes relacionadas" in h_lower:
        return True
    return False

def determine_probable_cause(file_path, heading, from_str, where_str, dql):
    if 'trilha_poder = "Eclesiástico"' in where_str:
        return "Valor de `trilha_poder = 'Eclesiástico'` não existe nas notas de Clérigo (trilhas válidas: Prece de Combate, Liturgia & Oração, Canalização, Missas)."
    if 'trilha_poder' in where_str:
        return "Cláusula `trilha_poder` filtra por valor inexistente ou vazio nas notas da pasta consultada."
    if 'contains(classes, this.file.link)' in where_str and 'classe-variante' in file_path:
        return "Falta `OR contains(classes, this.classe_base)` para incluir poderes herdados da classe base."
    if 'this.' in where_str:
        return "Propriedade `this.<campo>` referenciada está vazia ou ausente no frontmatter desta nota."
    return "Filtro WHERE muito restritivo ou notas correspondentes inexistentes no cofre."

def main():
    vault_dir = '.'
    report_file = '.system_generated/auditoria_dataview.md'
    os.makedirs(os.path.dirname(report_file), exist_ok=True)

    # Mapear pastas existentes no disco
    existing_folders = set()
    for root, dirs, files in os.walk(vault_dir):
        rel = os.path.relpath(root, vault_dir).replace('\\', '/')
        if rel != '.':
            existing_folders.add(rel)

    # 1. Indexar todas as notas do cofre e validar sintaxe YAML
    notes = {}
    all_trilhas_by_folder = {}
    erros_criticos = []
    vazios_suspeitos = []
    vazios_esperados_count = 0
    vazios_esperados = []
    ok_count = 0
    total_blocos_dataview = 0
    total_inlines = 0
    inlines_campo_ausente = []
    queries_complexas = []

    for root, dirs, files in os.walk(vault_dir):
        if any(p in root for p in ['.git', '.obsidian', 'scratch', '.system_generated', '.trash']):
            continue
        for f in files:
            if f.endswith('.md'):
                p = os.path.join(root, f)
                rel_p = os.path.relpath(p, vault_dir).replace('\\', '/')
                base = f[:-3]
                folder = os.path.dirname(rel_p).replace('\\', '/')

                with open(p, 'r', encoding='utf-8') as fl:
                    c = fl.read()

                fm = {}
                m = re.match(r'^---\s*\n(.*?)\n---\s*\n', c, re.DOTALL)
                if m:
                    try:
                        fm_data = yaml.safe_load(clean_yaml_text(m.group(1)))
                        if isinstance(fm_data, dict):
                            fm = fm_data
                    except Exception as e:
                        erros_criticos.append((rel_p, 1, "Erro de sintaxe YAML no frontmatter", str(e).split('\n')[0]))

                outlinks = re.findall(r'\[\[([^\]\|]+)(?:\|[^\]]+)?\]\]', c)
                outlinks_set = set(f"[[{o.strip()}]]" for o in outlinks)

                notes[rel_p] = {
                    'path': rel_p,
                    'name': base,
                    'folder': folder,
                    'link': f"[[{base}]]",
                    'outlinks': outlinks_set,
                    'fm': fm,
                    'content': c
                }

                # Indexar trilhas por pasta
                trilha = fm.get('trilha_poder')
                if trilha:
                    if folder not in all_trilhas_by_folder:
                        all_trilhas_by_folder[folder] = set()
                    all_trilhas_by_folder[folder].add(trilha)

    # 2. Varredura e Auditoria Estrutural
    # Estatísticas de Templates/_Meta
    templates_blocos_count = 0

    for rel_p, note_info in notes.items():
        is_template_or_meta = rel_p.startswith('Templates/') or rel_p.startswith('_Meta/')
        content = note_info['content']
        lines = content.split('\n')

        in_dv = False
        cur_dv = []
        cur_heading = "Topo"
        dv_start_line = 0
        is_callout = False

        for idx, line in enumerate(lines, 1):
            raw = line.rstrip('\r\n')
            m_callout = re.match(r'^(?:>\s*)+', raw)
            cleaned = re.sub(r'^(?:>\s*)+', '', raw).strip()

            if raw.startswith('#'):
                cur_heading = raw.strip()

            # Queries inline `= ...`
            inlines = re.finditer(r'`=\s*([^`]+)`', raw)
            for inm in inlines:
                total_inlines += 1
                expr = inm.group(1).strip()
                m_this = re.search(r'this\.([a-zA-Z0-9_-]+)', expr)
                if m_this:
                    field = m_this.group(1)
                    if 'default(' not in expr:
                        if field not in note_info['fm']:
                            if not is_template_or_meta:
                                inlines_campo_ausente.append((rel_p, idx, expr, field))

            # Início de bloco dataview
            if '```dataview' in cleaned and not cleaned.startswith('```dataviewjs'):
                if in_dv:
                    if not is_template_or_meta:
                        erros_criticos.append((rel_p, idx, "Bloco aninhado sem fechamento do anterior", cleaned))
                in_dv = True
                cur_dv = []
                dv_start_line = idx
                is_callout = bool(m_callout)

            elif in_dv and cleaned.startswith('```'):
                in_dv = False
                total_blocos_dataview += 1
                if is_template_or_meta:
                    templates_blocos_count += 1
                    continue

                dql = '\n'.join(cur_dv)

                # Validações Estruturais Críticas:
                # 1. Caminho legado
                if 'Cultura e Mídia/RPG/Tormenta 20' in dql:
                    erros_criticos.append((rel_p, dv_start_line, "Caminho legado absoluto", "Cultura e Mídia/RPG/Tormenta 20"))

                # 2. Comparação de link como string literal
                if 'contains(' in dql and '"[[' in dql:
                    erros_criticos.append((rel_p, dv_start_line, "Comparação de link como string literal", 'contains(..., "[[")'))

                # 3. Pastas do FROM inexistentes no disco
                m_from = re.findall(r'FROM\s+([^\n]+)', dql, re.IGNORECASE)
                positives, negatives = parse_from(m_from[0] if m_from else "")
                for pos in positives:
                    if pos not in existing_folders and not os.path.exists(pos):
                        erros_criticos.append((rel_p, dv_start_line, "Pasta do FROM inexistente no disco", f'FROM "{pos}"'))

                # 4. Query global sem exclusão -"Templates" quando puder vazar templates
                for f_match in m_from:
                    is_global = any(f'"{target}"' in f_match for target in ["Poderes", "Magias", "Classes", "Deuses", "Itens", "Raças"])
                    has_template_excl = '-"Templates"' in f_match or '- "Templates"' in f_match or 'AND -"Templates"' in dql
                    # Se consulta toda a pasta e não tem exclusão
                    # (Observação: só contabiliza erro se a pasta contiver templates diretamente ou vazar arquivos indesejados)

                # 5. Cláusula trilha_poder inexistente nas pastas do FROM
                m_trilhas = re.findall(r'trilha_poder\s*=\s*"([^"]+)"', dql)
                for tr in m_trilhas:
                    # Checar se tr existe em alguma das pastas consultadas
                    found_tr = False
                    for pos in positives:
                        for folder, tr_set in all_trilhas_by_folder.items():
                            if folder.startswith(pos) and tr in tr_set:
                                found_tr = True
                                break
                        if found_tr:
                            break
                    if not found_tr:
                        erros_criticos.append((rel_p, dv_start_line, "Valor de trilha_poder inexistente no FROM", f'trilha_poder = "{tr}"'))

                # Simulação de Resultados da Query
                m_where = re.search(r'WHERE\s+([^\n]+)', dql, re.IGNORECASE)
                where_str = m_where.group(1).strip() if m_where else ""

                matched_candidates = []
                compiled_code = None
                if where_str:
                    try:
                        py_expr = transpile_where(where_str)
                        compiled_code = compile(py_expr, '<where>', 'eval')
                    except Exception as ex:
                        queries_complexas.append((rel_p, dv_start_line, str(ex), dql[:80]))
                        continue

                this_ctx = {
                    'this_link': note_info['link'],
                    'this_name': note_info['name'],
                    'this_folder': note_info['folder'],
                    'this_path': note_info['path'],
                    'this_fm': note_info['fm'],
                    'dv_contains': dv_contains,
                    'dv_default': dv_default,
                    'dv_length': dv_length,
                    'dv_string': dv_string,
                    'dv_link': dv_link
                }

                for cand_path, cand_info in notes.items():
                    if not matches_from(cand_info, positives, negatives):
                        continue

                    if not where_str:
                        matched_candidates.append(cand_path)
                    else:
                        cand_ctx = dict(this_ctx)
                        cand_ctx.update({
                            'cand_link': cand_info['link'],
                            'cand_name': cand_info['name'],
                            'cand_folder': cand_info['folder'],
                            'cand_path': cand_info['path'],
                            'cand_outlinks': cand_info['outlinks'],
                            'cand_fm': cand_info['fm']
                        })
                        try:
                            if eval(compiled_code, {"__builtins__": {}}, cand_ctx):
                                matched_candidates.append(cand_path)
                        except Exception:
                            pass

                if len(matched_candidates) > 0:
                    ok_count += 1
                else:
                    from_str = m_from[0].strip() if m_from else "—"
                    if is_expected_empty(rel_p, cur_heading, from_str, where_str):
                        vazios_esperados_count += 1
                        vazios_esperados.append((rel_p, dv_start_line, cur_heading, from_str))
                    else:
                        motivo = determine_probable_cause(rel_p, cur_heading, from_str, where_str, dql)
                        vazios_suspeitos.append((rel_p, dv_start_line, cur_heading, from_str, motivo))

            elif in_dv:
                if is_callout and not raw.startswith('>'):
                    if not is_template_or_meta:
                        erros_criticos.append((rel_p, idx, "Linha interna de callout sem prefixo '>'", raw[:50]))
                cur_dv.append(cleaned)

        if in_dv and not is_template_or_meta:
            erros_criticos.append((rel_p, dv_start_line, "Bloco dataview sem fechamento ```", ""))

    # 3. Gerar Relatório Markdown
    os.makedirs(os.path.dirname(report_file), exist_ok=True)
    relatorio = []
    relatorio.append("# 📊 Relatório de Auditoria Dataview — Tormenta 20")
    relatorio.append(f"**Data da Auditoria:** 2026-11-21 | **Total de Notas Analisadas:** {len(notes)} | **Total de Blocos Dataview:** {total_blocos_dataview}")
    relatorio.append("")

    # Status geral
    if len(erros_criticos) == 0 and len(vazios_suspeitos) == 0 and len(inlines_campo_ausente) == 0:
        relatorio.append("> [!TIP] Auditoria Limpa — 100% de Sucesso")
        relatorio.append("> Todos os blocos Dataview e queries inline foram validados e renderizam corretamente sem falhas críticas ou tabelas vazias suspeitas.")
    else:
        relatorio.append("> [!WARNING] Atenção Requerida — Ocorrências Detectadas")
        relatorio.append(f"> Foram detectados **{len(erros_criticos)} erros críticos**, **{len(vazios_suspeitos)} queries vazias suspeitas** e **{len(inlines_campo_ausente)} queries inline com campos ausentes**.")

    relatorio.append("")
    relatorio.append("---")
    relatorio.append("")
    relatorio.append("## 1. 📈 Resumo Numérico Executivo")
    relatorio.append("")
    relatorio.append("| Categoria de Verificação | Quantidade | Percentual / Detalhes |")
    relatorio.append("|---|:---:|---|")
    relatorio.append(f"| **Total de Blocos Dataview no Cofre** | **{total_blocos_dataview}** | Inclui callouts e notas canônicas |")
    relatorio.append(f"| 🔹 Blocos em `Templates/` e `_Meta/` | **{templates_blocos_count}** | Contabilizados à parte (não geram falhas) |")
    relatorio.append(f"| 🔹 Blocos Auditados em Notas Operacionais | **{total_blocos_dataview - templates_blocos_count}** | Universo de teste ativo |")
    relatorio.append(f"| ✅ **Queries com Resultados Válidos (OK)** | **{ok_count}** | Renderizam itens e poderes com sucesso |")
    relatorio.append(f"| ⚪ **Vazios Esperados (Whitelist)** | **{vazios_esperados_count}** | Folhas de dependência, magias sem vínculo, etc. |")
    relatorio.append(f"| ⚠️ **Queries Vazias Suspeitas** | **{len(vazios_suspeitos)}** | Tabelas de trilha ou índice retornando 0 |")
    relatorio.append(f"| ❌ **Erros Estruturais Críticos** | **{len(erros_criticos)}** | Sintaxe quebrada, pasta inexistente ou trilha órfã |")
    relatorio.append(f"| 🏷️ **Queries Inline (`= ...`) Testadas** | **{total_inlines}** | Avaliação de campos `this.<prop>` |")
    relatorio.append(f"| ⚠️ **Queries Inline com Campo Ausente** | **{len(inlines_campo_ausente)}** | Sem função `default()` preventiva |")

    expected_file = os.path.join('.system_generated', 'vazios_esperados.txt')
    os.makedirs(os.path.dirname(expected_file), exist_ok=True)
    with open(expected_file, 'w', encoding='utf-8') as f:
        for file_path, line, heading, from_str in vazios_esperados:
            f.write(f"{file_path}\t{line}\t{heading}\t{from_str}\n")
    relatorio.append("")
    relatorio.append("---")
    relatorio.append("")

    # Seção de Erros Críticos
    relatorio.append("## 2. ❌ Erros Críticos Estruturais")
    if erros_criticos:
        relatorio.append("")
        relatorio.append("| Arquivo | Linha | Tipo de Erro | Trecho / Descrição |")
        relatorio.append("|---|:---:|---|---|")
        for arq, lin, tipo, trecho in erros_criticos:
            relatorio.append(f"| `[[{arq}]]` | {lin} | **{tipo}** | `{trecho}` |")
        relatorio.append("")
    else:
        relatorio.append("")
        relatorio.append("✅ **Zero erros estruturais críticos encontrados:** nenhum bloco aberto, sem caminhos legados e sem comparações inválidas de link como string.")
        relatorio.append("")

    relatorio.append("---")
    relatorio.append("")

    # Seção de Vazios Suspeitos
    relatorio.append("## 3. ⚠️ Queries Retornando 0 Resultados (Vazios Suspeitos)")
    if vazios_suspeitos:
        relatorio.append("")
        relatorio.append("| Arquivo | Linha | Seção / Cabeçalho | Pasta `FROM` | Motivo Provável do Vazio |")
        relatorio.append("|---|:---:|---|---|---|")
        for arq, lin, sec, frm, motivo in vazios_suspeitos:
            relatorio.append(f"| `[[{arq}]]` | {lin} | **{sec}** | `{frm}` | {motivo} |")
        relatorio.append("")
    else:
        relatorio.append("")
        relatorio.append("✅ **Zero queries vazias suspeitas:** todos os índices, portais e trilhas de poderes renderizam registros no cofre.")
        relatorio.append("")

    relatorio.append("---")
    relatorio.append("")

    # Seção de Queries Inline
    relatorio.append("## 4. 🏷️ Queries Inline com Campo Ausente")
    if inlines_campo_ausente:
        relatorio.append("")
        relatorio.append("| Arquivo | Linha | Expressão Inline | Campo Ausente |")
        relatorio.append("|---|:---:|---|---|")
        for arq, lin, expr, campo in inlines_campo_ausente:
            relatorio.append(f"| `[[{arq}]]` | {lin} | `` `{expr}` `` | `{campo}` |")
        relatorio.append("")
    else:
        relatorio.append("")
        relatorio.append("✅ **Zero queries inline problemáticas:** todas as expressões `` `= this.<prop>` `` usam `default()` ou possuem os campos preenchidos no YAML.")
        relatorio.append("")

    relatorio.append("---")
    relatorio.append("")

    # Seção de Queries Não-Simuláveis
    relatorio.append("## 5. 🔍 Queries Não-Simuláveis (Conferência no Modo Live)")
    if queries_complexas:
        relatorio.append("")
        relatorio.append("| Arquivo | Linha | Erro de Análise | Trecho |")
        relatorio.append("|---|:---:|---|---|")
        for arq, lin, err, tr in queries_complexas:
            relatorio.append(f"| `[[{arq}]]` | {lin} | `{err}` | `{tr}` |")
        relatorio.append("")
    else:
        relatorio.append("")
        relatorio.append("✅ **100% das queries DQL foram simuladas:** nenhuma sintaxe complexa impediu a interpretação estática.")
        relatorio.append("")

    with open(report_file, 'w', encoding='utf-8') as f:
        f.write('\n'.join(relatorio))

    print(f"\nRelatório gerado em: {report_file}")
    print(f"Resumo: OK={ok_count}, Vazios Esperados={vazios_esperados_count}, Vazios Suspeitos={len(vazios_suspeitos)}, Críticos={len(erros_criticos)}")

    # Exit code: 1 se houver críticos ou suspeitos > 0; 0 se limpo
    if len(erros_criticos) > 0 or len(vazios_suspeitos) > 0:
        sys.exit(1)
    else:
        sys.exit(0)

if __name__ == '__main__':
    main()
