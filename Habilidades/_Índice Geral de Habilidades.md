---
tipo: indice
sistema: tormenta20-jda
nome: "Índice Geral de Habilidades de Tormenta 20"
---

# ⚡ Índice Geral de Habilidades de Tormenta 20

Catálogo completo e unificado de todas as habilidades raciais, de classe e caminhos arcanos.

---

## 🧬 Habilidades Raciais

```dataview
TABLE raca AS "Raça", resumo AS "Resumo do Efeito"
FROM "Habilidades/Raciais"
WHERE tipo = "habilidade"
SORT raca ASC, file.name ASC
```

---

## 🛡️ Habilidades de Classe & Classes Variantes

```dataview
TABLE classe AS "Classe / Variante", nivel AS "Nível Mín.", resumo AS "Efeito Resumido"
FROM "Habilidades/Classes"
WHERE tipo = "habilidade"
SORT classe ASC, nivel ASC, file.name ASC
```
