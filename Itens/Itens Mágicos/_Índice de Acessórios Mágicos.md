---
tipo: indice
sistema: tormenta20-jda
nome: "Índice de Acessórios Mágicos"
---

# ✨ Índice de Acessórios Mágicos de Arton

> [!tip] 🧭 Regras de Acessórios Mágicos
> Acessórios mágicos são itens permanentes que ocupam **1 espaço** de carga e contam no **limite de 4 itens vestidos** pelo personagem. Dividem-se em três graus de poder:
> - **Menores (até T$ 9.000):** Bônus diretos de atributos (+1), testes de resistência ou magias de 1º círculo.
> - **Médios (T$ 10.500 a T$ 25.500):** Bônus robustos (+2 em atributos, deslocamento extra, voo ou invisibilidade).
> - **Maiores (T$ 30.000 ou mais):** Relíquias capazes de curas miraculosas, reflexão de magias ou campos protetores absolutos.
> 
> [[Itens/_Índice Geral de Itens|← Voltar ao Índice Geral de Itens]]

---

## 📋 Catálogo de Acessórios Mágicos

```dataview
TABLE preco_ts AS "Preço (T$)", espacos AS "Espaços", fonte AS "Fonte"
FROM "Itens/Itens Mágicos"
WHERE tipo = "item"
SORT preco_ts ASC, file.name ASC
```
