---
tipo: "raca"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Osteon"
tipo_criatura: "Morto-Vivo"
tamanho: "Médio ou Pequeno"
deslocamento: "9m (6q)"
atributos: "+1 em três atributos diferentes (exceto Constituição), -1 Constituição"
habilidades_base:
  - "[[Armadura Óssea]]"
  - "[[Memória Póstuma]]"
  - "[[Natureza Esquelética]]"
categoria_racial: "exotico"
sentidos: "Visão no Escuro"
classes_relacionadas:
  - "[[Arcanista]]"
  - "[[Ladino]]"
divindades_relacionadas:
  - "[[Aharadak]]"
  - "[[Tenebra]]"
  - "[[Thwor]]"
---
# 🧬 Osteon
*Morto-Vivo • Tamanho Médio ou Pequeno • Tormenta20 JdA*

> [!t20-stats]
> - 📊 <span class="t20-roxo">Atributos:</span> +1 em três atributos diferentes (exceto Constituição), -1 Constituição
> - 📏 <span class="t20-amarelo">Tamanho:</span> Médio ou Pequeno
> - 🏃 <span class="t20-verde">Deslocamento:</span> 9m (6q)
> - 🧬 <span class="t20-ciano">Tipo:</span> Morto-Vivo
> - 👁️ <span class="t20-laranja">Sentidos:</span> Visão no Escuro

Esqueletos conscientes despertos por magia necromântica ou propósito inextinguível, mantendo memórias fragmentadas da vida anterior.

> [!t20-lore]- Origem, Ecologia e Cultura
> Esqueletos conscientes despertos por magia necromântica ou propósito inextinguível, mantendo memórias fragmentadas da vida anterior.

> [!t20-restricao] Restrições & Vulnerabilidades Raciais
> - **Restrição:** Morto-vivo: danificado por efeitos de luz/cura e curado por energia de trevas. Não recupera PV por descanso normal.

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

### [[Armadura Óssea|Armadura Óssea]]
Você recebe resistência a corte, frio e perfuração 5.

### [[Memória Póstuma|Memória Póstuma]]
Você se torna treinado em uma perícia (não precisa ser da sua classe) ou recebe um poder geral a sua escolha. Como alternativa, você pode ser um osteon de outra raça humanoide que não humano. Neste caso, você ganha uma habilidade dessa raça a sua escolha. Se a raça era de tamanho diferente de Médio, você também possui sua categoria de tamanho.

### [[Natureza Esquelética|Natureza Esquelética]]
Você é uma criatura do tipo morto-vivo. Recebe visão no escuro e imunidade a doenças, fadiga, sangramento, sono e venenos. Além disso, não precisa respirar, alimentar-se ou dormir. Por fim, habilidades mágicas de cura causam dano a você e você não se beneficia de itens ingeríveis (comidas, poções etc.), mas dano de trevas recupera seus PV.

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

