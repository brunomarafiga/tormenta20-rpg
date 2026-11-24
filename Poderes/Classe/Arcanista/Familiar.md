---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA / Heróis de Arton"
nome: "Familiar"
resumo: "Você possui um animal mágico de estimação (coruja, gato, sapo, cobra, etc.) que concede bônus passivos e companheirismo."
ativacao: "passiva"
natureza: "magica"
subcategoria_tatica: "metamagia"
area_efeito: "pessoal"
escala_por_nivel: true
escala_por_poderes_tormenta: false
classe: "[[Arcanista]]"
trilha_poder: "Metamagia & Geral"
caminho_exclusivo: "Qualquer"
ordem: 1
---
# ⚡ Familiar

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder de [[Arcanista]]
> - 🔮 <span class="t20-ciano">Caminho / Restrição:</span> Qualquer
> - 🌿 <span class="t20-azul">Trilha:</span> Metamagia & Geral
> - 🎖️ <span class="t20-amarelo">Nível Mínimo:</span> 1º Nível
> - 🔑 <span class="t20-verde">Pré-requisitos:</span> Nenhum
> - ✨ <span class="t20-rosa">Magias Vinculadas:</span> Nenhuma

Você possui um animal de estimação mágico. Escolha um animal: *Coruja* (+2 em Percepção e magias à distância +1m), *Gato* (+2 em Furtividade e +1 PM), *Sapo* (+1 PV por nível), *Cobra* (veneno nas garras), *Morcego* (percepção às cegas) ou *Falcão* (+2 em Iniciativa).

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + trilha_poder + " — " + caminho_exclusivo + ")"
FROM "Poderes/Classe/Arcanista"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
