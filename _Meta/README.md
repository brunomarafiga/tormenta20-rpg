---
tipo: documentacao
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "README — Documentação Geral do Cofre"
---

# 📜 Cofre Tormenta 20 — Wiki Hiperlinkada no Obsidian

> Enciclopédia interativa do sistema **Tormenta 20**, abrangendo o Jogo do Ano e todos os suplementos disponíveis no projeto, com páginas-índice (MOCs), vocabulários controlados e consultas dinâmicas via Dataview.

---

## Visão Geral

| Métrica | Valor | Detalhes |
|---|---|---|
| Total de arquivos Markdown | **2 082** | Arquivos Markdown do cofre, excluindo `.obsidian/`, `scratch/` e `.system_generated/` |
| Classes | **36** | 14 básicas + Treinador (*HdA*) + Frade (*DdA*) + 14 variantes (*HdA*) + 4 DB199 + 2 DB suplementares |
| Poderes de Classe | **354** | Distribuídos por classe + pasta `Poderes/Classe/Comuns/` |
| Poderes Concedidos | **147** | Poderes concedidos pelas divindades do Panteão |
| Poderes de Combate | **40** | Poderes gerais marciais |
| Poderes de Raça | **77** | Talentos e aprimoramentos de linhagem (*Heróis de Arton*) |
| Magias | **229** | Divinas, Arcanas e Universais (1º ao 5º Círculo) |
| Divindades | **21** | 20 Deuses Maiores do Panteão + Tilliann (deus caído/menor) |
| Origens | **131** | 35 básicas, 66 regionais e 30 especiais |
| Raças | **23** | Raças básicas e suplementares já catalogadas no cofre |
| Habilidades Raciais | **75** | Características atômicas das raças |
| Itens de Equipamento | **655** | Armas, armaduras, itens superiores, alquimia, vestuário, suplementos, aparatos, munições e acessórios mágicos |
| Condições | **35** | Estados e penalidades mecânicas |
| Perícias | **29** | Perícias do sistema com descrições e testes estendidos |
| Templates | **16** | Modelos padronizados para criação de novas notas |

### Fontes Oficiais Cobertas (Strings de `fonte` no YAML)

| String Canônica no YAML | Publicação / Descrição |
|---|---|
| `"Tormenta20 JdA"` | *Tormenta20: Edição Jogo do Ano* (Livro Básico) |
| `"Heróis de Arton"` | *Heróis de Arton* (Classes, Variantes, Raças, Poderes) |
| `"Deuses de Arton"` | *Deuses de Arton* (Divindades, Poderes Concedidos, Frade, Itens Sagrados) |
| `"Dragão Brasil 199"` | *Dragão Brasil nº 199* (Classes Usurpador, Necromante, Comandante, Vanguarda) |
| `"Atlas de Arton"` | *Atlas de Arton* (Origens regionais, cidades, povos e contextos geopolíticos) |
| `"Ameaças de Arton"` | *Ameaças de Arton* (Ameaças, poderes e regras de itens suplementares) |

---

## Estrutura de Diretórios

