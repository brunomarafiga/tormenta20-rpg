---
tipo: "poder"
subtipo: "poder-combate"
categoria: "combate"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Estilo de Duas Armas"
resumo: "Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma."
ativacao: "passivo-constante"
natureza: "extraordinaria"
subcategoria_tatica: "combate-corpo-a-corpo"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
requer_pericia:
  - "[[Luta]]"
requer_atributo:
  - "Destreza 2"
---
# ⚡ Estilo de Duas Armas

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Combate
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Destreza 2, treinado em [[Luta]]
> - ⚙️ <span class="t20-verde">Ativação:</span> Passivo Constante
> - 💧 <span class="t20-ciano">Custo:</span> 0 PM

Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno. Se possuir Ambidestria, em vez disso não sofre penalidade para usá-lo.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + " — " + join(funcao, ", ") + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
