---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA / Heróis de Arton"
nome: "Caldeirão do Bruxo"
resumo: "Você pode criar poções como se tivesse o poder Preparar Poção usando seu caldeirão como foco de trabalho."
ativacao: "passiva"
natureza: "magica"
subcategoria_tatica: "metamagia"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Arcanista]]"
trilha_poder: "Bruxo"
caminho_exclusivo: "Bruxo"
ordem: 1
requer_poder:
  - "[[Caminho do Arcanista — Bruxo]]"
---
# ⚡ Caldeirão do Bruxo

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder de [[Arcanista]]
> - 🔮 <span class="t20-ciano">Caminho / Restrição:</span> Bruxo
> - 🌿 <span class="t20-azul">Trilha:</span> Bruxo
> - 🎖️ <span class="t20-amarelo">Nível Mínimo:</span> 1º Nível
> - 🔑 <span class="t20-verde">Pré-requisitos:</span> [[Caminho do Arcanista — Bruxo]]
> - ✨ <span class="t20-rosa">Magias Vinculadas:</span> Nenhuma (Poder Geral de [[Poderes/Magia/Preparar Poção|Preparar Poção]])

Você aprende a preparar poções mágicas em seu caldeirão. Você pode fabricar poções como se possuísse o poder geral [[Poderes/Magia/Preparar Poção|Preparar Poção]], usando seu caldeirão e ferramentas de bruxaria sem custo adicional de aprendizado.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + trilha_poder + " — " + caminho_exclusivo + ")"
FROM "Poderes/Classe/Arcanista"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