```
Tormenta 20/
│
├── 00 - Home.md                           ← Portal Principal Raiz de Navegação
├── historico_de_alteracoes.md             ← Registro de manutenções e evolução do cofre
│
├── _Meta/                                 ← Metadocumentação do projeto
│   ├── README.md                          ← (este arquivo de referência e vocabulário)
│   ├── ARQUITETURA.md                     ← Filosofia das 3 camadas, invariantes e manutenção
│   └── t20-obsidian-rpg-system.md         ← Cópia das regras de ontologia e queries do workspace
│
├── Deuses/ (21 notas)                     ← 20 Deuses Maiores + Tilliann
│   └── 00 - Panteão de Arton (MOC).md     ← Portal de Deuses, Devoções e Poderes Concedidos
│
├── Classes/ (36 notas)                    ← Notas principais de classe
│   ├── _Índice Geral de Classes.md        ← Tabela Dataview completa de classes e variantes
│   ├── Arcanista.md, Bárbaro.md, ...      ← Classes básicas
│   └── Usurpador.md, Necromante.md, ...   ← Classes variantes e Dragão Brasil
│
├── Poderes/                               ← Poderes categorizados
│   ├── _Índice Geral de Poderes.md        ← Busca global de poderes
│   ├── Classe/                            ← Poderes exclusivos de classe
│   │   ├── Comuns/                        ← Poderes compartilhados (ex: Aumento de Atributo)
│   │   ├── Arcanista/ (42 notas)          ← Trilhas: Metamagia & Geral, Feiticeiro, Bruxo, Mago, Raio Arcano
│   │   ├── Clérigo/ (34 notas)            ← Trilhas: Liturgia & Oração, Missas, Canalização, Prece de Combate
│   │   ├── Frade/ (29 notas)
│   │   └── ... (demais classes)
│   ├── Combate/ (40 notas)                ← Poderes marciais gerais
│   ├── Concedidos/ (147 notas)            ← Poderes concedidos pelas divindades
│   ├── Destino/ (20 notas)                ← Poderes de perícia e utilidade
│   ├── Magia/ (8 notas)                   ← Poderes genéricos de conjuração
│   ├── Tormenta/ (22 notas)               ← Poderes aberrantes da Tormenta
│   ├── Origem/ (35 notas)                 ← Benefícios de origens
│   └── Raça/ (77 notas)                   ← Poderes gerais raciais (Heróis de Arton)
│
├── Magias/ (229 notas)                    ← Magias por tradição e círculo
│   ├── _Índice Geral de Magias.md         ← Tabela consolidada com filtros por círculo/escola
│   ├── Divinas/ (1º ao 5º Círculo)
│   ├── Arcanas/ (1º ao 5º Círculo)
│   └── Universais/ (1º ao 5º Círculo)
│
├── Raças/ (19 notas)                      ← Raças jogáveis oficiais
│   └── _Índice Geral de Raças.md          ← Tabela de atributos e habilidades raciais
│
├── Origens/ (131 notas)                   ← Origens básicas, regionais e especiais
│   └── _Índice Geral de Origens.md        ← Índice Dataview das origens
│
├── Habilidades/                           ← Características e features de classe/raça
│   ├── _Índice Geral de Habilidades.md
│   ├── Raciais/ (75 notas)                ← Habilidades inatas das raças
│   └── Classes/ (34 subpastas)            ← Habilidades automáticas de nível de cada classe
│
├── Itens/ (655 notas)                     ← Equipamentos catalogados com regras JdA e suplementos
│   ├── _Índice Geral de Itens.md
│   ├── Armas/ (42), Escudos/ (2)
│   ├── Armaduras/ (Leves, Pesadas)
│   ├── Artefatos Divinos/ (inclui Pratos Sagrados/)
│   ├── Itens Sagrados/ (25)
│   ├── Alquimia e Poções/ (30), Venenos/ (10)
│   ├── Aventura/ (17), Ferramentas/ (12), Vestuário/ (22), Esotéricos/ (10)
│   ├── Veículos e Montarias/ (12), Alimentos e Hospedagem/ (7)
│   ├── Modificações e Materiais/ (24)     ← Melhorias de itens superiores
│   └── Encantamentos/ (15)                ← Encantamentos mágicos de armas/armaduras
│
├── Mecânicas e Condições/                 ← Regras de apoio e combate
│   ├── Condições/ (35 notas)              ← Estados (Abalado, Cego, Sangrando, etc.)
│   ├── Perícias/ (29 notas)               ← Regras de testes, CDs e perícias
│   └── Regras/ (12 notas)                 ← Ações em combate, descanso, manobras
│
├── Templates/ (16 notas)                  ← Modelos padronizados para criação de notas
│   ├── Template Classe.md
│   ├── Template Raça.md
│   ├── Template Deus.md
│   ├── Template Magia.md
│   ├── Template Poder.md
│   ├── Template Habilidade.md
│   ├── Template Perícia.md
│   ├── Template Origem.md
│   ├── Template Melhoria.md
│   ├── Template Encantamento.md
│   ├── Template Item.md
│   ├── Template Sessão.md
│   ├── Template Personagem PJ.md
│   ├── Template Ameaça e NPC.md
│   ├── Template Local e Masmorra.md
│   └── Template Encontro.md
│
├── Campanha/                              ← Gestão de mesas de jogo
│   ├── 01_Sessões/
│   ├── 02_Personagens/
│   └── 03_NPCs e Ameaças/
│
└── .obsidian/
    └── snippets/
        └── tormenta20.css                 ← Estilização de callouts e badges
```

