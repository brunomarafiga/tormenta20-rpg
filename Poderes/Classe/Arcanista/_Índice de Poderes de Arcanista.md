---
tipo: indice
sistema: tormenta20-jda
nome: "Índice de Poderes de Arcanista"
---

# 🔮 Índice de Poderes de Arcanista

Catálogo completo dos 42 poderes de classe de [[Arcanista]] (Livro Básico JDA e *Heróis de Arton*), organizados por caminhos exclusivos e trilhas mágicas.

---

## 🔮 Caminho do Bruxo (Foco & Caldeirão)
```dataview
TABLE resumo AS "Efeito", requer_nivel AS "Nível", join(magias_relacionadas, ", ") AS "Magias"
FROM "Poderes/Classe/Arcanista" OR "Poderes/Classe/Comuns"
WHERE caminho_exclusivo = "Bruxo"
SORT default(ordem, 999) ASC, default(requer_nivel, 1) ASC, file.name ASC
```

---

## 📜 Caminho do Mago (Grimório & Especialização)
```dataview
TABLE resumo AS "Efeito", requer_nivel AS "Nível", join(magias_relacionadas, ", ") AS "Magias"
FROM "Poderes/Classe/Arcanista" OR "Poderes/Classe/Comuns"
WHERE caminho_exclusivo = "Mago" OR caminho_exclusivo = "Mago / Bruxo"
SORT default(ordem, 999) ASC, default(requer_nivel, 1) ASC, file.name ASC
```

---

## 🔥 Caminho do Feiticeiro (Linhagens & Apoteoses)
```dataview
TABLE resumo AS "Efeito", requer_nivel AS "Nível", join(magias_relacionadas, ", ") AS "Magias"
FROM "Poderes/Classe/Arcanista" OR "Poderes/Classe/Comuns"
WHERE caminho_exclusivo = "Feiticeiro"
SORT default(ordem, 999) ASC, default(requer_nivel, 1) ASC, file.name ASC
```

---

## 💀 Trilha do Necromante & Não-Vida
```dataview
TABLE resumo AS "Efeito", requer_nivel AS "Nível", join(magias_relacionadas, ", ") AS "Magias"
FROM "Poderes/Classe/Arcanista" OR "Poderes/Classe/Comuns"
WHERE caminho_exclusivo = "Necromante"
SORT default(ordem, 999) ASC, default(requer_nivel, 1) ASC, file.name ASC
```

---

## ⚡ Trilha do Raio Arcano
```dataview
TABLE resumo AS "Efeito", requer_nivel AS "Nível", join(default(requer_poder, []), ", ") AS "Pré-requisitos"
FROM "Poderes/Classe/Arcanista" OR "Poderes/Classe/Comuns"
WHERE trilha_poder = "Raio Arcano"
SORT default(ordem, 999) ASC, default(requer_nivel, 1) ASC, file.name ASC
```

---

## 🌌 Metamagia & Teurgia Geral (Acessível a Todos)
```dataview
TABLE resumo AS "Efeito", requer_nivel AS "Nível", join(magias_relacionadas, ", ") AS "Magias"
FROM "Poderes/Classe/Arcanista" OR "Poderes/Classe/Comuns"
WHERE trilha_poder = "Metamagia & Geral"
SORT default(ordem, 999) ASC, default(requer_nivel, 1) ASC, file.name ASC
```
