---
tipo: classe
subtipo: classe-base
sistema: tormenta20-jda
fonte: "Heróis de Arton"
nome: "Treinador"
pv_inicial: 12
pv_por_nivel: 3
pm_inicial: 4
pm_por_nivel: 4
pericias_basicas:
  - "Adestramento"
  - "Vontade"
pericias_adicionais: 4
proficiencias:
  - "Armas Simples"
  - "Armaduras Leves"
---

# 🐾 Treinador

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe Básica (*Heróis de Arton*)
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 12 (+3 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 4 (+4 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armas Simples, Armaduras Leves
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Adestramento, Vontade
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 4 a sua escolha entre: Atletismo, Cavalgar, Diplomacia, Guerra, Iniciativa, Intimidação, Intuição, Luta, Ofício (Qualquer), Percepção, Pontaria, Reflexos, Religião, Sobrevivência

O Treinador é o especialista supremo na criação de laços com as feras e monstros de Arton. Mais do que um mero domador de animais, ele compreende a alma e os instintos das criaturas, formando com seu parceiro uma unidade tática que luta, protege e evolui lado a lado no campo de batalha.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Melhor Amigo]] | Você recebe um melhor amigo, um parceiro animal especial com 2 truques iniciais (+1 truque a cada 3 níveis). |
| **1º** | [[Direcionar]] | Se o seu melhor amigo fizer um teste em alcance curto, você pode gastar 2 PM para somar seu Carisma no teste dele. |
| **2º** | [[Domar Criatura]] | Ação de movimento e 1 PM: teste oposto de Adestramento contra Vontade para causar dano psíquico não letal e render criaturas. A partir do 5º nível, pode controlá-las temporariamente. |
| **5º** | [[Treino Especializado]] | Escolha entre *Conquistar pelos Números* (segundo melhor amigo) ou *Treino Intensivo* (+PV, RD e truques extras). |
| **6º** | [[Sincronia de Combate]] | Quando seu melhor amigo acerta um ataque, você pode gastar 2 PM para fazer um ataque imediato contra o mesmo alvo. |
| **20º** | [[Sincronia Perfeita]] | Ação de movimento e 6 PM: aumenta o tamanho do melhor amigo e ganha ações padrão extras coordenadas por rodada. |

---

## 📖 Descrição Completa das Habilidades de Treinador

### [[Melhor Amigo]] (1º Nível)
Você recebe um melhor amigo, um parceiro especial que o acompanha em suas aventuras. Ele começa com dois truques a sua escolha e recebe um novo truque a cada três níveis seguintes. 
- Caso seu melhor amigo morra, você fica atordoado por 1d4 rodadas. 
- Você pode treinar um novo melhor amigo com um mês de trabalho e dedicação.

### [[Direcionar]] (1º Nível)
Se o seu melhor amigo estiver em alcance curto e fizer um teste de perícia, você pode gastar **2 PM** para somar seu modificador de **Carisma** no teste dele.

### [[Domar Criatura]] (2º Nível)
A partir do 2º nível, você pode gastar uma **ação de movimento e 1 PM** para fazer um teste de Adestramento oposto ao teste de Vontade de uma criatura não inteligente em alcance curto:
- Se vencer, causa **2d8 pontos de dano psíquico não letal** à criatura (se perder, causa metade).
- Se a criatura for reduzida a 0 ou menos PV, em vez de cair inconsciente, ela se rende. A cada quatro níveis, pode gastar +1 PM para aumentar o dano em +2d8.
- **A partir do 5º nível:** Quando rende uma criatura com ND igual ou menor que seu nível, você pode gastar PM igual ao ND dela para curá-la desse dano e controlar suas ações até o fim da cena.
- **A partir do 8º nível:** Se o ND for igual ou menor que seu nível –3, ela o acompanha até o fim do dia.

### [[Treino Especializado]] (5º Nível)
No 5º nível, você define a doutrina de combate do seu vínculo:
- **Conquistar pelos Números:** Você recebe um segundo melhor amigo. Uma vez por rodada, quando faz uma ação padrão com um deles, pode gastar 3 PM para fazer uma ação padrão com o outro.
- **Treino Intensivo:** Seu melhor amigo recebe **+4 PV por nível, Redução de Dano 5 (RD 5)** e um truque adicional. No 11º nível a RD sobe para 10 (+1 truque) e no 17º nível para 15.

### [[Sincronia de Combate]] (6º Nível)
A partir do 6º nível, uma vez por rodada, quando seu melhor amigo acerta um ataque usando a ação agredir, você pode gastar **2 PM** para desferir um ataque imediato contra o mesmo alvo.

### [[Sincronia Perfeita]] (20º Nível)
No 20º nível, você pode gastar uma ação de movimento e 6 PM para entrar em sintonia absoluta com seu melhor amigo:
- O tamanho dele aumenta em uma categoria até o fim da cena.
- Uma vez por rodada, quando você usa uma ação padrão consigo mesmo, recebe uma **ação padrão extra livre** para usar com ele.

---

## ⚔️ Poderes de Treinador

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Treinador"
WHERE tipo = "poder"
SORT file.name ASC
```