---

## Navegação — As 3 Camadas da Wiki

### Camada 1 — Portais de Entrada (MOCs e Índices)
Use os portais como ponto de partida para explorar o cofre sem abrir dezenas de pastas:

| Portal | Caminho | O que reúne |
|---|---|---|
| **Portal Raiz** | `00 - Home.md` | Painel geral em cards para todos os domínios do sistema e campanha |
| **Panteão de Arton (MOC)** | `Deuses/00 - Panteão de Arton (MOC).md` | 20 Deuses Maiores + Tilliann, crenças, poderes e magias |
| **Índice Geral da Biblioteca** | `00 - Índice Geral da Biblioteca.md` | Mapa mestre que leva aos índices específicos por domínio |
| **Índice de Classes** | `Classes/_Índice Geral de Classes.md` | Tabela dinâmica de classes e variantes com PV, PM e perícias |
| **Índice de Poderes** | `Poderes/_Índice Geral de Poderes.md` | Filtros por tipo, classe e requisitos |
| **Índice de Magias** | `Magias/_Índice Geral de Magias.md` | Filtros por círculo, tradição, escola e PM |
| **Índice de Raças** | `Raças/_Índice Geral de Raças.md` | Modificadores e links para habilidades raciais |
| **Índice de Origens** | `Origens/_Índice Geral de Origens.md` | Origens básicas, regionais e especiais |
| **Índice de Habilidades** | `Habilidades/_Índice Geral de Habilidades.md` | Habilidades raciais e de classe |
| **Índice de Itens** | `Itens/_Índice Geral de Itens.md` | Equipamento por categoria, preço (T$) e espaços |
| **Índice de Mecânicas** | `Mecânicas e Condições/_Índice Geral de Mecânicas.md` | Perícias, condições e regras |
| **Índice da Campanha** | `Campanha/_Índice Geral da Campanha.md` | Sessões, personagens e ameaças |

### Camada 2 — Leitura Limpa com Callouts Temáticos
Cada nota utiliza blocos estilizados pelo snippet `tormenta20.css`:

| Callout | Propósito | Exemplo de Aplicação |
|---|---|---|
| `[!t20-stats]` | Badges horizontais (título ocultado pelo CSS) | PV, PM, atributos, deslocamento, proficiências |
| `[!t20-magia]` | Parâmetros essenciais de magias | Círculo, escola, execução, alcance, duração, resistência |
| `[!t20-pm]` | Destaque de custos de mana | Custo base e aprimoramentos de PM |
| `[!t20-poder]` | Bloco mecânico de poder ou habilidade | Requisitos, tipo de ação e efeito resumido |
| `[!t20-restricao]` | Regras de adaptação ou proibições | Poderes proibidos de variantes, restrições de conduta |
| `[!t20-item]` | Parâmetros de equipamento | Preço em T$, espaços (JdA), dano, crítico, alcance |
| `[!t20-lore]` | Contextualização narrativa | Lore de deuses, ambientação e história |
| `[!ameaca]` / `[!t20-statblock]` | Bloco de ficha de NPC/Monstro | ND, estatísticas de combate e ataques |
| `[!combate]` | Painel de regras ou combate | Táticas de encontro, ordem de iniciativa |
| `[!sessao]` | Diário de campanha | Resumo de acontecimentos da mesa |
| `[!local]` / `[!tesouro]` | Ambientes e recompensas | Locais de exploração, pilhagem e tesouros |

### Camada 3 — Relacionamentos Calculados (Dataview)
Listas dependentes são geradas dinamicamente via consultas Dataview para evitar duplicação manual:

