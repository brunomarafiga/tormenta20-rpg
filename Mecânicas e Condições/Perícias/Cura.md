---
tipo: mecanica
subtipo: pericia
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Cura"
atributo_chave: "Sabedoria"
somente_treinada: false
penalidade_armadura: false
---

# 🎯 Cura
*Perícia • Sabedoria*

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Atributo:</span> Sabedoria
> - 🔒 <span class="t20-laranja">Treinada:</span> Não
> - 🛡️ <span class="t20-vermelho">Penalidade de Armadura:</span> Não

> [!t20-lore] Regra Oficial
> Você sabe tratar de ferimentos, doenças e venenos.
> - **Primeiros Socorros (CD 15):** Estabiliza um personagem sangrando ou moribundo.
> - **Cuidados Prolongados:** Acelera a recuperação de PV e PM com repouso.
> - **Tratar Veneno e Doença:** Faz um teste de Cura para conceder bônus no teste de resistência do paciente.

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
