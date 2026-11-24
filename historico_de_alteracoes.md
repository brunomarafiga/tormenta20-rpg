---
tipo: documentacao
sistema: tormenta20-jda
projeto: "Deuses de Arton & Ontologia T20 — v7 (Arquitetura Consolidada)"
data_conclusao: "2026-11-19"
status: "Concluído com Sucesso"
---

# 📜 Histórico de Alterações e Documentação de Arquitetura (v7)

## 1. Visão Geral do Projeto
O projeto **Deuses de Arton & Ontologia T20 — v7 (Arquitetura Consolidada)** foi construído para criar um cofre Obsidian relacional, canônico e de altíssima fidelidade ao texto de regras de **Tormenta 20 (Edição Jogo do Ano)** e do suplemento **Deuses de Arton**, complementado por **Dragão Brasil 199** e **Atlas de Arton**.

A arquitetura do cofre unifica a **extração mecânica determinística** do ecossistema open-source oficial de fichas (*Fichas de Nimb / gerador-ficha-tormenta20*) com o **enriquecimento cirúrgico** de lore, fundamentalismo, itens sagrados, artefatos e avatares extraídos diretamente das fontes canônicas indexadas no NotebookLM.

---

## 2. Fontes Canônicas e Mapeamento

| Fonte | Identificador / Hash | Papel no Pipeline |
| :--- | :--- | :--- |
| **gerador-ficha-tormenta20 (GitHub)** | Commit `master` / YuriAlessandro | Extração determinística de magias, poderes concedidos, poderes gerais, armas e pré-requisitos estruturados em TypeScript. |
| **Tormenta20: Edição Jogo do Ano** | `c7a69e04-d500-4b95-a4b5-c0ea238e8cb2` | Conferência canônica de 35 condições, 29 perícias e 12 regras de combate fundamentais. |
| **Deuses de Arton** | `b0c623ab-aa17-4d40-8c29-37f2679c5da7` | Fonte primária para dogmas, outros nomes, lore, fundamentalismo, avatares (ND 20–30), itens sagrados e 12 artefatos divinos. |
| **Dragão Brasil 199** | `22185aef-7ea0-47fc-8f74-2e90c88bc61b` | Conferência da magia *Controlar Ar* (2º Círculo) e suplementação de regras. |
| **Atlas de Arton** | `3dcebf7f-4796-41ea-bf7c-658bca732a35` | Contextualização geográfica de templos e reinos patronais. |

---

## 3. Pipeline ETL e Metodologia de Engenharia

### Etapa 1 — Extração Mecânica Determinística
- Clonagem do repositório `gerador-ficha-tormenta20` em ambiente isolado.
- Resolução de dependências via npm (`--legacy-peer-deps`) e correção de longpaths no Windows.
- Desenvolvimento de `dump_t20_base.ts` com execução via `npx tsx` em memória, extraindo objetos compilados sem regex frágil:
  - 227 Magias do Livro Básico + expansão.
  - 237 Poderes (147 Concedidos, 40 Combate, 20 Destino, 8 Magia, 22 Tormenta).
  - 20 Divindades Maiores com devotos, energias e obrigações básicas.
  - 42 Armas canônicas para resolução de `arma_preferida`.

### Etapa 2 — Criação dos Nós-Pivô e Fechamento do Grafo
Para assegurar a ausência total de links órfãos no cofre:
- **35 Condições Oficiais:** Extraídas textualmente do *Apêndice de Condições* do T20 JdA com tipo, classificação, efeitos e links mútuos (`generate_conditions.py`).
- **29 Perícias Oficiais:** Extraídas com atributos-chave, restrição de armadura, exigência de treinamento e mecânicas (`generate_skills.py`).
- **12 Regras de Combate:** Notas canônicas para manobras de combate (*Investida*, *Flanqueio*, *Manobra*, *Agarrar*, *Derrubar*, *Desarmar*, *Empurrar*, *Quebrar*, *Cobertura*, *Camuflagem*, *Deslocamento*, *Desarmado*) criadas em `Mecânicas e Condições/Regras/` (`generate_regras.py`).
- **42 Armas Canônicas:** Criadas em `Equipamentos/Armas/` com preço, dano, crítico, alcance, tipo e espaço (`generate_weapons.py`).