```dataview
TABLE
  resumo AS "Efeito Resumido",
  join(default(requer_poder, []), ", ") AS "Pré-requisitos",
  default(requer_nivel, "—") AS "Nível Mín.",
  join(default(magias_relacionadas, []), ", ") AS "Magias Vinculadas"
FROM "Poderes/Classe/Clérigo" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder"
  AND trilha_poder = "Liturgia & Oração"
  AND (!classes OR contains(classes, this.file.link))
SORT default(ordem, 999) ASC, default(requer_nivel, 1) ASC, file.name ASC
```

---

## Vocabulário YAML Controlado (Schema Canônico)

### Tabela Mestra de Taxonomia Ontológica

| Entidade / Domínio | `tipo` | `subtipo` ou `categoria` | Pasta Canônica | Campos-Chave no YAML | Modo de Aquisição / Papel no Sistema |
|---|---|---|---|---|---|
| **Classes Básicas** | `classe` | `subtipo: classe-base` | `Classes/` | `pv_inicial`, `pv_por_nivel`, `pm_inicial`, `pericias_basicas`, `proficiencias` | Escolha no 1º nível de personagem. Define progressão base. |
| **Classes Variantes** | `classe` | `subtipo: classe-variante` | `Classes/` | `classe_base`, `poderes_proibidos`, `proibe_devocao` | Substituição da classe base (*Heróis de Arton* / *DB199*). |
| **Habilidades de Classe** | `habilidade` | `subtipo: habilidade-de-classe` | `Habilidades/Classes/` | `classe`, `nivel`, `ativacao`, `custo_pm` | **Automática/Inata** ao atingir o nível da classe (ex.: *Ataque Furtivo*, *Cura Pelas Mãos*). |
| **Habilidades Gerais** | `habilidade` | `subtipo: habilidade-racial`, `habilidade-de-classe`, `habilidade-de-origem` ou `habilidade-de-criatura` | `Habilidades/` | `ativacao`, `custo_pm`, `natureza`, `frequencia`, `gatilho`, `acumulo` | Entidade mecânica automática ou ativada por raça, classe, origem ou criatura. Poderes são habilidades adquiríveis e modulares. |
| **Poderes de Classe** | `poder` | `categoria: classe` | `Poderes/Classe/<Classe>/` | `classe`, `trilha_poder`, `requer_nivel`, `requer_poder`, `ordem` | **Adquirido**: a cada nível a partir do 2º (trocando poder de classe). |
| **Poderes Compartilhados** | `poder` | `categoria: classe` | `Poderes/Classe/Comuns/` | `classes: ["[[Classe A]]", "[[Classe B]]"]` | **Adquirido**: comum a várias classes (ex.: *Aumento de Atributo*, *Conhecimento Mágico*). |
| **Raças** | `raca` | — | `Raças/` | `tipo_criatura`, `tamanho`, `deslocamento`, `atributos`, `sentidos`, `habilidades_base`, `categoria_racial`, `ancestralidade`, `origem_cultural`, `raca_base` | Escolha na criação. Define biologia, tamanho, modificadores, sentidos e relações culturais/mecânicas. |
| **Habilidades Raciais** | `habilidade` | `subtipo: habilidade-racial` | `Habilidades/Raciais/` | `raca: ["[[Raça]]"]`, `ativacao`, `custo_pm`, `resumo` | **Inata/Gratuita**: concedida automaticamente no 1º nível (ex.: *Sangue Mágico*, *Tradição de Heredrimm*). |
| **Poderes de Raça** | `poder` | `categoria: racial` | `Poderes/Raça/` | `requer_raca: ["[[Raça]]"]`, `ordem`, `requer_poder`, `exclui_raca`, `requer_traco` | **Adquirido**: poder geral opcional de *Heróis de Arton* com pré-requisito racial (ex.: *Citadino*, *Cascos Poderosos*). |
| **Poderes Gerais (Combate)** | `poder` | `categoria: combate` | `Poderes/Combate/` | `requer_atributo`, `requer_pericia`, `requer_poder` | **Adquirido**: poderes marciais gerais (ex.: *Ataque Poderoso*, *Acuidade com Arma*). |
| **Poderes Gerais (Destino)** | `poder` | `categoria: destino` | `Poderes/Destino/` | `requer_atributo`, `requer_pericia`, `requer_nivel` | **Adquirido**: perícias, sorte e utilidade (ex.: *Sortudo*, *Investigador*). |
| **Poderes Gerais (Magia)** | `poder` | `categoria: magia` | `Poderes/Magia/` | `requer_poder`, `magias_relacionadas` | **Adquirido**: metamagia e aprimoramento místico geral (ex.: *Magia Acelerada*). |
| **Poderes da Tormenta** | `poder` | `categoria: tormenta` | `Poderes/Tormenta/` | `penalidade_carisma`, `requer_poder` | **Adquirido**: mutações aberrantes lefeu (ex.: *Anatomia Insana*, *Armamento da Tormenta*). |
| **Poderes Concedidos** | `poder` | `categoria: concedido` | `Poderes/Concedidos/` | `deuses: ["[[Deus]]"]` | **Adquirido**: recebido por devoção a uma divindade do Panteão (ex.: *Afinidade com a Tormenta*). |
| **Poderes de Origem** | `poder` | `categoria: origem` | `Poderes/Origem/` | `origem: "[[Nome da Origem]]"` | **Adquirido**: selecionado na escolha da origem de histórico no 1º nível. |
| **Origens** | `documentacao` | `categoria: origem`; `subtipo: origem-basica`, `origem-regional` ou `origem-especial` | Nota temática ou `Templates/Template Origem.md` | `afiliação`, `benefício`, `itens_iniciais`, `pericias`, `poderes_exclusivos`, `poderes_elegíveis`, `magias_acessiveis` | **Escolha no 1º nível**: básica oferece dois benefícios; regional/especial oferece benefício único fechado. |
| **Magias** | `magia` | — | `Magias/<Tradição>/<Círculo>/` | `circulo`, `tradicao`, `escola`, `custo_pm`, `execucao`, `alcance`, `duracao`, `resistencia` | Instância de habilidade excepcional, mas não é poder. Concedida por classes ou habilidades. Para testes de resistência: `CD = 10 + nível/2 + atributo-chave aplicável`. |
| **Divindades** | `divindade` | `categoria: maior` ou `antigo` | `Deuses/` | `titulo`, `energia`, `arma_preferida`, `simbolo_sagrado`, `canalizacao` | Entidades do Panteão. Poderes são mapeados inversamente via `deuses:` no poder. |
| **Itens & Equipamentos** | `item` | `subtipo: arma-*, armadura-*, escudo, esoterico, ferramenta, vestuario, alquimia, municao, etc.` | `Itens/<Categoria>/` | `preco_ts`, `espacos`, `dano`, `critico`, `bonus_defesa`, `penalidade_armadura`, `pericias_envolvidas` | Equipamentos empunhados, vestidos (limite de 4) ou consumíveis. |
| **Condições** | `mecanica` | `subtipo: condicao` | `Mecânicas e Condições/Condições/` | `categoria: "mental \| física \| sentidos"` | Efeitos e penalidades mecânicas de combate (ex.: *Abalado*, *Cego*, *Vulnerável*). |
| **Perícias** | `mecanica` | `subtipo: pericia` | `Mecânicas e Condições/Perícias/` | `atributo_chave`, `somente_treinada`, `penalidade_armadura`, `atributos_substitutos`, `pericias_relacionadas`, `pericias_envolvidas` | Testes derivam de nível, atributo-chave, treino e outros efeitos. Cada nota agrega automaticamente fontes reversas via Dataview. |
| **Regras do Sistema** | `mecanica` | `subtipo: regra` | `Mecânicas e Condições/Regras/` | `resumo`, `sistema` | Regras fundamentais do sistema (combate, descansos, sufocamento, etc.). |
| **Fichas de PJ** | `personagem` | `subtipo: pj` | `Campanha/02_Personagens/` | `classes: ["[[Guerreiro]]"]`, `nivel`, `raca`, `limite_vestidos: 4`, `slot_*` | Ficha jogável com paperdoll anatômico de 3 colunas e slots de itens. Suporta multiclasse em lista. |
| **Sessões de Jogo** | `sessao-rpg` | — | `Campanha/01_Sessões/` | `sessao`, `data`, `resumo` | Diário de bordo e cronologia de jogo da campanha. |
| **NPCs e Ameaças** | `ameaca` | — | `Campanha/03_NPCs e Ameaças/` | `nd`, `tipo_criatura`, `iniciativa`, `defesa` | Statblocks e fichas de oponentes e aliados. |
| **MOCs & Portais** | `moc` | — | Raiz e pastas temáticas | `nome` | Índices dinâmicos gerados por consultas Dataview para navegação rápida. |

