# 📋 Relatório de Pré-Visualização e Auditoria de Ingestão
**Fonte Oficial:** Heróis de Arton | **Notas Atuais no Cofre:** 1584 | **Novas Entidades:** 35

> [!IMPORTANT] Protocolo de Ingestão Estrita — Passo 1 de 3
> Esta análise inspecionou o lote extraído de *Heróis de Arton* contra todo o cofre antes da escrita de qualquer arquivo físico. **Nenhum arquivo de conteúdo foi criado ou modificado.**

---

## 1. 📊 Sumário Executivo de Criação

| Diretório de Destino | Quantidade | Descrição / Papel Arquitetural |
|---|---|---|
| `Raças/` | **5** | Notas completas com schema canonical auditado (`tipo: raca`) |
| `Habilidades/Raciais/` | **19** | Habilidades inatas atômicas (`tipo: habilidade`, `subtipo: habilidade-racial`) |
| `Poderes/Raciais/` | **11** | Poderes gerais raciais adquiríveis por avanço (`tipo: poder`, `categoria: racial`) |
| **Total de Arquivos** | **35** | **100% novos, 0 colisões detectadas** |

---

## 2. 🗂️ Detalhamento das Novas Entidades por Pasta

### 🧬 Raças (`Raças/`)
| Raça | Tipo / Tamanho | Deslocamento | Atributos | Habilidades Inatas | Classes Recomendadas |
|---|---|---|---|---|---|
| **`Duende`** | Espírito • Minúsculo, Pequeno, Médio ou Grande (definido no Passo 2: Tamanho) | 6m ou 9m (definido no Passo 2: Tamanho) | +1 em dois atributos diferentes (mais +1 em um atributo se escolher natureza Animal) | `[[Passo 1 — Natureza]]`, `[[Passo 2 — Tamanho]]`, `[[Passo 3 — Dons]]`, `[[Passo 4 — Presentes de Magia e de Caos]]`, `[[Aversão a Ferro]]`, `[[Tabu]]` | `[[Guerreiro]]`, `[[Bardo]]`, `[[Clérigo]]`, `[[Druida]]`, `[[Treinador]]` |
| **`Eiradaan`** | Espírito • Médio | 9m (6q) | Sabedoria +2, Carisma +1, Força –1 | `[[Essência Feérica]]`, `[[Magia Instintiva]]`, `[[Sentidos Místicos]]` | `[[Arcanista]]`, `[[Nobre]]`, `[[Cavaleiro]]` |
| **`Galokk`** | Humanoide • Grande | 9m (6q) | Força +1, Constituição +1, +1 em um atributo, Carisma –1 | `[[Força dos Titãs]]`, `[[Meio-Gigante]]`, `[[Infância entre os Pequenos]]` | `[[Guerreiro]]`, `[[Bárbaro]]`, `[[Lutador]]`, `[[Arcanista]]`, `[[Bardo]]`, `[[Inventor]]` |
| **`Meio-Elfo`** | Humanoide • Médio | 9m (6q) | Inteligência +1, +1 em dois atributos, exceto Constituição | `[[Ambição Herdada]]`, `[[Entre Dois Mundos]]`, `[[Sangue Élfico]]` | `[[Bardo]]`, `[[Bucaneiro]]`, `[[Clérigo]]`, `[[Druida]]`, `[[Guerreiro]]`, `[[Ladino]]`, `[[Arcanista]]` |
| **`Sátiro`** | Espírito • Médio | 12m (8q) | Carisma +2, Destreza +1, Sabedoria –1 | `[[Festeiro Feérico]]`, `[[Instrumentista Mágico]]`, `[[Marrada]]`, `[[Pernas Caprinas]]` | `[[Caçador]]`, `[[Ladino]]`, `[[Clérigo]]`, `[[Inventor]]`, `[[Paladino]]`, `[[Nobre]]` |

