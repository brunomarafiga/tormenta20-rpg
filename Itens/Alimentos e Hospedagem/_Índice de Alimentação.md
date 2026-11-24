---
tipo: indice
sistema: tormenta20-jda
nome: "Índice de Alimentação"
---

# 🍖 Índice de Alimentos, Bebidas e Estadia

> [!tip] 🧭 Regras de Sustento e Descanso
> Um personagem precisa de alimentação e água fresca diária para não sofrer penalidades de inanição. Durante viagens pelos ermos, *Pães de viagem* garantem sobrevivência; em tavernas e estalagens, refeições especiais e bebidas típicas (*Cerveja Anã*, vinhos finos) proporcionam bônus de recuperação e resistências temporárias.
> 
> [[Itens/_Índice Geral de Itens|← Voltar ao Índice Geral de Itens]]

---

## 📋 Catálogo de Alimentos e Bebidas

```dataview
TABLE preco_ts AS "Preço (T$)", espacos AS "Espaços", fonte AS "Fonte"
FROM "Itens/Alimentos e Hospedagem"
WHERE tipo = "item"
SORT preco_ts ASC, file.name ASC
```
