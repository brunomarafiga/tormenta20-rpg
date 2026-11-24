---
tipo: mecanica
subtipo: pericia
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Furtividade"
atributo_chave: "Destreza"
somente_treinada: false
penalidade_armadura: true
---

# 🎯 Furtividade
*Perícia • Destreza*

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Atributo:</span> Destreza
> - 🔒 <span class="t20-laranja">Treinada:</span> Não
> - 🛡️ <span class="t20-vermelho">Penalidade de Armadura:</span> Sim

> [!t20-lore] Regra Oficial
> Você sabe se esconder nas sombras e se mover sem fazer ruído.
> - **Esconder-se:** Exige cobertura ou camuflagem. Teste oposto contra Percepção dos observadores. Se bem-sucedido, seus alvos ficam [[Desprevenido]] contra seus ataques.
> - **Mover-se em Silêncio:** Movimentar-se sem chamar atenção de sentinelas.

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
