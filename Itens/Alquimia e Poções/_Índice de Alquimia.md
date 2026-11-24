---
tipo: indice
sistema: tormenta20-jda
nome: "Índice de Alquimia"
---

# 🧪 Índice de Alquimia, Poções e Catalisadores

> [!tip] 🧭 Regras de Preparados Alquímicos
> Itens consumíveis criados através da perícia *Ofício (Alquimia)*. Dividem-se em:
> - **Preparados e Granadas:** Itens de arremesso que causam dano elemental (*Fogo Alquímico*, *Ácido*), névoa ou efeitos de controle.
> - **Poções & Elixires:** Fórmulas mágicas engarrafadas que ativam magias instantaneamente ao serem ingeridas.
> - **Catalisadores:** Substâncias raras consumidas durante a conjuração para aumentar dano, alcance ou CD de magias (*Dente-de-dragão*, *Seixo de âmbar*).
> 
> [[Itens/_Índice Geral de Itens|← Voltar ao Índice Geral de Itens]] | [[Itens/Venenos/_Índice de Venenos|Ver Catálogo de Venenos]]

---

## 📋 Catálogo de Preparados e Catalisadores

```dataview
TABLE subtipo AS "Categoria", preco_ts AS "Preço (T$)", espacos AS "Espaços"
FROM "Itens/Alquimia e Poções"
WHERE tipo = "item"
SORT subtipo ASC, file.name ASC
```
