---
tipo: "poder"
subtipo: "poder-combate"
categoria: "combate"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Estilo de Uma Arma"
resumo: "Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na Defesa e nos testes de ataque com essa."
ativacao: "passivo-constante"
natureza: "extraordinaria"
subcategoria_tatica: "defesa"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
requer_pericia:
  - "[[Luta]]"
---
# ⚡ Estilo de Uma Arma

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Combate
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> treinado em [[Luta]]
> - ⚙️ <span class="t20-verde">Ativação:</span> Passivo Constante
> - 💧 <span class="t20-ciano">Custo:</span> 0 PM

Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na Defesa e nos testes de ataque com essa arma (exceto ataques desarmados).

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + " — " + join(funcao, ", ") + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
