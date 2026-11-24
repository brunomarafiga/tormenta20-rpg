---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Ambidestria"
resumo: "Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada."
ativacao: "passiva"
natureza: "extraordinaria"
subcategoria_tatica: "utilidade"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
trilha_poder: "Geral"
ordem: 90
classes:
  - "[[Caçador]]"
  - "[[Guerreiro]]"
requer_atributo:
  - "Destreza 2"
---
# ⚡ Ambidestria

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe Compartilhado ([[Caçador]], [[Guerreiro]])
> - 🌿 <span class="t20-azul">Trilha:</span> Geral
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Destreza 2
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