---

### 1. Classificação Geral
- **`tipo`**: `classe`, `divindade`, `raca`, `item`, `magia`, `poder`, `habilidade`, `mecanica`, `modificacao`, `encantamento`, `personagem`, `ameaca`, `sessao-rpg`, `moc`, `documentacao`
- **`categoria`** (padronização de poderes e divindades):
  - Em poderes: `classe`, `combate`, `concedido`, `destino`, `magia`, `tormenta`, `origem`, `racial`
  - Em divindades: `maior`, `antigo`, `menor`
- **`subtipo`**:
  - Em classes: `classe-base`, `classe-variante`
  - Em habilidades: `habilidade-de-classe` (em `Habilidades/Classes/`), `habilidade-racial` (em `Habilidades/Raciais/`)
  - Em mecânicas: `condicao`, `pericia`, `regra` (em `Mecânicas e Condições/`)
  - Em personagens: `pj` (em `Campanha/02_Personagens/`)
  - Em itens: `arma-simples`, `arma-marcial`, `arma-exotica`, `arma-de-fogo`, `armadura-leve`, `armadura-pesada`, `escudo`, `alquimia`, `veneno`, `ferramenta`, `vestuario`, `esoterico`, `equipamento-aventura`, `artefato-divino`, `item-sagrado`, `veiculo-montaria`, `alimento`, `municao`
