---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Golpe Mágico"
resumo: "Enquanto estiver sob efeito de Inspiração, sempre que você acertar um ataque corpo a corpo em um inimigo, recebe 2 PM temporários."
ativacao: "passiva"
natureza: "extraordinaria"
subcategoria_tatica: "utilidade"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Bardo]]"
requer_poder:
  - "[[Esgrima Mágica]]"
---
# ⚡ Golpe Mágico

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Bardo]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> [[Esgrima Mágica]]
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Enquanto estiver sob efeito de Inspiração, sempre que você acertar um ataque corpo a corpo em um inimigo, recebe 2 PM temporários. Você pode ganhar um máximo de PM temporários por cena igual ao seu nível. Esses pontos temporários desaparecem no final da cena

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
