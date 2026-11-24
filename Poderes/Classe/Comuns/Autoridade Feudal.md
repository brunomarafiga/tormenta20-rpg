---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Autoridade Feudal"
resumo: "Você pode gastar 2 PM para conclamar o povo a ajudá-lo. Isso funciona como a magia Sussurros da Floresta, mas ajudado por plebeus locais."
ativacao: "passiva"
natureza: "magica"
custo_pm: 2
subcategoria_tatica: "metamagia"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
trilha_poder: "Geral"
ordem: 90
classes:
  - "[[Cavaleiro]]"
  - "[[Nobre]]"
requer_nivel: 6
---
# ⚡ Autoridade Feudal

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe Compartilhado ([[Cavaleiro]], [[Nobre]])
> - 🌿 <span class="t20-azul">Trilha:</span> Geral
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> 6º nível
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Você pode gastar 2 PM para conclamar o povo a ajudá-lo. Isso funciona como a magia [[Sussurros da Floresta]], mas em vez de espíritos da natureza você é ajudado por plebeus locais (camponeses, pescadores, mendigos...).

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
