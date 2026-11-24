---
tipo: classe
subtipo: classe-base
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Clérigo"
pv_inicial: 16
pv_por_nivel: 4
pm_inicial: 5
pm_por_nivel: 5
pericias_basicas:
  - "Religião"
  - "Vontade"
pericias_adicionais: 2
proficiencias:
  - "Armas Simples"
  - "Armaduras Leves"
  - "Armaduras Pesadas"
  - "Escudos"
---

# ☀️ Clérigo

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe de Personagem
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 16 (+4 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 5 (+5 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armas Simples, Armaduras Leves, Armaduras Pesadas, Escudos
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Religião, Vontade
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 2 a sua escolha entre: Conhecimento, Cura, Diplomacia, Fortitude, Iniciativa, Intuição, Luta, Misticismo, Nobreza, Ofício (Qualquer), Percepção

Sacerdote devoto ungido diretamente por uma das divindades do Panteão, canalizando bênçãos divinas, magias milagrosas e punição celestial aos infiéis.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Devoto Fiel (Clérigo)|Devoto Fiel]] | Você se torna devoto de um deus maior. Recebe seus poderes concedidos e segue suas Obrigações e Restrições. |
| **1º** | [[Magias (Clérigo)|Magias]] | Lança magias divinas de 1º círculo. A cada 4 níveis, desbloqueia um novo círculo (2º no 5º, 3º no 9º, 4º no 13º e 5º no 17º). |
| **20º** | [[Mão da Divindade]] | Recupera 1d10 PM no início do seu turno e o custo de todas as suas magias divinas diminui em –1 PM. |

---

## 📖 Descrição Completa das Habilidades de Clérigo

### [[Devoto Fiel (Clérigo)|Devoto Fiel]] (1º Nível)
Você se torna devoto de um deus maior. Veja as regras de devotos na página 96 do livro básico. Ao contrário de devotos normais, você recebe dois poderes concedidos de sua divindade padroeira (em vez de apenas um), mas continua precisando seguir suas Obrigações e Restrições sagradas.

### [[Magias (Clérigo)|Magias]] (1º Nível)
Você pode lançar magias divinas de 1º círculo. A cada quatro níveis, pode lançar magias de um círculo maior (2º círculo no 5º nível, 3º círculo no 9º nível, 4º no 13º nível e 5º no 17º nível).
- **Atributo-Chave:** Seu atributo-chave para lançar magias é **Sabedoria**. Você soma sua Sabedoria no seu total de pontos de mana e para determinar a CD para resistir às suas magias.
- **Preparação e Magias Iniciais:** Você começa conhecendo três magias de 1º círculo. A cada nível a partir do 2º, aprende uma nova magia divina de qualquer círculo a que tenha acesso.

### [[Mão da Divindade]] (20º Nível)
No 20º nível, você se torna o receptáculo supremo do poder divino em Arton. No início de cada um dos seus turnos, você **recupera 1d10 pontos de mana**. Além disso, o custo em pontos de mana de todas as suas magias divinas é reduzido em **–1** (cumulativo com outros redutores).

---

## ⚔️ Árvores de Poderes de Clérigo

A partir do 2º nível, e a cada nível seguinte, você pode escolher um dos poderes da classe. Abaixo, os poderes canônicos estão organizados pelas suas linhas de pré-requisitos e temas litúrgicos:

```mermaid
flowchart TD
  subgraph Canalizacao["⚡ Trilha de Canalização"]
    CEP["Canalizar Energia"]
    CA["Canalizar Amplo"]
    CP["Canalizar Poderoso (Nível 10)"]
    CC["Canalizar Concentrado (Nível 5)"]
    CAB["Canalizar Abençoado (Nível 8)"]
    CPR["Canalizar Profanado (Nível 8)"]
    EXP["Expulsar/Comandar Mortos-Vivos"]
    CV["Comunhão Vital"]

    CEP --> CA
    CA --> CP
    CEP --> CC
    CEP --> CAB
    CEP --> CPR
    CEP --> EXP
    CEP --> CV
  end

  subgraph Combate["⚔️ Trilha de Prece de Combate & Marcial"]
    ABA["Abençoar Arma"]
    AD["Arma Divina (Nível 6)"]
    DI["Dizimar Infiéis (Nível 11)"]
    PC["Prece de Combate"]
    PUD["Punição Divina (Nível 6)"]
    LM["Liturgia Marcial"]
    BB["Bênção de Batalha"]

    ABA --> AD
    AD --> DI
    PC --> PUD
    PC --> LM
  end

  subgraph Missas["🕊️ Trilha das Missas & Rituais"]
    M1["Missa: Bênção da Vida"]
    M8["Missa: Compartilhar Milagre (Nível 8)"]
    MC["Mestre Celebrante (Nível 6)"]
    M2["Missa: Chamado às Armas"]
    M3["Missa: Elevação do Espírito"]
    M4["Missa: Escudo Divino"]
    M5["Missa: Imposição da Vontade"]
    M6["Missa: Mente Abençoada"]
    M7["Missa: Superar Limitações"]

    M1 --> M8
    M1 --> MC
    M2 --> MC
    M3 --> MC
    M4 --> MC
    M5 --> MC
    M6 --> MC
    M7 --> MC
  end

  subgraph Magia["📜 Trilha de Liturgia & Oração"]
    LMag["Liturgia Mágica"]
    MSP["Magia Sagrada/Profana"]
    SSE["Símbolo Sagrado Energizado"]
    CM["Conhecimento Mágico"]
    EF["Égide da Fé"]
    SS["Solo Sagrado"]
    SP["Solo Profanado"]
    FD["Força da Devoção (Nível 7)"]
    PD["Presente dos Deuses (Nível 12)"]
  end
```

