---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA / Heróis de Arton"
nome: "Arma Divina"
resumo: "Ao usar Abençoar Arma, adiciona +1d8 de dano de essência ou elemento sagrado ao ataque."
ativacao: "passiva"
natureza: "magica"
subcategoria_tatica: "metamagia"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Clérigo]]"
trilha_poder: "Prece de Combate"
ordem: 2
requer_nivel: 6
requer_poder:
  - "[[Abençoar Arma]]"
magias_relacionadas:
  - "[[Arma Espiritual]]"
  - "[[Arma Mágica]]"
---
# ⚡ Arma Divina

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder de [[Clérigo]]
> - 🌿 <span class="t20-azul">Trilha:</span> Prece de Combate
> - 🎖️ <span class="t20-amarelo">Nível Mínimo:</span> 6º Nível
> - 🔑 <span class="t20-verde">Pré-requisitos:</span> [[Abençoar Arma]]
> - 🔮 <span class="t20-ciano">Magias Vinculadas:</span> [[Arma Espiritual]], [[Arma Mágica]]

Quando você ativa a habilidade [[Abençoar Arma]] (*Heróis de Arton*), sua lâmina transborda poder celestial similar à magia [[Arma Espiritual]], causando **+1d8 de dano sagrado ou profano** adicional em todos os ataques até o fim da cena.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + trilha_poder + ")"
FROM "Poderes/Classe/Clérigo"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
