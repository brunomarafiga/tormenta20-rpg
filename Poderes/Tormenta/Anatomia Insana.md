---
tipo: "poder"
subtipo: "poder-tormenta"
categoria: "tormenta"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Anatomia Insana"
resumo: "Você tem 25% de chance (resultado “1” em 1d4) de ignorar o dano adicional de um acerto crítico ou ataque furtivo."
ativacao: "passivo-constante"
natureza: "tormenta"
subcategoria_tatica: "tormenta"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: true
---
# ⚡ Anatomia Insana

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Tormenta
> - ⚙️ <span class="t20-verde">Ativação:</span> Passivo Constante
> - 💧 <span class="t20-ciano">Custo:</span> 0 PM

Você tem 25% de chance (resultado “1” em 1d4) de ignorar o dano adicional de um acerto crítico ou ataque furtivo. A chance aumenta em +25% para cada dois outros poderes da Tormenta que você possui.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + " — " + join(funcao, ", ") + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
