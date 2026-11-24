---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Flagelo dos Mares"
resumo: "Você aprende e pode lançar Amedrontar (atributo-chave Carisma)."
ativacao: "passiva"
natureza: "magica"
subcategoria_tatica: "social"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Bucaneiro]]"
requer_pericia:
  - "Intimidação"
---
# ⚡ Flagelo dos Mares

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Bucaneiro]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Treinado em Intimidação
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Você aprende e pode lançar Amedrontar (atributo-chave Carisma). Esta não é uma habilidade mágica e provém de sua capacidade de incutir medo em seus inimigos.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