### Etapa 3 — Entity Linking e Transformação Ontológica
- **Lemas e Flexões:** Dicionário regex estrito para captura de flexões nominais (ex.: `caíd[oa]s?` → `[[Caído]]`, `desprevenid[oa]s?` → `[[Desprevenido]]`, `em chamas` → `[[Em Chamas]]`).
- **Âncoras Contextuais:** Termos com sobreposição vocabular (ex.: *Vontade*, *Cura*, *Luta*, *Guerra*) vinculados apenas quando precedidos por marcadores operacionais (*teste de...*, *treinado em...*, *bônus em...*).
- **Polaridade de Condições:** Separação determinística de `condicoes_inflige`, `condicoes_previne` e `condicoes_remove`.
- **Mapeamento Bidirecional Divindades ↔ Poderes:** 100% dos poderes concedidos vinculados às notas de suas respectivas divindades em `Deuses/`.
- **Aprimoramentos Exclusivos:** Magias receberam o campo `aprimoramentos_exclusivos` contendo as divindades exigidas (ex.: `[[Arsenal]]`, `[[Thyatis]]`, `[[Aharadak]]`).

### Etapa 4 — Enriquecimento Cirúrgico de Lore e Deuses
- Consultas estruturadas via NotebookLM cobrindo as 20 divindades em lotes atômicos.
- Extração de dogmas exatos, títulos canônicos, áreas de influência, outros nomes, aliados, rivais, preceitos fundamentalistas, blocos de lore originais e fichas de avatares (ND 20–30) com atributos, PV, PM e habilidades especiais.
- Geração de 24 itens sagrados e 12 artefatos divinos com seus poderes mecânicos e lore integral.

---

## 4. Inventário Completo do Cofre

| Diretório | Tipo de Conteúdo | Quantidade de Notas |
| :--- | :--- | :---: |
| `/` (Raiz) | MOC Central e Histórico | 2 |
| `Deuses/` | Divindades Maiores do Panteão | 20 |
| `Poderes/Concedidos/` | Poderes Concedidos (JdA + Deuses de Arton) | 147 |
| `Poderes/Combate/` | Poderes Gerais de Combate | 40 |
| `Poderes/Destino/` | Poderes Gerais de Destino | 20 |
| `Poderes/Magia/` | Poderes Gerais de Magia | 8 |
| `Poderes/Tormenta/` | Poderes Gerais da Tormenta | 22 |
| `Poderes/` (Raiz) | Índice Geral de Poderes | 1 |
| `Magias/Arcanas/` (1º a 5º Círculo) | Magias de Tradição Arcana (Bruxo, Mago, Feiticeiro, Bardo) | 95 |
| `Magias/Divinas/` (1º a 5º Círculo) | Magias de Tradição Divina (Clérigo, Druida, Paladino) | 101 |
| `Magias/Universais/` (1º a 5º Círculo) | Magias de Tradição Universal (compartilhadas) | 32 |
| `Magias/` (Raiz) | Índice Geral de Magias | 1 |
| `Equipamentos/Armas/` | Armas Canônicas de Arton | 42 |
| `Itens Sagrados/` | Textos Sagrados, Patuás e Paramentos Litúrgicos | 24 |
| `Artefatos Divinos/` | Artefatos e Relíquias Lendárias dos Deuses | 12 |
| `Mecânicas e Condições/Condições/` | Condições Canônicas do Apêndice T20 JdA | 35 |
| `Mecânicas e Condições/Perícias/` | As 29 Perícias Oficiais do Sistema | 29 |
| `Mecânicas e Condições/Regras/` | Regras e Manobras de Combate | 12 |
| `Templates/` | Modelos padronizados de criação | 4 |
| **TOTAL GERAL DE NOTAS** | **Cofre Completo** | **647 notas** |

---

## 5. Configuração do Obsidian e Snippets

- **Snippet CSS:** `.obsidian/snippets/tormenta20.css` implementado com paleta cromática canônica de Tormenta 20 (vermelho rubro `#8b0000`, dourado `#d4af37`, pergaminho escuro) e callouts dedicados.
- **Plugins:** `Dataview` ativado em `.obsidian/community-plugins.json` com arquivos binários instalados e testados.
- **Aparência:** `.obsidian/appearance.json` configurado para ativar o snippet `tormenta20` imediatamente ao abrir o cofre.

