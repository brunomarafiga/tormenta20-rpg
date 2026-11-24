---
tipo: classe
subtipo: classe-base
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Paladino"
pv_inicial: 20
pv_por_nivel: 5
pm_inicial: 3
pm_por_nivel: 3
pericias_basicas:
  - "Luta"
  - "Vontade"
pericias_adicionais: 2
proficiencias:
  - "Armaduras Leves"
  - "Armas Marciais"
  - "Armaduras Pesadas"
  - "Escudos"
  - "Armas Simples"
---

# ⚖️ Paladino

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe de Personagem
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 20 (+5 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 3 (+3 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armaduras Leves, Armas Marciais, Armaduras Pesadas, Escudos, Armas Simples
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Luta, Vontade
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 2 a sua escolha entre: Adestramento, Atletismo, Cavalgar, Cura, Diplomacia, Fortitude, Guerra, Iniciativa, Intuição, Nobreza, Percepção, Religião

Guerreiro sagrado blindado iluminado pelo heroísmo altruísta, campeão da justiça divina com mãos curativas, auras protetoras e o terrível Golpe Divino.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Abençoado (Paladino)|Abençoado]] | Você soma seu Carisma no seu total de pontos de mana no 1º nível. Além disso, torna-se dev... |
| **1º** | [[Código de Héroi]] | Você deve sempre manter sua palavra e nunca pode recusar um pedido de ajuda de alguém inoc... |
| **1º** | [[Golpe Divino]] | Quando faz um ataque corpo a corpo, você pode gastar 2 PM para desferir um golpe destruido... |
| **2º** | [[Cura pelas Mãos]] | A partir do 2º nível, você pode gastar uma ação de movimento e 1 PM para curar 1d8+1 ponto... |
| **3º** | [[Aura Sagrada]] | No 3º nível, você pode gastar 1 PM para gerar uma aura com 9m de raio a partir de você e d... |
| **5º** | [[Bênção da Justiça]] | No 5º nível, escolha entre égide sagrada e montaria sagrada (pág. 84). Uma vez feita, esta... |
| **20º** | [[Vingador Sagrado]] | No 20º nível, você pode gastar uma ação completa e 10 PM para se cobrir de energia divina,... |

---

## 📖 Descrição Completa das Habilidades de Paladino

### [[Abençoado (Paladino)|Abençoado]] (1º Nível)
Você soma seu Carisma no seu total de pontos de mana no 1º nível. Além disso, torna-se devoto de um deus disponível para paladinos (Azgher, Khalmyr, Lena, Lin-Wu, Marah, Tanna-Toh, Thyatis, Valkaria). Veja as regras de devotos na página 96. Ao contrário de devotos normais, você recebe dois poderes concedidos por se tornar devoto, em vez de apenas um. Como alternativa, você pode ser um paladino do bem, lutando em prol da bondade e da justiça como um todo. Não recebe nenhum Poder Concedido, mas não precisa seguir nenhuma Obrigação & Restrição (além do Código do Herói). Cultuar o bem conta como sua devoção.

### [[Código de Héroi]] (1º Nível)
Você deve sempre manter sua palavra e nunca pode recusar um pedido de ajuda de alguém inocente. Além disso, nunca pode mentir, trapacear ou roubar. Se violar o código, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia.

### [[Golpe Divino]] (1º Nível)
Quando faz um ataque corpo a corpo, você pode gastar 2 PM para desferir um golpe destruidor. Você soma seu Carisma no teste de ataque e +1d8 na rolagem de dano. A cada quatro níveis, pode gastar +1 PM para aumentar o dano em +1d8.

### [[Cura pelas Mãos]] (2º Nível)
A partir do 2º nível, você pode gastar uma ação de movimento e 1 PM para curar 1d8+1 pontos de vida de um alvo em alcance corpo a corpo (incluindo você). A cada quatro níveis, você pode gastar +1 PM para aumentar os PV curados em +1d8+1. Esta habilidade pode causar dano de luz a mortos-vivos, exigindo um ataque desarmado. A partir do 6º nível, você pode gastar +1 PM quando usa Cura pelas Mãos para anular uma condição afetando o alvo, entre abalado, apavorado, atordoado, cego, doente, exausto, fatigado ou surdo.

### [[Aura Sagrada]] (3º Nível)
No 3º nível, você pode gastar 1 PM para gerar uma aura com 9m de raio a partir de você e duração sustentada. A aura emite uma luz dourada e agradável. Além disso, você e os aliados dentro da aura somam seu Carisma nos testes de resistência.

### [[Bênção da Justiça]] (5º Nível)
No 5º nível, escolha entre égide sagrada e montaria sagrada (pág. 84). Uma vez feita, esta escolha não pode ser mudada.

### [[Vingador Sagrado]] (20º Nível)
No 20º nível, você pode gastar uma ação completa e 10 PM para se cobrir de energia divina, assumindo a forma de um vingador sagrado até o fim da cena. Nesta forma, você recebe deslocamento de voo 18m e redução de dano 20. Além disso, seu Golpe Divino tem seu custo é reduzido à metade e causa mais dois dados de dano.


---

## ⚔️ Poderes de Paladino

A partir do 2º nível, e a cada nível seguinte, você pode escolher um dos poderes a seguir:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Paladino"
WHERE tipo = "poder"
SORT file.name ASC
```
