---
tipo: "raca"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Suraggel (Sulfure)"
tipo_criatura: "Espírito"
tamanho: "Médio"
deslocamento: "9m (6q)"
atributos: "+2 Destreza, +1 Inteligência"
habilidades_base:
  - "[[Herança Divina (Sulfure)]]"
  - "[[Sombras Profanas]]"
categoria_racial: "planar"
sentidos: "Visão no Escuro"
classes_relacionadas:
  - "[[Ladino]]"
  - "[[Bucaneiro]]"
  - "[[Arcanista]]"
divindades_relacionadas:
  - "[[Aharadak]]"
  - "[[Kallyadranoch]]"
  - "[[Tenebra]]"
raca_base: "[[Suraggel]]"
magias_fornecidas:
  - "[[Escuridão]]"
---
# 🧬 Suraggel (Sulfure)
*Espírito • Tamanho Médio • Tormenta20 JdA*

> [!t20-stats]
> - 📊 <span class="t20-roxo">Atributos:</span> +2 Destreza, +1 Inteligência
> - 📏 <span class="t20-amarelo">Tamanho:</span> Médio
> - 🏃 <span class="t20-verde">Deslocamento:</span> 9m (6q)
> - 🧬 <span class="t20-ciano">Tipo:</span> Espírito
> - 👁️ <span class="t20-laranja">Sentidos:</span> Visão no Escuro

Mestiços abissais marcados pela essência de reinos sombrios, dotados de astúcia furtiva, chifres delgados e afinidade com trevas.

> [!t20-lore]- Origem, Ecologia e Cultura
> Mestiços abissais marcados pela essência de reinos sombrios, dotados de astúcia furtiva, chifres delgados e afinidade com trevas.

---

## ⚡ Habilidades Raciais Base (Inatas)

```dataview
TABLE WITHOUT ID
  file.link AS "Habilidade Base",
  default(ativacao, "Passiva") AS "Ativação",
  default(custo_pm, 0) + " PM" AS "Custo",
  default(resumo, "—") AS "Efeito Resumido"
FROM "Habilidades/Raciais" AND -"Templates"
WHERE contains(default(this.habilidades_base, []), file.link)
   OR contains(default(racas, []), this.file.link)
   OR contains(default(raca, []), this.file.link)
SORT file.name ASC
```

---

## 📖 Descrição das Habilidades

### [[Herança Divina (Sulfure)|Herança Divina]]
Você é uma criatura do tipo espírito e recebe visão no escuro.

### [[Sombras Profanas|Sombras Profanas]]
Você recebe +2 em Enganação e Furtividade. Além disso, pode lançar Escuridão (como uma magia divina; atributo-chave Inteligência). Caso aprenda novamente essa magia, o custo para lançá-la diminui em –1 PM.

---

## ✨ Poderes & Magias Fornecidos (Base / Inatos)

### 🔮 Magias Concedidas pela Raça
```dataview
TABLE WITHOUT ID
  file.link AS "Magia",
  circulo + "º" AS "Círculo",
  escola AS "Escola",
  tradicao AS "Tradição",
  default(execucao, "—") AS "Execução"
FROM "Magias" AND -"Templates"
WHERE tipo = "magia" AND contains(default(this.magias_fornecidas, []), file.link)
SORT circulo ASC, file.name ASC
```

---

## 🌳 Poderes Raciais Futuros (Progressão)
*Poderes exclusivos ou com pré-requisito desta raça (ex.: poderes raciais de Heróis de Arton, poderes de classe ou poderes gerais que podem ser adquiridos em níveis futuros).*

```dataview
TABLE WITHOUT ID
  file.link AS "Poder",
  default(categoria, default(subtipo, "—")) AS "Categoria",
  join(default(requer_poder, []), ", ") AS "Pré-requisitos",
  default(requer_nivel, "—") AS "Nível Mín.",
  default(resumo, "—") AS "Efeito Resumido"
FROM "Poderes" AND -"Templates"
WHERE tipo = "poder"
  AND (
    contains(default(requer_raca, []), this.file.link)
    OR contains(default(requer_raca, []), this.raca_base)
    OR contains(default(racas, []), this.file.link)
    OR (exclui_raca AND !contains(exclui_raca, this.file.link))
  )
SORT default(ordem, 999) ASC, default(requer_nivel, 1) ASC, file.name ASC
```

---

## 🔗 Classes, Divindades e Tecnologias Relacionadas

### 🛡️ Classes Relacionadas (Sinergia, Poderes & Magias)
*Acesse a nota de cada classe para consultar sua árvore completa de poderes de classe e progressão de magias.*

```dataview
TABLE WITHOUT ID
  file.link AS "Classe",
  default(subtipo, "classe-base") AS "Tipo",
  default(atributo_chave, "—") AS "Atributo-Chave",
  default(fonte, "—") AS "Fonte"
FROM "Classes" AND -"Templates"
WHERE tipo = "classe"
  AND (contains(default(this.classes_relacionadas, []), file.link) OR contains(default(racas_exclusivas, []), this.file.link))
SORT file.name ASC
```

### 🏛️ Divindades & Devoções
```dataview
TABLE WITHOUT ID
  file.link AS "Divindade",
  default(titulo, "—") AS "Título",
  default(energia, "—") AS "Energia",
  default(arma_preferida, "—") AS "Arma Preferida"
FROM "Deuses" AND -"Templates"
WHERE tipo = "divindade" AND contains(default(this.divindades_relacionadas, []), file.link)
SORT file.name ASC
```

