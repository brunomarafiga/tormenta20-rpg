---
tipo: mecanica
subtipo: pericia
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Misticismo"
atributo_chave: "Inteligência"
somente_treinada: true
penalidade_armadura: false
---

# 🎯 Misticismo
*Perícia • Inteligência*

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Atributo:</span> Inteligência
> - 🔒 <span class="t20-laranja">Treinada:</span> Sim
> - 🛡️ <span class="t20-vermelho">Penalidade de Armadura:</span> Não

> [!t20-lore] Regra Oficial
> Você compreende os mistérios da magia arcana, planos planares e energia mística.
> - **Identificar Magia:** Reconhece uma magia sendo conjurada ou ativa.
> - **Identificar Item Mágico:** Descobre as propriedades de um item encantado.
> - **Lançar Magia de Armadura:** Permite conjurar magias arcanas vestindo armadura (sofrendo penalidade de armadura na CD).

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
