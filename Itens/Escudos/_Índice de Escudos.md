---
tipo: indice
sistema: tormenta20-jda
nome: "Índice de Escudos"
---

# 🛡️ Índice de Escudos de Arton

> [!tip] 🧭 Regras de Escudos
> Escudos oferecem bônus de Defesa cumulativo com armaduras. O **Broquel** deixa a mão livre (ideal para conjuradores e armas de duas mãos com certos poderes), o **Escudo Leve** permite segurar itens leves, e o **Escudo Pesado** e **Escudo Torre** oferecem cobertura e proteção máxima para a linha de frente.
> 
> [[Itens/_Índice Geral de Itens|← Voltar ao Índice Geral de Itens]] | [[Itens/Comparativo de Armaduras e Escudos|Ver Guia Comparativo Completo]]

---

## 📋 Catálogo de Escudos

```dataview
TABLE bonus_defesa AS "Defesa", penalidade_armadura AS "Penalidade", preco_ts AS "Preço (T$)", espacos AS "Espaços"
FROM "Itens/Escudos"
WHERE tipo = "item"
SORT bonus_defesa DESC, penalidade_armadura DESC, preco_ts ASC
```
