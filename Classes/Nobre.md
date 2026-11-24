---
tipo: classe
subtipo: classe-base
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Nobre"
pv_inicial: 16
pv_por_nivel: 4
pm_inicial: 4
pm_por_nivel: 4
pericias_basicas:
  - "Diplomacia ou Intimidação"
  - "Vontade"
pericias_adicionais: 4
proficiencias:
  - "Armaduras Leves"
  - "Armas Marciais"
  - "Armaduras Pesadas"
  - "Escudos"
  - "Armas Simples"
---

# 👑 Nobre

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe de Personagem
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 16 (+4 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 4 (+4 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armaduras Leves, Armas Marciais, Armaduras Pesadas, Escudos, Armas Simples
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Diplomacia ou Intimidação, Vontade
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 4 a sua escolha entre: Adestramento, Atuação, Cavalgar, Conhecimento, Diplomacia, Enganação, Fortitude, Guerra, Iniciativa, Intimidação, Intuição, Investigação, Jogatina, Luta, Nobreza, Ofício (Qualquer), Percepção, Pontaria

Líder nato de berço nobre ou carisma arrebatador, dominando palavras afiadas, recursos financeiros abundantes e presença de comando no campo de batalha.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Autoconfiança]] | Você pode usar seu Carisma em vez de Destreza na Defesa (mas continua não podendo somar um... |
| **1º** | [[Espólio]] | Você recebe um a sua escolha com preço de até T$ 2.000.... |
| **1º** | [[Orgulho]] | Quando faz um teste de perícia, você pode gastar uma quantidade de PM a sua escolha (limit... |
| **2º** | [[Palavras Afiadas]] | Você pode gastar uma ação padrão e 1 PM para fazer um teste de Diplomacia ou Intimidação o... |
| **3º** | [[Riqueza]] | No 3º nível, você passa a receber dinheiro de sua família, patrono ou negócios. Uma vez po... |
| **4º** | [[Gritar Ordens]] | A partir do 4º nível, você pode gastar uma quantidade de PM a sua escolha (limitado pelo s... |
| **5º** | [[Presença Aristocrática]] | A partir do 5º nível, sempre que uma criatura inteligente tentar machucá-lo (causar dano c... |
| **20º** | [[Realeza]] | No 20º nível, a CD para resistir a sua Presença Aristocrática aumenta em +5 e uma criatura... |

---

## 📖 Descrição Completa das Habilidades de Nobre

### [[Autoconfiança]] (1º Nível)
Você pode usar seu Carisma em vez de Destreza na Defesa (mas continua não podendo somar um atributo na Defesa quando usa armadura pesada).

### [[Espólio]] (1º Nível)
Você recebe um a sua escolha com preço de até T$ 2.000.

### [[Orgulho]] (1º Nível)
Quando faz um teste de perícia, você pode gastar uma quantidade de PM a sua escolha (limitado pelo seu Carisma). Para cada PM que gastar, recebe +2 no teste.

### [[Palavras Afiadas]] (2º Nível)
Você pode gastar uma ação padrão e 1 PM para fazer um teste de Diplomacia ou Intimidação oposto ao teste de Vontade de uma criatura inteligente (Int –3 ou maior) em alcance curto. Se vencer, você causa 2d6 pontos de dano psíquico não letal à criatura. Se perder, causa metade deste dano. Se a criatura for reduzida a 0 ou menos PV, em vez de cair inconsciente, ela se rende (se você usou Diplomacia) ou fica apavorada e foge de você da maneira mais eficiente possível (se usou Intimidação). A cada quatro níveis, você pode gastar +1 PM para aumentar o dano (veja a tabela da classe). Mental.

### [[Riqueza]] (3º Nível)
No 3º nível, você passa a receber dinheiro de sua família, patrono ou negócios. Uma vez por aventura, pode fazer um teste de Carisma com um bônus igual ao seu nível de nobre. Você recebe um número de Tibares de ouro igual ao resultado do teste. Assim, um nobre de 5º nível com Carisma 4 que role 13 no dado recebe 22 TO. O uso desta habilidade é condicionado a sua relação com sua família, patrono ou negócios e a onde você está. Por exemplo, um nobre viajando pelos ermos, isolado da civilização, dificilmente teria como receber dinheiro.

### [[Gritar Ordens]] (4º Nível)
A partir do 4º nível, você pode gastar uma quantidade de PM a sua escolha (limitado pelo seu Carisma). Até o início de seu próximo turno, todos os seus aliados em alcance curto recebem um bônus nos testes de perícia igual à quantidade de PM que você gastou.

### [[Presença Aristocrática]] (5º Nível)
A partir do 5º nível, sempre que uma criatura inteligente tentar machucá-lo (causar dano com um ataque, magia ou habilidade) você pode gastar 2 PM. Se fizer isso, a criatura deve fazer um teste de Vontade (CD Car). Se falhar, não conseguirá machucá-lo e perderá a ação. Você só pode usar esta habilidade uma vez por cena contra cada criatura.

### [[Realeza]] (20º Nível)
No 20º nível, a CD para resistir a sua Presença Aristocrática aumenta em +5 e uma criatura que falhe no teste de Vontade por 10 ou mais se arrepende tanto de ter tentado machucá-lo que passa a lutar ao seu lado (e seguir suas ordens, se puder entendê-lo) pelo resto da cena. Além disso, uma criatura que seja reduzida a 0 PV por Palavras Afiadas não sofre este dano; em vez disso, passa a lutar ao seu lado pelo resto da cena.


---

## ⚔️ Poderes de Nobre

A partir do 2º nível, e a cada nível seguinte, você pode escolher um dos poderes a seguir:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Nobre" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder"
  AND (!classes OR contains(classes, this.file.link) OR contains(classes, this.classe_base))
  AND !contains(default(this.poderes_proibidos, []), file.link)
SORT file.name ASC
```
