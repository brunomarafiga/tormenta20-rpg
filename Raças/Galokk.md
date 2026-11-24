---
tipo: "raca"
sistema: "tormenta20-jda"
fonte: "Heróis de Arton"
nome: "Galokk"
tipo_criatura: "Humanoide"
tamanho: "Grande"
deslocamento: "9m (6q)"
atributos: "+1 Força, +1 Constituição, +1 em um atributo, -1 Carisma"
habilidades_base:
  - "[[Força dos Titãs]]"
  - "[[Meio-Gigante]]"
  - "[[Infância entre os Pequenos]]"
categoria_racial: "suplementar"
classes_relacionadas:
  - "[[Guerreiro]]"
  - "[[Bárbaro]]"
  - "[[Lutador]]"
  - "[[Arcanista]]"
  - "[[Bardo]]"
  - "[[Inventor]]"
divindades_relacionadas:
  - "[[Allihanna]]"
  - "[[Arsenal]]"
  - "[[Megalokk]]"
---
# 🧬 Galokk
*Humanoide (Gigante) • Tamanho Grande • Heróis de Arton*

> [!t20-stats]
> - 📊 <span class="t20-roxo">Atributos:</span> +1 Força, +1 Constituição, +1 em um atributo, -1 Carisma
> - 📏 <span class="t20-amarelo">Tamanho:</span> Grande
> - 🏃 <span class="t20-verde">Deslocamento:</span> 9m (6q)
> - 🧬 <span class="t20-ciano">Tipo:</span> Humanoide (Gigante)

Meio-gigante combatente de porte Grande apto a empunhar armas aumentadas, com capacidade de explodir dados extras de dano ao rolar valores máximos via [[Força dos Titãs]] e Intimidação baseada em Força.

> [!t20-lore]- Origem, Ecologia e Cultura
> Fruto da união remota entre antigos gigantes de Arton e linhagens humanas, os galokk são colossos que raramente encontram conforto nas construções de cidades convencionais. Sem terras ou reinos próprios, erram por Arton atuando frequentemente como guardas de elite, gladiadores ou caçadores de feras colossais sob a influência de [[Arsenal]] e [[Megalokk]], embora muitos desafiem sua reputação rústica como estudiosos arcanos ou inventores engenhosos.

> [!t20-restricao] Restrições & Vulnerabilidades Raciais
> - **Porte Grande:** Sofre –2 em testes de Furtividade; empunha armas de tamanho aumentado e ocupa espaço de 3m x 3m (2x2 quadrados).
> - **Penalidade de Atributo:** Carisma –1 decorrente da presença intimidadora e modos rústicos.

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

### [[Força dos Titãs|Força dos Titãs]]
Quando acerta um ataque corpo a corpo ou de arremesso, você pode gastar 1 PM. Se fizer isso, sempre que rolar o resultado máximo em um dado de dano da arma, role um dado extra, até um limite de dados extras igual à sua Força.

### [[Meio-Gigante|Meio-Gigante]]
Você é uma criatura do tipo humanoide (gigante). Seu tamanho é Grande e você pode usar Força como atributo-chave de Intimidação.

### [[Infância entre os Pequenos|Infância entre os Pequenos]]
Você se torna treinado em uma perícia a sua escolha.

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
