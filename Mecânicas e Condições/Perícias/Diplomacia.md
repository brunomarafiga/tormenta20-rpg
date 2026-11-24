---
tipo: mecanica
subtipo: pericia
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Diplomacia"
atributo_chave: "Carisma"
somente_treinada: false
penalidade_armadura: false
---

# 🎯 Diplomacia
*Perícia • Carisma*

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Atributo:</span> Carisma
> - 🔒 <span class="t20-laranja">Treinada:</span> Não
> - 🛡️ <span class="t20-vermelho">Penalidade de Armadura:</span> Não

> [!t20-lore] Regra Oficial
> Você sabe negociar, convencer e influenciar pessoas de forma pacífica e civilizada.
> - **Mudar Atitude:** Altera a disposição de um PNJ em relação a você ou seus aliados.
> - **Pedir Favores:** Convence um indivíduo amigável a prestar auxílio ou ceder recursos.

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
