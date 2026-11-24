---
tipo: guia
subtipo: armadura-pesada
sistema: tormenta20-jda
nome: "Armaduras Pesadas"
---

# 🛡️ Catálogo de Armaduras Pesadas

As **Armaduras Pesadas** são o ápice da proteção física em Arton para combatentes de linha de frente. Elas ocupam **5 espaços** de carga e fornecem Defesa bruta elevada, mas **não permitem somar a Destreza** na Defesa e exigem proficiência para evitar penalidades de ataque e deslocamento.

> [!tip] Comparativo Geral
> Para analisar trade-offs entre armaduras leves, pesadas e escudos com rankings de defesa e penalidade, consulte o [[Itens/Comparativo de Armaduras e Escudos|Guia Comparativo de Armaduras e Escudos]].

---

## 📋 Tabela de Armaduras Pesadas

```dataview
TABLE bonus_defesa AS "Defesa", penalidade_armadura AS "Penalidade", preco_ts AS "Preço (T$)", espacos AS "Espaços"
FROM "Itens/Armaduras/Pesadas"
WHERE tipo = "item"
SORT bonus_defesa DESC, penalidade_armadura DESC, preco_ts ASC
```
