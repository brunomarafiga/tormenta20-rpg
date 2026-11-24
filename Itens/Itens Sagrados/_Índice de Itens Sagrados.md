---
tipo: indice
sistema: tormenta20-jda
nome: "Índice de Itens Sagrados"
---

# 📿 Índice de Itens Sagrados & Relíquias Litúrgicas

> [!tip] 🧭 Regras de Itens Sagrados (*Deuses de Arton*)
> Relíquias sagradas forjadas pelos devotos das 20 Divindades Maiores do Panteão. Cada item potencializa as orações, poderes concedidos e magias divinas dos fiéis do deus correspondente. Inclui os tradicionais **Pratos Sagrados** e relicários dos templos.
> 
> [[Itens/_Índice Geral de Itens|← Voltar ao Índice Geral de Itens]] | [[Deuses/00 - Panteão de Arton (MOC)|Ver Panteão de Arton]]

---

## 📋 Catálogo de Relíquias Litúrgicas

```dataview
TABLE deuses AS "Divindade", subtipo AS "Tipo", preco_ts AS "Preço (T$)"
FROM "Itens/Itens Sagrados"
WHERE tipo = "item"
SORT file.name ASC
```
