---
tipo: "poder"
subtipo: "poder-racial"
categoria: "racial"
sistema: "tormenta20-jda"
fonte: "Heróis de Arton"
nome: "Dupla Inteligência"
resumo: "Gasta 2 PM para rolar dois dados e escolher o melhor em testes de Inteligência ou perícias baseadas em Int."
ativacao: "passivo-gatilho"
natureza: "extraordinaria"
custo_pm: 2
subcategoria_tatica: "racial"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
requer_poder:
  - "[[Duas Cabeças]]"
requer_raca:
  - "[[Lefou]]"
  - "[[Trog]]"
---
# ⚡ Dupla Inteligência

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder Geral (Racial)
> - 🧬 <span class="t20-verde">Raças Exigidas:</span> [[Lefou]], [[Trog]] *(Também disponível para: Gnoll, Kaijin, Orc)*
> - 📜 <span class="t20-amarelo">Fonte:</span> Heróis de Arton
> - 🔑 <span class="t20-verde">Pré-requisitos:</span> Int 2, [[Duas Cabeças]]

Quando faz um teste de Inteligência ou de perícias baseadas nesse atributo, você pode gastar 2 PM para rolar dois dados e usar o melhor resultado. Pré-requisitos: Int 2, Duas Cabeças.

*Nota: Em mesas que utilizem suplementos de expansão, este poder também está disponível para Gnoll, Kaijin e Orc.*

---

### 🔗 Poderes Dependentes
```dataview
LIST
FROM "Poderes"
WHERE tipo = "poder" AND contains(requer_poder, this.file.link)
SORT default(requer_nivel, 1) ASC, file.name ASC
```
