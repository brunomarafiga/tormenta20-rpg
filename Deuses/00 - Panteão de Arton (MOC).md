---
tipo: moc
sistema: tormenta20-jda
fonte: "Deuses de Arton / Tormenta20 JdA"
nome: "Panteão de Arton (MOC)"
aliases:
  - "Panteão de Arton (MOC)"
  - "00 - Panteão de Arton (MOC)"
tags:
  - moc
  - panteao
  - t20
---

# 🏛️ Panteão de Arton — Mapa Central (MOC)

Bem-vindo ao cofre relacional de **Tormenta 20 (Edição Jogo do Ano)** e **Deuses de Arton**. Esta base ontológica integra a mecânica determinística canônica, poderes concedidos expandidos, aprimoramentos de devoção exclusiva, dogmas litúrgicos, avatares divinos, itens sagrados e regras operacionais em uma rede semântica fechada e navegável.

---

## ⚡ Navegação Rápida do Cofre

| Seção | Descrição | Total de Registros |
| :--- | :--- | :--- |
| 🏛️ **[[#Os 20 Deuses Maiores|Deuses de Arton]]** | As 20 divindades maiores do Panteão com lore, dogmas e avatares | 20 divindades |
| ⚔️ **[[_Índice Geral de Poderes|Índice Geral de Poderes]]** | Concedidos, Combate, Destino, Magia e Tormenta | 237 poderes |
| 📜 **[[_Índice Geral de Magias|Índice Geral de Magias]]** | Magias do 1º ao 5º Círculo e aprimoramentos exclusivos | 228 magias |
| 🛡️ **Equipamentos / Armas** | Armas canônicas referenciadas nas armas preferidas dos deuses | 42 armas |
| 📿 **Itens Sagrados** | Textos sagrados, patuás, panfletos, cilícios e paramentos | 24 itens |
| 👑 **Artefatos Divinos** | Relíquias lendárias e armas divinas do Panteão | 12 artefatos |
| ⚖️ **Mecânicas e Condições** | Condições canônicas, perícias e regras de combate estruturadas | 76 notas-pivô |

---

## 🏛️ Os 20 Deuses Maiores

O Panteão de Arton é composto por vinte divindades supremas que moldam as forças cósmicas, os destinos dos mortais e as leis da realidade.

```dataview
TABLE 
  titulo AS "Título",
  energia AS "Energia",
  arma_preferida AS "Arma Preferida",
  avatar_nd AS "ND Avatar"
FROM "Deuses"
WHERE tipo = "divindade"
SORT file.name ASC
```

---

### ☀️ Divindades de Energia Positiva
Deuses cuja bênção canaliza a energia da criação, cura, honra, vida e harmonia.

```dataview
TABLE 
  titulo AS "Título",
  arma_preferida AS "Arma Preferida",
  dogma AS "Dogma Central"
FROM "Deuses"
WHERE tipo = "divindade" AND energia = "Positiva"
SORT file.name ASC
```

---

### 🌑 Divindades de Energia Negativa
Deuses cujos devotos canalizam destruição, morte, sombras, ferocidade e corrupção lefeu.

```dataview
TABLE 
  titulo AS "Título",
  arma_preferida AS "Arma Preferida",
  dogma AS "Dogma Central"
FROM "Deuses"
WHERE tipo = "divindade" AND energia = "Negativa"
SORT file.name ASC
```

---

### ⚖️ Divindades de Energia Variável / Ambas
Deuses neutros ou multifacetados onde o devoto escolhe a polaridade de sua canalização divina.

```dataview
TABLE 
  titulo AS "Título",
  arma_preferida AS "Arma Preferida",
  dogma AS "Dogma Central"
FROM "Deuses"
WHERE tipo = "divindade" AND (energia = "Qualquer" OR energia = "Positiva ou Negativa")
SORT file.name ASC
```

---

## 📊 Estatísticas e Integridade Ontológica

- **Grafo Semântico Fechado:** Zero links órfãos. Todas as referências a perícias, condições, regras de combate, armas preferidas e deuses estão mapeadas em notas físicas existentes.
- **Camada Visual T20:** Snippet `tormenta20.css` ativado com callouts temáticos (`[!t20-stats]`, `[!t20-magia]`, `[!t20-pm]`, `[!t20-poder]`, `[!t20-restricao]`, `[!t20-item]`, `[!t20-lore]`).
- **Consultas Dinâmicas:** Suporte nativo ao plugin Obsidian Dataview para filtragem e agregações em tempo real.
- **Histórico e Metodologia:** Consulte [[historico_de_alteracoes|Histórico de Alterações e Arquitetura]] para detalhes sobre o pipeline de extração e curadoria.
