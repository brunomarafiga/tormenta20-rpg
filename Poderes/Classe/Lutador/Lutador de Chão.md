---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Lutador de Chão"
resumo: "Você recebe +2 em testes de ataque para agarrar e derrubar."
ativacao: "livre"
natureza: "extraordinaria"
custo_pm: 1
subcategoria_tatica: "manobra"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Lutador]]"
---
# ⚡ Lutador de Chão

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Lutador]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Nenhum
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Você recebe +2 em testes de ataque para agarrar e derrubar. Quando agarra uma criatura, pode gastar 1 PM para fazer uma manobra derrubar contra ela como uma ação livre.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
