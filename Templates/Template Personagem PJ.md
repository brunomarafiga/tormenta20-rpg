---
tipo: personagem
subtipo: pj
sistema: tormenta20-jda
nome: "Nome do Personagem"
jogador: "Nome do Jogador"
status: ativo                       # ativo | inativo | morto
raca: "[[Humano]]"
origem: "Soldado"
classes:
  - "[[Guerreiro]]"
nivel: 1

# === ATRIBUTOS (T20 JdA — valores diretos) ===
for: 3
des: 1
con: 2
int: 0
sab: 1
car: 0

# === VITALS & COMBATE ===
pv_atual: 22
pv_max: 22
pm_atual: 3
pm_max: 3
defesa: 16
deslocamento: "9m (6q)"
tamanho: "Médio"
espacos_max: 16
tibares: 0

# === SLOTS DE EQUIPAMENTO (PAPERDOLL T20 JdA + HdA) ===
limite_vestidos: 4                  # Padrão T20 JdA (armadura conta; empunhados e estético não)

# 1. Empunhados (Mãos) — NÃO contam no limite de vestidos
slot_mao_principal: "[[Arco Longo]]"
slot_mao_secundaria: "*(Ocupada — 2 Mãos)*"  # ou arma leve, escudo ou esotérico

# 2. Armadura Corporal — CONTA no limite de vestidos (regra oficial JdA)
slot_armadura: "[[Armadura de Couro Batido]]"
# slot_subarmadura: "[[Veste Acolchoada]]"   # Heróis de Arton (sob armadura)

# 3. Acessórios & Vestuário Anatômico — CONTAM no limite de vestidos
# slot_cabeca: "[[Chapéu Arcano]]"           # Elmos, chapéus, tiaras, coroas
# slot_rosto: "[[Óculos]]"                   # Máscaras, óculos, tapa-olhos
slot_pescoco: "[[Estola]]"                   # Colares, amuletos, estolas, símbolos
slot_costas: "[[Capa Esvoaçante]]"           # Capas, mantos, asas
# slot_sobreveste: "[[Tabardo]]"             # Túnicas, hábitos, camisas, sobre-armadura
# slot_punhos: "[[Braçadeiras do Arqueiro]]" # Braçadeiras, braceletes, pulseiras
# slot_maos: "[[Manopla]]"                   # Luvas, manoplas, neko-te
# slot_cintura: "[[Cinto da Força do Gigante]]" # Cintos, cinturões, bandoleiras
# slot_anel_1: "[[Anel da Proteção]]"
# slot_anel_2: "[[Anel da Vitalidade]]"
slot_pes: "[[Botas Reforçadas]]"             # Botas, sandálias, grevas
# slot_extra: "[[Fitilho Consagrado]]"       # Slot flexível (T20 permite distribuir os 4 livremente)

# 4. Estético & Carga — NÃO contam no limite de vestidos
slot_estetico: "Traje de viajante / Roupa de cultista"
# slot_mochila: "[[Mochila de Aventureiro]]"

# Demais itens carregados (não equipados)
mochila:
  - "[[Corda]]"

# === INVENTÁRIO & BUILD (habilidades e poderes) ===
habilidades:
  - "[[Ataque Especial]]"
poderes:
  - "[[Ataque Poderoso]]"

# === OPCIONAIS (OMITIR QUANDO NÃO SE APLICAR) ===
# campanha: "[[Nome da Campanha]]"
# divindade: "[[Azgher]]"
# devocao_fundamentalista: false
# cd_magia: 13                      # 10 + 1/2 nível + atributo-chave
# magias:
#   - "[[Curar Ferimentos]]"
# condicoes_ativas:
#   - "[[Abalado]]"
---

# 🧙 Nome do Personagem
*[[Humano]] • [[Guerreiro]] 1 • Origem: Soldado*
<!-- Se devoto, adicionar: • Devoto de [[Azgher]] -->

> [!t20-stats]
> - ❤️ <span class="t20-vermelho">PV:</span> `= this.pv_atual` / `= this.pv_max`
> - 💧 <span class="t20-ciano">PM:</span> `= this.pm_atual` / `= this.pm_max`
> - 🛡️ <span class="t20-laranja">Defesa:</span> `= this.defesa`
> - 🏃 <span class="t20-verde">Deslocamento:</span> `= this.deslocamento`
> - 🎒 <span class="t20-roxo">Carga Máx.:</span> `= this.espacos_max` espaços
> - 💰 <span class="t20-amarelo">Tibares:</span> T$ `= this.tibares`

