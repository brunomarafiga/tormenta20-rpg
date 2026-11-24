---
tipo: classe
subtipo: classe-base
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Inventor"
pv_inicial: 12
pv_por_nivel: 3
pm_inicial: 4
pm_por_nivel: 4
pericias_basicas:
  - "Ofício (Qualquer)"
  - "Vontade"
pericias_adicionais: 4
proficiencias:
  - "Armaduras Leves"
  - "Armas Simples"
---

# ⚙️ Inventor

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe de Personagem
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 12 (+3 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 4 (+4 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armaduras Leves, Armas Simples
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Ofício (Qualquer), Vontade
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 4 a sua escolha entre: Conhecimento, Cura, Diplomacia, Fortitude, Iniciativa, Investigação, Luta, Misticismo, Ofício (Qualquer), Pilotagem, Percepção, Pontaria

Prodígio do intelecto e da engenhosidade técnica, forjador de protótipos mecânicos, compostos alquímicos e itens mágicos superiores.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Engenhosidade (Inventor)|Engenhosidade]] | Quando faz um teste de perícia, você pode gastar 2 PM para somar a sua Inteligência no tes... |
| **1º** | [[Protótipo]] | Você começa o jogo com um superior, ou com 10 itens alquímicos, com preço total de até T$ ... |
| **2º** | [[Fabricar Item Superior]] | No 2º nível, você recebe um superior com preço de até T$ 2.000 e passa a poder fabricar it... |
| **3º** | [[Comerciante]] | No 3º nível, você pode vender itens 10% mais caro (não cumulativo com barganha).... |
| **7º** | [[Encontrar Fraqueza]] | A partir do 7º nível, você pode gastar uma ação de movimento e 2 PM para analisar um objet... |
| **9º** | [[Fabricar Item Mágico]] | No 9º nível, você recebe um mágico menor e passa a poder fabricar itens mágicos menores. V... |
| **11º** | [[Olho do Dragão]] | A partir do 10º nível, você pode gastar uma ação completa para analisar um item. Você auto... |
| **20º** | [[Obra-Prima]] | No 20º nível, você fabrica sua obra-prima, aquela pela qual seu nome será lembrado em eras... |

---

## 📖 Descrição Completa das Habilidades de Inventor

### [[Engenhosidade (Inventor)|Engenhosidade]] (1º Nível)
Quando faz um teste de perícia, você pode gastar 2 PM para somar a sua Inteligência no teste. Você não pode usar esta habilidade em testes de ataque.

### [[Protótipo]] (1º Nível)
Você começa o jogo com um superior, ou com 10 itens alquímicos, com preço total de até T$ 500. Veja o Capítulo 3: Equipamento para a lista de itens.

### [[Fabricar Item Superior]] (2º Nível)
No 2º nível, você recebe um superior com preço de até T$ 2.000 e passa a poder fabricar itens superiores com uma melhoria. Veja o Capítulo 3: Equipamento para a lista de melhorias. Nos níveis 5, 8 e 11, você pode substituir esse por um superior com duas, três e quatro melhorias, respectivamente, e passa a poder fabricar itens superiores com essa quantidade de melhorias. Considera-se que você estava trabalhando nos itens e você não gasta dinheiro ou tempo neles (mas gasta em itens que fabricar futuramente).

### [[Comerciante]] (3º Nível)
No 3º nível, você pode vender itens 10% mais caro (não cumulativo com barganha).

### [[Encontrar Fraqueza]] (7º Nível)
A partir do 7º nível, você pode gastar uma ação de movimento e 2 PM para analisar um objeto em alcance curto. Se fizer isso, ignora a redução de dano dele. Você também pode usar esta habilidade para encontrar uma fraqueza em um inimigo. Se ele estiver de armadura ou for um construto, você recebe +2 em seus testes de ataque contra ele. Os benefícios desta habilidade duram até o fim da cena.

### [[Fabricar Item Mágico]] (9º Nível)
No 9º nível, você recebe um mágico menor e passa a poder fabricar itens mágicos menores. Veja o Capítulo 8: Recompensas para as regras de itens mágicos. Nos níveis 13 e 17, você pode substituir esse por um mágico médio e maior, respectivamente, e passa a poder fabricar itens mágicos dessas categorias. Considera-se que você estava trabalhando nos itens que recebe e você não gasta dinheiro, tempo ou pontos de mana neles (mas gasta em itens que fabricar futuramente).

### [[Olho do Dragão]] (11º Nível)
A partir do 10º nível, você pode gastar uma ação completa para analisar um item. Você automaticamente descobre se o é mágico, suas propriedades e como utilizá-las.

### [[Obra-Prima]] (20º Nível)
No 20º nível, você fabrica sua obra-prima, aquela pela qual seu nome será lembrado em eras futuras. Você é livre para criar as regras do item, mas ele deve ser aprovado pelo mestre. Como linha geral, ele pode ter benefícios equivalentes a de um com cinco melhorias e quatro encantos. Considera-se que você estava trabalhando no e você não gasta dinheiro, tempo ou PM nele.


---

## ⚔️ Poderes de Inventor

A partir do 2º nível, e a cada nível seguinte, você pode escolher um dos poderes a seguir:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Inventor"
WHERE tipo = "poder"
SORT file.name ASC
```
