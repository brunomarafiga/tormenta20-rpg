---
tipo: habilidade
subtipo: habilidade-de-classe
sistema: tormenta20-jda
fonte: Heróis de Arton
nome: Escola Ambidestra
classe: '[[Duelista]]'
nivel: 4
ativacao: reacao
custo_pm: 2
natureza: extraordinaria
resumo: Se estiver empunhando duas armas (e pelo menos uma delas for leve), você recebe +2
  na Defesa e em Reflexos.',           ...
---

# ⚡ Escola Ambidestra

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Habilidade de Classe Variante
> - 🛡️ <span class="t20-verde">Classe:</span> [[Duelista]] (Variante de [[Bucaneiro]])
> - 🎖️ <span class="t20-amarelo">Nível Requerido:</span> 4º Nível

Se estiver empunhando duas armas (e pelo menos uma delas for leve), você recebe +2 na Defesa e em Reflexos.',               },               {                 name: 'Escola Clássica',                 text: 'Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 em rolagens de dano com essa arma.',               },               {                 name: 'Escola de Tiro',                 text: 'Você recebe proficiência com armas de fogo leves e de uma mão. Caso receba essa proficiência novamente, com essas armas você pode usar suas habilidades de bucaneiro normalmente usadas com armas corpo a corpo leves ou ágeis.',                 // "leves e de uma mão" = toda arma de fogo que não é de duas                 // mãos (Pistola, Garrucha). Sem isto o personagem continuava                 // com o −5 de não proficiência e perdia os bônus que exigem                 // proficiência (ex.: Armas da Ambição, de Valkaria).                 sheetBonuses: [                   {                     source: { type: 'class', className: 'Duelista' },                     target: {                       type: 'Proficiency',                       proficiency: PROFICIENCIAS.FOGO_UMA_MAO,                     },                     modifier: { type: 'Fixed', value: 1 },                   },                 ],               },             ],           },         },       ],     },     esquivaSagaz,     {       // Todos os seis truques ficam disponíveis simultaneamente (o livro não       // pede escolha), então a habilidade é apenas descritiva.       name: 'Truques de Capa',       text: 'A partir do 4º nível, se estiver usando uma capa esvoaçante (ou outro item semelhante aprovado pelo mestre), você pode gastar 2 PM e a ação indicada para gerar um dos efeitos a seguir. • Capa Inoportuna (Livre). Reduz a ação necessária para fintar em um passo até o fim do seu turno. • Distração Oportuna (Reação). Quando faz um teste de Reflexos ou Vontade, você recebe +5 nesse teste. • Efeito Dramático (Livre). Você recebe +5 em um teste de perícia baseada em Carisma feito nesse turno. • Impulso (Livre). Você recebe deslocamento +9m e +5 em Acrobacia e Atletismo por 1 rodada. • Paraquedas (Reação). Quando cai, você reduz o dano da queda em 6d6. • Rasgar a Capa (Reação). Quando sofre dano, você reduz esse dano à metade. Fazer isso destrói a capa.
