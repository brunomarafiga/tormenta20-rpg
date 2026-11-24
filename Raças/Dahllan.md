---
tipo: "raca"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Dahllan"
tipo_criatura: "Humanoide"
tamanho: "Médio"
deslocamento: "9m (6q)"
atributos: "+2 Sabedoria, +1 Destreza, -1 Inteligência"
habilidades_base:
  - "[[Amiga das Plantas]]"
  - "[[Armadura de Allihanna]]"
  - "[[Empatia Selvagem (Dahllan)|Empatia Selvagem]]"
categoria_racial: "comum"
classes_relacionadas:
  - "[[Druida]]"
  - "[[Caçador]]"
divindades_relacionadas:
  - "[[Aharadak]]"
  - "[[Allihanna]]"
  - "[[Lena]]"
  - "[[Oceano]]"
  - "[[Thwor]]"
magias_fornecidas:
  - "[[Controlar Plantas]]"
---
# 🧬 Dahllan
*Humanoide • Tamanho Médio • Tormenta20 JdA*

> [!t20-stats]
> - 📊 <span class="t20-roxo">Atributos:</span> +2 Sabedoria, +1 Destreza, -1 Inteligência
> - 📏 <span class="t20-amarelo">Tamanho:</span> Médio
> - 🏃 <span class="t20-verde">Deslocamento:</span> 9m (6q)
> - 🧬 <span class="t20-ciano">Tipo:</span> Humanoide

Meio-dríades pacíficas em comunhão com a natureza viva de Allihanna, dotadas de empatia com a fauna e flora de Arton.

> [!t20-lore]- Origem, Ecologia e Cultura
> Meio-dríades pacíficas em comunhão com a natureza viva de Allihanna, dotadas de empatia com a fauna e flora de Arton.

> [!t20-restricao] Restrições & Vulnerabilidades Raciais
> - **Restrição:** Não podem vestir armaduras de metal sem perder a conexão mística com a terra (veja Armadura de Allihanna).

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

### [[Amiga das Plantas|Amiga das Plantas]]
Você pode lançar a magia Controlar Plantas (atributo-chave Sabedoria). Caso aprenda novamente essa magia, seu custo diminui em –1 PM.

### [[Armadura de Allihanna|Armadura de Allihanna]]
Você pode gastar uma ação de movimento e 1 PM para transformar sua pele em casca de árvore, recebendo +2 na Defesa até o fim da cena.

### [[Empatia Selvagem (Dahllan)|Empatia Selvagem]]
Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento para mudar atitude e pedir favores de animais (veja Diplomacia, na página 118). Caso receba esta habilidade novamente, recebe +2 em Adestramento.

---

## ✨ Poderes & Magias Fornecidos (Base / Inatos)

### 🔮 Magias Concedidas pela Raça
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

