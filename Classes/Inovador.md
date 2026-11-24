---
tipo: classe
subtipo: classe-variante
classe_base: "[[Guerreiro]]"
sistema: tormenta20-jda
fonte: "Heróis de Arton"
nome: "Inovador"
pv_inicial: 20
pv_por_nivel: 5
pm_inicial: 3
pm_por_nivel: 3
pericias_basicas:
  - "Luta ou Pontaria"
  - "Fortitude"
pericias_adicionais: 2
proficiencias:
  - "Armas Marciais"
  - "Armas Simples"
  - "Armaduras Leves"
  - "Armaduras Pesadas"
  - "Escudos"
---

# ⚙️ Inovador

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe Variante de [[Guerreiro]] (*Heróis de Arton*)
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 20 (+5 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 3 (+3 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armas Marciais, Armas Simples, Armaduras Leves, Armaduras Pesadas, Escudos
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Luta ou Pontaria, Fortitude
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 2 a sua escolha entre: Adestramento, Atletismo, Cavalgar, Guerra, Iniciativa, Intimidação, Luta, Ofício (Qualquer), Percepção, Pontaria, Reflexos

O Inovador é o combatente audacioso que não se conforma com as velhas tradições marciais. Ele experimenta novos equipamentos, sequências de golpes inusitadas e armas excêntricas na vanguarda bélica.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Do Bom e do Melhor]] | Você começa o jogo com uma arma, armadura ou escudo superior a sua escolha, de até T$ 500.... |
| **1º** | [[Sequência Especial]] | Você pode gastar 2 PM para iniciar uma sequência de movimentos inovadores. Quando faz isso... |
| **2º** | [[Bombardeio Sequencial]] | No 2º nível, você pode usar sua Sequência Especial ao usar itens alquímicos ou poções (nes... |
| **3º** | [[Acrobacia Defensiva]] | A partir do 3º nível, quando sofre dano, você pode gastar 2 PM para executar uma pirueta d... |
| **4º** | [[Domínio Excêntrico]] | A partir do 4º nível, sempre que passar pelo menos uma semana carregando uma arma exótica ... |
| **7º** | [[Técnica Revolucionária]] | A partir do 7º nível, você pode gastar 2 PM para, até o fim do combate, usar armas que est... |
| **20º** | [[Estilo Único]] | No 20º nível, você consolida seu próprio estilo de combate. Escolha dois poderes de guerre... |

---

## 📖 Descrição Completa das Habilidades de Inovador

### [[Do Bom e do Melhor]] (1º Nível)
Você começa o jogo com uma arma, armadura ou escudo superior a sua escolha, de até T$ 500. Entretanto, você é considerado não proficiente em qualquer arma, armadura ou escudo que não seja superior ou mágico.

### [[Sequência Especial]] (1º Nível)
Você pode gastar 2 PM para iniciar uma sequência de movimentos inovadores. Quando faz isso, a cada vez que ataca com uma arma que ainda não tenha usado nessa sequência, você recebe um bônus de +1 em testes de ataque e rolagens de dano (cumulativo até +2). A cada 4 níveis, você pode gastar +1 PM para aumentar o limite desses bônus em +2. A sequência termina ao fim da cena ou se você ficar 1 rodada sem trocar pelo menos uma arma.

### [[Bombardeio Sequencial]] (2º Nível)
No 2º nível, você pode usar sua Sequência Especial ao usar itens alquímicos ou poções (nesse caso, aplica o bônus de ataque acumulado à CD para resistir ao item).

### [[Acrobacia Defensiva]] (3º Nível)
A partir do 3º nível, quando sofre dano, você pode gastar 2 PM para executar uma pirueta defensiva. Você faz um teste de Acrobacia e subtrai o resultado desse teste do dano sofrido.

### [[Domínio Excêntrico]] (4º Nível)
A partir do 4º nível, sempre que passar pelo menos uma semana carregando uma arma exótica ou de fogo superior ou mágica, você recebe proficiência nela.

### [[Técnica Revolucionária]] (7º Nível)
A partir do 7º nível, você pode gastar 2 PM para, até o fim do combate, usar armas que esteja empunhando como se elas tivessem uma das seguintes habilidades de arma, a sua escolha: adaptável, ágil, alongada, dupla (use as estatísticas da arma em ambas as pontas) ou versátil (para uma manobra escolhida ao usar esta habilidade). Esse efeito termina se você ativar sua Técnica Revolucionária novamente.

### [[Estilo Único]] (20º Nível)
No 20º nível, você consolida seu próprio estilo de combate. Escolha dois poderes de guerreiro ou de combate que possua. Para esses poderes, você ignora todos os requisitos e restrições relacionados a armas, incluindo propósito, empunhadura, características e habilidades das armas. Por exemplo, você pode usar Estilo de Duas Mãos com armas leves, Estilo de Arremesso com uma arma de duas mãos ou até Esgrimista com pistolas! O mestre tem a palavra final sobre como os poderes interagem entre si.


---

## ⚔️ Poderes de Guerreiro Disponíveis para Inovador

Como classe variante, o Inovador acessa toda a lista de poderes da sua classe base [[Guerreiro]]:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Guerreiro" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder"
  AND (!classes OR contains(classes, this.file.link) OR contains(classes, this.classe_base))
  AND !contains(default(this.poderes_proibidos, []), file.link)
SORT file.name ASC
```
