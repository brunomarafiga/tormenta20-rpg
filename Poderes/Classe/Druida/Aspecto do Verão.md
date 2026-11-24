---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Aspecto do Verão"
resumo: "Você aprende e pode lançar uma magia de transmutação, arcana ou divina, de qualquer círculo que possa lançar."
ativacao: "passiva"
natureza: "magica"
custo_pm: 1
subcategoria_tatica: "metamagia"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Druida]]"
---
# ⚡ Aspecto do Verão

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Druida]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Nenhum
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Você aprende e pode lançar uma magia de transmutação, arcana ou divina, de qualquer círculo que possa lançar. Além disso, pode gastar 1 PM para cobrir uma de suas armas com chamas até o fim da cena. A arma causa +1d6 pontos de dano de fogo. Sempre que você acertar um ataque com ela, recebe 1 PM temporário. Você pode ganhar um máximo de PM temporários por cena igual ao seu nível e eles desaparecem no final da cena.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
