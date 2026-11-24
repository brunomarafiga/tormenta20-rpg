---
tipo: classe
subtipo: classe-variante
classe_base: "[[Caçador]]"
sistema: tormenta20-jda
fonte: "Heróis de Arton"
nome: "Seteiro"
pv_inicial: 16
pv_por_nivel: 4
pm_inicial: 4
pm_por_nivel: 4
pericias_basicas:
  - "Pontaria"
  - "Sobrevivência"
pericias_adicionais: 4
proficiencias:
  - "Armas Marciais"
  - "Armas Simples"
  - "Armaduras Leves"
  - "Escudos"
---

# 🏹 Seteiro

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe Variante de [[Caçador]] (*Heróis de Arton*)
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 16 (+4 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 4 (+4 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armas Marciais, Armas Simples, Armaduras Leves, Escudos
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Pontaria, Sobrevivência
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 4 a sua escolha entre: Adestramento, Atletismo, Cavalgar, Cura, Fortitude, Furtividade, Iniciativa, Investigação, Luta, Ofício (Qualquer), Percepção, Reflexos

Mestre incomparável do arco longo e da besta pesada. O Seteiro não se aproxima da presa: com tiros de supressão, rajadas de flechas e disparos constritores, ele aniquila ameaças a distâncias inacreditáveis.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Caminho do Atirador]] | Você abriu mão do treinamento convencional de um caçador para abraçar o caminho do atirado... |
| **1º** | [[Tiro de Supressão]] | Sempre que você causa dano com um arco ou besta em uma criatura que esteja sob efeito de s... |
| **3º** | [[Evasão (Seteiro)|Evasão]] | A partir do 3º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir... |
| **5º** | [[Disparo Constritor]] | No 5º nível, quando usa a ação mirar, você pode pagar 2 PM. Se fizer isso, pode executar u... |
| **10º** | [[Rajada de Flechas]] | A partir do 10º nível, você pode gastar uma ação completa e 2 PM para alvejar uma área com... |
| **13º** | [[Evasão Aprimorada (Seteiro)|Evasão Aprimorada]] | No 13º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano ... |
| **15º** | [[Sentinela]] | No 15º nível, uma vez por rodada, quando uma criatura sob efeito de sua Marca da Presa ace... |
| **20º** | [[Mestre do Disparo]] | No 20º nível, você pode usar sua Marca da Presa como uma ação livre. Além disso, uma vez p... |

---

## 📖 Descrição Completa das Habilidades de Seteiro

### [[Caminho do Atirador]] (1º Nível)
Você abriu mão do treinamento convencional de um caçador para abraçar o caminho do atirador. Suas habilidades de seteiro relacionadas a ataques e armas só funcionam com arcos e bestas.

### [[Tiro de Supressão]] (1º Nível)
Sempre que você causa dano com um arco ou besta em uma criatura que esteja sob efeito de sua Marca da Presa, essa criatura sofre uma penalidade cumulativa de –1 em rolagens de dano, até um valor igual à quantidade de PM gasta em Marca da Presa, até o fim da cena.

### [[Evasão (Seteiro)|Evasão]] (3º Nível)
A partir do 3º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.

### [[Disparo Constritor]] (5º Nível)
No 5º nível, quando usa a ação mirar, você pode pagar 2 PM. Se fizer isso, pode executar uma manobra entre desarmar, empurrar ou quebrar com um de seus ataques à distância feitos até o fim desse turno.

### [[Rajada de Flechas]] (10º Nível)
A partir do 10º nível, você pode gastar uma ação completa e 2 PM para alvejar uma área com seus disparos. Escolha um ponto no alcance de sua arma, então faça um ataque à distância e compare-o com a Defesa de cada inimigo num raio de 3m dele. Então faça uma rolagem de dano, com um bônus cumulativo de +2 para cada acerto, e aplique-a em cada inimigo atingido. Você gasta apenas uma munição, independente de quantos inimigos atacou.

### [[Evasão Aprimorada (Seteiro)|Evasão Aprimorada]] (13º Nível)
No 13º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar e sofre apenas metade do dano se falhar. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.

### [[Sentinela]] (15º Nível)
No 15º nível, uma vez por rodada, quando uma criatura sob efeito de sua Marca da Presa acerta um ataque contra um aliado, você pode gastar 1 PM para fazer um ataque contra essa criatura.

### [[Mestre do Disparo]] (20º Nível)
No 20º nível, você pode usar sua Marca da Presa como uma ação livre. Além disso, uma vez por rodada, quando faz um ataque com um arco ou besta contra um alvo de sua Marca da Presa, você pode fazer um ataque adicional contra ele.


---

## ⚔️ Poderes de Caçador Disponíveis para Seteiro

Como classe variante, o Seteiro acessa toda a lista de poderes da sua classe base [[Caçador]]:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Caçador" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder"
  AND (!classes OR contains(classes, this.file.link) OR contains(classes, this.classe_base))
  AND !contains(default(this.poderes_proibidos, []), file.link)
SORT file.name ASC
```
