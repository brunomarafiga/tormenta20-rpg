# Tormenta 20 — Diretrizes Canônicas do Agente

Ao consultar, criar, descrever ou alterar regras, itens, habilidades, poderes, magias ou fichas neste cofre, siga estritamente este protocolo:

O cofre cobre o **Tormenta20: Edição Jogo do Ano** e todos os livros e suplementos disponíveis no projeto. Consulte a fonte específica correspondente a cada entidade; não limite a pesquisa ao Livro Básico.

**Regra de isolamento:** nunca altere, crie ou exclua arquivos dentro de pastas `GitHub` ou repositórios externos. Esses diretórios são fontes de consulta somente leitura.

## 1. Hierarquia de Fontes Canônicas
1. **Fonte Primária de Consulta Rápida:** Código local `gerador-ficha-tormenta20` em `C:\Users\Bruno Marafiga\OneDrive\Documentos\GitHub\gerador-ficha-tormenta20\src\data\systems\tormenta20\`. Use para verificação ágil de listas, equipamentos, dados base, preços e espaços.
2. **Fonte Secundária e Árbitro Canônico:** NotebookLM no caderno **"Tormenta 20"** (ID: `0097a4d0-2d98-41c4-bf74-6e86df272f4c`).
   - **Regra de Conflito:** Havendo divergência entre o código local e os livros oficiais indexados no NotebookLM, **prevalece sempre o texto oficial do NotebookLM**.

## 2. Resiliência e Prevenção de Alucinação
- Se o diretório local estiver indisponível, faça fallback direto para o NotebookLM.
- Se a informação não constar em nenhuma das duas fontes, marque explicitamente como `[VERIFICAR]`. **Nunca invente bônus, pré-requisitos, custos de PM ou efeitos de memória**.

## 3. Tradução para o Schema do Cofre
- Converta os dados do TypeScript para o vocabulário controlado do cofre (`tipo`, `categoria`, `subtipo`, `raca`, `requer_raca`, `custo_pm`, `preco_ts`, `espacos`), sem importar identificadores ou nomes de variáveis do código-fonte.
- **Atributos:** Use exclusivamente inteiros diretos de T20 (média humana 0, permitindo valores negativos: ex.: For 0, Des 3, Car 5). Nunca use o sistema 10 a 20 de D&D.
- **Perícias:** Valor final = metade do nível + atributo-chave + bônus de treino + outros efeitos aplicáveis.
- **Vetores de efeito:** Diferencie alteração permanente de atributo, bônus direto, substituição de atributo-chave, condição, rolagem múltipla e sucesso automático.
- **Acúmulo:** Bônus de fontes distintas podem se acumular; o mesmo efeito da mesma fonte não acumula consigo mesmo.
- **Links reversos:** Poderes, habilidades, itens, magias e condições devem apontar para perícias por `requer_pericia`, `pericias_envolvidas` ou `pericias_relacionadas`.

## 4. Referências Completas de Ontologia e Arquitetura
Consulte a documentação viva do cofre para especificações detalhadas de taxonomia, frontmatter e queries Dataview:
- [_Meta/t20-obsidian-rpg-system.md](file:///g:/Meu%20Drive/👤%2005%20Pessoal%20e%20Mídia/Anotações/Cultura%20e%20Mídia/RPG/Tormenta%2020/_Meta/t20-obsidian-rpg-system.md) (Diretrizes de Ontologia e Sistema de RPG)
- [_Meta/README.md](file:///g:/Meu%20Drive/👤%2005%20Pessoal%20e%20Mídia/Anotações/Cultura%20e%20Mídia/RPG/Tormenta%2020/_Meta/README.md) (Tabela Mestra de Taxonomia do Cofre)
- [_Meta/Ontologia de Atributos e Perícias.md](file:///g:/Meu%20Drive/👤%2005%20Pessoal%20e%20Mídia/Anotações/Cultura%20e%20Mídia/RPG/Tormenta%2020/_Meta/Ontologia%20de%20Atributos%20e%20Per%C3%ADcias.md) (Fórmula, vetores de efeito e stacking)
