---
tipo: "raca"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Sílfide"
tipo_criatura: "Espírito"
tamanho: "Minúsculo"
deslocamento: "9m (6q) voo"
atributos: "+2 Carisma, +1 Destreza, -2 Força"
habilidades_base:
  - "[[Asas de Borboleta]]"
  - "[[Espírito da Natureza]]"
  - "[[Magia das Fadas]]"
categoria_racial: "exotico"
sentidos: "Visão na Penumbra"
classes_relacionadas:
  - "[[Arcanista]]"
  - "[[Bardo]]"
  - "[[Druida]]"
divindades_relacionadas:
  - "[[Aharadak]]"
  - "[[Allihanna]]"
  - "[[Hyninn]]"
  - "[[Nimb]]"
  - "[[Wynna]]"
magias_fornecidas:
  - "[[Criar Ilusão]]"
---
# 🧬 Sílfide
*Espírito • Tamanho Minúsculo • Tormenta20 JdA*

> [!t20-stats]
> - 📊 <span class="t20-roxo">Atributos:</span> +2 Carisma, +1 Destreza, -2 Força
> - 📏 <span class="t20-amarelo">Tamanho:</span> Minúsculo
> - 🏃 <span class="t20-verde">Deslocamento:</span> 9m (6q) voo
> - 🧬 <span class="t20-ciano">Tipo:</span> Espírito
> - 👁️ <span class="t20-laranja">Sentidos:</span> Visão na Penumbra

Fadas diminutas do Reino das Fadas e florestas sagradas, aladas, brincalhonas e imbuídas de ilusões e encantos naturais.

> [!t20-lore]- Origem, Ecologia e Cultura
> Fadas diminutas do Reino das Fadas e florestas sagradas, aladas, brincalhonas e imbuídas de ilusões e encantos naturais.

> [!t20-restricao] Restrições & Vulnerabilidades Raciais
> - **Restrição:** Tamanho Minúsculo e extrema fragilidade física contra forças esmagadoras.

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

### [[Asas de Borboleta|Asas de Borboleta]]
Seu tamanho é Minúsculo. Você pode pairar a 1,5m do chão com deslocamento 9m. Isso permite que você ignore terreno difícil e o torna imune a dano por queda (a menos que esteja inconsciente). Você pode gastar 1 PM por rodada para voar com deslocamento de 12m.

### [[Espírito da Natureza|Espírito da Natureza]]
Você é uma criatura do tipo espírito, recebe visão na penumbra e pode falar com animais livremente.

### [[Magia das Fadas|Magia das Fadas]]
Você pode lançar duas das magias a seguir (todas atributo-chave Carisma): Criar Ilusão, Enfeitiçar, Luz (como uma magia arcana) e Sono. Caso aprenda novamente uma dessas magias, seu custo diminui em –1 PM.

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

