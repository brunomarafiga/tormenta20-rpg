---
tipo: indice
sistema: tormenta20-jda
nome: "Índice Geral de Classes de Tormenta 20"
---

# 🛡️ Catálogo Canônico de Classes de Tormenta 20

Bem-vindo ao catálogo central de classes de Tormenta 20 (Livro Básico JDA, *Heróis de Arton*, *Deuses de Arton* e *Dragão Brasil 199*).

---

## 👑 1. Classes Básicas Oficiais (16 Classes)

Classes completas que definem a espinha dorsal dos aventureiros de Arton:

```dataview
TABLE
  pv_inicial + " (+" + pv_por_nivel + ")" AS "PV",
  pm_inicial + " (+" + pm_por_nivel + ")" AS "PM",
  join(proficiencias, ", ") AS "Proficiências",
  fonte AS "Fonte Oficial"
FROM "Classes"
WHERE tipo = "classe" AND (subtipo = null OR subtipo != "classe-variante") AND fonte != "Dragão Brasil 199"
SORT file.name ASC
```

---

## 🔀 2. Classes Variantes Oficiais (*Heróis de Arton*)

Modificações especializadas que substituem ou reconfiguram o kit de 1º nível da classe base, mantendo acesso à árvore de poderes da classe original (sem permitir multiclasse entre a base e a sua variante):

```dataview
TABLE
  classe_base AS "Classe Base",
  pv_inicial + " (+" + pv_por_nivel + ")" AS "PV",
  pm_inicial + " (+" + pm_por_nivel + ")" AS "PM",
  join(pericias_basicas, ", ") AS "Perícias Básicas",
  fonte AS "Fonte"
FROM "Classes"
WHERE tipo = "classe" AND subtipo = "classe-variante"
SORT classe_base ASC, file.name ASC
```

---

## 🏜️ 3. Classes de *Dragão Brasil 199* (*Aventureiros Além do Reinado*)

Classes completas e originais de regiões e povos icônicos de Arton:

```dataview
TABLE
  pv_inicial + " (+" + pv_por_nivel + ")" AS "PV",
  pm_inicial + " (+" + pm_por_nivel + ")" AS "PM",
  join(pericias_basicas, ", ") AS "Perícias Básicas",
  join(proficiencias, ", ") AS "Proficiências"
FROM "Classes"
WHERE tipo = "classe" AND fonte = "Dragão Brasil 199"
SORT file.name ASC
```
