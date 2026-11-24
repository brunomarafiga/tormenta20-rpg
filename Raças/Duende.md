---
tipo: "raca"
sistema: "tormenta20-jda"
fonte: "Heróis de Arton"
nome: "Duende"
tipo_criatura: "Espírito"
tamanho: "Minúsculo a Grande"
deslocamento: "6m ou 9m"
atributos: "+1 em dois atributos diferentes (mais +1 se escolher natureza Animal)"
habilidades_base:
  - "[[Passo 1 — Natureza]]"
  - "[[Passo 2 — Tamanho]]"
  - "[[Passo 3 — Dons]]"
  - "[[Passo 4 — Presentes de Magia e de Caos]]"
  - "[[Aversão a Ferro]]"
  - "[[Tabu]]"
categoria_racial: "suplementar"
sentidos: "Visão na Penumbra"
classes_relacionadas:
  - "[[Guerreiro]]"
  - "[[Bardo]]"
  - "[[Clérigo]]"
  - "[[Druida]]"
  - "[[Treinador]]"
divindades_relacionadas:
  - "[[Allihanna]]"
  - "[[Hyninn]]"
  - "[[Nimb]]"
  - "[[Wynna]]"
---
# 🧬 Duende
*Espírito • Tamanho Variável (Minúsculo a Grande) • Heróis de Arton*

> [!t20-stats]
> - 📊 <span class="t20-roxo">Atributos:</span> +1 em dois atributos diferentes (mais +1 se escolher natureza Animal)
> - 📏 <span class="t20-amarelo">Tamanho:</span> Minúsculo, Pequeno, Médio ou Grande (definido no Passo 2)
> - 🏃 <span class="t20-verde">Deslocamento:</span> 6m ou 9m (definido no Passo 2)
> - 🧬 <span class="t20-ciano">Tipo:</span> Espírito
> - 👁️ <span class="t20-laranja">Sentidos:</span> Visão na Penumbra

Raça feérica modular altamente customizável através de escolhas de natureza (animal, vegetal ou mineral), categoria de tamanho, dons de atributos e presentes feéricos de magia e caos.

> [!t20-lore]- Origem, Ecologia e Cultura
> Nativos das profundezas florestais de Arton e dos reinos feéricos da Pondsmânia, os duendes são espíritos de puro caos e capricho cuja aparência não segue padrões uniformes — podendo lembrar pequenos animais bípedes, galhos animados, blocos de argila falantes ou figuras excêntricas de contos de fadas. Sem raízes em estruturas sociais rígidas, vivem guiados por compulsões místicas misteriosas e pelas bênçãos imprevisíveis de [[Nimb]], [[Wynna]] e [[Allihanna]].

> [!t20-restricao] Restrições & Vulnerabilidades Raciais
> - **Aversão a Ferro:** Sofre 1 ponto de dano adicional por dado de dano de ataques com armas de ferro e 1d6 pontos de dano por rodada se estiver empunhando ou vestindo item de ferro ou aço.
> - **Tabu:** Possui uma proibição ou obrigação mística descoberta com Conhecimento (CD 30) ou Investigação (CD 20); quando impedido de cumpri-la, morre em 1d4+1 dias.

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

### [[Passo 1 — Natureza|Passo 1 — Natureza]]
Você é uma criatura do tipo espírito e recebe visão na penumbra. Além disso, escolha se você será animal, vegetal ou mineral:
- **Animal:** Você é feito de carne e osso. Seu corpo é humanoide, mas sua aparência varia: pode ser algo similar a um elfo ou sílfide, um animal que anda sobre duas patas ou uma mistura dessas possibilidades. Você recebe +1 em um atributo a sua escolha.
- **Vegetal:** Seu corpo é composto de plantas, flores, folhas, cipós ou madeira viva. Você não precisa dormir (mas ainda precisa de repouso para recuperar PV e PM) e se alimenta de luz do sol e água, como uma planta.
- **Mineral:** Seu corpo é feito de barro, terra ou pedra. Você recebe resistência a corte, impacto e perfuração 2, mas não pode nadar (afunda automaticamente em qualquer corpo d'água mais profundo que sua altura).

### [[Passo 2 — Tamanho|Passo 2 — Tamanho]]
Escolha seu tamanho, entre Minúsculo, Pequeno, Médio ou Grande:
- **Minúsculo:** Você é Minúsculo (+5 em testes de Furtividade, –5 em testes de manobras de combate, usa armas reduzidas), possui deslocamento base 6m e sofre –1 em Força.
- **Pequeno:** Você é Pequeno (+2 em testes de Furtividade, –2 em testes de manobra) e possui deslocamento base 6m.
- **Médio:** Você é Médio (sem modificadores por tamanho) e possui deslocamento base 9m.
- **Grande:** Você é Grande (–2 em testes de Furtividade, +2 em testes de manobra, usa armas aumentadas), possui deslocamento base 9m e sofre –1 em Destreza.

### [[Passo 3 — Dons|Passo 3 — Dons]]
Escolha dois atributos diferentes. Você recebe +1 em cada atributo escolhido. Não, não pode ser +2 em um único atributo. Xô, larga disso! Porém, se você for animal, pode adicionar um desses +1 no mesmo atributo que aumentou pela natureza.

### [[Passo 4 — Presentes de Magia e de Caos|Passo 4 — Presentes de Magia e de Caos]]
Duendes não só são esquisitos: eles também conseguem fazer coisas esquisitas. Escolha três poderes da lista de presentes feéricos da raça. Todos eles são mágicos. No caso de habilidades que permitam teste de resistência, a CD é Carisma, a menos que especificado em contrário. Uma vez por patamar, você pode escolher um presente no lugar de um poder de classe.

### [[Aversão a Ferro|Aversão a Ferro]]
Um material rígido e inflexível, o ferro é nocivo a duendes. Você sofre 1 ponto de dano adicional por dado de dano de ataques com armas de ferro e sofre 1d6 pontos de dano por rodada se estiver empunhando ou vestindo um item de ferro. Isso também se aplica a aço, que inclui ferro em sua composição. Na prática, duendes usam apenas armas de madeira ou de materiais especiais, como mitral.

### [[Tabu|Tabu]]
Todo duende possui um tabu, que pode ser descoberto com um teste de Conhecimento (CD 30) ou perguntando aos plebeus da região (Investigação CD 20). Um personagem que conheça o tabu de um duende pode forçá-lo a ajudar em algo com um teste de Enganação oposto a um teste de Vontade. Quando impedido de cumprir seu tabu, um duende morre em 1d4+1 dias.

---

## ✨ Poderes & Magias Fornecidos (Base / Inatos)

*Esta raça não concede magias inatas fixas ou poderes gerais automáticos no 1º nível além dos três presentes escolhidos via [[Passo 4 — Presentes de Magia e de Caos]].*

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
