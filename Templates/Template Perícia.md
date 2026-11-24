---
tipo: mecanica
subtipo: pericia
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Nome da Perícia"
atributo_chave: "Força"
somente_treinada: false
penalidade_armadura: false
# atributos_substitutos:
#   - "Destreza"
# acoes_relacionadas:
#   - "[[Nome da Ação]]"
# habilidades_relacionadas:
#   - "[[Nome da Habilidade]]"
# itens_relacionados:
#   - "[[Nome do Item]]"
# efeitos_relacionados:
#   - "[[Nome da Condição]]"
#   - "[[Nome da Magia]]"
#   - "[[Nome do Poder]]"
#   - "[[Nome da Habilidade]]"
#   - "[[Nome do Item]]"
---

# 🎯 Nome da Perícia

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Atributo:</span> Força
> - 🔒 <span class="t20-laranja">Treinada:</span> Não
> - 🛡️ <span class="t20-vermelho">Penalidade de Armadura:</span> Não

## Regra Oficial

Descrição fiel da perícia, usos permitidos e testes estendidos.

## Fórmula

$$
\text{Valor da Perícia} =
\frac{\text{Nível}}{2} +
\text{Atributo-chave} +
\text{Treino} +
\text{Outros efeitos aplicáveis}
$$

## Substituições e Modificadores

- **Atributo substituto:** `[atributo permitido pela regra, se houver]`
- **Penalidade de armadura:** `[quando e em quais ações]`
- **Bônus circunstancial:** `[origem, limite e duração]`
- **Penalidade circunstancial:** `[origem, limite e duração]`

## Acúmulo

- O mesmo bônus não se acumula consigo mesmo.
- Fontes distintas podem se acumular conforme a origem formal do efeito.
- Efeitos de itens, magias, parceiros e ambiente seguem regras próprias.
- Registrar `[VERIFICAR]` quando houver conflito de fonte ou regra não confirmada.

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
