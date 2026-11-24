---
tipo: "poder"
subtipo: "poder-combate"
categoria: "combate"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Disparo Preciso"
resumo: "Você pode fazer ataques à distância contra oponentes envolvidos em combate corpo a corpo sem sofrer a penalidade de –5 no teste de ataque."
ativacao: "passivo-constante"
natureza: "extraordinaria"
subcategoria_tatica: "combate-a-distancia"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
requer_poder:
  - "[[Estilo de Disparo]]"
  - "[[Estilo de Arremesso]]"
---
# ⚡ Disparo Preciso

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Combate
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> [[Estilo de Disparo]], [[Estilo de Arremesso]]
> - ⚙️ <span class="t20-verde">Ativação:</span> Passivo Constante
> - 💧 <span class="t20-ciano">Custo:</span> 0 PM

Você pode fazer ataques à distância contra oponentes envolvidos em combate corpo a corpo sem sofrer a penalidade de –5 no teste de ataque.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + " — " + join(funcao, ", ") + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
