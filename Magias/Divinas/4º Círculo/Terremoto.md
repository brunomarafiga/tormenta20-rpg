---
tipo: "magia"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Terremoto"
circulo: 4
custo_pm: 10
tradicao:
  - "Divina"
escola: "Evocação"
execucao: "padrão"
alcance: "Longo"
duracao: "1 rodada"
resistencia: "Veja texto"
area: "Esfera com 30m de raio"
funcao:
  - "controle"
  - "dano"
alvo_tipo:
  - "area"
tipos_dano:
  - "impacto"
pericias_envolvidas:
  - "[[Atletismo]]"
  - "[[Reflexos]]"
---

# 🔮 Terremoto
*Evocação • 4º Círculo • Divina*

> [!t20-stats]
> - ⚡ <span class="t20-exec">Execução:</span> Padrão
> - 🎯 <span class="t20-alc">Alcance:</span> Longo
> - 🌐 <span class="t20-area">Área:</span> Esfera com 30m de raio
> - ⏳ <span class="t20-dur">Duração:</span> 1 rodada
> - 🛡️ <span class="t20-res">Resistência:</span> Veja texto

Esta magia cria um tremor de terra que rasga o solo. O terremoto dura uma rodada, durante a qual criaturas sobre o solo ficam [[Atordoado]] (apenas uma vez por cena). Barreiras físicas não interrompem a área de Terremoto. O efeito exato depende do terreno:

- **Caverna ou subterrâneo:** a magia derruba o teto, causando 12d6 pontos de dano de impacto e agarrando todas as criaturas na área. Um teste de [[Reflexos]] reduz o dano à metade e evita a condição.
- **Construção:** todas as estruturas na área sofrem 200 pontos de dano de impacto, o suficiente para derrubar construções de madeira ou alvenaria simples, mas não de alvenaria reforçada. Criaturas em uma construção que desmorone sofrem o mesmo efeito de criaturas em uma caverna (veja acima).
- **Espaço aberto:** fendas se abrem no chão. Cada criatura na área precisa rolar um dado; em um resultado ímpar, uma fenda se abre sob ela e ela precisa fazer um teste de [[Reflexos]]; se falhar, cai na fenda. A criatura pode escapar gastando uma ação completa e passando em um teste de [[Atletismo]]. No início do seu próximo turno as fendas se fecham, matando todos que estejam dentro delas.
- **Penhasco:** o penhasco racha, criando um desmoronamento que percorre uma distância horizontal igual à distância da queda. Por exemplo, um penhasco com 30m de altura desmorona em uma área de 30m de comprimento além da base. Qualquer criatura no caminho sofre 12d6 pontos de dano de impacto e fica [[Agarrado]]. Um teste de [[Reflexos]] reduz o dano à metade e evita ficar [[Agarrado]].
- **Rio, lago ou pântano:** fissuras se abrem sob a água, drenando-a e formando um lamaçal. Criaturas na área precisam fazer um teste de [[Reflexos]] para não afundarem na lama e ficarem [[Agarrado]]. No início do seu próximo turno as fissuras se fecham, possivelmente afogando as criaturas que ficaram [[Agarrado]].

Criaturas [[Agarrado]] (efeito possível de caverna, construção, penhasco e rio, lago ou pântano) sofrem 1d6 pontos de dano por rodada até serem libertadas, o que exige uma ação completa e um teste de [[Atletismo]] (por parte da própria criatura ou de um aliado adjacente).
