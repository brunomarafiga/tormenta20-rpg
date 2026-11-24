---
tipo: classe
subtipo: classe-variante
classe_base: "[[Nobre]]"
sistema: tormenta20-jda
fonte: "Dragão Brasil 222 / Heróis de Arton"
nome: "Comandante"
pv_inicial: 16
pv_por_nivel: 4
pm_inicial: 4
pm_por_nivel: 4
pericias_basicas:
  - "Guerra ou Luta"
  - "Vontade"
pericias_adicionais: 4
proficiencias:
  - "Armas Simples"
  - "Armas Marciais"
  - "Armaduras Leves"
  - "Armaduras Pesadas"
  - "Escudos"
---

# ⚔️ Comandante

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe Variante de [[Nobre]] (*Dragão Brasil / Heróis de Arton*)
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 16 (+4 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 4 (+4 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armas Simples, Armas Marciais, Armaduras Leves, Armaduras Pesadas, Escudos
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Guerra ou Luta, Vontade
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 4 a sua escolha entre: Adestramento, Atletismo, Cavalgar, Cura, Diplomacia, Fortitude, Guerra, Iniciativa, Intimidação, Intuição, Investigação, Luta, Nobreza, Ofício (Qualquer), Percepção, Pontaria

O Comandante troca as intrigas da corte e as taças de vinho pelo barro das trincheiras e pelo clangor do aço. Ele é o oficial de campo, o capitão de infantaria ou o sargento calejado cuja simples presença organiza o caos da guerra e transforma aventureiros dispersos em uma unidade de combate letal.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Liderança Marcial]] | Soma Carisma na Defesa usando armaduras leves ou pesadas (limitado pelo bônus de Carisma) e em testes de manobras de aliados. |
| **1º** | [[Grito de Batalha]] | Ação de movimento e 1 PM: concede +2 em testes de ataque ou Defesa a um aliado até o próximo turno, ou permite reação de movimento. |
| **2º** | [[Poder de Comandante]] | A partir do 2º nível, escolhe poderes da lista de Nobre e poderes marciais de liderança. |
| **3º** | [[Ordens de Combate]] | Gasta 2 PM para proclamar uma diretriz militar a todos os aliados em alcance curto (ataque coordenado, cobertura ou marcha). |
| **6º** | [[Táticas Coletivas]] | Aliados em alcance curto compartilham bônus de posicionamento, flanqueamento aprimorado e suporte defensivo mútuo. |
| **20º** | [[Estrategista Supremo]] | Uma vez por cena, concede uma ação padrão imediata a todos os aliados e dobra o efeito de todas as suas ordens. |

---

## 📖 Descrição Completa das Habilidades de Comandante

### [[Liderança Marcial]] (1º Nível)
Você não lidera por direito de sangue, mas pelo respeito conquistado na ponta da espada. 
- Você pode somar seu modificador de **Carisma na Defesa** mesmo quando estiver usando armaduras leves ou pesadas (o bônus máximo é limitado pelo modificador de Carisma).
- Além disso, aliados que possam vê-lo e ouvi-lo em alcance curto recebem um bônus em testes de manobras de combate igual a metade do seu Carisma (mínimo +1).

### [[Grito de Batalha]] (1º Nível)
Você profere ordens firmes que guiam o golpe dos seus comandados. 
- Com uma **ação de movimento e 1 PM**, você comanda um aliado em alcance curto. Ele recebe **+2 em testes de ataque e Defesa** até o início do seu próximo turno, OU pode usar uma reação imediata para realizar uma ação de movimento extra.

### [[Poder de Comandante]] (2º Nível)
A partir do 2º nível, e a cada nível seguinte, você pode escolher um poder da lista de poderes de [[Nobre]]. Você também pode escolher poderes da lista de Combatente/Guerreiro voltados a combate tático e comando de tropas.

### [[Ordens de Combate]] (3º Nível)
No 3º nível, sua voz ressoa acima do barulho do campo de batalha. Gastando **2 PM**, você emite uma ordem coletiva para todos os aliados em alcance curto:
- **"Fogo à Vontade / Atacar!":** Aliados recebem +1d6 nas rolagens de dano físico até o início do seu próximo turno.
- **"Muralha Defensiva!":** Aliados recebem +2 na Defesa e Redução de Dano 2 até o início do seu próximo turno.
- **"Avançar Posição!":** Aliados aumentam seu deslocamento em +3m imediatamente e ignoram terreno difícil pela rodada.

### [[Táticas Coletivas]] (6º Nível)
No 6º nível, você treina seus companheiros para agir em sinergia perfeita. Quando você ou um aliado em alcance curto flanqueia um inimigo, o bônus de flanqueamento passa de +2 para **+4 no teste de ataque**. Além disso, aliados adjacentes a você ou adjacentes entre si podem somar +1 na Defesa por cada companheiro em contato.

### [[Estrategista Supremo]] (20º Nível)
No 20º nível, você prevê cada passo dos inimigos como peças descartáveis em um tabuleiro de xadrez:
- Uma vez por combate, com uma **ação padrão e 5 PM**, você declara o clímax da batalha: todos os aliados em alcance médio podem **realizar imediatamente uma ação padrão extra como uma reação livre**.
- Até o final da cena, todos os bônus numéricos concedidos por suas habilidades [[Grito de Batalha]] e [[Ordens de Combate]] são **dobrados**.

---

## ⚔️ Poderes de Nobre Disponíveis para Comandante

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Nobre" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder"
  AND (!classes OR contains(classes, this.file.link) OR contains(classes, this.classe_base))
  AND !contains(default(this.poderes_proibidos, []), file.link)
SORT file.name ASC
```
