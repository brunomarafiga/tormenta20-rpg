---
tipo: "raca"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Humano"
tipo_criatura: "Humanoide"
tamanho: "Médio"
deslocamento: "9m (6q)"
atributos: "+1 em três atributos diferentes"
habilidades_base:
  - "[[Versátil]]"
categoria_racial: "comum"
classes_relacionadas:
  - "[[Guerreiro]]"
  - "[[Paladino]]"
  - "[[Bardo]]"
divindades_relacionadas:
  - "[[Aharadak]]"
  - "[[Valkaria]]"
  - "[[Thwor]]"
---
# 🧬 Humano
*Humanoide • Tamanho Médio • Tormenta20 JdA*

> [!t20-stats]
> - 📊 <span class="t20-roxo">Atributos:</span> +1 em três atributos diferentes
> - 📏 <span class="t20-amarelo">Tamanho:</span> Médio
> - 🏃 <span class="t20-verde">Deslocamento:</span> 9m (6q)
> - 🧬 <span class="t20-ciano">Tipo:</span> Humanoide

Raça versátil e adaptável para qualquer função, recebendo bônus em três atributos distintos e a flexibilidade de iniciar com duas perícias treinadas adicionais ou trocar uma delas por um poder geral no 1º nível.

> [!t20-lore]- Origem, Ecologia e Cultura
> A raça mais abundante, ambiciosa e dispersa pelo continente de Arton, impulsionada pela chama inquieta da deusa [[Valkaria]] para explorar o desconhecido, fundar reinos e superar qualquer limite imposto pelo destino.

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

### [[Versátil|Versátil]]
Você se torna treinado em duas perícias a sua escolha (não precisam ser da sua classe). Você pode trocar uma dessas perícias por um poder geral a sua escolha.

---

## ✨ Poderes & Magias Fornecidos (Base / Inatos)

Por meio de sua característica inata **[[Versátil]]**, o Humano não possui poderes fixos pré-determinados, mas recebe a liberdade de escolher **1 Poder Geral** (de Combate, Destino, Magia, Tormenta ou Raça) no 1º nível, desde que cumpra seus pré-requisitos.

Consulte o catálogo completo e categorizado em **[[_Índice Geral de Poderes]]**.

> [!t20-poder]- 🎲 Opções de Poder Geral no 1º Nível (via Versátil)
> ```dataview
> TABLE WITHOUT ID
>   file.link AS "Poder Geral",
>   default(categoria, default(subtipo, "—")) AS "Categoria",
>   join(default(requer_atributo, []), ", ") AS "Atributos",
>   join(default(requer_pericia, []), ", ") AS "Perícias",
>   default(resumo, "—") AS "Efeito Resumido"
> FROM "Poderes/Combate" OR "Poderes/Destino" OR "Poderes/Magia" OR "Poderes/Tormenta" OR "Poderes/Raça"
> WHERE tipo = "poder"
>   AND (!requer_nivel OR requer_nivel <= 1)
>   AND (!requer_poder OR length(requer_poder) = 0)
>   AND (!requer_raca OR contains(requer_raca, this.file.link))
> SORT file.name ASC
> ```

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

