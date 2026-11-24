---
tipo: "poder"
subtipo: "poder-origem"
categoria: "origem"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Herança"
resumo: "Você herdou um item de preço de até T$ 1.000. Você pode escolher este poder duas vezes, para um item de até T$ 2.000."
ativacao: "passiva"
natureza: "extraordinaria"
subcategoria_tatica: "utilidade"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
---
# 📜 Herança

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Origem
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Origem correspondente
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Você herdou um item de preço de até T$ 1.000. Você pode escolher este poder duas vezes, para um item de até T$ 2.000.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
