---
tipo: "poder"
subtipo: "poder-combate"
categoria: "combate"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Estilo de Disparo"
resumo: "Se estiver usando uma arma de disparo, você soma sua Destreza nas rolagens de dano."
ativacao: "passivo-constante"
natureza: "extraordinaria"
subcategoria_tatica: "combate-a-distancia"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
requer_pericia:
  - "[[Pontaria]]"
---
# ⚡ Estilo de Disparo

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Combate
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> treinado em [[Pontaria]]
> - ⚙️ <span class="t20-verde">Ativação:</span> Passivo Constante
> - 💧 <span class="t20-ciano">Custo:</span> 0 PM

Se estiver usando uma arma de disparo, você soma sua Destreza nas rolagens de dano

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + " — " + join(funcao, ", ") + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
