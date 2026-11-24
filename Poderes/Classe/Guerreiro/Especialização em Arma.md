---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Especialização em Arma"
resumo: "Escolha uma arma. Você recebe +2 em rolagens de dano com essa arma. Você pode escolher este poder outras vezes para armas diferentes."
ativacao: "passiva"
natureza: "extraordinaria"
subcategoria_tatica: "utilidade"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Guerreiro]]"
---
# ⚡ Especialização em Arma

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Guerreiro]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Nenhum
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Escolha uma arma. Você recebe +2 em rolagens de dano com essa arma. Você pode escolher este poder outras vezes para armas diferentes.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
