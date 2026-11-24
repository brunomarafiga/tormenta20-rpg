---
tipo: indice
sistema: tormenta20-jda
nome: "Índice de Venenos"
---

# ☠️ Índice de Venenos e Peçonhas de Arton

> [!tip] 🧭 Regras de Toxinas e Aplicação
> Venenos são substâncias letais aplicadas em armas de corte ou perfuração, ou administradas por ingestão ou inalação. A vítima exposta deve passar em um teste de Fortitude contra a CD do veneno ou sofrer perda de PV, condições de debilitação (*paralisia*, *fraqueza*, *inconsciência*) ou dano recorrente.
> 
> [[Itens/_Índice Geral de Itens|← Voltar ao Índice Geral de Itens]] | [[Itens/Alquimia e Poções/_Índice de Alquimia|Ver Alquimia e Poções]]

---

## 📋 Catálogo de Venenos

```dataview
TABLE preco_ts AS "Preço (T$)", espacos AS "Espaços", fonte AS "Fonte"
FROM "Itens/Venenos"
WHERE tipo = "item"
SORT preco_ts ASC, file.name ASC
```
