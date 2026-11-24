---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Autômato"
resumo: "Você fabrica um autômato, um construto que obedece a seus comandos."
ativacao: "passiva"
natureza: "extraordinaria"
subcategoria_tatica: "metamagia"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Inventor]]"
requer_poder:
  - "[[Engenhoqueiro]]"
---
# ⚡ Autômato

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Inventor]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> [[Engenhoqueiro]]
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Você fabrica um autômato, um construto que obedece a seus comandos. Ele é um parceiro iniciante de um tipo a sua escolha entre ajudante, assassino, atirador, combatente, guardião, montaria ou vigilante. No 7º nível, ele muda para veterano e, no 15º nível, para mestre. Se o autômato for destruído, você pode fabricar um novo com uma semana de trabalho e T$ 100.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
