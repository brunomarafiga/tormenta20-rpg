---
tipo: classe
subtipo: classe-variante
classe_base: "[[Bardo]]"
sistema: tormenta20-jda
fonte: "Heróis de Arton"
nome: "Magimarcialista"
pv_inicial: 16
pv_por_nivel: 4
pm_inicial: 4
pm_por_nivel: 4
pericias_basicas:
  - "Atuação"
  - "Reflexos ou Vontade"
pericias_adicionais: 4
proficiencias:
  - "Armas Simples"
  - "Armas Marciais"
  - "Armaduras Leves"
---

# ⚔️ Magimarcialista

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe Variante de [[Bardo]] (*Heróis de Arton*)
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 16 (+4 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 4 (+4 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armas Simples, Armas Marciais, Armaduras Leves
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Atuação, Reflexos ou Vontade
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 4 a sua escolha entre: Acrobacia, Cavalgar, Conhecimento, Diplomacia, Enganação, Furtividade, Iniciativa, Intuição, Investigação, Jogatina, Ladinagem, Luta, Misticismo, Nobreza, Percepção, Pontaria

O Magimarcialista une os acordes da música e da poesia ao fio afiado da lâmina. Em sua dança defensiva cadenciada, golpes de esgrima ativam feitiços de impacto com sincronia estonteante.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Cadência Magimarcial]] | Sempre que lança uma magia de bardo você recebe uma carga arcana e, sempre que faz a ação ... |
| **1º** | [[Magificação]] | Se tiver pelo menos 1 carga arcana e 1 carga marcial, você recebe +2 em testes de ataque e... |
| **2º** | [[Bravado Magimarcial]] | No 2º nível, quando lança uma magia, você pode gastar 1 carga marcial para reduzir seu cus... |
| **3º** | [[Dança Defensiva]] | No 3º nível, quando faz um teste de resistência, você pode gastar 1 carga marcial para rec... |
| **7º** | [[Arte Sublime]] | A partir do 7º nível, quando usa Bravado Magimarcial ou Dança Defensiva, você pode gastar ... |
| **20º** | [[Crescendo Vitorioso]] | No 20º nível, no início de cada combate, você recebe 1 carga arcana e 1 carga marcial. Alé... |

---

## 📖 Descrição Completa das Habilidades de Magimarcialista

### [[Cadência Magimarcial]] (1º Nível)
Sempre que lança uma magia de bardo você recebe uma carga arcana e, sempre que faz a ação agredir, recebe uma carga marcial. Você pode acumular um máximo de cargas de cada tipo igual ao seu Carisma e elas duram até o fim da cena.

### [[Magificação]] (1º Nível)
Se tiver pelo menos 1 carga arcana e 1 carga marcial, você recebe +2 em testes de ataque e rolagens de dano e é considerado sob Inspiração para efeitos baseados nisso. A cada cinco níveis, esses bônus aumentam em +1.

### [[Bravado Magimarcial]] (2º Nível)
No 2º nível, quando lança uma magia, você pode gastar 1 carga marcial para reduzir seu custo em –1 PM (cumulativo com outras reduções) e, quando faz um ataque, pode gastar 1 carga arcana para receber +1d6 na rolagem de dano.

### [[Dança Defensiva]] (3º Nível)
No 3º nível, quando faz um teste de resistência, você pode gastar 1 carga marcial para receber +5 nesse teste e, quando sofre dano, pode gastar 1 carga arcana para receber redução de dano 10 contra esse dano.

### [[Arte Sublime]] (7º Nível)
A partir do 7º nível, quando usa Bravado Magimarcial ou Dança Defensiva, você pode gastar uma carga adicional do tipo exigido para dobrar seu efeito.

### [[Crescendo Vitorioso]] (20º Nível)
No 20º nível, no início de cada combate, você recebe 1 carga arcana e 1 carga marcial. Além disso, você soma seu total de cargas marciais na CD para resistir às suas habilidades de bardo e o total de suas cargas arcanas em seus testes de ataque e rolagens de dano.


---

## ⚔️ Poderes de Bardo Disponíveis para Magimarcialista

Como classe variante, o Magimarcialista acessa toda a lista de poderes da sua classe base [[Bardo]]:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Bardo"
WHERE tipo = "poder"
SORT file.name ASC
```
