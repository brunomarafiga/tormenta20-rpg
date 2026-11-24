---
tipo: indice
sistema: tormenta20-jda
nome: "Índice de Vestuário"
---

# 👗 Índice de Vestuário e Trajes Especiais

> [!tip] 🧭 Roupas, Capas e Trajes de Arton
> Além de estilo, o vestuário confere bônus cruciais: trajes da corte facilitam testes sociais (*Diplomacia*, *Enganação*), mantos camuflados e capas pesadas auxiliam na *Furtividade* e resistência a intempéries, e robes místicos potencializam a conjuração arcana.
> 
> [[Itens/_Índice Geral de Itens|← Voltar ao Índice Geral de Itens]]

---

## 📋 Catálogo de Vestuário

```dataview
TABLE preco_ts AS "Preço (T$)", espacos AS "Espaços", pericias_envolvidas AS "Perícias Afetadas"
FROM "Itens/Vestuário"
WHERE tipo = "item"
SORT preco_ts ASC, file.name ASC
```
