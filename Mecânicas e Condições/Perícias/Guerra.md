---
tipo: mecanica
subtipo: pericia
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Guerra"
atributo_chave: "Inteligência"
somente_treinada: true
penalidade_armadura: false
---

# 🎯 Guerra
*Perícia • Inteligência*

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Atributo:</span> Inteligência
> - 🔒 <span class="t20-laranja">Treinada:</span> Sim
> - 🛡️ <span class="t20-vermelho">Penalidade de Armadura:</span> Não

> [!t20-lore] Regra Oficial
> Você estudou táticas militares, logística e estratégia no campo de batalha.
> - **Analisar Terreno:** Concede vantagens táticas para aliados.
> - **Plano de Batalha:** Pode substituir testes de Iniciativa em combate tático planejado.

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
