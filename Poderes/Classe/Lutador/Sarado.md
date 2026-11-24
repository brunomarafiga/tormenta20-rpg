---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Sarado"
resumo: "Você soma sua Força no seu total de pontos de vida e em Fortitude."
ativacao: "passiva"
natureza: "extraordinaria"
subcategoria_tatica: "social"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Lutador]]"
requer_atributo:
  - "Força 3"
---
# ⚡ Sarado

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Lutador]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Força 3
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Você soma sua Força no seu total de pontos de vida e em Fortitude. Você pode usar Força em vez de Carisma em testes de Diplomacia com pessoas que se atraiam por físicos bem definidos.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
