---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Alquimista de Batalha"
resumo: "Quando usa um preparado alquímico ou poção que cause dano, você soma sua Inteligência na rolagem de dano."
ativacao: "passiva"
natureza: "extraordinaria"
subcategoria_tatica: "metamagia"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Inventor]]"
requer_poder:
  - "[[Alquimista Iniciado]]"
---
# ⚡ Alquimista de Batalha

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Inventor]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> [[Alquimista Iniciado]]
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Quando usa um preparado alquímico ou poção que cause dano, você soma sua Inteligência na rolagem de dano.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
