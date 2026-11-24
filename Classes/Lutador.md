---
tipo: classe
subtipo: classe-base
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Lutador"
pv_inicial: 20
pv_por_nivel: 5
pm_inicial: 3
pm_por_nivel: 3
pericias_basicas:
  - "Luta"
  - "Fortitude"
pericias_adicionais: 4
proficiencias:
  - "Armaduras Leves"
  - "Armas Simples"
---

# 👊 Lutador

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe de Personagem
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 20 (+5 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 3 (+3 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armaduras Leves, Armas Simples
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Luta, Fortitude
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 4 a sua escolha entre: Acrobacia, Adestramento, Atletismo, Enganação, Furtividade, Iniciativa, Intimidação, Ofício (Qualquer), Percepção, Pontaria, Reflexos

Combatente visceral desarmado que usa o próprio corpo como arma suprema, desferindo sequências de socos, chutes e chaves de submissão brutais.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Briga]] | Seus ataques desarmados causam 1d6 pontos de dano e podem causar dano letal ou não letal (... |
| **1º** | [[Golpe Relâmpago]] | Quando usa a ação agredir para fazer um ataque desarmado, você pode gastar 1 PM para reali... |
| **3º** | [[Casca Grossa]] | No 3º nível, você soma sua Constituição na Defesa, limitado pelo seu nível e apenas se não... |
| **5º** | [[Golpe Cruel]] | No 5º nível, você acerta onde dói. Sua margem de ameaça com ataques desarmados aumenta em ... |
| **9º** | [[Golpe Violento]] |  No 9º nível, você bate com muita força. Seu multiplicador de crítico com ataques desarmad... |
| **20º** | [[Dono da Rua]] | No 20º nível, seu dano desarmado aumenta para 2d10 (para criaturas Médias). Além disso, qu... |

---

## 📖 Descrição Completa das Habilidades de Lutador

### [[Briga]] (1º Nível)
Seus ataques desarmados causam 1d6 pontos de dano e podem causar dano letal ou não letal (sem penalidades). A cada quatro níveis, seu dano desarmado aumenta, conforme a tabela. O dano na tabela é para criaturas Pequenas e Médias. Criaturas Minúsculas diminuem esse dano em um passo, Grandes e Enormes aumentam em um passo e Colossais aumentam em dois passos.

### [[Golpe Relâmpago]] (1º Nível)
Quando usa a ação agredir para fazer um ataque desarmado, você pode gastar 1 PM para realizar um ataque desarmado adicional.

### [[Casca Grossa]] (3º Nível)
No 3º nível, você soma sua Constituição na Defesa, limitado pelo seu nível e apenas se não estiver usando armadura pesada. Além disso, no 7º nível, e a cada quatro níveis, você recebe +1 na Defesa.

### [[Golpe Cruel]] (5º Nível)
No 5º nível, você acerta onde dói. Sua margem de ameaça com ataques desarmados aumenta em +1.

### [[Golpe Violento]] (9º Nível)
 No 9º nível, você bate com muita força. Seu multiplicador de crítico com ataques desarmados aumenta em +1.

### [[Dono da Rua]] (20º Nível)
No 20º nível, seu dano desarmado aumenta para 2d10 (para criaturas Médias). Além disso, quando usa a ação agredir para fazer um ataque desarmado, você pode fazer dois ataques, em vez de um (podendo usar Golpe Relâmpago para fazer um terceiro).


---

## ⚔️ Poderes de Lutador

A partir do 2º nível, e a cada nível seguinte, você pode escolher um dos poderes a seguir:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Lutador" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder"
  AND (!classes OR contains(classes, this.file.link) OR contains(classes, this.classe_base))
  AND !contains(default(this.poderes_proibidos, []), file.link)
SORT file.name ASC
```