- **`sistema`**: `"tormenta20-jda"`
- **`fonte`**: `"Tormenta20 JdA"`, `"Atlas de Arton"`, `"Heróis de Arton"`, `"Ameaças de Arton"`, `"Deuses de Arton"`, `"Dragão Brasil 199"`

### 2. Classes e Variantes
- **`classe_base`**: `"[[Nome da Classe Base]]"` (para variantes)
- **`proibe_devocao`**: `true` ou `false`
- **`poderes_proibidos`**: Lista de wikilinks entre aspas: `["[[Nome do Poder]]", ...]`
- **`pv_inicial`**, **`pv_por_nivel`**, **`pm_inicial`**, **`pm_por_nivel`**: Inteiros
- **`pericias_basicas`**, **`proficiencias`**: Listas de strings
- **`pericias_adicionais`**: Inteiro

### 3. Poderes
- **Modo de Aquisição:** Poderes de classe são adquiridos a cada nível a partir do 2º nível (no 1º nível o personagem recebe as habilidades de classe básicas inatas). Poderes gerais (Combate, Destino, Magia, Tormenta, Concedido, Origem, Racial) são adquiridos trocando um poder de classe ou através de habilidades especiais (como *Versátil* ou *Ambição Herdada*).
- **`categoria`**: `"classe"`, `"combate"`, `"concedido"`, `"destino"`, `"magia"`, `"tormenta"`, `"origem"`, `"racial"`
- **`subcategoria_tatica`**: `"combate-a-distancia"`, `"combate-corpo-a-corpo"`, `"defesa"`, `"manobra"`, `"utilidade"`, `"social"`, `"sobrevivencia"`, `"oficio"`, `"metamagia"`, `"fabrica-sobrenatural"`, `"tormenta"`, `"concedido"`, `"racial"`, `"grupo"` ou `"distincao"`.
- **`area_efeito`**: `"pessoal"`, `"alvo"`, `"alcance-curto"`, `"alcance-medio"`, `"alcance-longo"`, `"area"` ou `"efeito"`.
- **Escalas:** `escala_por_nivel` e `escala_por_poderes_tormenta` indicam mecânicas proporcionais ao nível ou à quantidade de poderes rubros.
- **`trilha_poder`**: Vocabulário exato por classe:
  - *Clérigo / Frade / Usurpador:* `"Liturgia & Oração"`, `"Missas"`, `"Canalização"`, `"Prece de Combate"`, `"Geral"`
  - *Arcanista / Necromante:* `"Metamagia & Geral"`, `"Feiticeiro"`, `"Bruxo"`, `"Mago"`, `"Raio Arcano"`
