---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Pistoleiro"
resumo: "Você recebe proficiência com armas de fogo e +2 nas rolagens de dano com essas armas."
ativacao: "passiva"
natureza: "extraordinaria"
subcategoria_tatica: "combate-a-distancia"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Bucaneiro]]"
---
# ⚡ Pistoleiro

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Bucaneiro]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Nenhum
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Você recebe proficiência com armas de fogo e +2 nas rolagens de dano com essas armas.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
