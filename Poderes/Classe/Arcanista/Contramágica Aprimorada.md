---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA / Heróis de Arton"
nome: "Contramágica Aprimorada"
resumo: "Você pode preparar uma contramágica usando qualquer magia do mesmo círculo da magia do adversário ou Dissipar Magia."
ativacao: "reacao"
natureza: "magica"
subcategoria_tatica: "metamagia"
area_efeito: "alcance-medio"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Arcanista]]"
trilha_poder: "Metamagia & Geral"
caminho_exclusivo: "Qualquer"
ordem: 3
magias_relacionadas:
  - "[[Dissipar Magia]]"
---
# ⚡ Contramágica Aprimorada

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder de [[Arcanista]]
> - 🔮 <span class="t20-ciano">Caminho / Restrição:</span> Qualquer
> - 🌿 <span class="t20-azul">Trilha:</span> Metamagia & Geral
> - 🎖️ <span class="t20-amarelo">Nível Mínimo:</span> 1º Nível
> - 🔑 <span class="t20-verde">Pré-requisitos:</span> Nenhum
> - ✨ <span class="t20-rosa">Magias Vinculadas:</span> [[Dissipar Magia]]

Uma vez por rodada, você pode usar uma reação para anular uma magia que esteja sendo lançada por outro conjurador em alcance médio, usando a magia [[Dissipar Magia]] ou qualquer magia de mesmo círculo ou superior.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + trilha_poder + " — " + caminho_exclusivo + ")"
FROM "Poderes/Classe/Arcanista"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
