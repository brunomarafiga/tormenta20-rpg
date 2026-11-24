---
tipo: "raca"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Goblin"
tipo_criatura: "Humanoide"
tamanho: "Pequeno"
deslocamento: "9m (6q)"
atributos: "+2 Destreza, +1 Inteligência, -1 Carisma"
habilidades_base:
  - "[[Engenhoso]]"
  - "[[Espelunqueiro]]"
  - "[[Peste Esguia]]"
  - "[[Rato das Ruas]]"
categoria_racial: "comum"
sentidos: "Visão no Escuro"
classes_relacionadas:
  - "[[Inventor]]"
  - "[[Ladino]]"
divindades_relacionadas:
  - "[[Aharadak]]"
  - "[[Hyninn]]"
  - "[[Megalokk]]"
  - "[[Nimb]]"
  - "[[Thwor]]"
---
# 🧬 Goblin
*Humanoide • Tamanho Pequeno • Tormenta20 JdA*

> [!t20-stats]
> - 📊 <span class="t20-roxo">Atributos:</span> +2 Destreza, +1 Inteligência, -1 Carisma
> - 📏 <span class="t20-amarelo">Tamanho:</span> Pequeno
> - 🏃 <span class="t20-verde">Deslocamento:</span> 9m (6q)
> - 🧬 <span class="t20-ciano">Tipo:</span> Humanoide
> - 👁️ <span class="t20-laranja">Sentidos:</span> Visão no Escuro

Engenhosos, resilientes e adaptáveis sobreviventes das favelas e subterrâneos de Arton, capazes de criar maquinários com sucata.

> [!t20-lore]- Origem, Ecologia e Cultura
> Engenhosos, resilientes e adaptáveis sobreviventes das favelas e subterrâneos de Arton, capazes de criar maquinários com sucata.

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

### [[Engenhoso|Engenhoso]]
Você não sofre penalidades em testes de perícia por não usar kits. Se usar o kit, recebe +2 no teste de perícia.

### [[Espelunqueiro|Espelunqueiro]]
Você recebe visão no escuro e deslocamento de escalada igual ao seu deslocamento terrestre.

### [[Peste Esguia|Peste Esguia]]
Seu tamanho é Pequeno (veja a página 106), mas seu deslocamento se mantém 9m. Apesar de pequenos, goblins são rápidos.

### [[Rato das Ruas|Rato das Ruas]]
Você recebe +2 em Fortitude e sua recuperação de PV e PM nunca é inferior ao seu nível.

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

