---
tipo: indice
sistema: tormenta20-jda
nome: "Índice de Aparatos"
---

# ⚙️ Índice de Aparatos de Engenhoca (*Heróis de Arton*)

> [!tip] 🧭 Invenções e Mecanismos Kliren & Goblin
> Componentes modulares desenvolvidos para acoplar em engenhocas e equipamentos mecânicos criados pela classe Inventor. Ampliam a versatilidade, autonomia e potência dos aparatos a vapor e pólvora de Arton.
> 
> [[Itens/_Índice Geral de Itens|← Voltar ao Índice Geral de Itens]]

---

## 📋 Catálogo de Aparatos

```dataview
TABLE preco_ts AS "Preço (T$)", espacos AS "Espaços", fonte AS "Fonte"
FROM "Itens/Aparatos"
WHERE tipo = "item"
SORT preco_ts ASC, file.name ASC
```
