---
tipo: encantamento
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"             # "Tormenta20 JdA" | "Atlas de Arton" | "Heróis de Arton" | "Ameaças de Arton" | "Deuses de Arton" | "Dragão Brasil 199"
nome: "Nome do Encantamento"
categoria_aplicavel: "armas"
slot_consumido: 1
---

# Nome do Encantamento

> [!t20-restricao]
> - **Categoria aplicável:** Arma / Armadura / Escudo / Esotérico
> - **Grau mínimo:** Menor / Médio / Maior
> - **Slots consumidos:** 1 ou 2
> - **Pré-requisitos:** Nenhum ou encantamento específico
> - **Fonte:** Tormenta20 JdA ou Heróis de Arton

## Efeito

`[Descrição mecânica literal do encantamento.]`

## Aplicação

- `[tipo ou categoria de item]`
- `[aumento de preço ou custo de matéria-prima]`
- `[aumento de CD de Ofício]`

## Validação

- Item mágico menor: 1 encanto.
- Item mágico médio: 2 encantos.
- Item mágico maior: 3 encantos.
- Encantamentos que contam como dois ocupam dois slots.
- Vestuário comum e ferramentas não recebem encantos; usam regras próprias de acessórios ou melhorias.

---

Em **Tormenta20** (_Edição Jogo do Ano_, complementado por _Heróis de Arton_), os **Encantamentos** representam a camada de feitiçaria permanente entretecida na própria matéria do equipamento. Enquanto as _Melhorias_ são mundanas e de forja, os _Encantos_ são propriedades arcanas ou divinas que transformam o equipamento em um **Item Mágico**.

Abaixo está a **ontologia completa dos encantamentos**, estruturada por regras ontológicas, categorias elegíveis e catálogo funcional.

---

# 1. Regras Ontológicas dos Encantamentos

1. **Limite Rígido de Slots:** Um item pode receber de **1 a 3 encantos**:
    - **Item Mágico Menor:** 1 encanto.
    - **Item Mágico Médio:** 2 encantos.
    - **Item Mágico Maior:** 3 encantos.
2. **Encantos que Consomem Múltiplos Slots:** Certos encantos de poder descomunal (como _Energética_, _Lancinante_ e _Magnífica_) **contam como dois encantos** para o limite do item e para a tabela de preço.
3. **Pré-requisito Estrutural (Itens Superiores):** Um item pode acumular melhorias mundanas e encantamentos mágicos. Para ser forjado com encantos, o artífice soma as CDs de Ofício de ambas as camadas.
4. **Exclusividade de Categoria:** Encantos não podem ser aplicados em itens de vestuário comum ou ferramentas — eles existem exclusivamente para **Armas**, **Armaduras & Escudos** e **Esotéricos**. _(Vestuários e joias mágicas entram como "Acessórios Específicos", que possuem regras próprias de catálogo fixo)._
5. **A Custo de Fabricação e Mercado:**

|Grau do Item|Encantos|Aumento no Preço de Mercado|Custo de Matéria-Prima (1/3)|Aumento na CD de Ofício|
|:-:|:-:|:-:|:-:|:-:|
|**Menor**|1 Encanto|+ T$ 18.000|T$ 6.000|+10|
|**Médio**|2 Encantos|+ T$ 36.000|T$ 12.000|+15|
|**Maior**|3 Encantos|+ T$ 72.000|+ T$ 24.000|+20|

---

# 2. Mapa Ontológico por Categorias de Aplicação

```
                              [ SISTEMA DE ENCANTAMENTOS ]
                                            │
       ┌────────────────────────────────────┼────────────────────────────────────┐
       ▼                                    ▼                                    ▼
[ ENCANTOS DE ARMAS ]            [ ENCANTOS DE ARMADURAS            [ ENCANTOS DE ESOTÉRICOS ]
(Corpo a Corpo & Disparo)               & ESCUDOS ]                  (Conjuradores & Focos)
```

---

## I. Encantamentos para Armas

As armas mágicas recebem encantos divididos pelos seus propósitos de combate:

### A. Dano Elemental e Energético

- **Corrosiva:** Causa **+1d6 pontos de dano de ácido**.
- **Elétrica:** Causa **+1d6 pontos de dano de eletricidade**.
- **Flamejante:** Causa **+1d6 pontos de dano de fogo**.
- **Congelante:** Causa **+1d6 pontos de dano de frio**.
- **Tumular:** Causa **+1d8 pontos de dano de trevas**.
- **Alvorada (_Heróis de Arton_):** Brilha como o sol; causa **+1d8 de dano de luz** contra mortos-vivos/sensíveis a luz e permite pagar 2 PM para cegar uma criatura em alcance curto.
- **Energética (*Conta como 2 encantos):** Converte todo o dano da arma para **dano de essência pura**, fornece **+2 nos testes de ataque** e **ignora 20 pontos de Redução de Dano (RD)** do alvo _(este é o encanto nato de A Obra-Prima de Elarion)_.

### B. Amplificação Numérica e Crítica

- **Formidável:** Fornece **+2 nos testes de ataque e rolagens de dano**.
- **Magnífica (*Conta como 2 encantos):** Fornece **+4 nos testes de ataque e rolagens de dano**.
- **Dilacerante:** Causa **+10 pontos de dano em acertos críticos**.
- **Lancinante (*Conta como 2 encantos):** O bônus numérico e multiplicadores de dano crítico são amplificados drasticamente no impacto crítico _(Pré-requisito: Dilacerante)_.

### C. Controle, Condições e Debilitação

