---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Fascinar em Massa"
resumo: "Quando usa Música: Balada Fascinante, você pode gastar 2 PM."
ativacao: "passiva"
natureza: "extraordinaria"
custo_pm: 2
subcategoria_tatica: "utilidade"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Bardo]]"
requer_poder:
  - "[[Música: Balada Fascinante]]"
---
# ⚡ Fascinar em Massa

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Bardo]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> [[Música: Balada Fascinante]]
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Quando usa Música: Balada Fascinante, você pode gastar 2 PM. Se fizer isso, afeta todas as criaturas a sua escolha no alcance da música (você faz um único teste de Atuação, oposto pelo teste de Vontade de cada criatura).

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
