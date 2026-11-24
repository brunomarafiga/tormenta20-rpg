---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Esgrimista"
resumo: "Quando usa uma arma leve ou de uma mão, você soma sua Inteligência nas rolagens de dano (limitado pelo seu nível)."
ativacao: "passiva"
natureza: "extraordinaria"
subcategoria_tatica: "utilidade"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
trilha_poder: "Geral"
ordem: 90
classes:
  - "[[Bucaneiro]]"
  - "[[Guerreiro]]"
requer_atributo:
  - "Inteligência 1"
---
# ⚡ Esgrimista

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe Compartilhado ([[Bucaneiro]], [[Guerreiro]])
> - 🌿 <span class="t20-azul">Trilha:</span> Geral
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Inteligência 1
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Quando usa uma arma leve ou de uma mão, você soma sua Inteligência nas rolagens de dano (limitado pelo seu nível).

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
