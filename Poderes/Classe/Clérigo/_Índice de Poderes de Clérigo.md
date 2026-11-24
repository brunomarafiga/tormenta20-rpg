---
tipo: indice
sistema: tormenta20-jda
nome: "Índice de Poderes de Clérigo"
---

# ☀️ Índice de Poderes de Clérigo

Catálogo completo dos 38 poderes de classe de [[Clérigo]] (Livro Básico JDA e *Heróis de Arton*), organizados por suas 6 trilhas e vinculados às magias do sistema.

---

## 🕊️ Missas & Rituais Coletivos
```dataview
TABLE resumo AS "Efeito", requer_nivel AS "Nível", join(magias_relacionadas, ", ") AS "Magias"
FROM "Poderes/Classe/Clérigo" OR "Poderes/Classe/Comuns"
WHERE trilha_poder = "Missas"
SORT default(ordem, 999) ASC, default(requer_nivel, 1) ASC, file.name ASC
```

---

## ⚡ Canalização de Energia Divina
```dataview
TABLE resumo AS "Efeito", requer_nivel AS "Nível", join(magias_relacionadas, ", ") AS "Magias"
FROM "Poderes/Classe/Clérigo" OR "Poderes/Classe/Comuns"
WHERE trilha_poder = "Canalização"
SORT default(ordem, 999) ASC, default(requer_nivel, 1) ASC, file.name ASC
```

---

## ⚔️ Prece de Combate & Linha Marcial
```dataview
TABLE resumo AS "Efeito", requer_nivel AS "Nível", join(magias_relacionadas, ", ") AS "Magias"
FROM "Poderes/Classe/Clérigo" OR "Poderes/Classe/Comuns"
WHERE trilha_poder = "Prece de Combate"
SORT default(ordem, 999) ASC, default(requer_nivel, 1) ASC, file.name ASC
```

---

## 🏛️ Poderes Gerais & Sacerdócio
```dataview
TABLE resumo AS "Efeito", default(requer_nivel, "—") AS "Nível", join(default(magias_relacionadas, []), ", ") AS "Magias"
FROM "Poderes/Classe/Clérigo" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder" AND (!trilha_poder OR trilha_poder = "Geral") AND (!classes OR contains(classes, link("Clérigo")))
SORT default(ordem, 999) ASC, default(requer_nivel, 1) ASC, file.name ASC
```

---

## 📜 Liturgia Mágica & Oração
```dataview
TABLE resumo AS "Efeito", requer_nivel AS "Nível", join(magias_relacionadas, ", ") AS "Magias"
FROM "Poderes/Classe/Clérigo" OR "Poderes/Classe/Comuns"
WHERE trilha_poder = "Liturgia & Oração"
SORT default(ordem, 999) ASC, default(requer_nivel, 1) ASC, file.name ASC
```
