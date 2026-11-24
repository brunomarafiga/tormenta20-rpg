---
tipo: "raca"
sistema: "tormenta20-jda"
fonte: "Heróis de Arton"
nome: "Meio-Elfo"
tipo_criatura: "Humanoide"
tamanho: "Médio"
deslocamento: "9m (6q)"
atributos: "+1 Inteligência, +1 em dois atributos (exceto Constituição)"
habilidades_base:
  - "[[Ambição Herdada]]"
  - "[[Entre Dois Mundos]]"
  - "[[Sangue Élfico]]"
categoria_racial: "comum"
sentidos: "Visão na Penumbra"
classes_relacionadas:
  - "[[Bardo]]"
  - "[[Bucaneiro]]"
  - "[[Clérigo]]"
  - "[[Druida]]"
  - "[[Guerreiro]]"
  - "[[Ladino]]"
  - "[[Arcanista]]"
divindades_relacionadas:
  - "[[Valkaria]]"
  - "[[Wynna]]"
  - "[[Marah]]"
---
# 🧬 Meio-Elfo
*Humanoide • Tamanho Médio • Heróis de Arton*

> [!t20-stats]
> - 📊 <span class="t20-roxo">Atributos:</span> +1 Inteligência, +1 em dois atributos diferentes (exceto Constituição)
> - 📏 <span class="t20-amarelo">Tamanho:</span> Médio
> - 🏃 <span class="t20-verde">Deslocamento:</span> 9m (6q)
> - 🧬 <span class="t20-ciano">Tipo:</span> Humanoide
> - 👁️ <span class="t20-laranja">Sentidos:</span> Visão na Penumbra

Raça híbrida de extrema adaptabilidade tática que recebe um poder geral ou poder único de origem no 1º nível via [[Ambição Herdada]], bônus contínuo em perícias de Carisma e reserva de mana expandida a cada nível ímpar por seu [[Sangue Élfico]].

> [!t20-lore]- Origem, Ecologia e Cultura
> Fruto da convivência e do amor entre os elfos dispersos após a queda de Lenórienn e as comunidades humanas do Reinado sob as bênçãos de [[Valkaria]], os meios-elfos navegam entre duas heranças sem pertencer inteiramente a nenhuma. Tolerantes, perceptivos e sociáveis, superam o desdém de elfos tradicionalistas tornando-se diplomatas, andarilhos e aventureiros arrojados.

> [!t20-restricao] Restrições & Vulnerabilidades Raciais
> - **Limitação Fisiológica:** Não pode aplicar o bônus de criação em Constituição, refletindo a fragilidade herdada de sua linhagem élfica ancestral.

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

### [[Ambição Herdada|Ambição Herdada]]
Você recebe um poder geral ou poder único de origem (Tormenta20, p. 85) a sua escolha.

### [[Entre Dois Mundos|Entre Dois Mundos]]
Você recebe +1 em perícias baseadas em Carisma.

### [[Sangue Élfico|Sangue Élfico]]
Você recebe visão na penumbra e +1 ponto de mana a cada nível ímpar (incluindo o 1º). Além disso, é considerado um elfo para efeitos relacionados a raça.

---

## ✨ Poderes & Magias Fornecidos (Base / Inatos)

*Através da habilidade [[Ambição Herdada]], o Meio-Elfo recebe um poder geral ou poder único de origem à sua escolha no 1º nível.*

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
