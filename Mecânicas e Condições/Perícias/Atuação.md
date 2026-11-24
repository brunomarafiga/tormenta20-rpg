---
tipo: mecanica
subtipo: pericia
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Atuação"
atributo_chave: "Carisma"
somente_treinada: true
penalidade_armadura: false
---

# 🎯 Atuação
*Perícia • Carisma*

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Atributo:</span> Carisma
> - 🔒 <span class="t20-laranja">Treinada:</span> Sim
> - 🛡️ <span class="t20-vermelho">Penalidade de Armadura:</span> Não

> [!t20-lore] Regra Oficial
> Você sabe se expressar através de artes como canto, dança, dramaturgia ou música.
> - **Impressionar:** Faça um teste de Atuação oposto pelo teste de Vontade de quem você quer impressionar. Se passar, recebe +2 em testes de perícias baseadas em Carisma contra essa pessoa no mesmo dia. Se falhar, sofre –2 nesses testes e não pode tentar de novo no mesmo dia.
> - **Sustento:** Permite ganhar dinheiro apresentando-se em público.

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
