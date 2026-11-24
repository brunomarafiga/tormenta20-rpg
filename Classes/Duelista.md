---
tipo: classe
subtipo: classe-variante
classe_base: "[[Bucaneiro]]"
sistema: tormenta20-jda
fonte: "Heróis de Arton"
nome: "Duelista"
pv_inicial: 16
pv_por_nivel: 4
pm_inicial: 3
pm_por_nivel: 3
pericias_basicas:
  - "Luta ou Pontaria"
  - "Reflexos"
pericias_adicionais: 4
proficiencias:
  - "Armas Marciais"
  - "Armas Simples"
  - "Armaduras Leves"
---

# 🤺 Duelista

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe Variante de [[Bucaneiro]] (*Heróis de Arton*)
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 16 (+4 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 3 (+3 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armas Marciais, Armas Simples, Armaduras Leves
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Luta ou Pontaria, Reflexos
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 4 a sua escolha entre: Acrobacia, Atletismo, Atuação, Diplomacia, Enganação, Fortitude, Furtividade, Iniciativa, Intimidação, Jogatina, Luta, Percepção, Pilotagem, Pontaria

O Duelista leva a arte da esgrima e dos embates singulares à perfeição geométrica. Estudioso de posturas refinadas e truques de capa, ele transforma o confronto um-contra-um em um espetáculo letal.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Duelo (Duelista)|Duelo]] | Você pode gastar 2 PM para escolher um oponente em alcance curto e receber +2 em testes de... |
| **2º** | [[Escola de Duelo]] | No 2º nível, escolha uma escola de duelo entre as seguintes. Uma vez feita, essa escolha n... |
| **4º** | [[Escola Ambidestra]] | Se estiver empunhando duas armas (e pelo menos uma delas for leve), você recebe +2 na Defe... |
| **10º** | [[Técnica Avançada]] | No 10º nível, você aprende uma técnica de combate conforme sua escola de duelo. Você só po... |

---

## 📖 Descrição Completa das Habilidades de Duelista

### [[Duelo (Duelista)|Duelo]] (1º Nível)
Você pode gastar 2 PM para escolher um oponente em alcance curto e receber +2 em testes de ataque e rolagens de dano contra ele até o fim da cena. Se atacar outro oponente, o bônus termina. A cada cinco níveis, você pode gastar +1 PM para aumentar o bônus em +1.

### [[Escola de Duelo]] (2º Nível)
No 2º nível, escolha uma escola de duelo entre as seguintes. Uma vez feita, essa escolha não pode ser mudada.

### [[Escola Ambidestra]] (4º Nível)
Se estiver empunhando duas armas (e pelo menos uma delas for leve), você recebe +2 na Defesa e em Reflexos.',               },               {                 name: 'Escola Clássica',                 text: 'Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 em rolagens de dano com essa arma.',               },               {                 name: 'Escola de Tiro',                 text: 'Você recebe proficiência com armas de fogo leves e de uma mão. Caso receba essa proficiência novamente, com essas armas você pode usar suas habilidades de bucaneiro normalmente usadas com armas corpo a corpo leves ou ágeis.',                 // "leves e de uma mão" = toda arma de fogo que não é de duas                 // mãos (Pistola, Garrucha). Sem isto o personagem continuava                 // com o −5 de não proficiência e perdia os bônus que exigem                 // proficiência (ex.: Armas da Ambição, de Valkaria).                 sheetBonuses: [                   {                     source: { type: 'class', className: 'Duelista' },                     target: {                       type: 'Proficiency',                       proficiency: PROFICIENCIAS.FOGO_UMA_MAO,                     },                     modifier: { type: 'Fixed', value: 1 },                   },                 ],               },             ],           },         },       ],     },     esquivaSagaz,     {       // Todos os seis truques ficam disponíveis simultaneamente (o livro não       // pede escolha), então a habilidade é apenas descritiva.       name: 'Truques de Capa',       text: 'A partir do 4º nível, se estiver usando uma capa esvoaçante (ou outro item semelhante aprovado pelo mestre), você pode gastar 2 PM e a ação indicada para gerar um dos efeitos a seguir. • Capa Inoportuna (Livre). Reduz a ação necessária para fintar em um passo até o fim do seu turno. • Distração Oportuna (Reação). Quando faz um teste de Reflexos ou Vontade, você recebe +5 nesse teste. • Efeito Dramático (Livre). Você recebe +5 em um teste de perícia baseada em Carisma feito nesse turno. • Impulso (Livre). Você recebe deslocamento +9m e +5 em Acrobacia e Atletismo por 1 rodada. • Paraquedas (Reação). Quando cai, você reduz o dano da queda em 6d6. • Rasgar a Capa (Reação). Quando sofre dano, você reduz esse dano à metade. Fazer isso destrói a capa.

### [[Técnica Avançada]] (10º Nível)
No 10º nível, você aprende uma técnica de combate conforme sua escola de duelo. Você só pode usar esta habilidade se estiver usando sua escola.


---

## ⚔️ Poderes de Bucaneiro Disponíveis para Duelista

Como classe variante, o Duelista acessa toda a lista de poderes da sua classe base [[Bucaneiro]]:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Bucaneiro" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder"
  AND (!classes OR contains(classes, this.file.link) OR contains(classes, this.classe_base))
  AND !contains(default(this.poderes_proibidos, []), file.link)
SORT file.name ASC
```