- **Trovejante:** Quando faz um acerto crítico, a vítima fica **atordoada por 1 rodada** (Fortitude CD For ou Des evita).
- **Sanguinária:** Seus acertos deixam o alvo **sangrando**.
- **Drenante:** Em acerto crítico, **drena pontos de mana ou vida** da vítima para alimentar o usuário.
- **Excruciante:** Impõe a condição **fraco** ao ferir o alvo.
- **Venenosa:** Injeta toxina que causa **envenenamento** contínuo.
- **Anátema (_Heróis de Arton_):** Quando atinge uma criatura, a **CD para resistir às magias e habilidades dela diminui em –2 por 1 rodada**.

### D. Condução Mágica e Tática de Ação

- **Conjuradora:** Permite guardar uma magia que afete área ou criatura; descarrega a magia guardada como **ação livre no acerto do ataque sem custo de PM**.
- **Dançarina:** Permite gastar 1 ação de movimento e 1 PM para fazer a arma **flutuar e atacar sozinha** à distância com duração sustentada.
- **Veloz:** Concede **um ataque extra por rodada** ao realizar a ação agredir.
- **Defensora:** Fornece **+2 na Defesa** ao ser empunhada.
- **Piedosa:** Converte todo o dano em dano **não letal** sem penalidade.
- **Sagrada:** Causa dano extra severo contra devotos ou criaturas do Mal.
- **Profana:** Causa dano extra severo contra devotos ou criaturas do Bem.
- **Destruidora:** Concede bônus massivos de impacto contra construtos e objetos inanimados.

---

## II. Encantamentos para Armaduras e Escudos

Protegem o usuário contra agressões físicas, magias e ambientes hostis:

### A. Defesa e Salvaguarda

- **Defensor:** Concede **+2 de bônus na Defesa**.
- **Guardião (*Conta como 2 encantos):** Concede **+4 de bônus na Defesa**.
- **Invulnerável (*Conta como 2 encantos):** Concede **Redução de Dano (RD) 5 ou 10**.
- **Abascanto:** Fornece **+5 em testes de resistência contra magias**.
- **Abençoado:** Concede **Redução de Trevas 10** e **+5 em testes contra Necromancia**.

### B. Resistências Elementais Específicas

- **Gélida:** Concede **Redução de Frio 10**.
- **Flamejante / Ígnea:** Concede **Redução de Fogo 10**.
- **Cáustica:** Concede **Redução de Ácido 10**.
- **Relampejante:** Concede **Redução de Eletricidade 10** e permite emitir arcos de choque em quem ataca em corpo a corpo.
- **Abissal (_Heróis de Arton_):** Concede **Redução de Ácido e Fogo 10** e permite causar 2d6 desses tipos a criaturas adjacentes.

### C. Mobilidade e Utilidade Tática

- **Alado:** Permite gastar 2 PM para brotar asas mecânicas/etéreas e receber **deslocamento de voo 12m** (sustentada).
- **Acrobático:** Concede **+5 em Acrobacia** e **anula a penalidade de armadura** para testes dessa perícia.
- **Animado (*Exclusivo de Escudos):** O escudo **flutua ao redor do usuário defendendo sozinho**, deixando as duas mãos livres _(o equivalente a Dançarina para proteção)_.
- **Esmagador (*Exclusivo de Escudos):** Aumenta expressivamente o dano de investida e golpes com o escudo.
- **Assustador:** Emana uma aura aterrorizante que impõe condições de medo aos inimigos ao redor.
- **Fantasmagórico:** Permite ao usuário conjurar o feitiço _Manto de Sombras_ para atravessar matéria ou ficar incorpóreo.
- **Escorregadio:** Fornece bônus maciço para escapar de manobras de agarrar e imobilizações.
- **Vórtice (_Heróis de Arton_):** Permite gastar 1 PM para puxar inimigos em alcance curto para perto com um redemoinho aquático.

---

## III. Encantamentos para Itens Esotéricos (_Heróis de Arton_)

Introduzidos formalmente no capítulo de Arsenal dos Heróis para condutores mágicos (cajados, varinhas, tomos, orbes):

- **Bélico:** O esotérico assume formato de arma marcial; suas magias de dano causam **+1d10 pontos de dano de essência** extra.
- **Poderoso:** Aumenta a **CD para resistir a todas as suas magias em +1**.
- **Abafador:** Se um inimigo falhar na resistência contra sua magia, a **CD de todas as habilidades dele cai em –2 por 1 rodada**.
- **Caridoso:** Ao lançar magia benéfica em aliados gastando ao menos 1 PM, você ganha **1 PM temporário** para usar em aprimoramentos no mesmo combate.
- **Clemente:** Especializado em misericórdia; suas magias de cura curam **um dado extra do mesmo tipo**.
- **Chocante:** Adornado de topázios; magias de eletricidade causam **um dado extra de dano** e deixam a vítima **ofuscada por 1 rodada**.
- **Vigilante:** Enquanto empunhar o esotérico, você soma **+2 na sua Defesa**.

---

### Resumo para a Ficha de Khinlannas

- **A Obra-Prima de Elarion:** É uma arma mágica menor/média que já possui o encanto **Energético** (que conta como 2 encantos na tabela de poder).
- **Espaço Restante:** Por ser um item único, ele ainda tem espaço para atingir o patamar maior (recebendo um 3º encanto no futuro, como **Conjuradora**, **Dançarina** ou **Trovejante**) assim que o grupo acumular prestígio e recursos suficientes em Rhond!

🏹 Quer que a gente simule qual desses três encantos finais traria o maior salto de poder para as suas magias de Usurpador quando você alcançar o patamar veterano?