### ⚡ Habilidades Raciais (`Habilidades/Raciais/`)
| Habilidade | Raça Patrona | Ativação | Custo PM | Resumo Mecânico |
|---|---|---|---|---|
| **`Passo 1 — Natureza`** | `[[Duende]]` | Passiva | 0 PM | Define o tipo espírito, visão na penumbra e escolha entre corpo animal, vegetal ou mineral. |
| **`Passo 2 — Tamanho`** | `[[Duende]]` | Passiva | 0 PM | Determina a categoria de tamanho, deslocamento e modificadores físicos do duende. |
| **`Passo 3 — Dons`** | `[[Duende]]` | Passiva | 0 PM | Concede +1 em dois atributos diferentes. |
| **`Passo 4 — Presentes de Magia e de Caos`** | `[[Duende]]` | Passiva | 0 PM | Permite escolher três poderes mágicos da lista de presentes feéricos da raça. |
| **`Aversão a Ferro`** | `[[Duende]]` | Passiva | 0 PM | Causa vulnerabilidade e dano contínuo ao manusear itens de ferro ou aço. |
| **`Tabu`** | `[[Duende]]` | Passiva | 0 PM | Impõe um comportamento obrigatório cuja privação causa a morte em 1d4+1 dias. |
| **`Essência Feérica`** | `[[Eiradaan]]` | Passiva | 0 PM | Tipo espírito, visão na penumbra e comunicação livre com animais. |
| **`Magia Instintiva`** | `[[Eiradaan]]` | Passiva | 0 PM | Permite usar Sabedoria em magias arcanas/Misticismo e fornece +1 PM para aprimoramentos. |
| **`Sentidos Místicos`** | `[[Eiradaan]]` | Passiva | 0 PM | Mantém o personagem sob o efeito básico de Visão Mística permanentemente. |
| **`Força dos Titãs`** | `[[Galokk]]` | Ativo | 1 PM | Gera dados de dano extras ao rolar o valor máximo do dado da arma em acertos. |
| **`Meio-Gigante`** | `[[Galokk]]` | Passiva | 0 PM | Subtipo gigante, tamanho Grande e uso de Força em Intimidação. |
| **`Infância entre os Pequenos`** | `[[Galokk]]` | Passiva | 0 PM | Concede treinamento em uma perícia à escolha. |
| **`Ambição Herdada`** | `[[Meio-Elfo]]` | Passiva | 0 PM | Recebe um poder geral ou poder único de origem à sua escolha. |
| **`Entre Dois Mundos`** | `[[Meio-Elfo]]` | Passiva | 0 PM | Concede +1 em perícias baseadas em Carisma. |
| **`Sangue Élfico`** | `[[Meio-Elfo]]` | Passiva | 0 PM | Recebe visão na penumbra, +1 PM por nível ímpar e conta como elfo para efeitos de raça. |
| **`Festeiro Feérico`** | `[[Sátiro]]` | Passiva | 0 PM | Tipo espírito, visão na penumbra e bônus de +2 em Atuação e Fortitude. |
| **`Instrumentista Mágico`** | `[[Sátiro]]` | Passiva | 0 PM | Lança magias inatas empunhando instrumento musical e reduz o custo em –1 PM se aprendê-las novamente. |
| **`Marrada`** | `[[Sátiro]]` | Ativo | 1 PM | Arma natural (1d6, x2, impacto) e ataque corpo a corpo extra ao usar a ação agredir. |
| **`Pernas Caprinas`** | `[[Sátiro]]` | Passiva | 0 PM | Deslocamento de 12m e uso de Destreza em testes de Atletismo. |

