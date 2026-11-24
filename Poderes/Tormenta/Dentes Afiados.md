---
tipo: "poder"
subtipo: "poder-tormenta"
categoria: "tormenta"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Dentes Afiados"
resumo: "Você recebe uma arma natural de mordida (dano 1d4, crítico x2, corte)."
ativacao: "gatilho-opcional"
natureza: "tormenta"
custo_pm: 1
subcategoria_tatica: "tormenta"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
---
# ⚡ Dentes Afiados

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Tormenta
> - ⚙️ <span class="t20-verde">Ativação:</span> Gatilho Opcional
> - 💧 <span class="t20-ciano">Custo:</span> 1 PM

Você recebe uma arma natural de mordida (dano 1d4, crítico x2, corte). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + " — " + join(funcao, ", ") + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