- **`caminho_exclusivo`**: `"Feiticeiro"`, `"Bruxo"`, `"Mago"` (Arcanista)
- **`requer_poder`**: `["[[Poder A]]", "[[Poder B]]"]`
- **`requer_raca`**: `["[[Nome da Raça]]"]` (poderes raciais ou restritos a raças específicas)
- **`exclui_raca`**: `["[[Humano]]"]` (poderes restritos a não humanos)
- **`requer_traco`**: `"arma-natural"`, etc. (traços anatômicos exigidos)
- **`requer_nivel`**: Inteiro (`1` a `20`)
- **`requer_pericia`**: `["[[Perícia]]"]`
- **`ordem`**: Inteiro em dezenas para ordenação topológica (10 = Raiz A; 11, 12 = dependentes; 20 = Raiz B)
- **`classes`**: `["[[Classe A]]", "[[Classe B]]"]` (utilizado em `Poderes/Classe/Comuns/`)
- **`magias_relacionadas`**: `["[[Magia]]", ...]`

### 4. Magias
- **`circulo`**: `1` a `5`
- **`tradicao`**: `"arcana"`, `"divina"`, `"universal"`
- **`escola`**: `"Abjuração"`, `"Adivinhação"`, `"Convocação"`, `"Encantamento"`, `"Evocação"`, `"Ilusão"`, `"Necromancia"`, `"Transmutação"`
- **`custo_pm`**: Inteiro
- **`execucao`**: `"padrão"`, `"completa"`, `"reação"`, `"livre"`, etc.
- **`alcance`**: `"pessoal"`, `"toque"`, `"curto"`, `"médio"`, `"longo"`, etc.
- **`duracao`**: `"instantânea"`, `"cena"`, `"sustentada"`, `"1 rodada"`, etc.
- **`resistencia`**: `"Vontade anula"`, `"Fortitude reduz à metade"`, `"Reflexos reduz"`, etc.
- **`descritores`**: `["fogo"]`, `["cura"]`, `["trevas"]`, `["luz"]`, `["mental"]`, etc.
- **`exclusiva_devocao`**: `["[[Nome do Deus]]"]` (para magias exclusivas de devotos)
- **`aprimoramento_exclusivo`**: `["[[Nome do Deus]]"]`

### 5. Itens e Equipamento (Padrão Tormenta 20 JdA)
- **`preco_ts`**: Inteiro puro em Tibares (ex: `100` em vez de `"T$ 100"` para permitir ordenação numérica)
- **`espacos`**: Inteiro ou número fracionário (ex: `1`, `2`, `0.5`) conforme a regra de **Espaços de Carga** do *JdA* (não utiliza peso em kg)
- **`categoria`**: `"arma simples"`, `"arma marcial"`, `"arma exótica"`, `"armadura leve"`, `"armadura pesada"`, `"escudo"`, `"item de aventura"`, `"alquimia"`, etc.
- **`dano`**, **`critico`**, **`tipo_dano`**, **`alcance`**: Strings mecânicas de armas
- **`bonus_defesa`**, **`penalidade_armadura`**: Valores de armaduras e escudos
- **`deuses`**: `["[[Deus]]"]` (utilizado em artefatos e itens sagrados)
- **`pericias_envolvidas`**: `["[[Perícia]]"]` (perícias afetadas pelo item)

