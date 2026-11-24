---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA / Heróis de Arton"
nome: "Especialista em Escola"
resumo: "Escolha uma escola de magia. A CD para resistir a magias dessa escola aumenta em +2."
ativacao: "passiva"
natureza: "magica"
subcategoria_tatica: "metamagia"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Arcanista]]"
trilha_poder: "Mago"
caminho_exclusivo: "Mago / Bruxo"
ordem: 5
---
# ⚡ Especialista em Escola

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder de [[Arcanista]]
> - 🔮 <span class="t20-ciano">Caminho / Restrição:</span> Mago / Bruxo
> - 🌿 <span class="t20-azul">Trilha:</span> Mago
> - 🎖️ <span class="t20-amarelo">Nível Mínimo:</span> 1º Nível
> - 🔑 <span class="t20-verde">Pré-requisitos:</span> Nenhum
> - ✨ <span class="t20-rosa">Magias Vinculadas:</span> Nenhuma

Escolha uma escola de magia (Abjuração, Adivinhação, Convocação, Encantamento, Evocação, Ilusão, Necromancia ou Transmutação). A **CD para resistir a todas as suas magias dessa escola aumenta em +2**.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + trilha_poder + " — " + caminho_exclusivo + ")"
FROM "Poderes/Classe/Arcanista"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
