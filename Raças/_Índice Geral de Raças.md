---
tipo: moc
sistema: tormenta20-jda
nome: "Índice Geral de Raças"
---

# 🧬 Catálogo & Índice Geral de Raças — Tormenta 20

Bem-vindo ao guia e índice de todas as 23 raças de Arton, suas características anatômicas, bônus de atributo, deslocamento e habilidades inatas.

---

## 📊 Tabela Geral de Raças

```dataview
TABLE WITHOUT ID
  file.link AS "Raça",
  default(tipo_criatura, "Humanoide") AS "Tipo",
  default(tamanho, "Médio") AS "Tamanho",
  default(deslocamento, "9m (6q)") AS "Deslocamento",
  default(categoria_racial, "—") AS "Categoria",
  default(atributos, "—") AS "Modificadores de Atributo",
  join(default(divindades_relacionadas, []), ", ") AS "Divindades Relacionadas"
FROM "Raças" AND -"Templates"
WHERE tipo = "raca" AND file.name != "_Índice Geral de Raças"
SORT file.name ASC
```

---

## ⚡ Habilidades Raciais por Raça

```dataview
TABLE WITHOUT ID
  join(default(raca, []), ", ") AS "Raça",
  file.link AS "Habilidade",
  default(resumo, "—") AS "Efeito Resumido"
FROM "Habilidades/Raciais" AND -"Templates"
WHERE tipo = "habilidade" AND subtipo = "habilidade-racial"
SORT file.name ASC
```
