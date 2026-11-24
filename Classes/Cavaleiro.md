---
tipo: classe
subtipo: classe-base
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Cavaleiro"
pv_inicial: 20
pv_por_nivel: 5
pm_inicial: 3
pm_por_nivel: 3
pericias_basicas:
  - "Luta"
  - "Fortitude"
pericias_adicionais: 2
proficiencias:
  - "Armaduras Leves"
  - "Armas Marciais"
  - "Armaduras Pesadas"
  - "Escudos"
  - "Armas Simples"
---

# 🛡️ Cavaleiro

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe de Personagem
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 20 (+5 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 3 (+3 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armaduras Leves, Armas Marciais, Armaduras Pesadas, Escudos, Armas Simples
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Luta, Fortitude
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 2 a sua escolha entre: Adestramento, Atletismo, Cavalgar, Diplomacia, Guerra, Iniciativa, Intimidação, Nobreza, Percepção, Vontade

Nobre defensor blindado regido pelo Código de Honra, erguendo um baluarte de proteção inabalável para desafiar e deter os maiores terrores de Arton.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Código de Honra]] | Cavaleiros distinguem-se de meros combatentes por seguir um código de conduta. Fazem isto ... |
| **1º** | [[Baluarte]] | Quando sofre um ataque ou faz um teste de resistência, você pode gastar 1 PM para receber ... |
| **2º** | [[Duelo (Cavaleiro)|Duelo]] | A partir do 2º nível, você pode gastar 2 PM para escolher um oponente em alcance curto e r... |
| **5º** | [[Caminho do Cavaleiro (Cavaleiro)|Caminho do Cavaleiro]] | Escolha entre Bastião ou Montaria. Bastião: Se estiver usando armadura pesada, você recebe... |
| **11º** | [[Resoluto]] | Você pode gastar 1 PM para refazer um teste de resistência contra uma condição (como abala... |
| **20º** | [[Bravura Final]] | Sua virtude vence a morte. Se for reduzido a 0 ou menos PV, pode gastar 3 PM para continua... |

---

## 📖 Descrição Completa das Habilidades de Cavaleiro

### [[Código de Honra]] (1º Nível)
Cavaleiros distinguem-se de meros combatentes por seguir um código de conduta. Fazem isto para mostrar que estão acima dos mercenários e bandoleiros que infestam os campos de batalha. Você não pode atacar um oponente pelas costas (em termos de jogo, não pode se beneficiar do bônus de flanquear), caído, desprevenido ou incapaz de lutar. Se violar o código, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia. Rebaixar-se ao nível dos covardes e desesperados abala a autoconfiança que eleva o cavaleiro.

### [[Baluarte]] (1º Nível)
Quando sofre um ataque ou faz um teste de resistência, você pode gastar 1 PM para receber +2 na Defesa e nos testes de resistência até o início do seu próximo turno. A cada quatro níveis, pode gastar +1 PM para aumentar o bônus em +2. A partir do 7º nível, quando usa esta habilidade, você pode gastar 2 PM adicionais para fornecer o mesmo bônus a todos os aliados adjacentes. Por exemplo, pode gastar 4 PM ao todo para receber +4 na Defesa e nos testes de resistência e fornecer este mesmo bônus aos outros. A partir do 15º nível, você pode gastar 5 PM adicionais para fornecer o mesmo bônus a todos os aliados em alcance curto.

### [[Duelo (Cavaleiro)|Duelo]] (2º Nível)
A partir do 2º nível, você pode gastar 2 PM para escolher um oponente em alcance curto e receber +2 em testes de ataque e rolagens de dano contra ele até o fim da cena. Se atacar outro oponente, o bônus termina. A cada cinco níveis, você pode gastar +1 PM para aumentar o bônus em +1.

### [[Caminho do Cavaleiro (Cavaleiro)|Caminho do Cavaleiro]] (5º Nível)
Escolha entre Bastião ou Montaria. Bastião: Se estiver usando armadura pesada, você recebe redução de dano 5 (cumulativa com a RD fornecida por Especialização em Armadura). Montaria: Você recebe um cavalo de guerra com o qual possui +5 em testes de Adestramento e Cavalgar. Ele fornece os benefícios de um parceiro veterano de seu tipo. No 11º nível, passa a fornecer os benefícios de um parceiro mestre. De acordo com o mestre, você pode receber outro tipo de montaria. Veja a lista de montarias na página 261. Caso a montaria morra, você pode comprar outra pelo preço normal e treiná-la para receber os benefícios desta habilidade com uma semana de trabalho.

### [[Resoluto]] (11º Nível)
Você pode gastar 1 PM para refazer um teste de resistência contra uma condição (como abalado, paralisado etc.) que esteja o afetando. O segundo teste recebe um bônus de +5 e, se você passar, cancela o efeito. Você só pode usar esta habilidade uma vez por efeito.

### [[Bravura Final]] (20º Nível)
Sua virtude vence a morte. Se for reduzido a 0 ou menos PV, pode gastar 3 PM para continuar consciente e de pé. Esta habilidade tem duração sustentada. Quando se encerra, você sofre os efeitos de seus PV atuais, podendo cair inconsciente ou mesmo morrer


---

## ⚔️ Poderes de Cavaleiro

A partir do 2º nível, e a cada nível seguinte, você pode escolher um dos poderes a seguir:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Cavaleiro" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder"
  AND (!classes OR contains(classes, this.file.link) OR contains(classes, this.classe_base))
  AND !contains(default(this.poderes_proibidos, []), file.link)
SORT file.name ASC
```
