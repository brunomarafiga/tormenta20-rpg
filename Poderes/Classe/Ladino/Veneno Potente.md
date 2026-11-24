---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Veneno Potente"
resumo: "A CD para resistir aos venenos que você usa aumenta em +5."
ativacao: "passiva"
natureza: "extraordinaria"
subcategoria_tatica: "utilidade"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Ladino]]"
requer_pericia:
  - "Ofício (Alquímia)"
---
# ⚡ Veneno Potente

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Ladino]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Treinado em Ofício (Alquímia)
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

A CD para resistir aos venenos que você usa aumenta em +5.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
