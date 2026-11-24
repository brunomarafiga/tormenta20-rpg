---
tipo: "raca"
sistema: "tormenta20-jda"
fonte: "Heróis de Arton"
nome: "Sátiro"
tipo_criatura: "Espírito"
tamanho: "Médio"
deslocamento: "12m (8q)"
atributos: "+2 Carisma, +1 Destreza, -1 Sabedoria"
habilidades_base:
  - "[[Festeiro Feérico]]"
  - "[[Instrumentista Mágico]]"
  - "[[Marrada]]"
  - "[[Pernas Caprinas]]"
categoria_racial: "suplementar"
sentidos: "Visão na Penumbra"
classes_relacionadas:
  - "[[Caçador]]"
  - "[[Ladino]]"
  - "[[Clérigo]]"
  - "[[Inventor]]"
  - "[[Paladino]]"
  - "[[Nobre]]"
divindades_relacionadas:
  - "[[Allihanna]]"
  - "[[Hyninn]]"
  - "[[Marah]]"
  - "[[Nimb]]"
  - "[[Wynna]]"
tecnologias_itens:
  - "[[Instrumento musical]]"
magias_fornecidas:
  - "[[Amedrontar]]"
  - "[[Enfeitiçar]]"
  - "[[Hipnotismo]]"
  - "[[Sono]]"
---
# 🧬 Sátiro
*Espírito • Tamanho Médio • Heróis de Arton*

> [!t20-stats]
> - 📊 <span class="t20-roxo">Atributos:</span> +2 Carisma, +1 Destreza, -1 Sabedoria
> - 📏 <span class="t20-amarelo">Tamanho:</span> Médio
> - 🏃 <span class="t20-verde">Deslocamento:</span> 12m (8q)
> - 🧬 <span class="t20-ciano">Tipo:</span> Espírito
> - 👁️ <span class="t20-laranja">Sentidos:</span> Visão na Penumbra

Combatente e conjurador feérico de grande mobilidade terrestre (12m), ataque natural de marrada, testes de Atletismo baseados em Destreza e acesso a quatro magias inatas empunhando um [[Instrumento musical]].

> [!t20-lore]- Origem, Ecologia e Cultura
> Humanoides feéricos dotados de chifres recurvados e pernas caprinas com cascos, os sátiros personificam o amor pelas celebrações, pela música, pelo vinho e por romances nos ermos de Arton. Apreciadores da boa caça e do arco, usam melodias de flauta e harpa para encantar viajantes sob o olhar benevolente de [[Wynna]] e [[Nimb]], unindo-se a grupos de heróis para quebrar o tédio de suas vidas selvagens.

> [!t20-restricao] Restrições & Vulnerabilidades Raciais
> - **Penalidade de Atributo:** Sabedoria –1 decorrente do temperamento impulsivo, festeiro e desatento.

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
   OR raca = this.file.link
SORT file.name ASC
```

---

## 📖 Descrição das Habilidades

### [[Festeiro Feérico|Festeiro Feérico]]
Você é uma criatura do tipo espírito, recebe visão na penumbra e +2 em Atuação e Fortitude.

### [[Instrumentista Mágico|Instrumentista Mágico]]
Se estiver empunhando um [[Instrumento musical]], você pode lançar as magias [[Amedrontar]], [[Enfeitiçar]], [[Hipnotismo]] e [[Sono]] (atributo-chave Carisma). Caso aprenda novamente uma dessas magias, seu custo diminui em –1 PM.

### [[Marrada|Marrada]]
Você possui uma arma natural de marrada (dano 1d6, crítico x2, impacto). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a marrada.

### [[Pernas Caprinas|Pernas Caprinas]]
Seu deslocamento é 12m e você pode usar Destreza como atributo-chave de Atletismo (em vez de Força).

---

## ✨ Poderes & Magias Fornecidos (Base / Inatos)

### 🔮 Magias Concedidas pela Raça
*Lançadas empunhando um [[Instrumento musical]] via habilidade [[Instrumentista Mágico]].*

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
