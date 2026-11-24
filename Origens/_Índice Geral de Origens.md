---
tipo: moc
sistema: tormenta20-jda
nome: "Índice Geral de Origens"
---

# Índice Geral de Origens

```dataview
TABLE
  fonte AS "Fonte",
  subtipo AS "Classificação",
  join(default(pericias, []), ", ") AS "Perícias",
  join(default(poderes, []), ", ") AS "Poderes"
FROM "Origens"
WHERE tipo = "documentacao" AND categoria = "origem"
SORT source ASC, file.name ASC
```