---

## 📊 Atributos

| Força | Destreza | Constituição | Inteligência | Sabedoria | Carisma |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **`= this.for`** | **`= this.des`** | **`= this.con`** | **`= this.int`** | **`= this.sab`** | **`= this.car`** |

---

## ⚔️ Combate & Ações

| Ataque / Arma | Teste | Dano | Crítico | Tipo | Alcance / Notas |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **[[Espada Longa]]** | +5 | 1d8+3 | 19/x2 | Corte | Uma mão (1d10 duas mãos) |
| **Ataque Desarmado** | +5 | 1d3+3 | 20/x2 | Impacto | Não letal |

- **Redução de Dano (RD) / Imunidades:** Nenhuma
- **Proficiências:** Armas Simples, Armas Marciais, Armaduras Leves, Armaduras Pesadas, Escudos

<!-- OPCIONAL: manter apenas se o personagem for devoto ou tiver restrições de classe/variante -->
> [!t20-restricao] Devoção & Restrições Ativas
> - **Divindade:** [[Azgher]] *(conferir Obrigações & Restrições na nota da divindade)*
> - **Penalidade de Armadura:** –0

---

## 🎯 Perícias

*Fórmula JdA: metade do nível + atributo + bônus de treino (+2 do 1º ao 6º, +4 do 7º ao 14º, +6 do 15º ao 20º) + outros.*

### Perícias Críticas & Treinadas

| Perícia | Atrib. | Treinada | Bônus Total | Notas |
| :--- | :---: | :---: | :---: | :--- |
| **[[Iniciativa]]** | Des | ❌ | +1 | — |
| **[[Percepção]]** | Sab | ❌ | +1 | — |
| **[[Fortitude]]** | Con | ✅ | +4 | Resistência |
| **[[Reflexos]]** | Des | ❌ | +1 | Resistência |
| **[[Vontade]]** | Sab | ❌ | +1 | Resistência |
| **[[Luta]]** | For | ✅ | +5 | Ataque corpo a corpo |
| **[[Atletismo]]** | For | ✅ | +5 | Penalidade de armadura |

> [!t20-lore]- Demais Perícias (Não Treinadas / Situacionais)
> - **Com Penalidade de Armadura:** [[Acrobacia]] (+1), [[Furtividade]] (+1), [[Ladinagem]] *(apenas treinada)*
> - **Demais Físicas/Sociais:** [[Cavalgar]] (+1), [[Cura]] (+1), [[Diplomacia]] (+0), [[Enganação]] (+0), [[Intimidação]] (+0), [[Intuição]] (+1), [[Investigação]] (+0), [[Sobrevivência]] (+1)
> - **Apenas Treinadas:** [[Adestramento]], [[Atuação]], [[Conhecimento]], [[Guerra]], [[Jogatina]], [[Misticismo]], [[Nobreza]], [[Ofício]], [[Pilotagem]], [[Religião]]

---

## ⚡ Habilidades & Poderes

```dataview
TABLE WITHOUT ID
  file.link AS "Poder / Habilidade",
  default(categoria, default(subtipo, tipo)) AS "Origem",
  default(ativacao, "—") AS "Ativação",
  default(custo_pm, 0) + " PM" AS "Custo",
  default(resumo, "—") AS "Efeito Resumido"
FROM "Poderes" OR "Habilidades"
WHERE contains(default(this.poderes, []), file.link)
   OR contains(string(this.poderes), file.name)
   OR contains(default(this.habilidades, []), file.link)
   OR contains(string(this.habilidades), file.name)
SORT tipo ASC, file.name ASC
```

<!-- OPCIONAL: manter apenas para personagens conjuradores -->
---

## ✨ Grimório & Magias

> [!t20-magia] Parâmetros de Conjuração
> - **Atributo-Chave:** Sabedoria / Inteligência / Carisma
> - **CD de Resistência:** `= default(this.cd_magia, "—")`
> - **Limite de PM por Magia:** `= this.nivel` PM *(+ bônus de habilidades)*

```dataview
TABLE WITHOUT ID
  file.link AS "Magia",
  circulo + "º" AS "Círc.",
  default(custo_pm, "—") + " PM" AS "PM",
  default(execucao, "—") AS "Execução",
  default(alcance, "—") AS "Alcance",
  default(duracao, "—") AS "Duração",
  default(resistencia, "Nenhuma") AS "Resistência"
FROM "Magias"
WHERE tipo = "magia" AND (contains(default(this.magias, []), file.link) OR contains(string(this.magias), file.name))
SORT circulo ASC, file.name ASC
```

