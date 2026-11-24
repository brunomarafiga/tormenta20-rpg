# 🐉 Tormenta 20 — Compêndio & Web App de RPG

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen?style=for-the-badge&logo=github)](https://brunomarafiga.github.io/tormenta20-rpg/)
[![Tormenta 20 JdA](https://img.shields.io/badge/Sistema-Tormenta20%20JdA-red?style=for-the-badge)](https://jamboeditora.com.br/)
[![Vanilla Web](https://img.shields.io/badge/Tecnologia-HTML5%20%2F%20CSS3%20%2F%20Web%20Audio-blue?style=for-the-badge)](https://developer.mozilla.org/)

Aplicação web interativa estilo videogame de RPG (*Dark Fantasy UI*) e compêndio hiperlinkado com mais de 1.600 notas atômicas para o sistema **Tormenta 20 (Edição Jogo do Ano)** e seus suplementos oficiais (*Heróis de Arton*, *Deuses de Arton*, *Dragão Brasil 199*).

---

## 🎮 Aplicação Web Online (GitHub Pages)

Acesse a aplicação diretamente no seu navegador, sem necessidade de instalação:  
👉 **[https://brunomarafiga.github.io/tormenta20-rpg/](https://brunomarafiga.github.io/tormenta20-rpg/)**

---

## ✨ Funcionalidades da Aplicação Web

- **🛡️ Ficha de Personagem Interativa:**
  - Alternância instantânea entre fichas de heróis (*Theron de Valkaria* — Guerreiro Nv 1 e *Khinlannas Lichtvertreiber* — Usurpador Nv 4).
  - Barras ativas de Pontos de Vida (PV) e Pontos de Mana (PM) com botões rápidos de dano, cura e descanso.
  - Atributos roláveis (FOR, DES, CON, INT, SAB, CAR): clique em qualquer valor para rolar `1d20 + mod` com feedback visual e detecção de críticos (`20`) ou desastres (`1`).
  - Slots de equipamento vestidos e ações de combate rápidas.

- **⚡ Compêndio de Poderes (~700 Poderes):**
  - Busca instantânea e filtros por categoria (*Classe*, *Concedidos*, *Combate*, *Tormenta*, *Destino*).
  - Modal nativo (`<dialog>`) com árvore de pré-requisitos, custo em PM e descrição mecânica completa.

- **🎒 Mochila & Inventário (~630 Itens):**
  - Equipamento organizado por categorias canônicas (*Armas*, *Armaduras*, *Itens Sagrados*, *Alquimia*, *Aventura*).
  - Preços em Tibares (`T$`) e cálculo canônico de **Espaços de Carga** do *JdA*.

- **✨ Grimório de Magias (228 Magias):**
  - Filtros por Círculo (1º ao 5º) e tradição (*Divina*, *Arcana*, *Universal*).
  - Botão **"Lançar Magia"** que consome PM em tempo real da barra de recursos do personagem ativo.

- **🎲 Dock de Rolagem de Dados:**
  - Barra persistente no rodapé com rolagens rápidas de **d4, d6, d8, d10, d12, d20 e d100**.
  - Toast de notificação com fórmula e som procedural de dados rolando.

- **🔊 Sintetizador de Áudio (Web Audio API):**
  - Efeitos sonoros procedurais gerados pelo navegador (sem arquivos externos de áudio): dados, magias, descanso e cliques mecânicos.

---

## 🏛️ Estrutura do Repositório (Wiki Obsidian + Web App)

```
tormenta20-rpg/
├── index.html                   ← Aplicação Web interativa (GitHub Pages)
├── app_data.js                  ← Base de dados compilada (JSON)
├── 00 - Home.md                 ← Portal raiz do cofre no Obsidian
├── Classes/ (36 classes)        ← 14 básicas + 14 variantes + suplementos
├── Deuses/ (21 notas)           ← Panteão de Arton (20 maiores + Tilliann)
├── Magias/ (228 notas)          ← Divinas, Arcanas e Universais (1º ao 5º círculo)
├── Poderes/ (~400 notas)        ← Poderes de classe, combate, concedidos, tormenta
├── Itens/ (~230 notas)          ← Arsenal, armaduras, alquimia, itens sagrados
├── Raças/ (19 notas)            ← Raças oficiais e habilidades raciais
├── Mecânicas e Condições/       ← 35 condições, 29 perícias e regras
├── Templates/ (11 templates)    ← Modelos padronizados de notas
├── _Meta/                       ← Diretrizes de arquitetura e ontologia
└── .obsidian/                   ← Snippets CSS (tormenta20.css) e configurações
```

---

## 🚀 Como Executar Localmente

Não requer instalação de Node.js, compilação ou dependências externas:

1. Clone o repositório:
   ```bash
   git clone https://github.com/brunomarafiga/tormenta20-rpg.git
   ```
2. Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

Ou abra a pasta diretamente como um cofre no [Obsidian](https://obsidian.md).

---

## ⚖️ Licença e Direitos Autorais

- **Tormenta 20** é uma marca registrada de **Jambô Editora**.
- Este repositório é um projeto não-comercial de fã destinado a apoio a mestres e jogadores em mesas de RPG.
- As regras mecânicas e termos são apresentados sob fins de referência rápida de jogo.
