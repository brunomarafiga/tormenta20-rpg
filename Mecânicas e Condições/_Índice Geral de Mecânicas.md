---
tipo: moc
sistema: tormenta20-jda
nome: "Índice Geral de Mecânicas"
---

# 📜 Índice Geral de Mecânicas

Use este índice para chegar às perícias, condições e regras de combate.

## 🎯 Perícias

```dataview
TABLE atributo_chave AS "Atributo", somente_treinada AS "Somente Treinada", penalidade_armadura AS "Penalidade de Armadura"
FROM "Mecânicas e Condições/Perícias"
WHERE tipo = "mecanica" AND subtipo = "pericia"
SORT file.name ASC
```

## ⚠️ Condições

```dataview
TABLE categoria AS "Categoria", resumo AS "Resumo"
FROM "Mecânicas e Condições/Condições"
WHERE tipo = "mecanica" AND subtipo = "condicao"
SORT file.name ASC
```

## ⚔️ Regras e manobras

```dataview
TABLE resumo AS "Resumo"
FROM "Mecânicas e Condições/Regras"
WHERE tipo = "mecanica" AND subtipo = "regra"
SORT file.name ASC
```