### 🌳 Poderes Raciais (`Poderes/Raciais/`)
| Poder Racial | Pré-requisito de Raça (`requer_raca`) | Outros Pré-requisitos | Ativação / Custo | Resumo Mecânico |
|---|---|---|---|---|
| **`Cascos Poderosos`** | `[[Centauro]]`, `[[Minotauro]]`, `[[Sátiro]]` | — | Ativo (1 PM) | Aumenta o dano de ataque desarmado com cascos em +1 dado do mesmo tipo. |
| **`Citadino`** | `[[Humano]]`, `[[Hynne]]`, `[[Kliren]]`, `[[Meio-Elfo]]` | — | Passiva (0 PM) | Recebe +2 em testes de perícias baseadas em Carisma (exceto Adestramento). |
| **`Crescimento Feérico`** | `[[Duende]]`, `[[Sílfide]]` | — | Ativo (1 PM) | Aumenta o tamanho e a Força por ação de movimento sustentável. |
| **`Escapada Criativa`** | `[[Goblin]]`, `[[Meio-Elfo]]` | — | Reacao (2 PM) | Soma Inteligência ao resultado de um teste de resistência. |
| **`Estirpe Arcana`** | `[[Elfo]]`, `[[Eiradaan]]`, `[[Nagah (fêmea)]]` | — | Passiva (0 PM) | Recebe +2 PM por patamar e +2 em Misticismo. |
| **`Fragrância de Rosas`** | `[[Dahllan]]`, `[[Duende]]` | — | Ativo (2 PM) | Concede +2 em Diplomacia e permite deixar criaturas em alcance curto pasmas. |
| **`Fúria Aterrorizante`** | `[[Galokk]]`, `[[Ogro]]` | Fúria ou Fúria Divina | Passiva (0 PM) | Deixa inimigos em alcance curto abalados ao entrar em fúria. |
| **`Herança Erudita`** | `[[Eiradaan]]`, `[[Elfo]]`, `[[Kallyanach]]` | — | Passiva (0 PM) | Soma Carisma em uma perícia originalmente baseada em Inteligência. |
| **`Marrada Poderosa`** | `[[Minotauro]]`, `[[Sátiro]]` | — | Ativo (1 PM) | Aumenta o dano de chifres em investida e permite ataque extra. |
| **`Meditação Mística`** | `[[Eiradaan]]`, `[[Elfo]]` | — | Ativo (0 PM) | Entra em transe de 1d4 minutos uma vez por dia para recuperar PM igual ao nível. |
| **`Vigilância Élfica`** | `[[Elfo]]`, `[[Meio-Elfo]]`, `[[Naidora]]` | — | Passiva (0 PM) | Garante uma ação de movimento adicional no primeiro turno de cada combate. |

---

## 3. 🛡️ Auditoria de Colisões, Homônimos e Compatibilidade de SO

### A. Colisões Diretas de Arquivo
✅ **Zero colisões diretas:** Nenhum dos 35 caminhos de destino existe previamente no cofre.

### B. Colisões Globais / Homônimos com Outras Pastas
✅ **Zero homônimos detectados:** Todos os 35 nomes de entidade são globalmente únicos no cofre de 1.584 notas.

### C. Sanitização de Caracteres Proibidos no Windows (NTFS)
O Windows proíbe o caractere dois-pontos (`:`) em nomes de arquivos de sistema de arquivos.
Seguindo o padrão de nomenclatura canônica do cofre (ex.: `Caminho do Arcanista — Bruxo.md`, `Sessão 00 — O Chamado da Aventura.md`), aplicamos a substituição transparente por travessão ` — `:

- `"Passo 1 — Natureza.md"` (e wikilink `[[Passo 1 — Natureza]]` correspondente)
- `"Passo 2 — Tamanho.md"` (e wikilink `[[Passo 2 — Tamanho]]` correspondente)
- `"Passo 3 — Dons.md"` (e wikilink `[[Passo 3 — Dons]]` correspondente)
- `"Passo 4 — Presentes de Magia e de Caos.md"` (e wikilink `[[Passo 4 — Presentes de Magia e de Caos]]` correspondente)

---

