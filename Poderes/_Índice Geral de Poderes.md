---
tipo: moc
sistema: tormenta20-jda
fonte: "Tormenta20 JdA / Deuses de Arton"
nome: "Índice Geral de Poderes"
tags:
  - moc
  - poderes
  - t20
---

# ⚔️ Índice Geral de Poderes de Arton

Este índice reúne todos os poderes de Tormenta 20 (Edição Jogo do Ano) e da expansão *Deuses de Arton*, abrangendo poderes concedidos, poderes gerais (combate, destino, magia, tormenta), poderes de classe de todas as 15 classes e poderes de origem.

---

## 📂 Categorias de Poderes

| Categoria                   | Descrição               |                              Total                              | Pasta |               |
| :-------------------------- | :---------------------- | :-------------------------------------------------------------: | :---- | ------------- |
| 🛡️ **[[#Poderes de Classe  | Poderes de Classe]]**   |        Talentos exclusivos das 15 classes de personagens        | 325   | `Classe/`     |
| 🙏 **[[#Poderes Concedidos  | Poderes Concedidos]]**  |      Dons e bênçãos concedidos pelas 20 Divindades Maiores      | 147   | `Concedidos/` |
| ⚔️ **[[#Poderes de Combate  | Poderes de Combate]]**  |    Habilidades marciais, posturas, golpes e manobras táticas    | 40    | `Combate/`    |
| 📜 **[[#Poderes de Origem   | Poderes de Origem]]**   |    Habilidades adquiridas pelo histórico e passado do herói     | 35    | `Origem/`     |
| 🎲 **[[#Poderes de Destino  | Poderes de Destino]]**  |     Talentos de sobrevivência, perícias, liderança e sorte      | 20    | `Destino/`    |
| 🔮 **[[#Poderes de Magia    | Poderes de Magia]]**    |      Metamagia, foco místico e aprimoramento de conjuração      | 8     | `Magia/`      |
| 🐙 **[[#Poderes da Tormenta | Poderes da Tormenta]]** | Mutações aberrantes e poderes alimentados pela Tempestade Rubra | 22    | `Tormenta/`   |
| 🧬 **[[#Poderes de Raça     | Poderes de Raça]]**     | Talentos e aprimoramentos vinculados à linhagem (*Heróis de Arton*) | 77    | `Raça/`       |

---

## 🛡️ Poderes de Classe

Poderes selecionáveis a partir do 2º nível para cada uma das classes de Arton:

```dataview
TABLE 
  classe AS "Classe",
  join(default(requer_poder, []), ", ") AS "Pré-requisitos",
  default(requer_nivel, "—") AS "Nível Mín.",
  resumo AS "Resumo Mecânico"
FROM "Poderes/Classe"
WHERE tipo = "poder"
SORT classe ASC, file.name ASC
```

---

## 🙏 Poderes Concedidos

Poderes divinos obtidos através da devoção a uma divindade do Panteão de Arton (T20 JdA e expansão *Deuses de Arton*).

```dataview
TABLE 
  deuses AS "Divindades",
  fonte AS "Fonte",
  resumo AS "Resumo Mecânico"
FROM "Poderes/Concedidos"
WHERE tipo = "poder"
SORT file.name ASC
```

---

## 📜 Poderes de Origem

Poderes obtidos pela escolha da Origem do personagem durante a criação da ficha.

```dataview
TABLE 
  fonte AS "Fonte",
  resumo AS "Resumo Mecânico"
FROM "Poderes/Origem"
WHERE tipo = "poder"
SORT file.name ASC
```

---

## ⚔️ Poderes de Combate

Poderes gerais voltados a treinamento marcial, manobras, armaduras e armas.

```dataview
TABLE 
  requer_poder AS "Requer Poder",
  requer_pericia AS "Requer Perícia",
  subcategoria_tatica AS "Função",
  area_efeito AS "Área",
  resumo AS "Resumo Mecânico"
FROM "Poderes/Combate"
WHERE tipo = "poder"
SORT file.name ASC
```

---

## 🎲 Poderes de Destino

Poderes gerais de utilidade, deslocamento, perícias e sorte.

```dataview
TABLE 
  requer_pericia AS "Requer Perícia",
  subcategoria_tatica AS "Função",
  area_efeito AS "Área",
  resumo AS "Resumo Mecânico"
FROM "Poderes/Destino"
WHERE tipo = "poder"
SORT file.name ASC
```

---

## 🔮 Poderes de Magia

Poderes gerais para conjuradores arcanos e divinos (metamagia e foco).

```dataview
TABLE 
  requer_poder AS "Requer Poder",
  requer_pericia AS "Requer Perícia",
  subcategoria_tatica AS "Função",
  area_efeito AS "Área",
  resumo AS "Resumo Mecânico"
FROM "Poderes/Magia"
WHERE tipo = "poder"
SORT file.name ASC
```

---

## 🐙 Poderes da Tormenta

Poderes concedidos pela matéria lefeu da Anticriação. Cada poder da Tormenta penaliza o Carisma do personagem.

```dataview
TABLE 
  requer_poder AS "Requer Poder da Tormenta",
  subcategoria_tatica AS "Função",
  escala_por_poderes_tormenta AS "Escala Rubra",
  resumo AS "Resumo Mecânico"
FROM "Poderes/Tormenta"
WHERE tipo = "poder"
SORT file.name ASC
```

---

## 🧬 Poderes de Raça

Poderes gerais selecionáveis por personagens que atendam aos requisitos de raça ou anatomia (*Heróis de Arton*).

```dataview
TABLE 
  join(default(requer_raca, []), ", ") AS "Raças Exigidas",
  join(default(requer_poder, []), ", ") AS "Pré-requisitos",
  subcategoria_tatica AS "Função",
  resumo AS "Resumo Mecânico"
FROM "Poderes/Raça"
WHERE tipo = "poder"
SORT file.name ASC
```
