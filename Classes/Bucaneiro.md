---
tipo: classe
subtipo: classe-base
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Bucaneiro"
pv_inicial: 16
pv_por_nivel: 4
pm_inicial: 3
pm_por_nivel: 3
pericias_basicas:
  - "Luta ou Pontaria"
  - "Reflexos"
pericias_adicionais: 4
proficiencias:
  - "Armaduras Leves"
  - "Armas Marciais"
  - "Armas Simples"
---

# ⚓ Bucaneiro

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe de Personagem
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 16 (+4 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 3 (+3 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armaduras Leves, Armas Marciais, Armas Simples
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Luta ou Pontaria, Reflexos
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 4 a sua escolha entre: Acrobacia, Atletismo, Atuação, Enganação, Fortitude, Furtividade, Iniciativa, Intimidação, Jogatina, Luta, Ofício (Qualquer), Percepção, Pilotagem, Pontaria

Espadachim audaz, pirata ou corsário ágil que aposta na sorte, charme e velocidade, transformando duelos em um espetáculo acrobático.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Audácia]] | Quando faz um teste de perícia, você pode gastar 2 PM para somar seu Carisma no teste. Voc... |
| **1º** | [[Insolência]] | Você soma seu Carisma na Defesa, limitado pelo seu nível. Esta habilidade exige liberdade ... |
| **2º** | [[Evasão (Bucaneiro)|Evasão]] | Quando sofre um ataque que permite um teste de Reflexos para reduzir o dano à metade, você... |
| **3º** | [[Esquiva Sagaz]] | Você recebe +1 na Defesa e em Reflexos. Esse bônus aumenta em +1 a cada quatro níveis. Est... |
| **5º** | [[Panache]] | Sempre que faz um acerto crítico em combate ou reduz um inimigo a 0 PV, você recupera 1 PM... |
| **10º** | [[Evasão Aprimorada (Bucaneiro)|Evasão Aprimorada]] | Quando sofre um ataque que permite um teste de Reflexos para reduzir o dano à metade, você... |
| **20º** | [[Sorte de Nimb]] | O bucaneiro está acostumado a encarar os piores desafios e rir na cara deles — pois sabe q... |

---

## 📖 Descrição Completa das Habilidades de Bucaneiro

### [[Audácia]] (1º Nível)
Quando faz um teste de perícia, você pode gastar 2 PM para somar seu Carisma no teste. Você não pode usar esta habilidade em testes de ataque.

### [[Insolência]] (1º Nível)
Você soma seu Carisma na Defesa, limitado pelo seu nível. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.

### [[Evasão (Bucaneiro)|Evasão]] (2º Nível)
Quando sofre um ataque que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.

### [[Esquiva Sagaz]] (3º Nível)
Você recebe +1 na Defesa e em Reflexos. Esse bônus aumenta em +1 a cada quatro níveis. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.

### [[Panache]] (5º Nível)
Sempre que faz um acerto crítico em combate ou reduz um inimigo a 0 PV, você recupera 1 PM.

### [[Evasão Aprimorada (Bucaneiro)|Evasão Aprimorada]] (10º Nível)
Quando sofre um ataque que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar e sofre apenas metade do dano se falhar. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.

### [[Sorte de Nimb]] (20º Nível)
O bucaneiro está acostumado a encarar os piores desafios e rir na cara deles — pois sabe que tem a sorte ao seu lado. Você pode gastar 5 PM para rolar novamente um teste recém realizado. Qualquer resultado 11 ou mais na segunda rolagem será considerado um 20 natural.


---

## ⚔️ Poderes de Bucaneiro

A partir do 2º nível, e a cada nível seguinte, você pode escolher um dos poderes a seguir:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Bucaneiro" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder"
  AND (!classes OR contains(classes, this.file.link) OR contains(classes, this.classe_base))
  AND !contains(default(this.poderes_proibidos, []), file.link)
SORT file.name ASC
```
