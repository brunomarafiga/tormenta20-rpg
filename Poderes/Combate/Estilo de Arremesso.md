---
tipo: "poder"
subtipo: "poder-combate"
categoria: "combate"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Estilo de Arremesso"
resumo: "Você pode sacar armas de arremesso como uma ação livre e recebe +2 nas rolagens de dano com elas."
ativacao: "ativo"
natureza: "extraordinaria"
subcategoria_tatica: "combate-a-distancia"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
requer_pericia:
  - "[[Pontaria]]"
---
# ⚡ Estilo de Arremesso

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Combate
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> treinado em [[Pontaria]]
> - ⚙️ <span class="t20-verde">Ativação:</span> Ativo
> - 💧 <span class="t20-ciano">Custo:</span> 0 PM

Você pode sacar armas de arremesso como uma ação livre e recebe +2 nas rolagens de dano com elas. Se também possuir o poder Saque Rápido, também recebe +2 nos testes de ataque com essas armas.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + " — " + join(funcao, ", ") + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