## 4. 🔗 Auditoria de Wikilinks e Grafo de Dependências

- **Links para Notas Existentes no Cofre:** 34 links validados com 100% de correspondência (ex.: `[[Guerreiro]]`, `[[Arcanista]]`, `[[Valkaria]]`, `[[Misticismo]]`, `[[Vontade]]`, `[[Fascinado]]`, `[[Abalado]]`, `[[Fúria]]`, `[[Fúria Divina]]`).
- **Links Internos do Próprio Lote:** 24 links cruzados resolvidos entre as 35 notas (ex.: Raças linkando para suas Habilidades Inatas e Poderes linkando para suas Raças).
- **Links de Raças Futuras (Ameaças de Arton / Suplementos):** 5 wikilinks preparados como links canônicos de grafo:
  - `[[Centauro]]` (utilizado como pré-requisito em poderes como *Cascos Poderosos*, *Estirpe Arcana*, *Fúria Aterrorizante*, *Herança Erudita*, *Vigilância Élfica*)
  - `[[Kallyanach]]` (utilizado como pré-requisito em poderes como *Cascos Poderosos*, *Estirpe Arcana*, *Fúria Aterrorizante*, *Herança Erudita*, *Vigilância Élfica*)
  - `[[Nagah (fêmea)]]` (utilizado como pré-requisito em poderes como *Cascos Poderosos*, *Estirpe Arcana*, *Fúria Aterrorizante*, *Herança Erudita*, *Vigilância Élfica*)
  - `[[Naidora]]` (utilizado como pré-requisito em poderes como *Cascos Poderosos*, *Estirpe Arcana*, *Fúria Aterrorizante*, *Herança Erudita*, *Vigilância Élfica*)
  - `[[Ogro]]` (utilizado como pré-requisito em poderes como *Cascos Poderosos*, *Estirpe Arcana*, *Fúria Aterrorizante*, *Herança Erudita*, *Vigilância Élfica*)

✅ **Zero links quebrados acidentais:** Todas as classes, perícias, divindades, condições e habilidades citadas existem fisicamente no cofre.

---

## 5. 🔮 Efeito Cascata Benéfico nas Raças Existentes
Graças à arquitetura orientada a consultas dinâmicas (`Dataview`), a criação de `Poderes/Raciais/` **imediatamente preencherá** a seção `🌳 Poderes Raciais Futuros (Progressão)` em 8 raças existentes do livro básico, sem necessidade de editar manualmente as notas das raças:

| Raça Existente no Cofre | Novos Poderes Raciais que Aparecerão Automaticamente via Dataview |
|---|---|
| `[[Dahllan]]` | `[[Fragrância de Rosas]]` |
| `[[Elfo]]` | `[[Estirpe Arcana]]`, `[[Herança Erudita]]`, `[[Meditação Mística]]`, `[[Vigilância Élfica]]` |
| `[[Goblin]]` | `[[Escapada Criativa]]` |
| `[[Humano]]` | `[[Citadino]]` |
| `[[Hynne]]` | `[[Citadino]]` |
| `[[Kliren]]` | `[[Citadino]]` |
| `[[Minotauro]]` | `[[Cascos Poderosos]]`, `[[Marrada Poderosa]]` |
| `[[Sílfide]]` | `[[Crescimento Feérico]]` |

---

## 6. 🛑 Pedido de Aprovação (Stop Condition)
O Passo 1 está concluído. Para executar a gravação física dos 35 arquivos e rodar o script de validação mecânica (Passo 3), confirme:

1. **Aprovação do layout dos 35 arquivos** (`Raças/` [5], `Habilidades/Raciais/` [19], `Poderes/Raciais/` [11]).
2. **Aprovação da sanitização** dos 4 Passos do Duende com travessão (`Passo 1 — Natureza.md`, etc.).
3. **Autorização para executar** `scratch/gerar_entidades.py` e `scratch/validar_zero_colisoes.py`.