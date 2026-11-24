# 📋 Plano de Separação: Habilidades Raciais Inatas vs. Poderes de Raça Adquiríveis

**Data da Auditoria:** 2026-11-21  
**Universo Analisado:** 75 notas em `Habilidades/Raciais/`, 11 notas em `Poderes/Raça/`, 23 notas de raças em `Raças/` e poderes em `Poderes/Combate/`, `Poderes/Destino/`, `Poderes/Magia/`.  
**Fontes Cruzadas:** *Tormenta20: Edição Jogo do Ano* (JdA), *Heróis de Arton* (HdA - Tabela 1-22), *Ameaças de Arton* (AdA).

---

## 1. 📊 Contagem Executiva por Categoria

| Categoria | Descrição | Quantidade | Percentual |
|---|---|:---:|:---:|
| **A. Inato (`MANTER`)** | Habilidade inata básica de 1º nível de criação de personagem | **74** | 98,7% |
| **B. Adquirível (`MOVER`)** | Poder de raça cadastrado erroneamente como habilidade | **0** | 0,0% |
| **C. Homônimo Misto (`MANTER + CRIAR SUFIXADO`)** | Habilidade inata de uma raça E poder de raça de outra | **1** | 1,3% |
| **D. Duplicata de Poder já em `Poderes/Raça/`** | Nota duplicada entre `Habilidades/Raciais/` e `Poderes/Raça/` | **0** | 0,0% |
| **`[CONFIRMAR]`** | Casos ambíguos ou incertos que exigem decisão humana | **0** | 0,0% |
| **TOTAL** | Universo auditado em `Habilidades/Raciais/` | **75** | **100%** |

### Varredura em Outras Pastas de Poderes Gerais
- **Poderes da Tabela 1-22 fora de `Poderes/Raça/`:** **0** encontrados em `Poderes/Combate/`, `Poderes/Destino/`, `Poderes/Magia/`, `Poderes/Tormenta/`, `Poderes/Concedidos/` ou `Poderes/Origem/`.
- **Poderes com `requer_raca:` fora de `Poderes/Raça/`:** **0** (todos os 11 poderes com pré-requisito racial residem estritamente em `Poderes/Raça/`).

---

## 2. 📑 Tabela de Itens B, C, D e `[CONFIRMAR]`

| Arquivo Atual | Classificação | Ação Proposta | Raças Afetadas em `habilidades_base` | Detalhes & Justificativa Canônica |
|---|:---:|---|---|---|
| `Habilidades/Raciais/Sangue Mágico.md` | **C. Homônimo Misto** | **MANTER** em `Habilidades/Raciais/` para Elfo.<br/>*(Futuro: criar `Poderes/Raça/Sangue Mágico (Poder).md`)* | `[[Elfo]]` | **Habilidade Inata do Elfo** (*Tormenta20 JdA*, p. 22): Concede `+1 PM por nível`.<br/>**Poder de Raça de HdA** (*Heróis de Arton*, p. 84, 86, Tabela 1-22): Poder geral adquirido exclusivo para `Eiradaan`, `Qareen` e `Sílfide` que permite sacrificar PV para gerar PM adicionais no turno. Como os nomes são idênticos, a nota atual do Elfo deve permanecer inalterada e o novo poder deve receber o sufixo canônico `(Poder)` para evitar colisões e links ambíguos. |

---

## 3. 🔍 Relação Completa dos 74 Itens Inatos (Categoria A - `MANTER`)

Todos os 74 arquivos abaixo correspondem estritamente a características biológicas/culturais inatas concedidas no 1º nível de criação de personagem e estão 100% sincronizados com `habilidades_base:` de suas respectivas raças:

