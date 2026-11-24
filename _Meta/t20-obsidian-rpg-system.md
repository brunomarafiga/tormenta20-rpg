---
tipo: documentacao
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Diretrizes de Ontologia e Sistema de RPG"
---

# Diretrizes de Ontologia e Sistema de RPG (Tormenta 20 & Obsidian)

Ao manipular notas de Tormenta 20 neste workspace, siga rigorosamente estes invariantes:

## 0. Cobertura Completa dos Livros
- O cofre cobre **Tormenta20 JdA** e todos os suplementos disponíveis no projeto, incluindo Atlas de Arton, Heróis de Arton, Ameaças de Arton, Deuses de Arton e Dragão Brasil 199.
- Antes de criar ou corrigir uma entidade, determine a publicação de origem e registre o campo `fonte` correspondente.
- Não trate o Jogo do Ano como limite exclusivo das regras; use o suplemento correto quando o elemento pertencer a uma expansão.
- **Isolamento dos repositórios:** nunca altere arquivos dentro de pastas `GitHub` ou repositórios externos. Use-os exclusivamente como fontes de consulta.

## 1. Fidelidade Canônica e Zero Alucinação
- **Hierarquia de Fontes Canônicas:**
  - **1. Fonte Primária de Consulta Rápida:** Repositório local `gerador-ficha-tormenta20` (`C:\Users\Bruno Marafiga\OneDrive\Documentos\GitHub\gerador-ficha-tormenta20\src\data\systems\tormenta20\`) para consulta ágil de estruturas, tabelas de equipamentos, poderes, magias, raças, classes, preços e espaços.
  - **2. Fonte Secundária e Árbitro Canônico:** NotebookLM (`0097a4d0-2d98-41c4-bf74-6e86df272f4c` — caderno *Tormenta 20*). Em qualquer divergência entre o código comunitário local e os manuais oficiais indexados no NotebookLM, **prevalece sempre o texto oficial do NotebookLM**.
- **Resiliência e Prevenção de Alucinação:**
  - Caso o repositório local esteja inacessível, faça fallback imediato para o NotebookLM.
  - Se um elemento ou regra não for localizado em nenhuma das duas fontes, marque explicitamente como `[VERIFICAR]`. **Nunca invente regras, custos, atributos ou efeitos de memória**.
- **Tradução para o Schema do Cofre:**
  - Propriedades extraídas do TypeScript devem sempre ser traduzidas para os campos padronizados do YAML do cofre (`tipo`, `categoria`, `subtipo`, `raca`, `requer_raca`, `custo_pm`, `preco_ts`, `espacos`, etc.), sem importar identificadores ou chaves internas do código.
- **Invariantes do Sistema T20 JdA:**
  - **Atributos:** Utilize rigorosamente o valor inteiro direto (inicia em 0 para a média humana e pode ser negativo: ex. For 0, Des 3, Car 5). Nunca importe scores legados de D&D (10 a 20).
  - **Perícias:** Valor final = metade do nível + atributo-chave + bônus de treino + outros efeitos aplicáveis.
  - **Vetores de efeito:** Diferencie alteração permanente de atributo, bônus direto, substituição de atributo-chave, condição, rolagem múltipla e sucesso automático.
  - **Acúmulo:** Bônus de fontes distintas podem se acumular; efeitos iguais da mesma fonte não se acumulam consigo mesmos. Itens, magias, parceiros e ambiente seguem regras próprias.
  - **Substituições:** Nunca inferir atributo substituto; registre-o somente com texto canônico explícito.
- **Zero Nós Fantasmas:** Diagramas `mermaid` só podem conter nós que correspondam a arquivos `.md` existentes e validados no cofre (ou habilidades explícitas da própria nota). Dados incertos devem ser marcados com `[VERIFICAR]`.

## 2. Hierarquia de Poderes, Colisões e Ordenação Topológica
- **Relação Habilidade/Poder:** Todo poder é uma habilidade, mas nem toda habilidade é um poder. Habilidades podem ser automáticas ou inatas; poderes são habilidades adquiridas e modulares escolhidas pelo personagem.
- **Poderes funcionam como habilidades:** Para ativação, CD, PM, nível e acúmulo, aplique as regras de habilidades. A CD padrão é `10 + nível/2 + atributo-chave aplicável`.
- **Taxonomia tática:** Todo poder pode receber `subcategoria_tatica` e `area_efeito`. Use essas facetas apenas quando houver correspondência explícita no texto oficial.
- **Escalas especiais:** `escala_por_nivel` e `escala_por_poderes_tormenta` somente podem ser `true` quando a regra tiver crescimento formal por nível ou quantidade de poderes rubros.
- **Magias como habilidades:** Uma magia não é um poder. Apenas poderes que ensinam, concedem ou ampliam magias estabelecem essa relação especial.
- **Poderes-Raiz:** Poderes que servem de pré-requisito (`Canalizar Energia`, `Abençoar Arma`, `Prece de Combate`, `Raio Arcano`, `Familiar`, `Caldeirão do Bruxo`, `Escriba Arcano`, `Especialista em Escola`) DEVEM possuir nota própria e aparecer no topo de suas trilhas.
- **Poderes Compartilhados:** Poderes idênticos presentes em múltiplas classes (ex: `Aumento de Atributo`, `Conhecimento Mágico`) devem residir em `Poderes/Classe/Comuns/` com a lista `classes: ["[[Classe A]]", ...]` no YAML, evitando colisão de wikilinks curtos entre pastas.
- **Origens:** Use `categoria: origem` e `subtipo: origem-basica`, `origem-regional` ou `origem-especial`. Uma origem básica oferece exatamente dois benefícios entre perícias e poderes; uma origem regional ou especial pode oferecer um benefício único fechado.
- **Ordenação em Dezenas por Árvore:** Para evitar conflito quando uma mesma trilha tem mais de um poder-raiz:
  - Raiz A: `ordem: 10`, dependentes diretos: `11, 12, ...`
  - Raiz B: `ordem: 20`, dependentes diretos: `21, 22, ...`
  - Poderes independentes/sem dependência: `ordem: 90, 91...` ou default `999`.
- **Vínculos Bidirecionais:** Declare apenas a aresta de entrada (`requer_poder: ["[[Poder]]"]`); dependentes são sempre calculados via Dataview.

## 3. Padrão YAML, Callouts e Consultas Dataview
- **YAML Enxuto:** Omita propriedades vazias (`null` ou `[]`) do frontmatter para manter a leitura limpa.
- **Campos Relacionais como Wikilinks:** Entidades relacionais no YAML (`deuses`, `requer_poder`, `requer_pericia`, `magias_relacionadas`, `classes`, `exclusiva_devocao`, `aprimoramento_exclusivo`, `condicoes_*`) devem usar wikilinks entre aspas (`"[[Nome]]"`).
- **Links reversos de perícias:** Poderes, habilidades, itens, magias e condições usam `requer_pericia`, `pericias_envolvidas` ou `pericias_relacionadas`; a tabela reversa fica na nota da perícia.
- **Dataview seguro:** Use campos de tipo correto, `default()` e links com `this.file.link`. Não aplique `join()`, `flat()` ou `choice()` sobre campos escalares sem confirmar o tipo real.
- **Regra Crítica de Comparação de Links no Dataview:**
  - Em cláusulas `WHERE contains(...)` sobre campos de wikilink, use **sempre** `this.file.link` (ou `link("Nome")`), **NUNCA** a string pura `"[[Nome]]"`. O Dataview armazena wikilinks como objetos `Link` e a comparação com string falha silenciosamente.
- **Sintaxe de Callouts:** Toda linha interna de um callout (`[!t20-item]`, `[!t20-poder]`, `[!t20-restricao]`, `[!t20-pm]`, `[!t20-magia]`, `[!t20-lore]`) DEVE iniciar com `> `. Nunca use `[!t20-stats]` para blocos que precisem exibir título (seu `.callout-title` é ocultado pelo CSS).
- **Vocabulário Controlado de Metadados:**
  - `tipo`: `classe`, `divindade`, `raca`, `item`, `magia`, `poder`, `habilidade`, `mecanica`, `personagem`, `ameaca`, `sessao-rpg`, `modificacao`, `encantamento`, `moc`, `documentacao`
  - `categoria` (padronização de poderes): `classe`, `combate`, `concedido`, `destino`, `magia`, `tormenta`, `origem`, `racial`
  - `subtipo`:
    - Em classes: `classe-base`, `classe-variante`
    - Em habilidades: `habilidade-de-classe` (em `Habilidades/Classes/`), `habilidade-racial` (em `Habilidades/Raciais/` usando sempre `raca: ["[[...]]"]`)
    - Em mecânicas: `condicao`, `pericia`, `regra` (sob `Mecânicas e Condições/` com `tipo: mecanica`)
    - Em personagens: `pj` (em `Campanha/02_Personagens/` com `classes:` em lista)
  - `fonte`: `"Tormenta20 JdA"`, `"Deuses de Arton"`, `"Heróis de Arton"`, `"Dragão Brasil 199"`
  - Itens: use `preco_ts: <int>` e `espacos: <int>` (números puros para permitir `SORT`).
- **Query Dataview Padrão para Poderes:**
  ```dataview
  TABLE
    resumo AS "Efeito Resumido",
    join(default(requer_poder, []), ", ") AS "Pré-requisitos",
    default(requer_nivel, "—") AS "Nível Mín.",
    join(default(magias_relacionadas, []), ", ") AS "Magias Vinculadas"
  FROM "Poderes/Classe/<Classe>" OR "Poderes/Classe/Comuns"
  WHERE tipo = "poder"
    AND trilha_poder = "<Trilha>"
    AND (!classes OR contains(classes, this.file.link))
  SORT default(ordem, 999) ASC, default(requer_nivel, 1) ASC, file.name ASC
  ```

## 4. Classes Variantes, Deuses e Magias
- **Classes Variantes:** Devem conter callout `[!t20-restricao]` de regras de adaptação no topo, campo `classe_base: "[[Classe]]"` no YAML, diagrama `mermaid` sincronizado com notas reais e tabelas Dataview filtrando poderes proibidos (`AND !contains(default(poderes_proibidos, []), file.name)` ou comparando com `link(...)`).
- **Deuses e Entidades Relacionais:** Listas de poderes concedidos e magias de devoção na nota do deus devem ser puxadas dinamicamente via Dataview:
  ```dataview
  TABLE circulo AS "Círculo", escola AS "Escola"
  FROM "Magias"
  WHERE tipo = "magia"
    AND (contains(exclusiva_devocao, this.file.link) OR contains(aprimoramento_exclusivo, this.file.link))
  SORT circulo ASC, file.name ASC
  ```
- **Magias:** Toda magia citada em efeitos mecânicos deve ser linkada via `[[Nome da Magia]]` e listada em `magias_relacionadas`.

## 5. Escopo Único de Cofre (Fonte da Verdade)
- **Cofre Único e Raiz Autônoma:** `g:\Meu Drive\👤 05 Pessoal e Mídia\Anotações\Cultura e Mídia\RPG\Tormenta 20\`.
- A pasta `Tormenta 20\` contém seu próprio diretório `.obsidian/` e opera como raiz de cofre independente.
- Não há necessidade de sincronização para outros cofres secundários.
- Pastas de scratch e temporários devem residir fora do cofre (ou na pasta excluída `.system_generated`) para não poluir o grafo do Obsidian.

## 6. Scripts no Windows / PowerShell
- Nunca execute lógica complexa ou regex inline via `python -c "..."` no PowerShell.
- Escreva scripts em `scratch/<nome>.py` e execute com `python scratch/<nome>.py`.
- Todo script Python que leia ou escreva notas Markdown DEVE declarar explicitamente `encoding="utf-8"` para preservar acentos e emojis.
