---
tipo: moc
sistema: tormenta20-jda
nome: "Índice Geral da Biblioteca"
---

# 📚 Índice Geral da Biblioteca de Tormenta 20

Este índice é o mapa central da Biblioteca. Use os portais abaixo para chegar às entidades específicas.

---

## 🧭 Por domínio de jogo

| Domínio      | Índice específico                                  | Conteúdo                                   |                                                          |                                |                                                  |
| ------------ | -------------------------------------------------- | ------------------------------------------ | -------------------------------------------------------- | ------------------------------ | ------------------------------------------------ |
| Agentes      | [[_Índice Geral de Classes                         | Classes]], [[_Índice Geral de Raças        | Raças]], [[_Índice Geral de Origens                      | Origens]]                      | Classes, linhagens, ancestralidades e históricos |
| Capacidades  | [[_Índice Geral de Poderes                         | Poderes]], [[_Índice Geral de Habilidades  | Habilidades]], [[_Índice Geral de Magias                 | Magias]]                       | Recursos adquiríveis e capacidades automáticas   |
| Equipamentos | [[_Índice Geral de Itens                           | Itens]]                                    | Armas, armaduras, consumíveis, melhorias e encantamentos |                                |                                                  |
| Cosmologia   | [[Deuses/00 - Panteão de Arton (MOC)               | Panteão de Arton]]                         | Divindades, devoções, itens sagrados e avatares          |                                |                                                  |
| Resolução    | [[Mecânicas e Condições/_Índice Geral de Mecânicas | Mecânicas]], Perícias, Condições e Regras  | Estados alterados, testes, ações e manobras              |                                |                                                  |
| Campanha     | [[Campanha/_Índice Geral da Campanha               | Campanha]], [[Campanha/00_Escudo do Mestre | Escudo do Mestre]]                                       | Sessões, personagens e ameaças |                                                  |

---

## ⚔️ Classes e vocações

```dataview
TABLE
  fonte AS "Fonte",
  subtipo AS "Tipo",
  default(pv_por_nivel, "—") AS "PV/Nível",
  default(pm_por_nivel, "—") AS "PM/Nível"
FROM "Classes"
WHERE tipo = "classe"
SORT file.name ASC
LIMIT 40
```

Mais registros: [[_Índice Geral de Classes|Índice completo de classes]]

## 🧬 Raças e origens

```dataview
TABLE
  fonte AS "Fonte",
  tipo_criatura AS "Tipo",
  tamanho AS "Tamanho",
  deslocamento AS "Deslocamento"
FROM "Raças"
WHERE tipo = "raca"
SORT file.name ASC
LIMIT 40
```

- [[_Índice Geral de Raças|Índice completo de raças]]
- [[_Índice Geral de Origens|Índice completo de origens]]

## ✨ Magias e poderes

```dataview
TABLE
  circulo AS "Círculo",
  escola AS "Escola",
  tradicao AS "Tradição",
  custo_pm AS "PM"
FROM "Magias"
WHERE tipo = "magia"
SORT circulo ASC, file.name ASC
LIMIT 60
```

```dataview
TABLE
  categoria AS "Categoria",
  subcategoria_tatica AS "Função",
  default(requer_nivel, "—") AS "Nível",
  resumo AS "Resumo"
FROM "Poderes"
WHERE tipo = "poder"
SORT categoria ASC, file.name ASC
LIMIT 60
```

- [[_Índice Geral de Magias|Índice completo de magias]]
- [[_Índice Geral de Poderes|Índice completo de poderes]]

## 🛡️ Equipamentos e manufatura

```dataview
TABLE
  subtipo AS "Tipo",
  preco_ts AS "T$",
  espacos AS "Espaços",
  fonte AS "Fonte"
FROM "Itens"
WHERE tipo = "item"
SORT file.name ASC
LIMIT 60
```

- [[_Índice Geral de Itens|Índice completo de itens]]

## 📜 Mecânicas

- [[Mecânicas e Condições/_Índice Geral de Mecânicas|Índice Geral de Mecânicas]]

---

## 🗺️ Navegação rápida

- [00 - Home.md](./00%20-%20Home.md) — painel inicial em cards
- [_Meta/README.md](./_Meta/README.md) — taxonomia e schema
- [_Meta/ARQUITETURA.md](./_Meta/ARQUITETURA.md) — padrões da wiki
- [_Meta/t20-obsidian-rpg-system.md](./_Meta/t20-obsidian-rpg-system.md) — regras canônicas do workspace
