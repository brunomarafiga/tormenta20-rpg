---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Chave"
resumo: "Se estiver agarrando uma criatura e fizer um teste de manobra contra ela para causar dano, o dano desarmado aumenta em um passo."
ativacao: "passiva"
natureza: "extraordinaria"
subcategoria_tatica: "manobra"
area_efeito: "alvo"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Lutador]]"
requer_nivel: 4
requer_poder:
  - "[[Lutador de Chão]]"
requer_atributo:
  - "Inteligência 1"
---
# ⚡ Chave

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Lutador]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> 4º nível, [[Lutador de Chão]], Inteligência 1
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Se estiver agarrando uma criatura e fizer um teste de manobra contra ela para causar dano, o dano desarmado aumenta em um passo.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
