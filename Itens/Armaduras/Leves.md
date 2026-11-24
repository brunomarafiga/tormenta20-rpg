---
tipo: guia
subtipo: armadura-leve
sistema: tormenta20-jda
nome: "Armaduras Leves"
---

# 🛡️ Catálogo de Armaduras Leves

As **Armaduras Leves** são projetadas para combatentes e especialistas que priorizam mobilidade, esquiva e discrição. Elas ocupam **2 espaços** de carga e permitem **somar todo o modificador de Destreza** na Defesa do personagem.

> [!tip] Comparativo Geral
> Para analisar trade-offs entre armaduras leves, pesadas e escudos com rankings de defesa e penalidade, consulte o [[Itens/Comparativo de Armaduras e Escudos|Guia Comparativo de Armaduras e Escudos]].

---

## 📋 Tabela de Armaduras Leves

```dataview
TABLE bonus_defesa AS "Defesa", penalidade_armadura AS "Penalidade", preco_ts AS "Preço (T$)", espacos AS "Espaços"
FROM "Itens/Armaduras/Leves"
WHERE tipo = "item"
SORT bonus_defesa DESC, penalidade_armadura DESC, preco_ts ASC
```
