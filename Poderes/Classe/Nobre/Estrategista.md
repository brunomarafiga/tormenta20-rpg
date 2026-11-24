---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Estrategista"
resumo: "Você pode direcionar aliados em alcance curto."
ativacao: "padrao"
natureza: "extraordinaria"
custo_pm: 1
subcategoria_tatica: "social"
area_efeito: "alcance-curto"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Nobre]]"
requer_nivel: 6
requer_pericia:
  - "Guerra"
requer_atributo:
  - "Inteligência 1"
---
# ⚡ Estrategista

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Nobre]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> 6º nível, Inteligência 1, Treinado em Guerra
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Você pode direcionar aliados em alcance curto. Gaste uma ação padrão e 1 PM por aliado que quiser direcionar (limitado pelo seu Carisma). No próximo turno do aliado, ele ganha uma ação de movimento.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
