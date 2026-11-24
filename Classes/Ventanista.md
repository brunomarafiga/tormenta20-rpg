---
tipo: classe
subtipo: classe-variante
classe_base: "[[Ladino]]"
sistema: tormenta20-jda
fonte: "Heróis de Arton"
nome: "Ventanista"
pv_inicial: 12
pv_por_nivel: 3
pm_inicial: 4
pm_por_nivel: 4
pericias_basicas:
  - "Ladinagem"
  - "Reflexos"
pericias_adicionais: 6
proficiencias:
  - "Armas Simples"
  - "Armaduras Leves"
---

# 🃏 Ventanista

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe Variante de [[Ladino]] (*Heróis de Arton*)
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 12 (+3 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 4 (+4 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armas Simples, Armaduras Leves
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Ladinagem, Reflexos
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 6 a sua escolha entre: Acrobacia, Atletismo, Atuação, Cavalgar, Conhecimento, Diplomacia, Enganação, Furtividade, Iniciativa, Intimidação, Intuição, Investigação, Jogatina, Luta, Ofício (Qualquer), Percepção, Pilotagem, Pontaria

O mestre dos ardis, truques de palco e reviravoltas audaciosas. O Ventanista troca o mero furto pela arte da provocação, do charme desarmador e da troca súbita de alianças no ápice de cada golpe.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Charme]] | Você soma seu Carisma em seu total de PM. Quando faz um teste de perícia (exceto testes de... |
| **1º** | [[Truques do Ofício]] | Você pode lançar magias arcanas de 1º círculo, mas apenas de encantamento e ilusão. Esta n... |
| **3º** | [[Disfarce Elaborado]] | No 3º nível, você aprende a simular habilidades práticas úteis para seus disfarces. Sempre... |
| **7º** | [[Virar a Casaca]] | No 7º nível, se estiver disfarçado, você pode gastar 1 PM para remover seu disfarce. Quand... |
| **11º** | [[Provocação Ousada]] | A partir do 11º nível, em seu primeiro turno em cada cena, você pode gastar uma ação compl... |
| **20º** | [[O Grande Golpe]] | No 20º nível, no início de cada aventura, você pode escolher uma quantidade de magias, arc... |

---

## 📖 Descrição Completa das Habilidades de Ventanista

### [[Charme]] (1º Nível)
Você soma seu Carisma em seu total de PM. Quando faz um teste de perícia (exceto testes de ataque), você pode gastar uma quantidade de PM a sua escolha (limitada pelo seu Carisma). Para cada PM que gastar, recebe +2 no teste.

### [[Truques do Ofício]] (1º Nível)
Você pode lançar magias arcanas de 1º círculo, mas apenas de encantamento e ilusão. Esta não é uma habilidade mágica e provém da sua capacidade de enganar outras pessoas (veja "Magias Simuladas"). À medida que sobe de nível, pode lançar magias de círculos maiores (2º círculo no 6º nível, 3º círculo no 10º nível e 4º círculo no 14º nível). Você começa com duas magias de 1º círculo. A cada nível par (2º, 4º etc.), aprende uma magia de qualquer círculo que possa lançar. Você pode lançar essas magias vestindo armaduras leves sem precisar de testes de Misticismo. Seu atributo-chave para lançar magias é Inteligência.

### [[Disfarce Elaborado]] (3º Nível)
No 3º nível, você aprende a simular habilidades práticas úteis para seus disfarces. Sempre que fizer um teste de Enganação para disfarce, você pode escolher um poder (exceto poderes da Tormenta) cujos pré-requisitos cumpra e que esteja relacionado a esse disfarce. Enquanto estiver disfarçado dessa forma, você sofre uma penalidade de –3 PM e pode usar o poder escolhido. A cada seis níveis, você pode assumir uma penalidade adicional de –3 PM ao se disfarçar para escolher um poder adicional (2 poderes no 9º nível e 3 poderes no 15º nível).

### [[Virar a Casaca]] (7º Nível)
No 7º nível, se estiver disfarçado, você pode gastar 1 PM para remover seu disfarce. Quando faz isso, você pode fazer um teste de esconder-se usando Enganação no lugar de Furtividade, mesmo sem camuflagem ou cobertura disponível.

### [[Provocação Ousada]] (11º Nível)
A partir do 11º nível, em seu primeiro turno em cada cena, você pode gastar uma ação completa para provocar seus inimigos. Você pode deixar um cartão de visitas visível, declarar seu plano ou fazer outra ação que alerte seus inimigos de sua presença e de suas intenções. Até o fim da cena, seus inimigos recebem +2 em testes de Percepção, Sobrevivência e Vontade contra você. Entretanto, no início de seus turnos você recupera 2 PM. Esta habilidade só tem efeito se houver um risco associado a declarar suas ações (a critério do mestre) e recupera um máximo de PM por cena igual ao seu nível.

### [[O Grande Golpe]] (20º Nível)
No 20º nível, no início de cada aventura, você pode escolher uma quantidade de magias, arcanas ou divinas, igual à sua Inteligência (você pode escolher a mesma magia mais de uma vez). Para cada escolha feita, defina um tipo de cena entre ação, exploração e interpretação. Até o fim da aventura, para cada vez que uma magia foi escolhida, se estiver em uma cena do tipo definido para ela, você pode lançá-la sem gastar PM (limite de PM 20, atributo-chave Inteligência). Esta não é uma habilidade mágica e provém da sua capacidade de enganar outras pessoas (veja "Magias Simuladas").


---

## ⚔️ Poderes de Ladino Disponíveis para Ventanista

Como classe variante, o Ventanista acessa toda a lista de poderes da sua classe base [[Ladino]]:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Ladino" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder"
  AND (!classes OR contains(classes, this.file.link) OR contains(classes, this.classe_base))
  AND !contains(default(this.poderes_proibidos, []), file.link)
SORT file.name ASC
```
