---
name: requisitos-projeto-codigo
description: |
  Solicita escopo, requisitos e restrições antes de desenvolver código para um projeto. Use sempre que o usuário pedir para criar, desenvolver, programar, implementar ou estruturar código para um projeto, sistema, aplicação, script, API, banco de dados ou nova funcionalidade, garantindo alinhamento técnico antes de escrever a implementação.
  Gatilhos: criar código, desenvolver projeto, programar sistema, implementar funcionalidade, criar script, desenvolver API, estruturar banco de dados, novo projeto de código, iniciar desenvolvimento.
---

# 📋 Requisitos de Projeto de Código

Garante que o escopo, os requisitos e as restrições de um projeto sejam coletados e alinhados antes da escrita de código, evitando retrabalho, decisões unilaterais e premissas incorretas.

---

## 🎯 Quando Usar

Acione esta skill sempre que o usuário solicitar:
- **Desenvolvimento de código para um projeto novo ou existente:** aplicações web/mobile, sistemas, APIs, automações, scripts complexos, pipelines ou bancos de dados.
- **Implementação de módulos ou funcionalidades:** criação de recursos que envolvam decisões arquiteturais, de modelagem de dados, de fluxo ou de regras de negócio.
- **Prototipação ou estruturação inicial:** criação de repositórios, scaffolding, arquitetura de pastas ou arquitetura de software.

### 🚫 Quando NÃO Usar

Não acione esta skill para:
- **Dúvidas conceituais ou sintaxe:** explicações teóricas, tira-dúvidas de sintaxe ou consulta a documentações.
- **Revisão rápida de trechos isolados:** refatoração de uma função pequena ou explicação de um bloco de código fornecido.
- **Correção pontual de bugs:** resolução de um erro específico quando o código e o contexto já estão completos e evidentes.

---

## 🧭 Etapas de Execução

### 1. Analise o que já foi informado
Leia o pedido inicial do usuário e identifique quais elementos entre **Escopo**, **Requisitos** e **Restrições** já foram fornecidos de forma clara.  
> **Regra de ouro:** Nunca pergunte novamente algo que o usuário já respondeu ou que está evidente no repositório/contexto.

### 2. Solicite os pontos faltantes antes de gerar código
Se faltar qualquer um dos três pilares, **suspenda a geração de código completo** e apresente perguntas objetivas (3 a 6 perguntas diretas), adaptadas e agrupadas por categoria:

- **🎯 Escopo:**
  - Qual é o objetivo central do projeto/funcionalidade?
  - O que deve estar contido nesta entrega imediata e o que fica explicitamente fora (não-escopo)?
- **⚙️ Requisitos:**
  - Quais são as funcionalidades esperadas (entradas, saídas, formatos de dados, regras centrais e fluxos principais)?
  - Há requisitos não funcionais críticos (desempenho, escalabilidade, segurança, persistência de dados, usabilidade, responsividade)?
- **🧱 Restrições:**
  - Quais tecnologias, linguagens, frameworks ou bibliotecas devem ser utilizadas ou estritamente evitadas?
  - Qual é o ambiente de execução e limites de infraestrutura (OS, versão da linguagem, cloud, local, dependências externas)?
  - Há padrões arquiteturais, convenções de código ou restrições de compatibilidade a seguir?

### 3. Aguarde a resposta e valide o alinhamento
Assim que o usuário responder:
1. Sintetize brevemente as definições acordadas (em no máximo 3 a 5 tópicos objetivos) **somente se houver risco real de ambiguidade**.
2. Prossiga para o desenvolvimento do código respeitando rigorosamente o escopo, os requisitos e as restrições acordados.

### 4. Respeite o atalho do usuário (*Bypass*)
Se o usuário pedir explicitamente para pular as perguntas ou assumir padrões (ex.: *"pode gerar direto"*, *"assuma o básico"*, *"faça com a stack padrão"*):
- Atenda ao pedido **imediatamente sem insistir**.
- Declare de forma concisa as premissas adotadas no início da sua resposta e gere o código.

---

## ⚠️ Pontos de Atenção

1. **Não gere código completo junto com as perguntas:** Entregar uma implementação completa antes de ouvir as respostas anula o propósito do levantamento e gera retrabalho se a premissa estiver errada.
2. **Seja cirúrgico e objetivo:** Limite-se a **3 a 6 perguntas diretas**. Nunca envie um questionário burocrático, prolixo ou genérico demais.
3. **Adapte ao contexto técnico específico:**
   - *Para um script de dados/automação:* pergunte sobre formato de entrada/saída (JSON, CSV, DB), volume de dados e tratamento de exceções.
   - *Para uma API/Backend:* pergunte sobre endpoints esperados, persistência (ORM, SQL, NoSQL), autenticação e contratos de dados.
   - *Para Frontend/Web:* pergunte sobre design system/estilo (Tailwind, CSS puro), responsividade, controle de estado e integração.
