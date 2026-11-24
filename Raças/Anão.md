---
tipo: "raca"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Anão"
tipo_criatura: "Humanoide"
tamanho: "Médio"
deslocamento: "6m (4q)"
atributos: "+2 Constituição, +1 Sabedoria, -1 Destreza"
habilidades_base:
  - "[[Conhecimento das Rochas]]"
  - "[[Devagar e Sempre]]"
  - "[[Tradição de Heredrimm]]"
  - "[[Duro como Pedra]]"
categoria_racial: "comum"
sentidos: "Visão no Escuro"
classes_relacionadas:
  - "[[Guerreiro]]"
  - "[[Clérigo]]"
divindades_relacionadas:
  - "[[Aharadak]]"
  - "[[Arsenal]]"
  - "[[Khalmyr]]"
  - "[[Lin-Wu]]"
  - "[[Thwor]]"
  - "[[Tenebra]]"
tecnologias_itens:
  - "[[Machado Anão]]"
---
# 🧬 Anão
*Humanoide • Tamanho Médio • Tormenta20 JdA*

> [!t20-stats]
> - 📊 <span class="t20-roxo">Atributos:</span> +2 Constituição, +1 Sabedoria, -1 Destreza
> - 📏 <span class="t20-amarelo">Tamanho:</span> Médio
> - 🏃 <span class="t20-verde">Deslocamento:</span> 6m (4q)
> - 🧬 <span class="t20-ciano">Tipo:</span> Humanoide
> - 👁️ <span class="t20-laranja">Sentidos:</span> Visão no Escuro

Mestres da pedra, forja e combate pesado do subterrâneo do reino de Doherimm, célebres por sua tenacidade e lealdade.

> [!t20-lore]- Origem, Ecologia e Cultura
> Mestres da pedra, forja e combate pesado do subterrâneo do reino de Doherimm, célebres por sua tenacidade e lealdade.

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

### [[Conhecimento das Rochas|Conhecimento das Rochas]]
Você recebe visão no escuro e +2 em testes de Percepção e Sobrevivência realizados no subterrâneo.

### [[Devagar e Sempre|Devagar e Sempre]]
Seu deslocamento é 6m (em vez de 9m). Porém, seu deslocamento não é reduzido por uso de armadura ou excesso de carga.

### [[Tradição de Heredrimm|Tradição de Heredrimm]]
Você é perito nas armas tradicionais anãs, seja por ter treinado com elas, seja por usá-las como ferramentas de ofício. Para você, todos os machados, martelos, marretas e picaretas são armas simples. Você recebe +2 em ataques com essas armas.

### [[Duro como Pedra|Duro como Pedra]]
Você recebe +3 pontos de vida no 1º nível e +1 por nível seguinte.

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

