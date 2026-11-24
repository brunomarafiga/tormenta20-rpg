---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Forma Selvagem Aprimorada"
resumo: "Quando usa Forma Selvagem, você pode gastar 6 PM ao todo para assumir uma forma aprimorada."
ativacao: "passiva"
natureza: "extraordinaria"
custo_pm: 6
subcategoria_tatica: "utilidade"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Druida]]"
requer_nivel: 6
requer_poder:
  - "[[Forma Selvagem]]"
---
# ⚡ Forma Selvagem Aprimorada

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Druida]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> 6º nível, [[Forma Selvagem]]
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Quando usa Forma Selvagem, você pode gastar 6 PM ao todo para assumir uma forma aprimorada.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
