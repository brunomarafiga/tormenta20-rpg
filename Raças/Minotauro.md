---
tipo: "raca"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Minotauro"
tipo_criatura: "Humanoide"
tamanho: "Médio"
deslocamento: "9m (6q)"
atributos: "+2 Força, +1 Constituição, -1 Sabedoria"
habilidades_base:
  - "[[Chifres]]"
  - "[[Couro Rígido]]"
  - "[[Faro]]"
  - "[[Medo de Altura]]"
categoria_racial: "comum"
sentidos: "Faro"
classes_relacionadas:
  - "[[Guerreiro]]"
  - "[[Bárbaro]]"
  - "[[Cavaleiro]]"
divindades_relacionadas:
  - "[[Aharadak]]"
  - "[[Arsenal]]"
  - "[[Megalokk]]"
  - "[[Oceano]]"
  - "[[Thwor]]"
tecnologias_itens:
  - "[[Machado Táurico]]"
---
# 🧬 Minotauro
*Humanoide • Tamanho Médio • Tormenta20 JdA*

> [!t20-stats]
> - 📊 <span class="t20-roxo">Atributos:</span> +2 Força, +1 Constituição, -1 Sabedoria
> - 📏 <span class="t20-amarelo">Tamanho:</span> Médio
> - 🏃 <span class="t20-verde">Deslocamento:</span> 9m (6q)
> - 🧬 <span class="t20-ciano">Tipo:</span> Humanoide
> - 👁️ <span class="t20-laranja">Sentidos:</span> Faro

Povo altivo e disciplinado das repúblicas de Tapista, guiado pelo culto à força, honra cívica e respeito hierárquico.

> [!t20-lore]- Origem, Ecologia e Cultura
> Povo altivo e disciplinado das repúblicas de Tapista, guiado pelo culto à força, honra cívica e respeito hierárquico.

> [!t20-restricao] Restrições & Vulnerabilidades Raciais
> - **Restrição:** Medo de Altura: fica abalado se estiver adjacente a uma queda de 3m ou mais de altura.

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

### [[Chifres|Chifres]]
Você possui uma arma natural de chifres (dano 1d6, crítico x2, perfuração). Quando usa a ação atacar, pode gastar 1 PM para fazer um ataque corpo a corpo extra com os chifres.

### [[Couro Rígido|Couro Rígido]]
Sua pele é dura como a de um touro. Você recebe +1 na Defesa.

### [[Faro|Faro]]
Você tem olfato apurado. Você não fica desprevenido e sofre apenas camuflagem (em vez de camuflagem total) contra inimigos em alcance curto que não possa ver.

### [[Medo de Altura|Medo de Altura]]
Se estiver adjacente a uma queda de 3m ou mais de altura (como um buraco ou penhasco), você fica abalado.

---

## ✨ Poderes & Magias Fornecidos (Base / Inatos)

*Esta raça não concede magias inatas adicionais ou poderes gerais automáticos no 1º nível além de suas habilidades básicas.*

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

### ⚙️ Tecnologias, Armas & Equipamentos Culturais
```dataview
TABLE WITHOUT ID
  file.link AS "Item / Tecnologia",
  default(subtipo, default(categoria, "—")) AS "Categoria",
  "T$ " + default(preco_ts, "—") AS "Preço",
  default(espacos, "—") AS "Espaços"
FROM "Itens" AND -"Templates"
WHERE tipo = "item" AND contains(default(this.tecnologias_itens, []), file.link)
SORT file.name ASC
```

