---
tipo: mecanica
subtipo: pericia
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Luta"
atributo_chave: "Força"
somente_treinada: false
penalidade_armadura: false
---

# 🎯 Luta
*Perícia • Força*

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Atributo:</span> Força
> - 🔒 <span class="t20-laranja">Treinada:</span> Não
> - 🛡️ <span class="t20-vermelho">Penalidade de Armadura:</span> Não

> [!t20-lore] Regra Oficial
> Perícia padrão de ataque corpo a corpo, com armas corpo a corpo ou desarmado.
> - **Testes de Ataque:** Define o acerto de ataques corpo a corpo.
> - **Manobras de Combate:** Utilizada para executar e resistir a manobras como [[Agarrar]], [[Derrubar]], [[Desarmar]], [[Empurrar]] e [[Quebrar]].

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
