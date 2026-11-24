---
tipo: "poder"
subtipo: "poder-combate"
categoria: "combate"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Estilo de Arma Longa"
resumo: "Você recebe +2 em testes de ataque com armas alongadas e pode atacar alvos adjacentes com essas armas."
ativacao: "passivo-constante"
natureza: "extraordinaria"
subcategoria_tatica: "combate-corpo-a-corpo"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
requer_pericia:
  - "[[Luta]]"
requer_atributo:
  - "Força 1"
---
# ⚡ Estilo de Arma Longa

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Combate
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> treinado em [[Luta]], Força 1
> - ⚙️ <span class="t20-verde">Ativação:</span> Passivo Constante
> - 💧 <span class="t20-ciano">Custo:</span> 0 PM

Você recebe +2 em testes de ataque com armas alongadas e pode atacar alvos adjacentes com essas armas.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + " — " + join(funcao, ", ") + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
