---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA / Heróis de Arton"
nome: "Missa: Bênção da Vida"
resumo: "Os participantes recebem +10 pontos de vida temporários e recuperam +1 PV por nível ao receber a magia Curar Ferimentos."
ativacao: "passiva"
natureza: "magica"
subcategoria_tatica: "metamagia"
area_efeito: "pessoal"
escala_por_nivel: true
escala_por_poderes_tormenta: false
classe: "[[Clérigo]]"
trilha_poder: "Missas"
ordem: 1
magias_relacionadas:
  - "[[Curar Ferimentos]]"
---
# ⚡ Missa: Bênção da Vida

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder de [[Clérigo]]
> - 🌿 <span class="t20-azul">Trilha:</span> Missas
> - 🎖️ <span class="t20-amarelo">Nível Mínimo:</span> 1º Nível
> - 🔑 <span class="t20-verde">Pré-requisitos:</span> Nenhum
> - 🔮 <span class="t20-ciano">Magias Vinculadas:</span> [[Curar Ferimentos]]

Você pode gastar 1 hora e T$ 25 em incensos e oferendas para celebrar uma missa. Os participantes recebem **+10 pontos de vida temporários** e, até o fim do dia, sempre que receberem cura de PV da magia [[Curar Ferimentos]] ou similar, recuperam +1 PV adicional por nível de conjurador.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + trilha_poder + ")"
FROM "Poderes/Classe/Clérigo"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
