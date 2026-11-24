---
tipo: mecanica
subtipo: pericia
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Percepção"
atributo_chave: "Sabedoria"
somente_treinada: false
penalidade_armadura: false
---

# 🎯 Percepção
*Perícia • Sabedoria*

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Atributo:</span> Sabedoria
> - 🔒 <span class="t20-laranja">Treinada:</span> Não
> - 🛡️ <span class="t20-vermelho">Penalidade de Armadura:</span> Não

> [!t20-lore] Regra Oficial
> Mede a acuidade dos seus sentidos naturais (visão, audição, olfato e tato).
> - **Observar e Ouvir:** Detectar inimigos escondidos (teste oposto contra [[Furtividade]]) e notar detalhes no ambiente.
> - **Evitar Surpresa:** Impede que o personagem fique [[Surpreendido]] em emboscadas.

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