---

## 6. Correções de Documentação e Auditoria — 2026-11-21

- **README atualizado:** métricas do cofre revisadas conforme a estrutura atual, incluindo 1.694 arquivos Markdown, 354 poderes de classe, 229 magias, 75 habilidades raciais, 265 itens e 15 templates.
- **Skill `auditar-dataview` revisada:** descrição ampliada para melhorar a descoberta automática e removidas métricas obsoletas de notas e queries.
- **Relatórios temporários reorganizados:** a saída da auditoria foi transferida de `scratch/` para `.system_generated/`, em conformidade com as diretrizes do cofre.
- **Script de auditoria atualizado:** criação automática do diretório `.system_generated/` e exclusão desse diretório da indexação das notas.
- **Auditoria interativa atualizada:** a nota `_Meta/Auditoria Dataview (Live).md` passou a ignorar também `.system_generated/`.
- **Validação concluída:** 960 blocos Dataview analisados, 328 queries válidas, 605 vazios esperados, 0 vazios suspeitos e 0 erros críticos.
- **Ontologia de Origens revisada:** corrigido o pacote do Charlatão para Estojo de Disfarces, joia falsificada e poder `Alpinista Social`; também corrigida a descrição regional da origem `Turista da Academia (Academia Arcana)`.
- **Template modular criado:** adicionado `Templates/Template Origem.md` para padronizar descrições, itens, perícias, poderes e magias.
- **Template de Origem integrado à ontologia:** o template passou a separar origem básica, regional e especial, escolhendo entre benefício aberto de dois itens e benefício fechado; o README e as diretrizes de ontologia foram alinhados ao mesmo schema.
- **Ontologias convertidas em templates:** a ontologia de Itens foi integrada ao `Template Item`, a ontologia de melhorias virou `Template Melhoria`, a de encantamentos virou `Template Encantamento` e a de Origem virou `Template Origem`; os arquivos de ontologia antigos foram removidos.
- **Importação suplementar de itens:** foram criadas 158 notas no cofre, incluindo 109 itens de Heróis de Arton, 44 itens de Ameaças de Arton e 5 munições básicas. O total operacional de itens passou de 264 para 422, com pasta `Itens/Munições/` e subtipo `municao`.
- **Ontologia de atributos e perícias integrada:** criada `_Meta/Ontologia de Atributos e Perícias.md` e `Template Perícia.md`, com fórmula de perícia, vetores de efeito, substituição de atributo-chave, condições, rolagem múltipla e regras de acúmulo.
- **Efeitos reversos em perícias:** todas as 29 notas de perícia passaram a incluir uma tabela Dataview mostrando poderes, habilidades, itens, magias e condições que afetam a perícia por campos relacionais canônicos.
- **Guias e regras atualizados:** README, AGENTS, ARQUITETURA, diretrizes do sistema e ontologia de atributos/perícias foram alinhados com templates, itens suplementares, relacionamento reverso de perícias e regras Dataview seguras.
- **Índice geral da Biblioteca criado:** adicionada a página `00 - Índice Geral da Biblioteca.md` e atualizado o Home com métricas atuais e portais para Origens, Habilidades e Regras.
- **Índices específicos ampliados:** criados `_Índice Geral de Mecânicas.md` e `_Índice Geral da Campanha.md`; o Índice Geral da Biblioteca passou a levar diretamente às classes, raças, origens, poderes, habilidades, magias, itens, mecânicas e campanha.
- **Índice mestre com links reais às notas:** corrigidos os wikilinks da tabela principal e ampliadas listas Dataview que apontam diretamente para classes, raças, magias, poderes e itens.
- **Enganação consolidada:** a nota da perícia foi ampliada com fontes de bônus e penalidades nas oito categorias, incluindo condições, magias, itens, melhorias, encantamentos, poderes, habilidades e regras situacionais.
- **Ontologia tática de poderes integrada:** o Template Poder recebeu subcategoria tática, área de efeito e indicadores de escala por nível ou por outros poderes da Tormenta; README e diretrizes documentaram os novos campos opcionais.
- **Notas de poderes atualizadas em lote:** todas as notas existentes de poderes receberam `subcategoria_tatica`, `area_efeito`, `escala_por_nivel` e `escala_por_poderes_tormenta`, coexistindo com a taxonomia facetada já presente no cofre. O índice geral passou a ordenar e filtrar pelas novas facetas.
- **Notas de raças atualizadas em lote:** as 23 raças existentes receberam `categoria_racial` controlada, sem alterar atributos, deslocamentos, sentidos ou habilidades já registrados. O índice geral passou a mostrar a categoria racial.
- **Template de raça atualizado:** a taxonomia de raças passou a incluir categoria racial, ancestralidade e origem cultural como campos opcionais controlados, sem substituir os campos mecânicos existentes de tipo, tamanho, deslocamento, atributos e sentidos.
- **613 vazios Dataview corrigidos:** removidas 613 seções opcionais comprovadamente vazias em 613 arquivos, incluindo tabelas sem poderes dependentes e relações raciais/perícias sem registros. O cofre passou a ter zero vazios esperados, vazios suspeitos ou erros críticos.
- **Arquitetura e CSS atualizados:** incorporada a especificação de profundidade de navegação, condensação, acessibilidade, dual-theme e redução de movimento. O snippet ganhou paletas claro/escuro, aliases semânticos, área vertical em tabelas e suporte a `prefers-reduced-motion`.
- **Links reversos nas perícias:** o template de perícia passou a listar automaticamente poderes, habilidades, itens, magias e condições que a afetam por `requer_pericia`, `pericias_envolvidas` ou `pericias_relacionadas`.
- **Ontologia de Magia integrada ao template:** o `Template Magia` passou a registrar natureza/tradição, alvo ou área, custo base, relação funcional e requisitos modulares dos aprimoramentos, com base na ontologia fornecida. O atributo-chave não é registrado na magia, pois depende da classe ou efeito conjurado.
- **Cobertura dos suplementos explicitada:** as diretrizes do cofre, README e templates passaram a declarar que o projeto cobre o Jogo do Ano e todos os suplementos disponíveis, incluindo Atlas, Heróis, Ameaças, Deuses e Dragão Brasil 199.
- **Isolamento de repositórios externos:** registrado que diretórios `GitHub` são fontes de consulta somente leitura e nunca podem ser alterados pelo agente.
- **Ontologia de habilidades integrada:** criado `Template Habilidade.md` para padronizar origem, ativação, natureza, custo, frequência, gatilho e regras de acúmulo. Poderes passam a ser tratados como uma subcategoria adquirível de habilidades no README e no template.
- **Habilidade versus poder formalizado:** o README e os templates passaram a registrar que todo poder é uma habilidade, mas nem toda habilidade é um poder; poderes são adquiridos e modulares, enquanto habilidades incluem fontes automáticas. A CD, o atributo-chave aplicável e as regras de acúmulo por fonte distinta foram incorporadas às diretrizes.
- **Dataview de Raças corrigido:** o índice e as 23 notas de raça deixaram de usar `join()` sobre o campo escalar `atributo_chave`; o bloco de poderes do Humano deixou de usar `choice`, `nonnull` e `flat`; o Template Raça recebeu as mesmas correções.
- **Vínculos de perícias em itens:** 37 notas de itens que mencionam perícias oficiais tiveram o campo `pericias_envolvidas` preenchido e os nomes das perícias convertidos em wikilinks no texto.
- **Verificação de extração de itens:** comparados os catálogos do projeto GitHub com as notas de `Itens/`. Existem 264 notas operacionais de itens; faltam 5 munições básicas (Balas, Flechas, Munição, Virotes e Pedras) e todos os 109 itens adicionais de Heróis de Arton e 44 itens adicionais de Ameaças de Arton pelo nome canônico. A comparação não encontrou itens suplementares já extraídos nas categorias correspondentes.
- **Todas as origens extraídas:** foram criadas 131 notas em `Origens/`, incluindo 35 origens básicas do Jogo do Ano, 66 origens regionais do Atlas de Arton e 30 origens especiais de Heróis de Arton. Também foi criado o índice Dataview `_Índice Geral de Origens.md`.
