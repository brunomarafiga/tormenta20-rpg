---
tipo: classe
subtipo: classe-variante
classe_base: "[[Cavaleiro]]"
sistema: tormenta20-jda
fonte: "Dragão Brasil / Heróis de Arton"
nome: "Vanguarda"
pv_inicial: 20
pv_por_nivel: 5
pm_inicial: 3
pm_por_nivel: 3
pericias_basicas:
  - "Fortitude"
  - "Luta"
pericias_adicionais: 2
proficiencias:
  - "Armas Simples"
  - "Armas Marciais"
  - "Armaduras Pesadas"
  - "Escudos"
---

# 🛡️ Vanguarda

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe Variante de [[Cavaleiro]] (*Dragão Brasil / Heróis de Arton*)
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 20 (+5 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 3 (+3 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armas Simples, Armas Marciais, Armaduras Pesadas, Escudos (inclusive Escudo de Corpo)
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Fortitude, Luta
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 2 a sua escolha entre: Adestramento, Atletismo, Cavalgar, Guerra, Iniciativa, Intimidação, Ofício (Qualquer), Percepção, Vontade

A Vanguarda é a muralha de ferro que se interpõe entre a ferocidade dos monstros e a integridade de seus companheiros. Treinado na doutrina da defesa inabalável, o combatente de vanguarda não busca a glória dos golpes vistosos, mas o orgulho de jamais ceder um centímetro de solo e proteger aqueles que marcham atrás de seu escudo.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Postura de Vanguarda]] | Empunhando escudo e armadura pesada, recebe +2 na Defesa e fornece cobertura parcial a aliados adjacentes. |
| **1º** | [[Interposição Tática]] | Reação e 1 PM: move-se até alcance curto para receber o golpe no lugar de um aliado ou dividir o dano à metade. |
| **2º** | [[Poder de Vanguarda]] | A partir do 2º nível, escolhe poderes da lista de Cavaleiro e Guerreiro voltados a proteção e armaduras. |
| **3º** | [[Muralha de Ferro]] | Soma bônus de escudo em Fortitude e Reflexos contra efeitos de área. Inimigos não podem passar pelo seu espaço adjacente. |
| **6º** | [[Bastião Inabalável]] | Recebe Redução de Dano 5 (RD 5) contra dano físico (+2 de RD a cada 4 níveis). |
| **20º** | [[Fortaleza Viva]] | Imune a atordoamento e deslocamento forçado. Uma vez por rodada, anula completamente o dano de um ataque contra si ou aliado. |

---

## 📖 Descrição Completa das Habilidades de Vanguarda

### [[Postura de Vanguarda]] (1º Nível)
Você transforma seu corpo e seu equipamento em uma fortificação móvel. 
- Enquanto estiver empunhando um escudo e usando armadura pesada, você recebe **+2 na Defesa**.
- Além disso, qualquer aliado adjacente a você recebe **cobertura parcial** (+2 na Defesa e em testes de Reflexos) contra ataques originados do lado oposto ao seu escudo.

### [[Interposição Tática]] (1º Nível)
Você não hesita em colocar sua vida na linha de fogo para salvar um companheiro. 
- Quando um aliado a até alcance curto for alvo de um ataque ou de uma magia que cause dano, você pode gastar uma **reação e 1 PM** para se mover até um espaço adjacente a ele.
- Você se torna o novo alvo do ataque (ou, se a habilidade for usada após a rolagem do dano, você **divide todo o dano resultante igualmente à metade entre você e o aliado**).

### [[Poder de Vanguarda]] (2º Nível)
A partir do 2º nível, e a cada nível seguinte, você pode escolher um poder da lista de poderes de [[Cavaleiro]] ou [[Guerreiro]] voltado à defesa, resistência física e domínio de escudos.

### [[Muralha de Ferro]] (3º Nível)
No 3º nível, sua perícia com o escudo desafia até explosões e cataclismos:
- Você **soma o bônus de Defesa do seu escudo em todos os seus testes de Fortitude e Reflexos** contra efeitos que atinjam área (como bolas de fogo, sopros de dragão ou desmoronamentos).
- Além disso, o espaço ocupado por você e todos os quadrados imediatamente adjacentes são considerados **terreno difícil para inimigos**. Inimigos que tentem se mover pelo seu espaço adjacente devem parar o movimento caso você seja bem-sucedido em uma manobra de combate imediata.

### [[Bastião Inabalável]] (6º Nível)
No 6º nível, o impacto das armas parece apenas arranhar suas chapas de aço. Você recebe **Redução de Dano 5 (RD 5)** contra todos os tipos de dano físico (corte, perfuração e impacto). A cada 4 níveis além do 6º (10º, 14º e 18º níveis), essa Redução de Dano aumenta em +2 (RD 7 no 10º, RD 9 no 14º e RD 11 no 18º nível).

### [[Fortaleza Viva]] (20º Nível)
No 20º nível, você se torna uma lenda de tenacidade:
- Você se torna **completamente imune** a atordoamento, paralisia, derrubada e quaisquer manobras de empurrar ou movimento involuntário forçado.
- **Defesa Absoluta:** Uma vez por rodada, como uma reação livre sem custo de PM, quando você ou um aliado adjacente sofrer dano de um ataque ou habilidade, você pode **anular completamente todo o dano** daquele ataque com o choque do seu escudo.

---

## ⚔️ Poderes de Cavaleiro Disponíveis para Vanguarda

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Cavaleiro" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder"
  AND (!classes OR contains(classes, this.file.link) OR contains(classes, this.classe_base))
  AND !contains(default(this.poderes_proibidos, []), file.link)
SORT file.name ASC
```
