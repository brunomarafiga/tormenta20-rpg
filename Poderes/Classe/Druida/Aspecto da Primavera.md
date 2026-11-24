---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Aspecto da Primavera"
resumo: "Você aprende e pode lançar uma magia de encantamento ou ilusão, arcana ou divina, de qualquer círculo que possa lançar."
ativacao: "passiva"
natureza: "magica"
subcategoria_tatica: "metamagia"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Druida]]"
---
# ⚡ Aspecto da Primavera

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Druida]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Nenhum
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Você aprende e pode lançar uma magia de encantamento ou ilusão, arcana ou divina, de qualquer círculo que possa lançar. Além disso, escolha uma quantidade de magias igual ao seu Carisma (mínimo 1). O custo dessas magias é reduzido em −1 PM.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
