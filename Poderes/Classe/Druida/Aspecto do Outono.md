---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Aspecto do Outono"
resumo: "Você aprende e pode lançar uma magia de necromancia, arcana ou divina, de qualquer círculo que possa lançar."
ativacao: "passiva"
natureza: "magica"
custo_pm: 1
subcategoria_tatica: "defesa"
area_efeito: "alcance-curto"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Druida]]"
---
# ⚡ Aspecto do Outono

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Druida]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Nenhum
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Você aprende e pode lançar uma magia de necromancia, arcana ou divina, de qualquer círculo que possa lançar. Além disso, pode gastar 1 PM para impor uma penalidade de –2 nos testes de resistência de todos os inimigos em alcance curto até o início do seu próximo turno.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
