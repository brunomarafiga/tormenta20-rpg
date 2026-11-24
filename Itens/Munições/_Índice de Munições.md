---
tipo: indice
sistema: tormenta20-jda
nome: "Índice de Munições"
---

# 🏹 Índice de Munições de Arton

> [!tip] 🧭 Regras de Munição
> Munições são consumíveis essenciais para armas de disparo (arcos, bestas, fundas e zarabatanas). Cada pacote de munição comum ocupa **1 espaço** de carga e contém **20 projéteis** (exceto bolas de ferro individuais). Munições especiais de *Heróis de Arton* adicionam propriedades táticas como dano não letal (*caça*), aumento de passo de dano (*pesadas*) ou alarme (*assobiadoras*).
> 
> [[Itens/_Índice Geral de Itens|← Voltar ao Índice Geral de Itens]] | [[Itens/Comparativo de Armas|Ver Comparativo de Armas]]

---

## 📋 Catálogo de Munições

```dataview
TABLE preco_ts AS "Preço (T$)", espacos AS "Espaços", fonte AS "Fonte"
FROM "Itens/Munições"
WHERE tipo = "item"
SORT file.name ASC
```