---

## 🎒 Equipamento (Paperdoll)

> [!t20-item] Controle de Itens Vestidos (T20 JdA)
> 🧥 **Benefícios Vestidos Ativos:** **`= length(nonnull(list(this.slot_armadura, this.slot_subarmadura, this.slot_cabeca, this.slot_rosto, this.slot_pescoco, this.slot_costas, this.slot_sobreveste, this.slot_punhos, this.slot_maos, this.slot_cintura, this.slot_anel_1, this.slot_anel_2, this.slot_pes, this.slot_extra)))` / `= default(this.limite_vestidos, 4)`**  
> *(Regra JdA: armadura e sub-armadura contam no limite; mãos, mochila e traje estético não contam.)*

> [!t20-paperdoll]
> > [!t20-slot-group] 👑 Cabeça & Tronco
> > - 🎩 **Cabeça:** `= default(this.slot_cabeca, "—")`
> > - 👓 **Rosto / Olhos:** `= default(this.slot_rosto, "—")`
> > - 📿 **Pescoço:** `= default(this.slot_pescoco, "—")`
> > - 🧣 **Costas / Ombros:** `= default(this.slot_costas, "—")`
> > - 👘 **Sobreveste:** `= default(this.slot_sobreveste, "—")`
> > - ✨ **Slot Extra:** `= default(this.slot_extra, "—")`
>
> > [!t20-slot-group] ⚔️ Combate & Corpo
> > - 🗡️ **Mão Principal:** `= default(this.slot_mao_principal, "—")`
> > - 🛡️ **Mão Secundária:** `= default(this.slot_mao_secundaria, "—")`
> > - 🦺 **Armadura:** `= default(this.slot_armadura, "—")`
> > - 🧵 **Sub-armadura:** `= default(this.slot_subarmadura, "—")`
> > - 👕 **Estético *(0/4)*:** `= default(this.slot_estetico, "—")`
> > - 🎒 **Mochila:** `= default(this.slot_mochila, "—")`
>
> > [!t20-slot-group] 🧤 Membros & Joias
> > - 🦾 **Punhos / Braços:** `= default(this.slot_punhos, "—")`
> > - 🧤 **Mãos / Luvas:** `= default(this.slot_maos, "—")`
> > - 🪢 **Cintura:** `= default(this.slot_cintura, "—")`
> > - 💍 **Anel 1:** `= default(this.slot_anel_1, "—")`
> > - 💍 **Anel 2:** `= default(this.slot_anel_2, "—")`
> > - 👢 **Pés:** `= default(this.slot_pes, "—")`

### 📦 Catálogo Mecânico (Equipados + Mochila)
```dataview
TABLE WITHOUT ID
  file.link AS "Item",
  default(subtipo, default(categoria, "—")) AS "Categoria",
  default(espacos, 0) AS "Espaços",
  "T$ " + default(preco_ts, "—") AS "Valor Base"
FROM "Itens" AND -"Templates"
WHERE tipo = "item" AND (
  contains(list(
    this.slot_mao_principal, this.slot_mao_secundaria,
    this.slot_armadura, this.slot_subarmadura,
    this.slot_cabeca, this.slot_rosto, this.slot_pescoco, this.slot_costas,
    this.slot_sobreveste, this.slot_punhos, this.slot_maos, this.slot_cintura,
    this.slot_anel_1, this.slot_anel_2, this.slot_pes, this.slot_extra,
    this.slot_estetico, this.slot_mochila
  ), file.link)
  OR contains(default(this.mochila, []), file.link)
)
SORT file.name ASC
```

### 🧪 Melhorias, Itens Únicos & Consumíveis
- **Itens Únicos / Personalizados:** *(ex.: A Obra-Prima de Elarion — Arco Longo consciente)*
- **Consumíveis (com quantidade):** *(ex.: 2x [[Bálsamo Restaurador]] — 1 espaço)*
- **Documentos & Tesouros:** *(cartas, chaves, itens de campanha)*

---

## 📖 Histórico & Diário de Campanha

> [!t20-lore]- Background, Motivações & Vínculos
> - **Objetivo Atual:** —
> - **Aliados / Contatos:** —
> - **Rivalidades / Dívidas:** —

### Sessões com Participação
```dataview
LIST
FROM "Campanha/01_Sessões" AND -"Templates"
WHERE contains(file.outlinks, this.file.link)
SORT file.name DESC
```
