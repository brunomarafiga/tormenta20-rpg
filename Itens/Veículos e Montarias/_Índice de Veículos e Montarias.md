---
tipo: indice
sistema: tormenta20-jda
nome: "Índice de Veículos e Montarias"
---

# 🐎 Índice de Veículos, Montarias e Animais

> [!tip] 🧭 Regras de Montarias e Condução
> Animais e embarcações multiplicam a velocidade e a capacidade de carga de um grupo de aventureiros:
> - **Parceiros Montaria / Carga:** Cavalos, trobos, cães e bestas de carga concedem ações de movimento adicionais ou ampliam os espaços de transporte em 10 a 20 espaços.
> - **Veículos Terrestres & Aquáticos:** Carroças, carruagens, jangadas e veleiros transportam toneladas de suprimentos e pelotões de aliados.
> 
> [[Itens/_Índice Geral de Itens|← Voltar ao Índice Geral de Itens]]

---

## 📋 Catálogo de Montarias e Veículos

```dataview
TABLE subtipo AS "Categoria", preco_ts AS "Preço (T$)", espacos AS "Espaços"
FROM "Itens/Veículos e Montarias"
WHERE tipo = "item"
SORT subtipo ASC, preco_ts ASC
```
