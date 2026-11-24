---
tipo: mecanica
subtipo: pericia
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Jogatina"
atributo_chave: "Carisma"
somente_treinada: true
penalidade_armadura: false
---

# 🎯 Jogatina
*Perícia • Carisma*

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Atributo:</span> Carisma
> - 🔒 <span class="t20-laranja">Treinada:</span> Sim
> - 🛡️ <span class="t20-vermelho">Penalidade de Armadura:</span> Não

> [!t20-lore] Regra Oficial
> Você conhece as regras, blefes e probabilidades de jogos de azar e taverna.
> - **Apostar:** Permite auferir lucros em apostas ou disputar com outros jogadores.

---

## Efeitos que Afetam Esta Perícia

```dataview
TABLE WITHOUT ID
  file.link AS "Fonte",
  default(tipo, "—") AS "Tipo",
  default(subtipo, categoria) AS "Categoria",
  default(resumo, "—") AS "Efeito"
FROM "Poderes" OR "Habilidades" OR "Itens" OR "Magias" OR "Mecânicas e Condições/Condições"
WHERE
  contains(default(requer_pericia, []), this.file.link)
  OR contains(default(pericias_envolvidas, []), this.file.link)
  OR contains(default(pericias_relacionadas, []), this.file.link)
SORT tipo ASC, file.name ASC
```
