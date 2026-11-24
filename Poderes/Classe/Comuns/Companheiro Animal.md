---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Companheiro Animal"
resumo: "Você recebe um companheiro animal. Pode escolher este poder várias vezes para companheiros diferentes."
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
  - "[[Druida]]"
requer_pericia:
  - "Adestramento"
requer_atributo:
  - "Carisma 1"
---
# ⚡ Companheiro Animal

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe Compartilhado ([[Caçador]], [[Druida]])
> - 🌿 <span class="t20-azul">Trilha:</span> Geral
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Treinado em Adestramento (Carisma 1 para Caçador)
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Você recebe um companheiro animal. Veja o quadro na página 62 para detalhes. Você pode escolher este poder quantas vezes quiser, mas deve escolher companheiros diferentes e ainda está sujeito ao limite de parceiros que pode ter (veja a página 260).

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
