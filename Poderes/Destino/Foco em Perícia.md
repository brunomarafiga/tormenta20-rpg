---
tipo: "poder"
subtipo: "poder-destino"
categoria: "destino"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Foco em Perícia"
resumo: "Escolha uma perícia."
ativacao: "gatilho-opcional"
natureza: "extraordinaria"
custo_pm: 1
subcategoria_tatica: "utilidade"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
---
# ⚡ Foco em Perícia

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Destino
> - ⚙️ <span class="t20-verde">Ativação:</span> Gatilho Opcional
> - 💧 <span class="t20-ciano">Custo:</span> 1 PM

Escolha uma perícia. Quando faz um teste dessa perícia, você pode gastar 1 PM para rolar dois dados e usar o melhor resultado. Você pode escolher este poder outras vezes para perícias diferentes. Este poder não pode ser aplicado em Luta e Pontaria (mas veja Foco em Arma).

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + " — " + join(funcao, ", ") + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
