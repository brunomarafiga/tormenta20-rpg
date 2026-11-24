---
tipo: "poder"
subtipo: "poder-combate"
categoria: "combate"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Ataque Poderoso"
resumo: "Sempre que faz um ataque corpo a corpo, você pode sofrer –2 no teste de ataque para receber +5 na rolagem de dano."
ativacao: "passivo-condicional"
natureza: "extraordinaria"
subcategoria_tatica: "combate-corpo-a-corpo"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
requer_atributo:
  - "Força 1"
---
# ⚡ Ataque Poderoso

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Combate
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Força 1
> - ⚙️ <span class="t20-verde">Ativação:</span> Passivo Condicional
> - 💧 <span class="t20-ciano">Custo:</span> 0 PM

Sempre que faz um ataque corpo a corpo, você pode sofrer –2 no teste de ataque para receber +5 na rolagem de dano.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + " — " + join(funcao, ", ") + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
