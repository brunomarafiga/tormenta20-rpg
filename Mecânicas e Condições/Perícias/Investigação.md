---
tipo: mecanica
subtipo: pericia
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Investigação"
atributo_chave: "Inteligência"
somente_treinada: false
penalidade_armadura: false
---

# 🎯 Investigação
*Perícia • Inteligência*

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Atributo:</span> Inteligência
> - 🔒 <span class="t20-laranja">Treinada:</span> Não
> - 🛡️ <span class="t20-vermelho">Penalidade de Armadura:</span> Não

> [!t20-lore] Regra Oficial
> Você sabe procurar pistas materiais e deduzir conclusões com lógica apurada.
> - **Procurar Pistas:** Vasculha aposentos, corpos e cenas de crime em busca de pistas escondidas.
> - **Interrogar:** Extrai informações relevantes de informantes e prisioneiros.

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
