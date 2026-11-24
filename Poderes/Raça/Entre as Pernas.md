---
tipo: "poder"
subtipo: "poder-racial"
categoria: "racial"
sistema: "tormenta20-jda"
fonte: "Heróis de Arton"
nome: "Entre as Pernas"
resumo: "Ocupa espaço de criaturas duas categorias maiores; ataques contra você têm 25% de chance de atingir a criatura maior."
ativacao: "passivo-constante"
natureza: "extraordinaria"
subcategoria_tatica: "racial"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
requer_raca:
  - "[[Goblin]]"
  - "[[Hynne]]"
---
# ⚡ Entre as Pernas

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder Geral (Racial)
> - 🧬 <span class="t20-verde">Raças Exigidas:</span> [[Goblin]], [[Hynne]] *(Também disponível para: Kobolds)*
> - 📜 <span class="t20-amarelo">Fonte:</span> Heróis de Arton
> - 🔑 <span class="t20-verde">Pré-requisitos:</span> Tamanho Pequeno ou menor

Você pode ocupar o mesmo espaço de criaturas duas categorias de tamanho maiores que você (em vez de três). Enquanto estiver ocupando o mesmo espaço que uma criatura maior que você, ataques contra você têm 25% de chance de acertar a criatura maior (inclusive ataques feitos pela própria criatura!). Pré-requisito: tamanho Pequeno ou menor.

*Nota: Em mesas que utilizem suplementos de expansão, este poder também está disponível para Kobolds.*

---

### 🔗 Poderes Dependentes
```dataview
LIST
FROM "Poderes"
WHERE tipo = "poder" AND contains(requer_poder, this.file.link)
SORT default(requer_nivel, 1) ASC, file.name ASC
```
