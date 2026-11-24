---
tipo: indice
sistema: tormenta20-jda
nome: "Índice de Ferramentas"
---

# 🔧 Índice de Ferramentas, Instrumentos e Ofícios

> [!tip] 🧭 Regras de Ferramentas e Perícias
> Executar tarefas profissionais sem as ferramentas adequadas impõe **–5 de penalidade** no teste da perícia correspondente. Esta seção reúne instrumentos musicais para bardos (*Atuação*), gazuas e kits de ladrão (*Ladinagem*), estojos cirúrgicos (*Cura*) e ferramentas de ferreiro, alquimista e inventor (*Ofício*).
> 
> [[Itens/_Índice Geral de Itens|← Voltar ao Índice Geral de Itens]] | [[Itens/Aventura/_Índice de Equipamentos de Aventura|Ver Equipamento de Aventura]]

---

## 📋 Catálogo de Ferramentas

```dataview
TABLE preco_ts AS "Preço (T$)", espacos AS "Espaços", pericias_envolvidas AS "Perícias"
FROM "Itens/Ferramentas"
WHERE tipo = "item"
SORT preco_ts ASC, file.name ASC
```
