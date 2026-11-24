---
tipo: "poder"
subtipo: "poder-racial"
categoria: "racial"
sistema: "tormenta20-jda"
fonte: "Heróis de Arton"
nome: "Protetor Táurico"
resumo: "Gasta ação de movimento para carregar aliado com uma mão livre, dando cobertura leve (+5 Defesa) e 50% de redirecionar ataques para si."
ativacao: "acao-movimento"
natureza: "extraordinaria"
subcategoria_tatica: "racial"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
requer_raca:
  - "[[Minotauro]]"
---
# ⚡ Protetor Táurico

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder Geral (Racial)
> - 🧬 <span class="t20-verde">Raças Exigidas:</span> [[Minotauro]]
> - 📜 <span class="t20-amarelo">Fonte:</span> Heróis de Arton

Você pode gastar uma ação de movimento para carregar consigo (no colo, sobre os ombros…) um aliado adjacente Médio ou menor. Você precisa de uma mão livre, que fica ocupada enquanto você estiver carregando o aliado. Enquanto está sendo carregado, o aliado é considerado sob cobertura leve (Defesa +5). Além disso, qualquer ataque contra o aliado tem 50% de chance de ter você, e não o aliado, como alvo.

---

### 🔗 Poderes Dependentes
```dataview
LIST
FROM "Poderes"
WHERE tipo = "poder" AND contains(requer_poder, this.file.link)
SORT default(requer_nivel, 1) ASC, file.name ASC
```
