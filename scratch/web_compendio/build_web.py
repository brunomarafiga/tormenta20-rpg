#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Compilador Web Local para o Cofre Tormenta 20
Gera scratch/web_compendio/data/catalog.js para uso estático (file://) sem CORS.
SOMENTE LEITURA no cofre original.
"""

import os
import sys
import json
import re
import html
import yaml
from datetime import datetime

VAULT_ROOT = os.path.abspath(".")
OUTPUT_DIR = os.path.join(VAULT_ROOT, "scratch", "web_compendio")
DATA_DIR = os.path.join(OUTPUT_DIR, "data")
OUTPUT_CATALOG_JS = os.path.join(DATA_DIR, "catalog.js")

EXCLUDED_DIRS = {
    ".obsidian", "Templates", "_Meta", "scratch", "Campanha",
    ".git", ".agents", ".github", ".system_generated"
}

def escape_text(text):
    return html.escape(text, quote=True)

def render_inline(text):
    """Renderiza negrito, itálico, código, links internos e spans."""
    if not text:
        return ""
    
    # Wikilinks: [[Target|Label]] ou [[Target]]
    def repl_wikilink_labeled(match):
        target = match.group(1).strip()
        label = match.group(2).strip()
        return f'<a href="#" class="wikilink" data-target="{html.escape(target, quote=True)}">{html.escape(label)}</a>'

    def repl_wikilink_simple(match):
        target = match.group(1).strip()
        return f'<a href="#" class="wikilink" data-target="{html.escape(target, quote=True)}">{html.escape(target)}</a>'

    text = re.sub(r'\[\[([^\]\|]+)\|([^\]]+)\]\]', repl_wikilink_labeled, text)
    text = re.sub(r'\[\[([^\]]+)\]\]', repl_wikilink_simple, text)

    # Inline code: `code`
    text = re.sub(r'`([^`]+)`', r'<code>\1</code>', text)

    # Bold: **bold**
    text = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', text)

    # Italic: *italic* ou _italic_
    text = re.sub(r'(?<!\*)\*([^*]+)\*(?!\*)', r'<em>\1</em>', text)

    # Strikethrough: ~~del~~
    text = re.sub(r'~~([^~]+)~~', r'<del>\1</del>', text)

    # Highlight: ==mark==
    text = re.sub(r'==([^=]+)==', r'<mark>\1</mark>', text)

    return text

def markdown_to_html(md_text):
    """Converte markdown de notas T20 para HTML limpo."""
    if not md_text:
        return ""

    lines = md_text.splitlines()
    out = []
    
    in_code_block = False
    code_block_lang = ""
    code_block_lines = []

    in_callout = False
    callout_type = ""
    callout_title = ""
    callout_lines = []

    in_table = False
    table_headers = []
    table_rows = []

    in_ul = False
    in_ol = False

    def close_lists():
        nonlocal in_ul, in_ol
        res = []
        if in_ul:
            res.append("</ul>")
            in_ul = False
        if in_ol:
            res.append("</ol>")
            in_ol = False
        return res

    def flush_table():
        nonlocal in_table, table_headers, table_rows
        if not in_table:
            return []
        res = ['<div class="table-container"><table class="t20-table">']
        if table_headers:
            res.append('<thead><tr>')
            for h in table_headers:
                res.append(f'<th>{render_inline(h.strip())}</th>')
            res.append('</tr></thead>')
        if table_rows:
            res.append('<tbody>')
            for row in table_rows:
                res.append('<tr>')
                for cell in row:
                    res.append(f'<td>{render_inline(cell.strip())}</td>')
                res.append('</tr>')
            res.append('</tbody>')
        res.append('</table></div>')
        in_table = False
        table_headers = []
        table_rows = []
        return res

    def flush_callout():
        nonlocal in_callout, callout_type, callout_title, callout_lines
        if not in_callout:
            return []
        
        inner_html = markdown_to_html("\n".join(callout_lines))
        title_display = callout_title if callout_title else callout_type.replace("t20-", "").title()
        
        icon = "💡"
        if "stat" in callout_type:
            icon = "📊"
        elif "restr" in callout_type or "warn" in callout_type or "alerta" in callout_type:
            icon = "⚠️"
        elif "efeito" in callout_type:
            icon = "⚡"
        elif "lore" in callout_type or "historia" in callout_type:
            icon = "📜"

        res = [
            f'<div class="t20-callout t20-callout-{callout_type}">',
            f'<div class="callout-header"><span class="callout-icon">{icon}</span> <strong class="callout-title">{render_inline(title_display)}</strong></div>',
            f'<div class="callout-body">{inner_html}</div>',
            '</div>'
        ]
        in_callout = False
        callout_type = ""
        callout_title = ""
        callout_lines = []
        return res

    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # 1. Bloco de código ```
        if stripped.startswith("```"):
            if in_code_block:
                out.extend(close_lists())
                code_content = html.escape("\n".join(code_block_lines))
                out.append(f'<pre><code class="language-{code_block_lang}">{code_content}</code></pre>')
                in_code_block = False
                code_block_lines = []
                code_block_lang = ""
            else:
                out.extend(close_lists())
                out.extend(flush_table())
                out.extend(flush_callout())
                in_code_block = True
                code_block_lang = stripped[3:].strip()
                code_block_lines = []
            i += 1
            continue

        if in_code_block:
            code_block_lines.append(line)
            i += 1
            continue

        # 2. Callout Obsidian: > [!type] Title
        if stripped.startswith("> [!"):
            m = re.match(r'>\s*\[!([a-zA-Z0-9_\-]+)\]\s*(.*)', stripped)
            if m:
                out.extend(close_lists())
                out.extend(flush_table())
                out.extend(flush_callout())
                in_callout = True
                callout_type = m.group(1).lower()
                callout_title = m.group(2).strip()
                callout_lines = []
                i += 1
                continue

        if in_callout:
            if stripped.startswith(">"):
                callout_content = re.sub(r'^>\s?', '', line)
                callout_lines.append(callout_content)
                i += 1
                continue
            elif stripped == "":
                if i + 1 < len(lines) and lines[i+1].strip().startswith(">"):
                    callout_lines.append("")
                    i += 1
                    continue
                else:
                    out.extend(flush_callout())
            else:
                out.extend(flush_callout())

        # 3. Tabela Markdown
        if stripped.startswith("|") and stripped.endswith("|"):
            cells = [c.strip() for c in stripped[1:-1].split("|")]
            if not in_table:
                if i + 1 < len(lines) and re.match(r'^\s*\|?\s*:?-+:?\s*(\|:?-+:?\s*)+\|?\s*$', lines[i+1]):
                    out.extend(close_lists())
                    in_table = True
                    table_headers = cells
                    table_rows = []
                    i += 2
                    continue
            else:
                table_rows.append(cells)
                i += 1
                continue

        if in_table and not (stripped.startswith("|") and stripped.endswith("|")):
            out.extend(flush_table())

        # 4. Linha vazia
        if not stripped:
            out.extend(close_lists())
            i += 1
            continue

        # 5. Cabeçalhos
        header_match = re.match(r'^(#{1,6})\s+(.*)$', stripped)
        if header_match:
            out.extend(close_lists())
            level = len(header_match.group(1))
            header_text = render_inline(header_match.group(2).strip())
            out.append(f'<h{level}>{header_text}</h{level}>')
            i += 1
            continue

        # 6. Horizontal Rule
        if re.match(r'^(-{3,}|\*{3,})$', stripped):
            out.extend(close_lists())
            out.append('<hr class="t20-divider">')
            i += 1
            continue

        # 7. Listas não ordenadas
        list_match = re.match(r'^[-*]\s+(.*)$', stripped)
        if list_match:
            if in_ol:
                out.append("</ol>")
                in_ol = False
            if not in_ul:
                out.append("<ul>")
                in_ul = True
            out.append(f'<li>{render_inline(list_match.group(1))}</li>')
            i += 1
            continue

        # 8. Listas ordenadas
        olist_match = re.match(r'^\d+\.\s+(.*)$', stripped)
        if olist_match:
            if in_ul:
                out.append("</ul>")
                in_ul = False
            if not in_ol:
                out.append("<ol>")
                in_ol = True
            out.append(f'<li>{render_inline(olist_match.group(1))}</li>')
            i += 1
            continue

        # 9. Blockquote simples
        if stripped.startswith(">"):
            out.extend(close_lists())
            bq_text = re.sub(r'^>\s?', '', line).strip()
            out.append(f'<blockquote>{render_inline(bq_text)}</blockquote>')
            i += 1
            continue

        # 10. Parágrafo normal
        out.extend(close_lists())
        out.append(f'<p>{render_inline(stripped)}</p>')
        i += 1

    out.extend(close_lists())
    out.extend(flush_table())
    out.extend(flush_callout())

    return "\n".join(out)

def normalize_price(val):
    if val is None or val == "" or str(val).strip() in ["-", "—"]:
        return None, "—"
    try:
        s = str(val).replace("T$", "").replace("TS", "").replace(",", ".").strip()
        num = float(s)
        if num.is_integer():
            return int(num), f"T$ {int(num)}"
        return num, f"T$ {num}"
    except Exception:
        return None, str(val)

def normalize_spaces(val):
    if val is None or val == "" or str(val).strip() in ["-", "—"]:
        return "—"
    return str(val).strip()

def get_item_category_group(rel_path, subtipo):
    """Categoriza itens para navegação hierárquica por cards."""
    p = rel_path.replace("\\", "/")
    if subtipo in ["arma-simples", "arma-marcial", "arma-exotica", "arma-de-fogo"] or "/Armas/" in p:
        return "Armas", "Armas"
    if subtipo == "armadura-leve" or "/Armaduras/Leves/" in p:
        return "Armaduras e Escudos", "Armaduras Leves"
    if subtipo == "armadura-pesada" or "/Armaduras/Pesadas/" in p:
        return "Armaduras e Escudos", "Armaduras Pesadas"
    if subtipo == "escudo" or "/Escudos/" in p:
        return "Armaduras e Escudos", "Escudos"
    if "/Vestuário/" in p:
        return "Vestuário", "Vestuário"
    if "/Esotéricos/" in p:
        return "Esotéricos", "Esotéricos"
    if "/Alquimia e Poções/" in p:
        return "Alquimia e Poções", "Alquimia e Poções"
    if "/Venenos/" in p:
        return "Venenos", "Venenos"
    if "/Ferramentas/" in p:
        return "Ferramentas e Instrumentos", "Ferramentas"
    if "/Aventura/" in p:
        return "Equipamento de Aventura", "Aventura"
    if "/Alimentos e Hospedagem/" in p:
        return "Alimentos e Hospedagem", "Alimentos e Hospedagem"
    if "/Veículos e Montarias/" in p:
        return "Veículos e Montarias", "Veículos e Montarias"
    if "/Itens Sagrados/" in p:
        return "Itens Sagrados & Pratos", "Itens Sagrados"
    if "/Artefatos Divinos/" in p or "/Itens Mágicos/" in p:
        return "Itens Mágicos & Artefatos", "Itens Mágicos & Artefatos"
    if "/Modificações e Materiais/" in p or "/Encantamentos/" in p:
        return "Modificações & Encantamentos", "Modificações & Encantamentos"
    if "/Munições/" in p or "/Aparatos/" in p:
        return "Munições & Aparatos", "Munições & Aparatos"
    return "Outros Itens", "Geral"

def scan_notes():
    print("🔍 Iniciando leitura e indexação do cofre Tormenta 20...")
    all_notes = []
    
    for root, dirs, files in os.walk(VAULT_ROOT):
        rel_root = os.path.relpath(root, VAULT_ROOT)
        parts = rel_root.split(os.sep)
        if any(p in EXCLUDED_DIRS or p.startswith(".") for p in parts if p != "."):
            continue

        for f in files:
            if not f.endswith(".md"):
                continue
            
            full_path = os.path.join(root, f)
            rel_path = os.path.relpath(full_path, VAULT_ROOT)
            
            try:
                with open(full_path, "r", encoding="utf-8") as fp:
                    content = fp.read()
            except Exception as e:
                print(f"⚠️ Erro ao ler {rel_path}: {e}")
                continue

            meta = {}
            body = content
            if content.startswith("---"):
                parts_split = content.split("---", 2)
                if len(parts_split) >= 3:
                    try:
                        meta = yaml.safe_load(parts_split[1]) or {}
                        body = parts_split[2].strip()
                    except Exception as e:
                        print(f"⚠️ YAML parse error em {rel_path}: {e}")
                        meta = {}
            
            note_id = os.path.splitext(f)[0]
            nome = str(meta.get("nome") or note_id).strip()
            
            domain_part = parts[0] if parts and parts[0] != "." else "Outros"
            is_moc = meta.get("tipo") == "moc" or f.startswith("_")

            preco_num, preco_disp = normalize_price(meta.get("preco_ts"))
            html_body = markdown_to_html(body)

            norm_path = rel_path.replace("\\", "/")
            item_cat, item_subcat = get_item_category_group(norm_path, meta.get("subtipo", ""))

            note_obj = {
                "id": note_id,
                "name": nome,
                "domain": domain_part,
                "rel_path": norm_path,
                "tipo": meta.get("tipo", ""),
                "subtipo": meta.get("subtipo", ""),
                "categoria": meta.get("categoria", ""),
                "empunhadura": meta.get("empunhadura", ""),
                "item_category": item_cat,
                "item_subcategory": item_subcat,
                "preco_ts": preco_num,
                "preco_display": preco_disp,
                "espacos": normalize_spaces(meta.get("espacos")),
                "dano": str(meta.get("dano", "—") or "—"),
                "critico": str(meta.get("critico", "—") or "—"),
                "tipo_dano": str(meta.get("tipo_dano", "—") or "—"),
                "alcance": str(meta.get("alcance", "—") or "—"),
                "bonus_defesa": meta.get("bonus_defesa"),
                "penalidade_armadura": meta.get("penalidade_armadura"),
                "circulo": meta.get("circulo"),
                "escola": meta.get("escola", ""),
                "custo_pm": meta.get("custo_pm"),
                "execucao": meta.get("execucao", ""),
                "duracao": meta.get("duracao", ""),
                "resistencia": meta.get("resistencia", ""),
                "tradicao": meta.get("tradicao", []),
                "alvo": meta.get("alvo", ""),
                "resumo": meta.get("resumo", ""),
                "atributos": meta.get("atributos", ""),
                "deslocamento": meta.get("deslocamento", ""),
                "tamanho": meta.get("tamanho", ""),
                "tipo_efeito": meta.get("tipo_efeito", ""),
                "atributo_chave": meta.get("atributo_chave", ""),
                "somente_treinada": meta.get("somente_treinada"),
                "classe": meta.get("classe", ""),
                "raca": meta.get("raca", ""),
                "deuses": meta.get("deuses", []),
                "trilha_poder": meta.get("trilha_poder", ""),
                "fonte": meta.get("fonte", "Tormenta20 JdA"),
                "is_moc": is_moc,
                "raw_yaml": meta,
                "html_content": html_body
            }

            all_notes.append(note_obj)

    print(f"✅ Total de notas lidas com sucesso: {len(all_notes)}")
    return all_notes

def build_catalog_data(notes):
    entities_map = {}
    weapons = []
    armors_and_shields = []
    other_items = []
    powers = []
    spells = []
    classes = []
    races = []
    gods = []
    origins = []
    conditions = []
    skills = []
    mechanics = []
    abilities = []

    for n in notes:
        # Indexar mapa global de ID para busca rápida e wikilinks
        entities_map[n["id"]] = n
        if n["name"] and n["name"] != n["id"]:
            entities_map[n["name"]] = n

        # Ignorar MOCs nas listagens diretas
        if n["is_moc"]:
            continue

        domain = n["domain"]
        tipo = n["tipo"]
        subtipo = n["subtipo"]
        p = n["rel_path"]

        # Classificação estrita
        if domain == "Itens":
            if subtipo in ["arma-simples", "arma-marcial", "arma-exotica", "arma-de-fogo"]:
                weapons.append(n)
            elif subtipo in ["armadura-leve", "armadura-pesada", "escudo"]:
                armors_and_shields.append(n)
            else:
                other_items.append(n)
        elif domain == "Poderes":
            powers.append(n)
        elif domain == "Magias":
            spells.append(n)
        elif domain == "Classes":
            classes.append(n)
        elif domain == "Raças":
            races.append(n)
        elif domain == "Deuses":
            gods.append(n)
        elif domain == "Origens":
            origins.append(n)
        elif domain == "Mecânicas e Condições":
            if subtipo == "condicao" or "/Condições/" in p:
                conditions.append(n)
            elif subtipo == "pericia" or "/Perícias/" in p:
                skills.append(n)
            else:
                mechanics.append(n)
        elif domain == "Habilidades":
            abilities.append(n)
        else:
            other_items.append(n)

    # Ordenação padrão por preco_ts ASC para itens
    def price_sort_key(item):
        p = item.get("preco_ts")
        return (float("inf") if p is None else p, item.get("name", "").lower())

    weapons.sort(key=price_sort_key)
    armors_and_shields.sort(key=price_sort_key)
    other_items.sort(key=price_sort_key)

    powers.sort(key=lambda x: (x.get("categoria", ""), x.get("name", "").lower()))
    spells.sort(key=lambda x: (x.get("circulo") or 99, x.get("name", "").lower()))
    classes.sort(key=lambda x: (x.get("subtipo", ""), x.get("name", "").lower()))
    races.sort(key=lambda x: x.get("name", "").lower())
    gods.sort(key=lambda x: x.get("name", "").lower())
    origins.sort(key=lambda x: x.get("name", "").lower())
    conditions.sort(key=lambda x: x.get("name", "").lower())
    skills.sort(key=lambda x: x.get("name", "").lower())

    stats = {
        "build_date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "total_notes": len(notes),
        "weapons_count": len(weapons),
        "armors_shields_count": len(armors_and_shields),
        "other_items_count": len(other_items),
        "total_items_count": len(weapons) + len(armors_and_shields) + len(other_items),
        "powers_count": len(powers),
        "spells_count": len(spells),
        "classes_count": len(classes),
        "races_count": len(races),
        "gods_count": len(gods),
        "origins_count": len(origins),
        "conditions_count": len(conditions),
        "skills_count": len(skills),
        "mechanics_count": len(mechanics),
        "abilities_count": len(abilities)
    }

    print("\n📊 Estatísticas da Compilação:")
    for k, v in stats.items():
        print(f"  • {k}: {v}")

    # Verificar matriz de armas canônicas (108 armas)
    print("\n⚔️ Matriz de Armas compilada (108 canônicas):")
    matrix = {}
    for w in weapons:
        sub = w.get("subtipo", "desconhecido")
        emp = w.get("empunhadura", "desconhecido")
        matrix.setdefault(sub, {})
        matrix[sub][emp] = matrix[sub].get(emp, 0) + 1

    for sub, emps in sorted(matrix.items()):
        print(f"  [{sub}] Total: {sum(emps.values())}")
        for emp, cnt in sorted(emps.items()):
            print(f"    - {emp}: {cnt}")

    # Primeiras 3 armas mais baratas
    print("\n💰 Verificação de Ordenação de Preço (3 Primeiras Armas):")
    for w in weapons[:3]:
        print(f"  - {w['name']}: {w['preco_display']} ({w['preco_ts']})")

    catalog = {
        "stats": stats,
        "entities": entities_map,
        "weapons": weapons,
        "armors_and_shields": armors_and_shields,
        "other_items": other_items,
        "powers": powers,
        "spells": spells,
        "classes": classes,
        "races": races,
        "gods": gods,
        "origins": origins,
        "conditions": conditions,
        "skills": skills,
        "mechanics": mechanics,
        "abilities": abilities
    }

    return catalog

def export_catalog_js(catalog):
    os.makedirs(DATA_DIR, exist_ok=True)
    json_str = json.dumps(catalog, ensure_ascii=False, indent=2)
    js_content = f"// Tormenta 20 Web Compendium - Compilado em {catalog['stats']['build_date']}\n"
    js_content += f"// Compatibilidade 100% offline (file://) sem CORS\n"
    js_content += f"window.T20_CATALOG = {json_str};\n"

    with open(OUTPUT_CATALOG_JS, "w", encoding="utf-8") as f:
        f.write(js_content)

    file_size_mb = os.path.getsize(OUTPUT_CATALOG_JS) / (1024 * 1024)
    print(f"\n🚀 Sucesso! Catálogo exportado para:\n  {OUTPUT_CATALOG_JS} ({file_size_mb:.2f} MB)")

def main():
    notes = scan_notes()
    catalog = build_catalog_data(notes)
    export_catalog_js(catalog)

if __name__ == "__main__":
    main()
