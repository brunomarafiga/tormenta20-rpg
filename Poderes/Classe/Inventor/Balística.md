---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Balística"
resumo: "Você recebe proficiência com armas marciais de ataque à distância ou com armas de fogo."
ativacao: "passiva"
natureza: "extraordinaria"
subcategoria_tatica: "combate-a-distancia"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Inventor]]"
requer_pericia:
  - "Pontaria"
  - "Ofício (Armeiro)"
---
# ⚡ Balística

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Inventor]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Treinado em Pontaria, Treinado em Ofício (Armeiro)
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Você recebe proficiência com armas marciais de ataque à distância ou com armas de fogo. Quando usa uma arma de ataque à distância, pode usar sua Inteligência em vez de Destreza nos testes de ataque (e, caso possua o poder Estilo de Disparo, nas rolagens de dano).

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
