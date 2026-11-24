---
tipo: raca
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"             # "Tormenta20 JdA" | "Atlas de Arton" | "Heróis de Arton" | "Ameaças de Arton" | "Deuses de Arton" | "Dragão Brasil 199"
nome: "Nome da Raça"
tipo_criatura: "Humanoide"          # Humanoide | Espírito | Construto | Monstro | Morto-Vivo
tamanho: "Médio"                    # Minúsculo | Pequeno | Médio | Grande
deslocamento: "9m (6q)"
atributos: "+2 em um atributo, +1 em dois atributos"
habilidades_base:
  - "[[Habilidade Racial 1]]"
  - "[[Habilidade Racial 2]]"
categoria_racial: "comum"           # comum | exotico | construto | mistica | planar | supplementar | tormenta
ancestralidade: "Humanoide"         # grupo ontológico amplo; não substitui tipo_criatura
origem_cultural: "Qualquer"

# === OPCIONAIS (OMITIR QUANDO NÃO SE APLICAR) ===
# raca_base: "[[Suraggel]]"         # para sub-raças/linhagens (ex: Aggelus, Sulfure)
# sentidos: "Visão no Escuro"
# poderes_fornecidos:               # poderes de classe/gerais concedidos ou liberados pela raça
#   - "[[Ataque Poderoso]]"
# magias_fornecidas:                # magias inatas concedidas pela raça (ex: Qareen, Sílfide, Aggelus)
#   - "[[Luz]]"
# classes_relacionadas:             # classes típicas, variantes ou de alta sinergia com a raça
#   - "[[Inventor]]"
#   - "[[Arcanista]]"
# divindades_relacionadas:          # divindades patronas ou com devoção tradicional da raça
#   - "[[Khalmyr]]"
#   - "[[Tenebra]]"
# tecnologias_itens:                # armas raciais, materiais, engenhocas e aparatos culturais
#   - "[[Machado Anão]]"
#   - "[[Aço-Rubi]]"
---

# 🧬 Nome da Raça
*Humanoide • Tamanho Médio • Tormenta20 JdA*

> [!t20-stats]
> - 📊 <span class="t20-roxo">Atributos:</span> +2 em um atributo, +1 em dois atributos
> - 📏 <span class="t20-amarelo">Tamanho:</span> Médio
> - 🏃 <span class="t20-verde">Deslocamento:</span> 9m (6q)
> - 🧬 <span class="t20-ciano">Tipo:</span> Humanoide
> - 👁️ <span class="t20-laranja">Sentidos:</span> Visão no Escuro *(omitir se padrão)*

Resumo operacional curto (1 parágrafo) sobre o perfil mecânico da raça, seus nichos de atuação e papel em Arton.

> [!t20-lore]- Origem, Ecologia e Cultura
> Síntese referencial sobre origem, organização social, territórios e dinâmica de conflito da raça em Arton.

<!-- OPCIONAL: manter apenas se a raça possuir desvantagens estruturais (ex: sensibilidade à luz, chassi, restrições de cura) -->
> [!t20-restricao] Restrições & Vulnerabilidades Raciais
> - **Restrição:** Descrição fiel de penalidades, limitações de equipamento ou vulnerabilidades inerentes.

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

## ✨ Poderes & Magias Fornecidos (Base / Inatos)

<!-- Manter apenas os blocos aplicáveis à raça -->

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

### ⚔️ Poderes Base / Gerais Associados
```dataview
TABLE WITHOUT ID
  file.link AS "Poder",
  default(categoria, default(subtipo, "—")) AS "Categoria",
  default(resumo, "—") AS "Efeito Resumido"
FROM "Poderes" AND -"Templates"
WHERE tipo = "poder" AND contains(default(this.poderes_fornecidos, []), file.link)
SORT file.name ASC
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

### ⚙️ Tecnologias, Armas & Equipamentos Culturais
```dataview
TABLE WITHOUT ID
  file.link AS "Item / Tecnologia",
  default(subtipo, default(categoria, "—")) AS "Categoria",
  "T$ " + default(preco_ts, "—") AS "Preço",
  default(espacos, "—") AS "Espaços"
FROM "Itens" AND -"Templates"
WHERE tipo = "item" AND contains(default(this.tecnologias_itens, []), file.link)
SORT file.name ASC
```

> [!t20-item] Domínios Tecnológicos e Culturais *(Opcional)*
> - **Tecnologia / Tradição Material:** *(ex.: metalurgia de [[Aço-Rubi]], armas de fogo e pólvora, engenhocas alquímicas, forja de armas raciais).*
> - **Aplicação Mecânica:** *(referenciar regras ou perícias centrais como [[Ofício]] ou [[Misticismo]]).*
