---
tipo: moc
sistema: tormenta20-jda
nome: "Índice Geral da Campanha"
---

# 🎲 Índice Geral da Campanha

Use este índice para navegar por sessões, personagens e ameaças.

## Sessões

```dataview
TABLE data AS "Data", resumo AS "Resumo"
FROM "Campanha/01_Sessões"
WHERE tipo = "sessao-rpg"
SORT file.name DESC
```

## Personagens

```dataview
TABLE raca AS "Raça", nivel AS "Nível", classes AS "Classes", status AS "Status"
FROM "Campanha/02_Personagens"
WHERE tipo = "personagem" AND subtipo = "pj"
SORT file.name ASC
```

## Ameaças e NPCs

```dataview
TABLE nd AS "ND", tipo_criatura AS "Tipo", resumo AS "Resumo"
FROM "Campanha/03_NPCs e Ameaças"
WHERE tipo = "ameaca"
SORT file.name ASC
```
