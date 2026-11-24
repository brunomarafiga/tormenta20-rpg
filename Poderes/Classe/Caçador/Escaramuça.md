---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Escaramuça"
resumo: "Quando se move 6m ou mais, você recebe +2 em Defesa e Reflexos e +1d8 nas rolagens de dano de ataques corpo a corpo e à distância em."
ativacao: "passiva"
natureza: "extraordinaria"
subcategoria_tatica: "defesa"
area_efeito: "alcance-curto"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Caçador]]"
requer_nivel: 6
requer_atributo:
  - "Destreza 2"
---
# ⚡ Escaramuça

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Caçador]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> 6º nível, Destreza 2
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Quando se move 6m ou mais, você recebe +2 em Defesa e Reflexos e +1d8 nas rolagens de dano de ataques corpo a corpo e à distância em alcance curto até o início de seu próximo turno. Você não pode usar esta habilidade se estiver vestindo armadura pesada.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
