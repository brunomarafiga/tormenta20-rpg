---
tipo: dm-screen
sistema: tormenta20-jda
nome: "Escudo do Mestre & Painel Central"
tags:
  - rpg
  - t20
  - dm-screen
  - campanha
---

# 🛡️ Escudo do Mestre — Tormenta 20 & Deuses de Arton

Bem-vindo ao seu painel central de condução de mesa de RPG. Aqui você encontra ferramentas de rolagem, monitor de jogadores, tabela rápida das 35 condições, regras de combate, descansos e filtros instantâneos da ontologia de Arton.

---

## 🎲 Rolador Rápido de Mesa (Dice Roller)

Clique nos dados abaixo para rolar diretamente no painel:

| Teste D20 | Dados de Dano Comuns | Dados Especiais |
| :---: | :---: | :---: |
| `dice: 1d20` | `dice: 1d4` \| `dice: 1d6` \| `dice: 1d8` | `dice: 2d6` \| `dice: 3d6` |
| `dice: 1d20+2` \| `dice: 1d20+5` | `dice: 1d10` \| `dice: 1d12` | `dice: 4d10` (Água Benta) |
| `dice: 1d20+10` \| `dice: 1d20+15` | `dice: 2d8` \| `dice: 3d8` | `dice: 1d100` (Chance/Tabela) |

---

## 👥 Monitor de Personagens da Campanha (PJs)

Acompanhe os Pontos de Vida, Mana, Defesa e Percepção do grupo em tempo real:

```dataview
TABLE
  raca AS "Raça",
  classe AS "Classe",
  nivel AS "Nível",
  pv_atual + "/" + pv_total AS "PV",
  pm_atual + "/" + pm_total AS "PM",
  defesa AS "Defesa",
  percepcao_passiva AS "Percepção",
  join(condicoes_ativas, ", ") AS "Condições Ativas"
FROM "Campanha/02_Personagens"
WHERE tipo = "personagem-pj"
SORT file.name ASC
```

---

## ⚠️ As 35 Condições de Tormenta 20 (Referência Rápida)

| Condição | Resumo Mecânico Operacional de Mesa |
| :--- | :--- |
| **Abalado** | –2 em testes de perícia. Se ficar abalado novamente, fica Apavorado. |
| **Agarrado** | Desprevenido, –2 no ataque, imóvel, não pode atacar à distância/lançar magias sem teste. |
| **Alquebrado** | O custo em PM de todas as suas habilidades e magias aumenta em +1. |
| **Apavorado** | –5 em perícias, foge da fonte do medo. Não pode se aproximar voluntariamente. |
| **Atordoado** | Desprevenido e não pode realizar ações. |
| **Caído** | –5 em ataques corpo a corpo e deslocamento 1,5m. Sofre –5 contra ataques corporais (+5 contra distância). |
| **Cego** | Desprevenido, –5 na Defesa, lento, falha em testes visuais; todos os alvos têm camuflagem total (50%). |
| **Confuso** | Comporta-se de modo aleatório (1d6 no início do turno: foge, ataca aliado, pasmo, age normal). |
| **Debilitado** | –5 em testes de atributos físicos (For, Des, Con) e perícias baseadas neles. |
| **Desprevenido** | Sofre –5 na Defesa e –5 em Reflexos. Não pode fazer reações nem ataques de oportunidade. |
| **Doente** | Sob efeito de enfermidade; não recupera PV/PM por descanso e sofre penalidade conforme a doença. |
| **Em Chamas** | Sofre 1d6 de dano de fogo no início de cada turno até apagar (ação padrão + Reflexos CD 15). |
| **Enfeitiçado** | Considera a fonte do efeito como amigo íntimo (atitude Prestativa); não ataca seus aliados. |
| **Enjoado** | Só pode realizar uma ação padrão OU uma ação de movimento por rodada (não ambas). |
| **Enredado** | Lento, vulnerável e sofre –2 nos testes de ataque. |
| **Envenenado** | Sob efeito de toxina; perde PV periodicamente ou sofre penalidade de atributo até resistir (Fortitude). |
| **Esmorecido** | –5 em testes de atributos mentais (Int, Sab, Car) e perícias baseadas neles. |
| **Exausto** | Debilitado, esmorecido e lento. Se ficar exausto novamente, fica Inconsciente. |
| **Fascinado** | –5 em Percepção, não pode agir exceto prestar atenção no objeto/criatura fascinante. |
| **Fatigado** | Fraco e vulnerável. Se ficar fatigado novamente, fica Exausto. |
| **Fraco** | –2 em testes de atributos físicos (For, Des, Con) e perícias baseadas neles. |
| **Frustrado** | –2 em testes de atributos mentais (Int, Sab, Car) e perícias baseadas neles. |
| **Imóvel** | Deslocamento 0m. Não pode usar habilidades ou ações que envolvam movimento físico. |
| **Inconsciente** | Indefeso e não pode realizar ações. Desperta se sofrer dano ou passar em teste de Percepção. |
| **Indefeso** | Desprevenido, –10 na Defesa, falha automática em Reflexos. Sofre Golpe de Misericórdia se adjacente. |
| **Lento** | Todos os seus deslocamentos são reduzidos à metade e não pode correr ou fazer investida. |
| **Ofuscado** | Sofre –2 em testes de ataque e testes de Percepção. |
| **Paralisado** | Imóvel e indefeso. Só pode realizar ações puramente mentais. |
| **Pasmo** | Não pode realizar nenhuma ação na rodada, mas mantém sua Defesa normal. |
| **Petrificado** | Inconsciente e transformado em estátua de pedra com RD 10. |
| **Sangrando** | No início de cada turno, faz teste de Constituição (CD 15); se falhar, perde 1d6 PV. |
| **Sobrecarregado** | Lento e sofre penalidade de armadura –2 (ou aumenta a penalidade existente em –2). |
| **Surdo** | Sofre –5 em Iniciativa, falha automática em testes de audição e –2 para lançar magias com componente verbal. |
| **Surpreendido** | Desprevenido e não pode realizar ações ou reações na primeira rodada de combate. |
| **Vulnerável** | Sofre –2 na Defesa. |

