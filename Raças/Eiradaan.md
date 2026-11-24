---
tipo: "raca"
sistema: "tormenta20-jda"
fonte: "Heróis de Arton"
nome: "Eiradaan"
tipo_criatura: "Espírito"
tamanho: "Médio"
deslocamento: "9m (6q)"
atributos: "+2 Sabedoria, +1 Carisma, -1 Força"
habilidades_base:
  - "[[Essência Feérica]]"
  - "[[Magia Instintiva]]"
  - "[[Sentidos Místicos]]"
categoria_racial: "suplementar"
sentidos: "Visão na Penumbra, Sentidos Místicos (Visão Mística permanente)"
classes_relacionadas:
  - "[[Arcanista]]"
  - "[[Nobre]]"
  - "[[Cavaleiro]]"
divindades_relacionadas:
  - "[[Allihanna]]"
  - "[[Lena]]"
magias_fornecidas:
  - "[[Visão Mística]]"
---
# 🧬 Eiradaan
*Espírito • Tamanho Médio • Heróis de Arton*

> [!t20-stats]
> - 📊 <span class="t20-roxo">Atributos:</span> +2 Sabedoria, +1 Carisma, -1 Força
> - 📏 <span class="t20-amarelo">Tamanho:</span> Médio
> - 🏃 <span class="t20-verde">Deslocamento:</span> 9m (6q)
> - 🧬 <span class="t20-ciano">Tipo:</span> Espírito
> - 👁️ <span class="t20-laranja">Sentidos:</span> Visão na Penumbra, Sentidos Místicos ([[Visão Mística]] permanente)

Conjurador feérico nobre e solene que substitui o atributo-chave de magias arcanas e Misticismo por Sabedoria, ganha +1 PM para aprimoramentos e enxerga fluxos mágicos continuamente via [[Visão Mística]].

> [!t20-lore]- Origem, Ecologia e Cultura
> Criados pelo Panteão para proteger Vitalia, o Reino de [[Lena]], os eiradaan foram banidos para Arton após falharem em sua tarefa sagrada e hoje habitam as matas mais profundas e a corte da Pondsmânia sob a regência de rainhas feéricas. Dotados de galhadas ramificadas e feições élficas marcadas por melancolia ancestral, mantêm posturas solenes e códigos de honra, destacando-se como nobres, guardiões arcanos e soldados de elite.

> [!t20-restricao] Restrições & Vulnerabilidades Raciais
> - **Penalidade de Atributo:** Força –1 devido à sua compleição esguia e feérica voltada à canalização mística em vez de esforço puramente bruto.

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

### [[Essência Feérica|Essência Feérica]]
Você é uma criatura do tipo espírito, recebe visão na penumbra e pode falar com animais livremente.

### [[Magia Instintiva|Magia Instintiva]]
Você pode usar Sabedoria no lugar de seu atributo-chave de magias arcanas e Misticismo. Além disso, quando lança uma magia, você recebe +1 PM para gastar em seus aprimoramentos (não cumulativo com outros efeitos que fornecem PM para aprimoramentos, como bolsa de pó; Tormenta20, p. 159).

### [[Sentidos Místicos|Sentidos Místicos]]
Você está sempre sob o efeito básico de [[Visão Mística]].

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