### 6. Perícias e Efeitos
- **Fórmula:** metade do nível + atributo-chave + bônus de treino + efeitos aplicáveis.
- **Treino:** +2 do 1º ao 6º nível, +4 do 7º ao 14º e +6 do 15º ao 20º.
- **`atributos_substitutos`**: atributos permitidos por uma regra explícita.
- **`pericias_relacionadas` / `pericias_envolvidas`**: wikilinks usados em relações reversas.
- Toda perícia possui uma tabela Dataview que agrega poderes, habilidades, itens, magias e condições relacionadas.

### 7. Fichas de Personagem (Paperdoll e Slots JdA)
- **Localização Canônica:** `Campanha/02_Personagens/`
- **Classificação:** `tipo: personagem`, `subtipo: pj`
- **`classes`**: Lista de wikilinks entre aspas (`classes: ["[[Guerreiro]]"]`) para suportar multiclasse nativamente
- **`nivel`**: Inteiro (1 a 20)
- **`raca`**: Wikilink entre aspas (`raca: "[[Humano]]"`)
- **`origem`**: String ou wikilink (`origem: "Soldado"`)
- **`status`**: `"ativo"`, `"inativo"`, `"morto"`
- **`limite_vestidos`**: Inteiro (padrão `4` conforme *T20 JdA, p. 141*, onde armaduras e vestimentas contam no limite de 4 itens vestidos simultâneos).
- **Slots de Mãos (Empunhados — não contam no limite de 4):**
  - **`slot_mao_principal`**, **`slot_mao_secundaria`**: `"[[Arma]]"`, `"[[Escudo]]"`, etc.
- **Slots Corporais Vestidos (Contam no limite de 4):**
  - **`slot_armadura`**, **`slot_subarmadura`** (*HdA*): Armadura e acolchoamento.
  - **`slot_cabeca`**, **`slot_rosto`**, **`slot_pescoco`**, **`slot_costas`**, **`slot_sobreveste`**: Acessórios e vestuário.
  - **`slot_punhos`**, **`slot_maos`**, **`slot_cintura`**, **`slot_anel_1`**, **`slot_anel_2`**, **`slot_pes`**, **`slot_extra`**: Membros, joias e vestuário anatômico.
- **Slots Estéticos & Carga (Não contam no limite de 4):**
  - **`slot_estetico`**: Traje visual sem bônus mecânico.
  - **`slot_mochila`**, **`mochila`**: Itens guardados e de transporte.

---

## Relação entre Habilidade e Poder

- Todo poder é uma habilidade; nem toda habilidade é um poder.
- Habilidades são características automáticas ou inatas, como raça, classe, origem, criatura ou item.
- Poderes são habilidades adquiridas e modulares; são escolhidos e podem possuir pré-requisitos.
- Poderes funcionam como habilidades para regras de ativação, CD, custo em PM, limites de nível e acúmulo.
- Magias são habilidades excepcionais, mas não são poderes de classe ou gerais, exceto quando um poder concede ou modifica uma magia específica.

---

## Regras de Ouro de Manutenção

1. **Fonte Única de Verdade:** Cada entidade existe em uma única nota canônica. Use sempre `[[wikilinks curtos]]`.
2. **Zero Alucinação:** Regras mecânicas seguem fielmente os livros e suplementos oficiais. Incertezas devem receber tag `[VERIFICAR]`.
3. **Zero Nós Fantasmas:** Diagramas Mermaid contêm exclusivamente nós com arquivos `.md` existentes no cofre.
4. **Comparação de Links no Dataview:** Use sempre `this.file.link` ou `link("Nome")` em `contains()`. Nunca string pura `"[[Nome]]"`.
5. **YAML Enxuto:** Não inclua campos vazios (`null` ou `[]`). Campos relacionais sempre recebem wikilinks entre aspas.
6. **Scripts Batch Seguros:** Qualquer script de automação deve ser gravado em arquivo `.py` com `encoding="utf-8"`.
