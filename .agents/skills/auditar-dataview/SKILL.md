---
name: auditar-dataview
description: "Audita queries Dataview, blocos inline e tabelas do Obsidian no cofre Tormenta 20, distinguindo erros críticos, vazios suspeitos e vazios esperados."
---

# 🔍 Skill: Auditar Dataview (`auditar-dataview`)

Esta skill fornece uma ferramenta determinística e de alta performance para auditoria e simulação estática de todos os blocos `dataview` (inclusive encapsulados dentro de callouts) e queries inline (`` `= ...` ``) do cofre **Tormenta 20**.

---

## 📋 Regras Operacionais Estritas

1. **Execução Automatizada via CLI:**
   - **Sempre** execute o script determinístico:
     ```bash
     python .agents/skills/auditar-dataview/scripts/auditar_dataview.py
     ```
   - **Nunca** tente inspecionar centenas de arquivos manualmente para validar queries. O script processa e simula todo o cofre em poucos segundos.

2. **Somente Leitura Durante a Auditoria:**
   - Durante a fase de auditoria, **não altere nenhuma nota de conteúdo** do cofre (`Classes/`, `Poderes/`, `Magias/`, `Deuses/`, `Raças/`, `Itens/`, etc.).
   - Apenas leia o relatório gerado em [`.system_generated/auditoria_dataview.md`](file:///g:/Meu%20Drive/%F0%9F%91%A4%2005%20Pessoal%20e%20M%C3%ADdia/Anota%C3%A7%C3%B5es/Cultura%20e%20M%C3%ADdia/RPG/Tormenta%2020/.system_generated/auditoria_dataview.md) e devolva ao usuário o resumo numérico executivo acompanhado das tabelas de erros críticos e vazios suspeitos.

3. **Correção em Lote Requer Autorização:**
   - Se houver ocorrências críticas ou vazios suspeitos, apresente o diagnóstico e ofereça um script de correção pontual em `.system_generated/`.
   - Execute modificações no cofre **apenas após a confirmação expressa** do usuário.

---

## 🛠️ Modos de Execução

### 1. Auditoria Estática Determinística (CLI)
- **Comando:** `python .agents/skills/auditar-dataview/scripts/auditar_dataview.py`
- **Saída:** Relatório em `.system_generated/auditoria_dataview.md`
- **Código de Retorno:**
  - `0`: Cofre 100% limpo (sem erros críticos e sem vazios suspeitos).
  - `1`: Ocorrências detectadas que exigem atenção.

### 2. Auditoria Nativa Interativa no Obsidian (Live)
- **Nota:** `_Meta/Auditoria Dataview (Live).md`
- Utiliza a API do plugin Dataview (`await dv.query(...)`) diretamente no Obsidian para verificação em tempo real pelo usuário na interface gráfica.

---

## 🎯 Classificação de Resultados

| Status | Critério | Ação do Agente |
|---|---|---|
| ✅ **OK** | Query renderiza 1 ou mais resultados válidos | Nenhuma ação necessária |
| ⚪ **Vazio Esperado** | Query de folha/relação opcional em seções autorizadas (ex.: *Poderes Dependentes*, *Classes Variantes*, *Poderes Raciais Futuros*, *Magias Exclusivas*) | Documentado como normal na whitelist |
| ⚠️ **Vazio Suspeito** | Tabela de trilha de classe, índice ou MOC retornando 0 registros | Requer análise de sintaxe ou falta de poderes associados |
| ❌ **Erro Crítico** | Bloco desbalanceado, pasta inexistente no `FROM`, trilha órfã ou link comparado como string | Requer correção cirúrgica imediata |
