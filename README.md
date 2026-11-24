# 🐉 Tormenta 20 — Cofre Obsidian (Wiki Hiperlinkada)

Base de conhecimento estruturada em Markdown para **Obsidian**, cobrindo regras, entidades e referências do sistema **Tormenta 20 (Edição Jogo do Ano)** e suplementos oficiais (*Heróis de Arton*, *Deuses de Arton*, *Atlas de Arton*, *Ameaças de Arton* e *Dragão Brasil*).

Este repositório mantém **exclusivamente os arquivos originais do cofre Obsidian** (notas atômicas, índices dinâmicos, templates, snippets CSS e configurações de plugins). Para geração interativa de fichas na web em projeto separado, utilize ou faça um fork do projeto open-source [**Fichas de Nimb**](https://github.com/YuriAlessandro/gerador-ficha-tormenta20).

---

## 📊 Inventário Atual do Cofre

O cofre reúne **2.225 arquivos Markdown** (excluindo pastas ocultas de sistema e rascunhos em `.obsidian/`, `.agents/`, `.github/`, `.system_generated/` e `scratch/`), organizados por domínio ontológico:

| Domínio | Pasta | Arquivos `.md` | Conteúdo |
| :--- | :--- | :---: | :--- |
| **Classes** | [`Classes/`](./Classes/) | **36** | 35 classes jogáveis (19 básicas e 16 variantes) + [`_Índice Geral de Classes.md`](./Classes/_Índice%20Geral%20de%20Classes.md) |
| **Poderes** | [`Poderes/`](./Poderes/) | **705** | 704 poderes em 8 categorias (`Classe` 354, `Concedidos` 147, `Raça` 77, `Combate` 40, `Origem` 35, `Tormenta` 22, `Destino` 21, `Magia` 8) + índice |
| **Habilidades** | [`Habilidades/`](./Habilidades/) | **308** | 232 habilidades de classe (35 classes) + 75 habilidades raciais + índice |
| **Magias** | [`Magias/`](./Magias/) | **229** | 228 magias do 1º ao 5º Círculo (`Arcanas` 95, `Divinas` 101, `Universais` 32) + índice |
| **Divindades** | [`Deuses/`](./Deuses/) | **22** | 20 Deuses Maiores + `Tilliann` + [`00 - Panteão de Arton (MOC).md`](./Deuses/00%20-%20Panteão%20de%20Arton%20%28MOC%29.md) |
| **Raças** | [`Raças/`](./Raças/) | **24** | 23 raças jogáveis + [`_Índice Geral de Raças.md`](./Raças/_Índice%20Geral%20de%20Raças.md) |
| **Origens** | [`Origens/`](./Origens/) | **132** | 131 origens (básicas, regionais e especiais) + [`_Índice Geral de Origens.md`](./Origens/_Índice%20Geral%20de%20Origens.md) |
| **Itens e Equipamentos** | [`Itens/`](./Itens/) | **657** | 18 subpastas (armas, armaduras, escudos, munições, alquimia, venenos, aparatos, itens mágicos/sagrados, artefatos, modificações, encantamentos, vestuário, ferramentas, aventura, montarias/veículos e alimentação), guias comparativos e subíndices |
| **Mecânicas e Condições** | [`Mecânicas e Condições/`](./Mecânicas%20e%20Condições/) | **78** | 35 condições, 29 perícias, 13 regras de combate/sistema + índice |
| **Templates** | [`Templates/`](./Templates/) | **16** | Modelos padronizados para classes, raças, deuses, magias, poderes, itens, fichas e sessões |
| **Campanha** | [`Campanha/`](./Campanha/) | **6** | Escudo do Mestre, índice da campanha, sessões, fichas de PJ e ameaças/NPCs |
| **Metadocumentação** | [`_Meta/`](./_Meta/) | **6** | Arquitetura da wiki, schema YAML, ontologia de perícias e auditoria Dataview |

### Fontes Registradas no YAML (`fonte`)

- `Tormenta20 JdA` (*Tormenta20: Edição Jogo do Ano*)
- `Heróis de Arton`
- `Deuses de Arton`
- `Atlas de Arton`
- `Ameaças de Arton`
- `Dragão Brasil` (incluindo *Dragão Brasil 199* e *222*)

---

## 🧭 Como Usar no Obsidian

1. **Clone ou baixe** este repositório para o seu computador.
2. Abra o **[Obsidian](https://obsidian.md)** e selecione **Abrir pasta como cofre** (*Open folder as vault*), apontando para a pasta raiz deste repositório.
3. Caso o Obsidian solicite ao abrir pela primeira vez, habilite os **Plugins da Comunidade** (*Community Plugins*): a pasta `.obsidian/` já traz o snippet visual e a lista de plugins configurados.
4. Comece a navegação pelos portais principais:
   - [`00 - Home.md`](./00%20-%20Home.md) — Hub central em cards de acesso rápido.
   - [`00 - Índice Geral da Biblioteca.md`](./00%20-%20Índice%20Geral%20da%20Biblioteca.md) — Mapa mestre por domínio de jogo com tabelas Dataview.
   - [`Deuses/00 - Panteão de Arton (MOC).md`](./Deuses/00%20-%20Panteão%20de%20Arton%20%28MOC%29.md) — Panteão de Arton, devoções e poderes concedidos.
   - [`Campanha/00_Escudo do Mestre.md`](./Campanha/00_Escudo%20do%20Mestre.md) — Painel operacional de mesa com rolagem rápida e resumo das 35 condições.

### Plugins e Estilização Pré-Configurados (`.obsidian/`)

- **Snippet CSS habilitado:** [`.obsidian/snippets/tormenta20.css`](./.obsidian/snippets/tormenta20.css) (ativo em [`.obsidian/appearance.json`](./.obsidian/appearance.json)), estilizando callouts (`[!t20-stats]`, `[!t20-magia]`, `[!t20-pm]`, `[!t20-poder]`, `[!t20-restricao]`, `[!t20-item]`, `[!t20-lore]`, `[!ameaca]`, `[!t20-paperdoll]`), badges e grids do Escudo do Mestre.
- **13 plugins ativos em `.obsidian/community-plugins.json`:**
  - `dataview` (tabelas e índices dinâmicos em tempo real)
  - `obsidian-dice-roller` (rolagens de dados inline no Markdown)
  - `obsidian-5e-statblocks` / `fantasy-statblocks` e `initiative-tracker` (fichas de ameaças e combate)
  - `templater-obsidian`, `quickadd`, `modalforms` e `obsidian-meta-bind-plugin` (criação e edição guiada com templates)
  - `js-engine`, `omnisearch`, `obsidian-hover-editor`, `obsidian-icon-folder` e `webpage-html-export`

---

## 🏗️ Arquitetura e Padrões do Cofre

A wiki segue uma organização em **3 camadas** (detalhada em [`_Meta/ARQUITETURA.md`](./_Meta/ARQUITETURA.md)):

1. **MOCs e Índices:** Portais temáticos (`00 - Home.md` e arquivos `_Índice Geral de *.md`) que centralizam a entrada sem depender de navegação manual por subpastas.
2. **Notas Atômicas com YAML Enxuto:** Cada classe, poder, magia, item, perícia ou condição possui uma nota canônica única com campos de frontmatter padronizados e callouts temáticos.
3. **Relacionamentos Calculados via Dataview:** Listas de poderes por trilha, dependentes (`requer_poder`), magias de devoção e referências cruzadas em perícias são consultadas dinamicamente a partir dos links no frontmatter.

```text
Tormenta 20/
├── 00 - Home.md
├── 00 - Índice Geral da Biblioteca.md
├── historico_de_alteracoes.md
├── AGENTS.md
├── .obsidian/
│   ├── community-plugins.json
│   ├── appearance.json
│   ├── plugins/
│   └── snippets/tormenta20.css
├── _Meta/
│   ├── README.md
│   ├── ARQUITETURA.md
│   ├── Ontologia de Atributos e Perícias.md
│   ├── Auditoria Dataview (Live).md
│   └── t20-obsidian-rpg-system.md
├── Campanha/
│   ├── 00_Escudo do Mestre.md
│   ├── _Índice Geral da Campanha.md
│   ├── 01_Sessões/
│   ├── 02_Personagens/
│   └── 03_NPCs e Ameaças/
├── Classes/
├── Deuses/
├── Habilidades/
├── Itens/
├── Magias/
├── Mecânicas e Condições/
├── Origens/
├── Poderes/
├── Raças/
└── Templates/
```

---

## 📚 Documentação Interna e Observações

- **Schema e vocabulário YAML controlado:** [`_Meta/README.md`](./_Meta/README.md)
- **Filosofia, queries Dataview e diagramas:** [`_Meta/ARQUITETURA.md`](./_Meta/ARQUITETURA.md)
- **Diretrizes canônicas e ontologia:** [`_Meta/t20-obsidian-rpg-system.md`](./_Meta/t20-obsidian-rpg-system.md) e [`AGENTS.md`](./AGENTS.md)
- **Nota sobre revisão:** Partes deste cofre foram compiladas/estruturadas em etapas anteriores com suporte de automação e consulta ao código de *Fichas de Nimb* (`gerador-ficha-tormenta20`). Ao utilizar regras críticas em mesa ou expandir notas, confira diretamente nos livros oficiais — incertezas devem ser marcadas com `[VERIFICAR]`.

---

## ⚖️ Direitos Autorais

**Tormenta 20** e seus suplementos são propriedade intelectual da **Jambô Editora**. Este cofre é um material pessoal e não-comercial de fã voltado à organização e consulta de mesa no Obsidian.