---

### ⚡ 1. Trilha de Canalização de Energia Divina
Ondas puras de energia positiva para cura de ferimentos em área ou energia negativa devastadora contra os vivos:

```dataview
TABLE
  resumo AS "Efeito Resumido",
  join(default(requer_poder, []), ", ") AS "Pré-requisitos",
  default(requer_nivel, "—") AS "Nível Mín.",
  join(default(magias_relacionadas, []), ", ") AS "Magias Vinculadas"
  FROM "Poderes/Classe/Clérigo" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder" AND (!classes OR contains(classes, this.file.link)) AND trilha_poder = "Canalização"
SORT default(ordem, 99) ASC, default(requer_nivel, 1) ASC, file.name ASC
```

---

### ⚔️ 2. Trilha Litúrgica & Prece de Combate
Técnicas de guerra santa, lâminas sagradas e aceleração de preces para combate corporal:

```dataview
TABLE
  resumo AS "Efeito Resumido",
  join(default(requer_poder, []), ", ") AS "Pré-requisitos",
  default(requer_nivel, "—") AS "Nível Mín.",
  join(default(magias_relacionadas, []), ", ") AS "Magias Vinculadas"
  FROM "Poderes/Classe/Clérigo" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder" AND (!classes OR contains(classes, this.file.link)) AND trilha_poder = "Prece de Combate"
SORT default(ordem, 99) ASC, default(requer_nivel, 1) ASC, file.name ASC
```

---

### 🕊️ 3. Trilha das Missas & Rituais Coletivos
Rituais de consagração e celebrações litúrgicas de 1 hora que concedem bênçãos persistentes a você e todos os seus aliados:

```dataview
TABLE
  resumo AS "Efeito Resumido",
  join(default(requer_poder, []), ", ") AS "Pré-requisitos",
  default(requer_nivel, "—") AS "Nível Mín.",
  join(default(magias_relacionadas, []), ", ") AS "Magias Vinculadas"
  FROM "Poderes/Classe/Clérigo" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder" AND (!classes OR contains(classes, this.file.link)) AND trilha_poder = "Missas"
SORT default(ordem, 99) ASC, default(requer_nivel, 1) ASC, file.name ASC
```

---

### 📜 4. Trilha de Liturgia Mágica & Oração
Fortalecimento da conjuração, redução de custos em PM, terrenos consagrados e milagres diretos:

```dataview
TABLE
  resumo AS "Efeito Resumido",
  join(default(requer_poder, []), ", ") AS "Pré-requisitos",
  default(requer_nivel, "—") AS "Nível Mín.",
  join(default(magias_relacionadas, []), ", ") AS "Magias Vinculadas"
  FROM "Poderes/Classe/Clérigo" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder" AND (!classes OR contains(classes, this.file.link)) AND trilha_poder = "Liturgia & Oração"
SORT default(ordem, 99) ASC, default(requer_nivel, 1) ASC, file.name ASC
```

---

### 🌟 5. Trilha Geral
```dataview
TABLE
  resumo AS "Efeito Resumido",
  join(default(requer_poder, []), ", ") AS "Pré-requisitos",
  default(requer_nivel, "—") AS "Nível Mín."
  FROM "Poderes/Classe/Clérigo" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder" AND (!classes OR contains(classes, this.file.link)) AND (trilha_poder = "Geral" OR !trilha_poder)
SORT default(requer_nivel, 1) ASC, file.name ASC
```