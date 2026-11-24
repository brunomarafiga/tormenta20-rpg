---
tipo: "raca"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Hynne"
tipo_criatura: "Humanoide"
tamanho: "Pequeno"
deslocamento: "6m (4q)"
atributos: "+2 Destreza, +1 Carisma, -1 Força"
habilidades_base:
  - "[[Arremessador]]"
  - "[[Pequeno e Rechonchudo]]"
  - "[[Sorte Salvadora]]"
categoria_racial: "comum"
classes_relacionadas:
  - "[[Bardo]]"
  - "[[Ladino]]"
  - "[[Bucaneiro]]"
divindades_relacionadas:
  - "[[Aharadak]]"
  - "[[Hyninn]]"
  - "[[Marah]]"
  - "[[Oceano]]"
  - "[[Thwor]]"
---
# 🧬 Hynne
*Humanoide • Tamanho Pequeno • Tormenta20 JdA*

> [!t20-stats]
> - 📊 <span class="t20-roxo">Atributos:</span> +2 Destreza, +1 Carisma, -1 Força
> - 📏 <span class="t20-amarelo">Tamanho:</span> Pequeno
> - 🏃 <span class="t20-verde">Deslocamento:</span> 6m (4q)
> - 🧬 <span class="t20-ciano">Tipo:</span> Humanoide

Povo diminuto e pacífico do campo, célebre pela hospitalidade, boa mesa, agilidade acrobática e uma sorte inacreditável sob pressão.

> [!t20-lore]- Origem, Ecologia e Cultura
> Povo diminuto e pacífico do campo, célebre pela hospitalidade, boa mesa, agilidade acrobática e uma sorte inacreditável sob pressão.

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

### [[Arremessador|Arremessador]]
Quando faz um ataque à distância com uma funda ou uma arma de arremesso, seu dano aumenta em um passo.

### [[Pequeno e Rechonchudo|Pequeno e Rechonchudo]]
Seu tamanho é Pequeno (veja a página 106) e seu deslocamento é 6m. Você recebe +2 em Enganação e usa o modificador de Destreza para Atletismo (em vez de Força).

### [[Sorte Salvadora|Sorte Salvadora]]
Quando faz um teste de resistência, você pode gastar 1 PM para rolar este teste novamente.

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

