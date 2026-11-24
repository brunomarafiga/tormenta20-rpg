---
tipo: classe
subtipo: classe-variante
classe_base: "[[Nobre]]"
sistema: tormenta20-jda
fonte: "Heróis de Arton"
nome: "Burguês"
pv_inicial: 12
pv_por_nivel: 3
pm_inicial: 4
pm_por_nivel: 4
pericias_basicas:
  - "Diplomacia ou Enganação"
  - "Vontade"
pericias_adicionais: 4
proficiencias:
  - "Armas Simples"
  - "Armaduras Leves"
---

# 💰 Burguês

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe Variante de [[Nobre]] (*Heróis de Arton*)
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 12 (+3 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 4 (+4 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armas Simples, Armaduras Leves
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Diplomacia ou Enganação, Vontade
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 4 a sua escolha entre: Atuação, Cavalgar, Conhecimento, Diplomacia, Enganação, Guerra, Iniciativa, Intimidação, Intuição, Investigação, Nobreza, Ofício (Qualquer), Percepção

O Burguês não descende de reis ou linhagens nobres; seu poder emana dos contratos comerciais, do acúmulo financeiro e do monopólio dos meios de produção nas grandes metrópoles de Arton.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Meios de Produção]] | No início de cada aventura, você recebe T$ 100 em dinheiro, itens mundanos ou poções a sua... |
| **1º** | [[Poder Monetário]] | Quando usa uma habilidade com um custo em PM, você pode consumir uma quantidade de tibares... |
| **2º** | [[Desmoralizar]] | No 2º nível, você aprende e pode lançar Perdição, e pode usar seus aprimoramentos como se ... |
| **3º** | [[Negociante Nato]] | No 3º nível, quando chega em uma nova comunidade, você pode gastar 1 dia fazendo contatos ... |
| **4º** | [[Suborno]] | No 4º nível, você aprende e pode lançar Enfeitiçar (atributo-chave Carisma). Esta não é um... |
| **5º** | [[Ostentação]] | A partir do 5º nível, você pode se beneficiar de um item vestido adicional. Além disso, a ... |
| **9º** | [[Novo Rico]] | No 9º nível, para cada item mágico que você estiver vestindo, você recebe +1 PM por nível ... |
| **20º** | [[Magnata]] | No 20º nível, quando você usa Desmoralizar, a penalidade em testes de ataque também se apl... |

---

## 📖 Descrição Completa das Habilidades de Burguês

### [[Meios de Produção]] (1º Nível)
No início de cada aventura, você recebe T$ 100 em dinheiro, itens mundanos ou poções a sua escolha. Esse valor aumenta para T$ 300 no patamar veterano, T$ 600 no campeão e T$ 1.000 no lenda.

### [[Poder Monetário]] (1º Nível)
Quando usa uma habilidade com um custo em PM, você pode consumir uma quantidade de tibares de ouro (limitada pelo seu Carisma). Cada TO consumido dessa forma paga 1 PM do custo da habilidade. Você pode consumir um número de TO por dia igual ao seu nível. No 5º nível, este limite aumenta para o dobro do seu nível.

### [[Desmoralizar]] (2º Nível)
No 2º nível, você aprende e pode lançar Perdição, e pode usar seus aprimoramentos como se tivesse acesso aos mesmos círculos de magia que um clérigo de seu nível. Entretanto, pode lançá-la apenas em criaturas inteligentes (Int –3 ou maior). Esta não é uma habilidade mágica e provém da sua capacidade de abalar a autoconfiança de outras pessoas. Mental.

### [[Negociante Nato]] (3º Nível)
No 3º nível, quando chega em uma nova comunidade, você pode gastar 1 dia fazendo contatos com o comércio local para fazer um teste de Diplomacia (CD 20). Se passar, pode vender itens nessa comunidade por 60% do seu preço (em vez de 50%). Para cada 10 pontos pelos quais o resultado do teste exceder a CD, você aumenta o preço de venda em +10% (até o máximo de 100%). Esta habilidade não se acumula com barganha, e NPCs ainda estão limitados a comprar somente o que desejam, com o dinheiro que possuem.

### [[Suborno]] (4º Nível)
No 4º nível, você aprende e pode lançar Enfeitiçar (atributo-chave Carisma). Esta não é uma habilidade mágica e provém de sua capacidade de instigar os outros com promessas de enriquecimento. A CD para resistir a essa magia aumenta em +2 se você tiver consumido pelo menos 1 tibar de ouro para pagar seu custo.

### [[Ostentação]] (5º Nível)
A partir do 5º nível, você pode se beneficiar de um item vestido adicional. Além disso, a CD para resistir às suas habilidades de burguês aumenta em +1 se você possuir um item banhado a ouro, cravejado de gemas ou de mitral. Esse aumento é cumulativo; possuir três itens diferentes com as três modificações aumenta a CD em +3.

### [[Novo Rico]] (9º Nível)
No 9º nível, para cada item mágico que você estiver vestindo, você recebe +1 PM por nível de poder do item (somente após 1 dia de uso).

### [[Magnata]] (20º Nível)
No 20º nível, quando você usa Desmoralizar, a penalidade em testes de ataque também se aplica à CD das habilidades das criaturas afetadas. Além disso, sempre que consome um tibar de ouro para pagar o custo em PM de uma habilidade, você recebe 10 PV temporários cumulativos, que duram até o fim da cena.


---

## ⚔️ Poderes de Nobre Disponíveis para Burguês

Como classe variante, o Burguês acessa toda a lista de poderes da sua classe base [[Nobre]]:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Nobre" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder"
  AND (!classes OR contains(classes, this.file.link) OR contains(classes, this.classe_base))
  AND !contains(default(this.poderes_proibidos, []), file.link)
SORT file.name ASC
```
