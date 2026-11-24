---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Alma de Bronze"
resumo: "Quando entra em fúria, você recebe uma quantidade de pontos de vida temporários igual ao seu nível + sua Força."
ativacao: "passiva"
natureza: "extraordinaria"
subcategoria_tatica: "utilidade"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Bárbaro]]"
---
# ⚡ Alma de Bronze

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Bárbaro]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Nenhum
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Quando entra em fúria, você recebe uma quantidade de pontos de vida temporários igual ao seu nível + sua Força.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
