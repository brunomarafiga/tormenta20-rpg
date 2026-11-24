---
tipo: "raca"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Trog"
tipo_criatura: "Humanoide"
tamanho: "Médio"
deslocamento: "9m (6q)"
atributos: "+2 Constituição, +1 Força, -1 Inteligência"
habilidades_base:
  - "[[Mau Cheiro]]"
  - "[[Mordida]]"
  - "[[Reptiliano]]"
  - "[[Sangue Frio]]"
categoria_racial: "comum"
sentidos: "Visão no Escuro"
classes_relacionadas:
  - "[[Bárbaro]]"
  - "[[Lutador]]"
  - "[[Guerreiro]]"
divindades_relacionadas:
  - "[[Aharadak]]"
  - "[[Megalokk]]"
  - "[[Tenebra]]"
  - "[[Thwor]]"
---
# 🧬 Trog
*Humanoide • Tamanho Médio • Tormenta20 JdA*

> [!t20-stats]
> - 📊 <span class="t20-roxo">Atributos:</span> +2 Constituição, +1 Força, -1 Inteligência
> - 📏 <span class="t20-amarelo">Tamanho:</span> Médio
> - 🏃 <span class="t20-verde">Deslocamento:</span> 9m (6q)
> - 🧬 <span class="t20-ciano">Tipo:</span> Humanoide
> - 👁️ <span class="t20-laranja">Sentidos:</span> Visão no Escuro

Povo réptil primitivo das profundezas subterrâneas, caçadores implacáveis com mordida dilacerante e secreção glandular avassaladora.

> [!t20-lore]- Origem, Ecologia e Cultura
> Povo réptil primitivo das profundezas subterrâneas, caçadores implacáveis com mordida dilacerante e secreção glandular avassaladora.

> [!t20-restricao] Restrições & Vulnerabilidades Raciais
> - **Restrição:** Sangue Frio: sofre 1 ponto adicional de dano por dado de dano de frio.

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

### [[Mau Cheiro|Mau Cheiro]]
Você pode gastar uma ação padrão e 2 PM para expelir um gás fétido. Todas as criaturas (exceto trogs) em alcance curto devem passar em um teste de Fortitude contra veneno (CD Con) ou ficarão enjoadas durante 1d6 rodadas. Uma criatura que passe no teste de resistência fica imune a esta habilidade por um dia.

### [[Mordida|Mordida]]
Você possui uma arma natural de mordida (dano 1d6, crítico x2, perfuração). Quando usa a ação atacar, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida.

### [[Reptiliano|Reptiliano]]
Você é uma criatura do tipo monstro e recebe visão no escuro, +1 na Defesa (JÁ INCLUSO) e, se estiver sem armadura ou roupas pesadas, +5 em Furtividade.

### [[Sangue Frio|Sangue Frio]]
Você sofre 1 ponto de dano adicional por dado de dano de frio.

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

