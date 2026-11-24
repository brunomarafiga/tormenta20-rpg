---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Língua de Prata"
resumo: "Quando faz um teste de perícia baseada em Carisma, você pode gastar 2 PM para receber um bônus no teste igual a metade do seu nível."
ativacao: "passiva"
natureza: "extraordinaria"
custo_pm: 2
subcategoria_tatica: "social"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Nobre]]"
---
# ⚡ Língua de Prata

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Nobre]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Nenhum
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Quando faz um teste de perícia baseada em Carisma, você pode gastar 2 PM para receber um bônus no teste igual a metade do seu nível.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
