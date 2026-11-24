---
tipo: moc
sistema: tormenta20-jda
fonte: "Tormenta20 JdA / Deuses de Arton / Dragão Brasil 199"
nome: "Índice Geral de Magias"
tags:
  - moc
  - magias
  - t20
---

# 📜 Índice Geral de Magias de Arton

Este índice reúne todas as **228 magias** canônicas de Tormenta 20 (Edição Jogo do Ano) e suplementos oficiais (*Deuses de Arton* e *Dragão Brasil 199*), divididas estruturalmente por suas tradições mágicas canônicas (**Arcana**, **Divina** e **Universal**) e organizadas por Círculos de poder (1º ao 5º Círculo).

> [!t20-stats]
> - 🔮 <span class="t20-ciano">Arcanas:</span> 95 magias *(1º ao 5º Círculo)*
> - ☀️ <span class="t20-amarelo">Divinas:</span> 101 magias *(1º ao 5º Círculo)*
> - 🌌 <span class="t20-roxo">Universais:</span> 32 magias *(1º ao 5º Círculo)*
> - ⚡ <span class="t20-laranja">Exclusivas de Devoção:</span> Aprimoramentos de Deuses de Arton

---

## 🧭 Navegação Rápida

| Tradição | 1º Círculo (1 PM) | 2º Círculo (3 PM) | 3º Círculo (6 PM) | 4º Círculo (10 PM) | 5º Círculo (15 PM) | Total |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| 🔮 **[[#🔮 Magias Arcanas\|Arcanas]]** | 24 | 24 | 17 | 16 | 14 | **95** |
| ☀️ **[[#☀️ Magias Divinas\|Divinas]]** | 45 | 24 | 16 | 10 | 6 | **101** |
| 🌌 **[[#🌌 Magias Universais\|Universais]]** | 10 | 5 | 7 | 4 | 6 | **32** |
| **Total Geral** | **79** | **53** | **40** | **30** | **26** | **228** |

---

# 🔮 Magias Arcanas
*Conjuradas por Arcanistas (Bruxos, Feiticeiros, Magos), Bardos e devotos dotados de poderes arcanos.*

### 📖 1º Círculo Arcano (1 PM)
```dataview
TABLE 
  escola AS "Escola",
  execucao AS "Execução",
  alcance AS "Alcance",
  resistencia AS "Resistência"
FROM "Magias/Arcanas/1º Círculo"
WHERE tipo = "magia"
SORT file.name ASC
```

### 📖 2º Círculo Arcano (3 PM)
```dataview
TABLE 
  escola AS "Escola",
  execucao AS "Execução",
  alcance AS "Alcance",
  resistencia AS "Resistência"
FROM "Magias/Arcanas/2º Círculo"
WHERE tipo = "magia"
SORT file.name ASC
```

### 📖 3º Círculo Arcano (6 PM)
```dataview
TABLE 
  escola AS "Escola",
  execucao AS "Execução",
  alcance AS "Alcance",
  resistencia AS "Resistência"
FROM "Magias/Arcanas/3º Círculo"
WHERE tipo = "magia"
SORT file.name ASC
```

### 📖 4º Círculo Arcano (10 PM)
```dataview
TABLE 
  escola AS "Escola",
  execucao AS "Execução",
  alcance AS "Alcance",
  resistencia AS "Resistência"
FROM "Magias/Arcanas/4º Círculo"
WHERE tipo = "magia"
SORT file.name ASC
```

### 📖 5º Círculo Arcano (15 PM)
```dataview
TABLE 
  escola AS "Escola",
  execucao AS "Execução",
  alcance AS "Alcance",
  resistencia AS "Resistência"
FROM "Magias/Arcanas/5º Círculo"
WHERE tipo = "magia"
SORT file.name ASC
```

---

# ☀️ Magias Divinas
*Canalizadas por Clérigos, Druidas, Paladinos e devotos dos Deuses do Panteão.*

### 📖 1º Círculo Divino (1 PM)
```dataview
TABLE 
  escola AS "Escola",
  execucao AS "Execução",
  alcance AS "Alcance",
  resistencia AS "Resistência"
FROM "Magias/Divinas/1º Círculo"
WHERE tipo = "magia"
SORT file.name ASC
```

### 📖 2º Círculo Divino (3 PM)
```dataview
TABLE 
  escola AS "Escola",
  execucao AS "Execução",
  alcance AS "Alcance",
  resistencia AS "Resistência"
FROM "Magias/Divinas/2º Círculo"
WHERE tipo = "magia"
SORT file.name ASC
```

### 📖 3º Círculo Divino (6 PM)
```dataview
TABLE 
  escola AS "Escola",
  execucao AS "Execução",
  alcance AS "Alcance",
  resistencia AS "Resistência"
FROM "Magias/Divinas/3º Círculo"
WHERE tipo = "magia"
SORT file.name ASC
```

### 📖 4º Círculo Divino (10 PM)
```dataview
TABLE 
  escola AS "Escola",
  execucao AS "Execução",
  alcance AS "Alcance",
  resistencia AS "Resistência"
FROM "Magias/Divinas/4º Círculo"
WHERE tipo = "magia"
SORT file.name ASC
```

### 📖 5º Círculo Divino (15 PM)
```dataview
TABLE 
  escola AS "Escola",
  execucao AS "Execução",
  alcance AS "Alcance",
  resistencia AS "Resistência"
FROM "Magias/Divinas/5º Círculo"
WHERE tipo = "magia"
SORT file.name ASC
```

---

# 🌌 Magias Universais
*Magias compartilhadas que podem ser aprendidas e lançadas tanto por conjuradores arcanos quanto por conjuradores divinos.*

### 📖 1º Círculo Universal (1 PM)
```dataview
TABLE 
  escola AS "Escola",
  execucao AS "Execução",
  alcance AS "Alcance",
  resistencia AS "Resistência"
FROM "Magias/Universais/1º Círculo"
WHERE tipo = "magia"
SORT file.name ASC
```

### 📖 2º Círculo Universal (3 PM)
```dataview
TABLE 
  escola AS "Escola",
  execucao AS "Execução",
  alcance AS "Alcance",
  resistencia AS "Resistência"
FROM "Magias/Universais/2º Círculo"
WHERE tipo = "magia"
SORT file.name ASC
```

### 📖 3º Círculo Universal (6 PM)
```dataview
TABLE 
  escola AS "Escola",
  execucao AS "Execução",
  alcance AS "Alcance",
  resistencia AS "Resistência"
FROM "Magias/Universais/3º Círculo"
WHERE tipo = "magia"
SORT file.name ASC
```

### 📖 4º Círculo Universal (10 PM)
```dataview
TABLE 
  escola AS "Escola",
  execucao AS "Execução",
  alcance AS "Alcance",
  resistencia AS "Resistência"
FROM "Magias/Universais/4º Círculo"
WHERE tipo = "magia"
SORT file.name ASC
```

### 📖 5º Círculo Universal (15 PM)
```dataview
TABLE 
  escola AS "Escola",
  execucao AS "Execução",
  alcance AS "Alcance",
  resistencia AS "Resistência"
FROM "Magias/Universais/5º Círculo"
WHERE tipo = "magia"
SORT file.name ASC
```