1. **Ambição Herdada** (`Meio-Elfo`) — *HdA*
2. **Amiga das Plantas** (`Dahllan`) — *JdA*
3. **Armadura de Allihanna** (`Dahllan`) — *JdA*
4. **Armadura Óssea** (`Osteon`) — *JdA*
5. **Arremessador** (`Hynne`) — *JdA*
6. **Asas de Borboleta** (`Sílfide`) — *JdA*
7. **Aversão a Ferro** (`Duende`) — *HdA*
8. **Canalizar Reparos** (`Golem`) — *JdA*
9. **Canção dos Mares** (`Sereia`) — *JdA*
10. **Chassi** (`Golem`) — *JdA*
11. **Chifres** (`Minotauro`) — *JdA*
12. **Conhecimento das Rochas** (`Anão`) — *JdA*
13. **Couro Rígido** (`Minotauro`) — *JdA*
14. **Cria da Tormenta** (`Lefou`) — *JdA*
15. **Cria de Megalokk** (`Medusa`) — *JdA*
16. **Criatura Artificial** (`Golem`) — *JdA*
17. **Deformidade** (`Lefou`) — *JdA*
18. **Desejos** (`Qareen`) — *JdA*
19. **Devagar e Sempre** (`Anão`) — *JdA*
20. **Duro como Pedra** (`Anão`) — *JdA*
21. **Empatia Selvagem (Dahllan)** (`Dahllan`) — *JdA*
22. **Engenhosidade (Kliren)** (`Kliren`) — *JdA*
23. **Engenhoso** (`Goblin`) — *JdA*
24. **Entre Dois Mundos** (`Meio-Elfo`) — *HdA*
25. **Espelunqueiro** (`Goblin`) — *JdA*
26. **Espírito Elemental** (`Golem`) — *JdA*
27. **Espírito da Natureza** (`Sílfide`) — *JdA*
28. **Essência Feérica** (`Eiradaan`) — *HdA*
29. **Faro** (`Minotauro`) — *JdA*
30. **Festeiro Feérico** (`Sátiro`) — *HdA*
31. **Força dos Titãs** (`Galokk`) — *HdA*
32. **Graça de Glórienn** (`Elfo`) — *JdA*
33. **Herança Divina (Aggelus)** (`Suraggel (Aggelus)`) — *JdA*
34. **Herança Divina (Sulfure)** (`Suraggel (Sulfure)`) — *JdA*
35. **Híbrido** (`Kliren`) — *JdA*
36. **Infância entre os Pequenos** (`Galokk`) — *HdA*
37. **Instrumentista Mágico** (`Sátiro`) — *HdA*
38. **Luz Sagrada** (`Suraggel (Aggelus)`) — *JdA*
39. **Magia Instintiva** (`Eiradaan`) — *HdA*
40. **Magia das Fadas** (`Sílfide`) — *JdA*
41. **Marrada** (`Sátiro`) — *HdA*
42. **Mau Cheiro** (`Trog`) — *JdA*
43. **Medo de Altura** (`Minotauro`) — *JdA*
44. **Meio-Gigante** (`Galokk`) — *HdA*
45. **Memória Póstuma** (`Osteon`) — *JdA*
46. **Mestre do Tridente** (`Sereia`) — *JdA*
47. **Mordida** (`Trog`) — *JdA*
48. **Natureza Esquelética** (`Osteon`) — *JdA*
49. **Natureza Venenosa** (`Medusa`) — *JdA*
50. **Olhar Atordoante** (`Medusa`) — *JdA*
51. **Ossos Frágeis** (`Kliren`) — *JdA*
52. **Passo 1 — Natureza** (`Duende`) — *HdA*
53. **Passo 2 — Tamanho** (`Duende`) — *HdA*
54. **Passo 3 — Dons** (`Duende`) — *HdA*
55. **Passo 4 — Presentes de Magia e de Caos** (`Duende`) — *HdA*
56. **Pequeno e Rechonchudo** (`Hynne`) — *JdA*
57. **Pernas Caprinas** (`Sátiro`) — *HdA*
58. **Peste Esguia** (`Goblin`) — *JdA*
59. **Rato das Ruas** (`Goblin`) — *JdA*
60. **Reptiliano** (`Trog`) — *JdA*
61. **Resistência Elemental** (`Qareen`) — *JdA*
62. **Sangue Frio** (`Trog`) — *JdA*
63. **Sangue Élfico** (`Meio-Elfo`) — *HdA*
64. **Sem Origem** (`Golem`) — *JdA*
65. **Sentidos Místicos** (`Eiradaan`) — *HdA*
66. **Sentidos Élficos** (`Elfo`) — *JdA*
67. **Sombras Profanas** (`Suraggel (Sulfure)`) — *JdA*
68. **Sorte Salvadora** (`Hynne`) — *JdA*
69. **Tabu** (`Duende`) — *HdA*
70. **Tatuagem mística** (`Qareen`) — *JdA*
71. **Tradição de Heredrimm** (`Anão`) — *JdA*
72. **Transformação Anfíbia** (`Sereia`) — *JdA*
73. **Vanguardista** (`Kliren`) — *JdA*
74. **Versátil** (`Humano`) — *JdA*
