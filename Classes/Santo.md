---
tipo: classe
subtipo: classe-variante
classe_base: "[[Paladino]]"
sistema: tormenta20-jda
fonte: "Heróis de Arton"
nome: "Santo"
pv_inicial: 20
pv_por_nivel: 5
pm_inicial: 4
pm_por_nivel: 4
pericias_basicas:
  - "Cura ou Diplomacia"
  - "Vontade"
pericias_adicionais: 2
proficiencias:
  - "Armas Simples"
  - "Armaduras Leves"
  - "Armaduras Pesadas"
  - "Escudos"
---

# 🕊️ Santo

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe Variante de [[Paladino]] (*Heróis de Arton*)
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 20 (+5 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 4 (+4 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armas Simples, Armaduras Leves, Armaduras Pesadas, Escudos
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Cura ou Diplomacia, Vontade
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 2 a sua escolha entre: Cavalgar, Conhecimento, Diplomacia, Fortitude, Guerra, Iniciativa, Intuição, Luta, Nobreza, Percepção, Religião

O Santo é a manifestação viva da graça divina e do sacrifício pessoal. Ungido com ladainhas sagradas e poder de cura milagroso, ele atua como mártir e vaso vivo da vontade dos deuses benevolentes.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Abençoado (Santo)|Abençoado]] | Você soma seu Carisma no seu total de pontos de mana no 1º nível. Além disso, torna-se dev... |
| **1º** | [[Ladainha de Combate]] | Você pode gastar uma ação padrão e 2 PM para gerar uma aura de 9m de raio com duração sust... |
| **2º** | [[Santo Curandeiro]] | A partir do 2º nível, você pode gastar uma ação de movimento e uma quantidade de PM a sua ... |
| **3º** | [[Vaso do Espírito]] | A partir do 3º nível, quando faz um teste de resistência, você pode gastar 1 PM para somar... |
| **6º** | [[Mártir]] | A partir do 6º nível, quando um aliado em alcance médio faz um teste de resistência, você ... |
| **8º** | [[Pira Santa]] | No 8º nível, enquanto estiver sob efeito de Ladainha de Combate, você pode gastar uma ação... |
| **20º** | [[Vingador Santificado]] | No 20º nível, quando usa Ladainha de Combate, você pode gastar +5 PM. Se fizer isso, os bô... |

---

## 📖 Descrição Completa das Habilidades de Santo

### [[Abençoado (Santo)|Abençoado]] (1º Nível)
Você soma seu Carisma no seu total de pontos de mana no 1º nível. Além disso, torna-se devoto de um deus disponível para paladinos (Azgher, Khalmyr, Lena, Lin-Wu, Marah, Tanna-Toh, Thyatis, Valkaria). Veja as regras de devotos na página 96. Ao contrário de devotos normais, você recebe dois poderes concedidos por se tornar devoto, em vez de apenas um. Você não pode escolher ser um santo do bem.

### [[Ladainha de Combate]] (1º Nível)
Você pode gastar uma ação padrão e 2 PM para gerar uma aura de 9m de raio com duração sustentada. Você e os aliados dentro da aura recebem +1 em testes de ataque, rolagens de dano e na Defesa. A cada quatro níveis, você pode gastar +2 PM para aumentar esses bônus em +1. Sua ladainha conta como Aura Sagrada para pré-requisitos e efeitos de poderes de paladino. No 5º nível, você e os aliados dentro da aura causam +1d8 pontos de dano de luz com ataques contra devotos de deuses que canalizam apenas energia negativa e criaturas malignas (a critério do mestre). No 9º nível, suas armas e as dos aliados dentro da aura recebem o encanto veloz.

### [[Santo Curandeiro]] (2º Nível)
A partir do 2º nível, você pode gastar uma ação de movimento e uma quantidade de PM a sua escolha (limitada pelo seu Carisma). Para cada PM que você gastar, o aliado em alcance médio com a maior redução em seus PV (por dano ou perda de vida) recupera 2d8 pontos de vida por luz. A partir do 6º nível, quando usa Santo Curandeiro, você também pode remover uma condição do alvo entre abalado, apavorado, atordoado, cego, doente, exausto, fatigado ou surdo.

### [[Vaso do Espírito]] (3º Nível)
A partir do 3º nível, quando faz um teste de resistência, você pode gastar 1 PM para somar seu Carisma nesse teste.

### [[Mártir]] (6º Nível)
A partir do 6º nível, quando um aliado em alcance médio faz um teste de resistência, você pode gastar 1 PM para conceder a ele um bônus nesse teste igual ao seu próprio Carisma. A partir do 12º nível, uma vez por cena, se ele ainda assim falhar, você pode sofrer o efeito no lugar dele (mas você é afetado mesmo que seja imune ao efeito).

### [[Pira Santa]] (8º Nível)
No 8º nível, enquanto estiver sob efeito de Ladainha de Combate, você pode gastar uma ação de movimento e uma quantidade de PM a sua escolha (limitada pelo seu Carisma). Para cada PM que gastar, o inimigo de maior ND em alcance médio sofre 2d8 pontos de dano de luz e fica ofuscado por 1 rodada (Fort CD Car reduz à metade).

### [[Vingador Santificado]] (20º Nível)
No 20º nível, quando usa Ladainha de Combate, você pode gastar +5 PM. Se fizer isso, os bônus numéricos fornecidos por sua Ladainha dobram e você e os aliados dentro da aura recebem imunidade a acertos críticos e RD igual a 5 + seu Carisma.


---

## ⚔️ Poderes de Paladino Disponíveis para Santo

Como classe variante, o Santo acessa toda a lista de poderes da sua classe base [[Paladino]]:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Paladino"
WHERE tipo = "poder"
SORT file.name ASC
```
