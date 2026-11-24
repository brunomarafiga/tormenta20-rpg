---
tipo: "poder"
subtipo: "poder-combate"
categoria: "combate"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Encouraçado"
resumo: "Se estiver usando uma armadura pesada, você recebe +2 na Defesa."
ativacao: "passivo-constante"
natureza: "extraordinaria"
subcategoria_tatica: "defesa"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
---
# ⚡ Encouraçado

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Combate
> - ⚙️ <span class="t20-verde">Ativação:</span> Passivo Constante
> - 💧 <span class="t20-ciano">Custo:</span> 0 PM

Se estiver usando uma armadura pesada, você recebe +2 na Defesa. Esse bônus aumenta em +2 para cada outro poder que você possua que tenha Encouraçado como pré-requisito

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + " — " + join(funcao, ", ") + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