---

## ⚔️ Manobras e Regras Táticas de Combate

- **Manobra de Combate (Luta vs Luta do Alvo):**
  - **Agarrar:** Alvo fica desprevenido e imóvel (você também fica imóvel).
  - **Derrubar:** Alvo cai no chão (fica Caído).
  - **Desarmar:** Derruba a arma ou item empunhado pelo alvo no mesmo quadrado.
  - **Empurrar:** Afasta o alvo 1,5m (+1,5m para cada 5 pontos de diferença no teste).
  - **Quebrar:** Causa dano direto à arma ou escudo do adversário.
- **Modificadores de Combate:**
  - **Flanquear:** +2 no teste de ataque corpo a corpo (aliado em lado oposto).
  - **Cobertura Leve:** +2 na Defesa. **Cobertura Total:** +5 na Defesa.
  - **Camuflagem Leve:** 20% de chance de falha no ataque. **Total:** 50% de chance de falha.
  - **Investida:** Ação completa; move até o dobro do deslocamento e faz um ataque com +2 no teste (–2 na Defesa até próximo turno).

---

## ⏱️ CDs de Perícias & Regras de Descanso

| Dificuldade | CD | Exemplo de Desafio |
| :--- | :---: | :--- |
| **Fácil** | **10** | Escalar muro com corda, notar emboscada óbvia, ouvir passos na pedra. |
| **Médio** | **15** | Saltar fosso de 3m, arrombar tranca comum, acalmar animal selvagem. |
| **Difícil** | **20** | Identificar magia rara, equilibrar-se em corda bamba, decifrar código. |
| **Desafiador** | **25** | Rastrear criatura na chuva, convencer rei hostil, resistir a veneno letal. |
| **Quase Impossível**| **30** | Escalar superfície de vidro liso, saltar abismo de 9m, notar assassino invisível. |

- **Descanso Ruim:** Dormir na armadura, no chão frio ou sob vigília tensa = **Nenhum PV ou PM recuperado**.
- **Descanso Normal:** Dormir em acampamento montado ou estalagem simples = **Recupera PV e PM iguais ao seu Nível**.
- **Descanso Confortável:** Cama macia, refeição quente e segurança = **Recupera 2x o Nível em PV e PM**.
- **Descanso Luxuoso:** Palácio, estalagem de luxo com banho e banquete = **Recupera 3x o Nível em PV e PM**.

---

## 📜 Sessões & Registro de Campanha

```dataview
TABLE
  data_sessao AS "Data",
  nivel_grupo AS "Nível do Grupo",
  resumo AS "Resumo da Sessão"
FROM "Campanha/01_Sessões"
WHERE tipo = "sessao-rpg"
SORT data_sessao DESC
```

---

## 🔍 Buscadores Instantâneos de Arton

### 🔮 Consultar Magia
```dataview
TABLE tipo_magia AS "Tipo", circulo AS "Círculo", escola AS "Escola", execucao AS "Execução", alcance AS "Alcance"
FROM "Magias"
WHERE tipo = "magia"
SORT circulo ASC, file.name ASC
LIMIT 15
```

### ⚔️ Consultar Ameaça / Monstro
```dataview
TABLE nd AS "ND", tipo_criatura AS "Tipo", pv_total AS "PV", defesa AS "Defesa"
FROM "Campanha/03_NPCs e Ameaças"
WHERE tipo = "ameaca" OR tipo = "npc"
SORT nd ASC, file.name ASC
```


### 🛡️ Consultar Classes de Personagem
```dataview
TABLE pv_inicial + " (+" + pv_por_nivel + "/nv)" AS "PV", pm_inicial + " (+" + pm_por_nivel + "/nv)" AS "PM", join(proficiencias, ", ") AS "Proficiências", fonte AS "Livro"
FROM "Classes"
WHERE tipo = "classe" AND file.name != "_Índice Geral de Classes"
SORT file.name ASC
```

### ⚡ Consultar Habilidades de Classe
```dataview
TABLE classe AS "Classe", nivel AS "Nível", resumo AS "Efeito Resumido"
FROM "Habilidades/Classes"
WHERE tipo = "habilidade" AND subtipo = "habilidade-de-classe"
SORT classe ASC, nivel ASC, file.name ASC
LIMIT 20
```
