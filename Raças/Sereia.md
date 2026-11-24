---
tipo: "raca"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Sereia"
tipo_criatura: "Humanoide"
tamanho: "Médio"
deslocamento: "9m (6q), natação 12m (8q)"
atributos: "+1 em três atributos diferentes"
habilidades_base:
  - "[[Canção dos Mares]]"
  - "[[Mestre do Tridente]]"
  - "[[Transformação Anfíbia]]"
categoria_racial: "exotico"
classes_relacionadas:
  - "[[Bardo]]"
  - "[[Nobre]]"
  - "[[Druida]]"
divindades_relacionadas:
  - "[[Aharadak]]"
  - "[[Oceano]]"
  - "[[Thwor]]"
tecnologias_itens:
  - "[[Tridente]]"
---
# 🧬 Sereia
*Humanoide • Tamanho Médio • Tormenta20 JdA*

> [!t20-stats]
> - 📊 <span class="t20-roxo">Atributos:</span> +1 em três atributos diferentes
> - 📏 <span class="t20-amarelo">Tamanho:</span> Médio
> - 🏃 <span class="t20-verde">Deslocamento:</span> 9m (6q), natação 12m (8q)
> - 🧬 <span class="t20-ciano">Tipo:</span> Humanoide

Habitantes aquáticos dos mares e rios artonianos, capazes de alternar entre cauda de peixe e pernas em terra firme com canções encantadas.

> [!t20-lore]- Origem, Ecologia e Cultura
> Habitantes aquáticos dos mares e rios artonianos, capazes de alternar entre cauda de peixe e pernas em terra firme com canções encantadas.

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

### [[Canção dos Mares|Canção dos Mares]]
Você pode lançar duas das magias a seguir: Amedrontar, Comando, Despedaçar, Enfeitiçar, Hipnotismo ou Sono (atributo-chave Carisma). Caso aprenda novamente uma dessas magias, seu custo diminui em –1 PM.

### [[Mestre do Tridente|Mestre do Tridente]]
Para você, o tridente é uma arma simples. Além disso, você recebe +2 em rolagens de dano com azagaias, lanças e tridentes

### [[Transformação Anfíbia|Transformação Anfíbia]]
Você pode respirar debaixo d’água e possui uma cauda que fornece deslocamento de natação 12m. Quando fora d’água, sua cauda desaparece e dá lugar a pernas (deslocamento 9m). Se permanecer mais de um dia sem contato com água, você não recupera PM com descanso até voltar para a água (ou, pelo menos, tomar um bom banho!).

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

