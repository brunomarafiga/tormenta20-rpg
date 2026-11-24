---
tipo: mecanica
subtipo: pericia
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Religião"
atributo_chave: "Sabedoria"
somente_treinada: true
penalidade_armadura: false
---

# 🎯 Religião
*Perícia • Sabedoria*

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Atributo:</span> Sabedoria
> - 🔒 <span class="t20-laranja">Treinada:</span> Sim
> - 🛡️ <span class="t20-vermelho">Penalidade de Armadura:</span> Não

> [!t20-lore] Regra Oficial
> Você estudou os dogmas dos vinte deuses do Panteão, mitologias divinas e o plano celestial.
> - **Teologia e Dogmas:** Identificar divindades, símbolos sagrados e ritos litúrgicos.
> - **Mortos-Vivos:** Reconhecer fraquezas e poderes de criaturas profanas.

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
