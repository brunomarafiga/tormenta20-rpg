---
tipo: classe
subtipo: classe-base
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Guerreiro"
pv_inicial: 20
pv_por_nivel: 5
pm_inicial: 3
pm_por_nivel: 3
pericias_basicas:
  - "Luta ou Pontaria"
  - "Fortitude"
pericias_adicionais: 2
proficiencias:
  - "Armaduras Leves"
  - "Armas Marciais"
  - "Armaduras Pesadas"
  - "Escudos"
  - "Armas Simples"
---

# ⚔️ Guerreiro

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe de Personagem
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 20 (+5 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 3 (+3 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armaduras Leves, Armas Marciais, Armaduras Pesadas, Escudos, Armas Simples
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Luta ou Pontaria, Fortitude
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 2 a sua escolha entre: Adestramento, Atletismo, Cavalgar, Guerra, Iniciativa, Intimidação, Luta, Ofício (Qualquer), Percepção, Pontaria, Reflexos

Especialista supremo nas artes marciais de combate corpo a corpo e à distância, mestre de manobras táticas e golpes especiais fulminantes.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Ataque Especial]] | Quando faz um ataque, você pode gastar 1 PM para receber +4 no teste de ataque ou na rolag... |
| **3º** | [[Durão]] | A partir do 3ª nível, sua rijeza muscular permite que você absorva ferimentos. Sempre que ... |
| **6º** | [[Ataque Extra]] | A partir do 6º nível, quando usa a ação agredir, você pode gastar 2 PM para realizar um at... |
| **20º** | [[Campeão]] | No 20º nível, o dano de todos os seus ataques aumenta em um passo. Além disso, sempre que ... |

---

## 📖 Descrição Completa das Habilidades de Guerreiro

### [[Ataque Especial]] (1º Nível)
Quando faz um ataque, você pode gastar 1 PM para receber +4 no teste de ataque ou na rolagem de dano. A cada quatro níveis, pode gastar +1 PM para aumentar o bônus em +4. Você pode dividir os bônus igualmente. Por exemplo, no 17º nível, pode gastar 5 PM para receber +20 no ataque, +20 no dano ou +10 no ataque e +10 no dano.

### [[Durão]] (3º Nível)
A partir do 3ª nível, sua rijeza muscular permite que você absorva ferimentos. Sempre que sofre dano, você pode gastar 3 PM para reduzir esse dano à metade.

### [[Ataque Extra]] (6º Nível)
A partir do 6º nível, quando usa a ação agredir, você pode gastar 2 PM para realizar um ataque adicional uma vez por rodada.

### [[Campeão]] (20º Nível)
No 20º nível, o dano de todos os seus ataques aumenta em um passo. Além disso, sempre que você faz um Ataque Especial ou um Golpe Pessoal e acerta o ataque, recupera metade dos PM gastos nele. Por exemplo, se fizer um Ataque Especial gastando 5 PM para ganhar +20 nas rolagens de dano e acertar o ataque, recupera 2 PM.


---

## ⚔️ Poderes de Guerreiro

A partir do 2º nível, e a cada nível seguinte, você pode escolher um dos poderes a seguir:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Guerreiro" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder"
  AND (!classes OR contains(classes, this.file.link) OR contains(classes, this.classe_base))
  AND !contains(default(this.poderes_proibidos, []), file.link)
SORT file.name ASC
```
