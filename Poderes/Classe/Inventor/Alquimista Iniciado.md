---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Alquimista Iniciado"
resumo: "Você recebe um livro de fórmulas e pode fabricar poções com fórmulas que conheça de 1º e 2º círculos."
ativacao: "passiva"
natureza: "extraordinaria"
subcategoria_tatica: "utilidade"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Inventor]]"
requer_pericia:
  - "Ofício (Alquímia)"
requer_atributo:
  - "Inteligência 1"
  - "Sabedoria 1"
---
# ⚡ Alquimista Iniciado

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Inventor]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Inteligência 1, Sabedoria 1, Treinado em Ofício (Alquímia)
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Você recebe um livro de fórmulas e pode fabricar poções com fórmulas que conheça de 1º e 2º círculos. Veja as páginas 333 e 341 para as regras de poções.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
