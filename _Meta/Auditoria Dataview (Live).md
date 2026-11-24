---
tipo: documentacao
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Auditoria Dataview (Live)"
---

# 🔍 Auditoria Dataview (Execução Live Nativa no Obsidian)

> Esta nota executa diretamente no motor Dataview do Obsidian através do bloco `dataviewjs` abaixo.
> Ela varre todos os arquivos Markdown do cofre (exceto `Templates/`, `_Meta/`, `scratch/` e `.system_generated/`), desencapsula blocos `dataview` dentro de callouts e executa via `dv.query()`.

---

```dataviewjs
const files = app.vault.getMarkdownFiles()
  .filter(f => !f.path.startsWith("Templates/") && !f.path.startsWith("_Meta/") && !f.path.startsWith("scratch/") && !f.path.startsWith(".system_generated/"));

let totalTested = 0;
let okCount = 0;
let emptyExpectedCount = 0;
let suspiciousEmpty = [];
let executionErrors = [];

function isExpectedEmpty(filePath, heading) {
  const h = (heading || "").toLowerCase();
  const p = filePath.toLowerCase();
  if (h.includes("poderes dependentes")) return true;
  if (h.includes("efeitos que afetam esta perícia") || h.includes("efeitos que afetam esta pericia")) return true;
  if (h.includes("poderes e itens vinculados")) return true;
  if (h.includes("poderes raciais futuros")) return true;
  if (h.includes("classes variantes")) return true;
  if (h.includes("magias exclusivas") || h.includes("aprimoramento exclusivo") || h.includes("aprimoramentos exclusivos")) return true;
  if (h.includes("sessões com participação") || h.includes("sessoes com participacao")) return true;
  if (p.includes("tilliann") && h.includes("poderes concedidos")) return true;
  if (h.includes("domínios tecnológicos") || h.includes("tecnologias, armas") || h.includes("tecnologias & equipamentos")) return true;
  if (h.includes("magias concedidas pela raça") || h.includes("magias inatas concedidas")) return true;
  if (h.includes("poderes base / gerais associados")) return true;
  if (h.includes("sinergia, poderes & magias") || h.includes("classes relacionadas")) return true;
  return false;
}

for (const file of files) {
  const content = await app.vault.cachedRead(file);
  const lines = content.split('\n');
  let inDv = false;
  let curDv = [];
  let curHeading = "Topo";
  let startLine = 0;

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const cleaned = raw.replace(/^(?:>\s*)+/, '').trim();
    if (raw.startsWith('#')) {
      curHeading = raw.trim();
    }

    if (cleaned.startsWith('```dataview') && !cleaned.startsWith('```dataviewjs')) {
      inDv = true;
      curDv = [];
      startLine = i + 1;
    } else if (inDv && cleaned.startsWith('```')) {
      inDv = false;
      totalTested++;
      const dql = curDv.join('\n');
      
      try {
        const res = await dv.query(dql, file.path);
        if (!res.successful) {
          executionErrors.push({
            file: file.path,
            line: startLine,
            error: res.error,
            dql: dql
          });
        } else {
          const rowCount = res.value && res.value.values ? res.value.values.length : 0;
          if (rowCount > 0) {
            okCount++;
          } else {
            if (isExpectedEmpty(file.path, curHeading)) {
              emptyExpectedCount++;
            } else {
              suspiciousEmpty.push({
                file: file.path,
                line: startLine,
                heading: curHeading,
                dql: dql
              });
            }
          }
        }
      } catch (err) {
        executionErrors.push({
          file: file.path,
          line: startLine,
          error: String(err),
          dql: dql
        });
      }
    } else if (inDv) {
      curDv.push(cleaned);
    }
  }
}

// 1. Resumo Geral
dv.header(2, "📊 Resumo Geral da Execução Live");
dv.paragraph(`- **Total de Queries Testadas:** ${totalTested}\n- ✅ **Queries com Resultados (OK):** ${okCount}\n- ⚪ **Vazios Esperados (Whitelist):** ${emptyExpectedCount}\n- ⚠️ **Queries Vazias Suspeitas:** ${suspiciousEmpty.length}\n- ❌ **Erros de Execução do Motor:** ${executionErrors.length}`);

// 2. Erros de Execução
dv.header(2, "❌ Erros de Execução do Motor Dataview");
if (executionErrors.length === 0) {
  dv.paragraph("✅ *Nenhum erro de sintaxe ou execução no motor Dataview.*");
} else {
  dv.table(
    ["Arquivo", "Linha", "Erro Retornado"],
    executionErrors.map(e => [dv.fileLink(e.file), e.line, e.error])
  );
}

// 3. Vazios Suspeitos
dv.header(2, "⚠️ Queries Retornando 0 Resultados (Suspeitas)");
if (suspiciousEmpty.length === 0) {
  dv.paragraph("✅ *Nenhuma query vazia fora da lista de exceções esperadas.*");
} else {
  dv.table(
    ["Arquivo", "Linha", "Seção / Heading", "Trecho DQL"],
    suspiciousEmpty.map(s => [dv.fileLink(s.file), s.line, s.heading, "`" + s.dql.split('\n')[0] + "`"])
  );
}
```
