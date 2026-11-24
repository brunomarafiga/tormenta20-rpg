---
tipo: mecanica
subtipo: pericia
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Iniciativa"
atributo_chave: "Destreza"
somente_treinada: false
penalidade_armadura: false
---

# 🎯 Iniciativa
*Perícia • Destreza*

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Atributo:</span> Destreza
> - 🔒 <span class="t20-laranja">Treinada:</span> Não
> - 🛡️ <span class="t20-vermelho">Penalidade de Armadura:</span> Não

> [!t20-lore] Regra Oficial
> Mede a rapidez dos seus reflexos e tempo de reação mental para agir antes dos seus oponentes quando o combate ou uma cena de ação se inicia. Determina a ordem de turnos.

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
