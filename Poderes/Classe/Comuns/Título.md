---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Título"
resumo: "Recebe título nobre, feudo e recursos no valor de T$ 1.000 no início de cada aventura."
ativacao: "passiva"
natureza: "extraordinaria"
subcategoria_tatica: "social"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
trilha_poder: "Geral"
ordem: 90
classes:
  - "[[Cavaleiro]]"
  - "[[Nobre]]"
requer_nivel: 10
requer_poder:
  - "[[Autoridade Feudal]]"
---
# ⚡ Título

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe Compartilhado ([[Cavaleiro]], [[Nobre]])
> - 🌿 <span class="t20-azul">Trilha:</span> Geral
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> 10º nível, [[Autoridade Feudal]]
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Você recebe um título de nobreza como barão, visconde ou conde (a critério do mestre) e um feudo para governar. Você recebe um bônus de +2 em testes de perícias baseadas em Carisma contra pessoas de posição social inferior à sua. Além disso, no início de cada aventura, você recebe recursos no valor de T$ 1.000 de seu feudo (podendo acumular de uma aventura para outra).

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
