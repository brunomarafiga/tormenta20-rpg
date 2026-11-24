---
tipo: indice
sistema: tormenta20-jda
nome: "Índice de Equipamentos de Aventura"
---

# 🏕️ Índice de Equipamentos de Aventura

> [!tip] 🧭 Sobrevivência e Exploração
> O kit de sobrevivência de todo aventureiro: tochas, cordas, mochilas de carga, sacos de dormir, cantis e pederneiras. Sem esses itens essenciais, explorar masmorras escuras e atravessar os ermos de Arton torna-se um perigo letal.
> 
> [[Itens/_Índice Geral de Itens|← Voltar ao Índice Geral de Itens]] | [[Itens/Ferramentas/_Índice de Ferramentas|Ver Ferramentas de Ofício]]

---

## 📋 Catálogo de Equipamentos de Aventura

```dataview
TABLE preco_ts AS "Preço (T$)", espacos AS "Espaços", fonte AS "Fonte"
FROM "Itens/Aventura"
WHERE tipo = "item"
SORT preco_ts ASC, file.name ASC
```
