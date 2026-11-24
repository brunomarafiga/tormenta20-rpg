---
tipo: classe
subtipo: classe-base
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Ladino"
pv_inicial: 12
pv_por_nivel: 3
pm_inicial: 4
pm_por_nivel: 4
pericias_basicas:
  - "Ladinagem"
  - "Reflexos"
pericias_adicionais: 8
proficiencias:
  - "Armaduras Leves"
  - "Armas Simples"
---

# 🗡️ Ladino

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe de Personagem
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 12 (+3 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 4 (+4 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armaduras Leves, Armas Simples
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Ladinagem, Reflexos
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 8 a sua escolha entre: Acrobacia, Atletismo, Atuação, Cavalgar, Conhecimento, Diplomacia, Enganação, Furtividade, Iniciativa, Intimidação, Intuição, Investigação, Jogatina, Luta, Ofício (Qualquer), Percepção, Pontaria, Pilotagem

Especialista furtivo das sombras, trapaças e mecanismos trancados, mestre em encontrar brechas e desferir Ataques Furtivos letais em pontos vitais.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Ataque Furtivo]] | Você sabe atingir os pontos vitais de inimigos distraídos. Uma vez por rodada, quando atin... |
| **1º** | [[Especialista]] | Escolha um número de perícias treinadas igual a sua Inteligência, exceto bônus temporários... |
| **2º** | [[Evasão (Ladino)|Evasão]] | A partir do 2º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir... |
| **4º** | [[Esquiva Sobrenatural (Ladino)|Esquiva Sobrenatural]] | No 4º nível, seus instintos são tão apurados que você consegue reagir ao perigo antes que ... |
| **8º** | [[Olhos nas Costas]] | A partir do 8º nível, você consegue lutar contra diversos inimigos como se fossem apenas u... |
| **10º** | [[Evasão Aprimorada (Ladino)|Evasão Aprimorada]] | No 10º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano ... |
| **20º** | [[A Pessoa Certa para o Trabalho]] | No 20º nível, você se torna um mestre da ladinagem. Ao fazer um ataque furtivo ou usar uma... |

---

## 📖 Descrição Completa das Habilidades de Ladino

### [[Ataque Furtivo]] (1º Nível)
Você sabe atingir os pontos vitais de inimigos distraídos. Uma vez por rodada, quando atinge uma criatura desprevenida com um ataque corpo a corpo ou em alcance curto, ou uma criatura que esteja flanqueando, você causa 1d6 pontos de dano extra. A cada dois níveis, esse dano extra aumenta em +1d6. Uma criatura imune a acertos críticos também é imune a ataques furtivos.

### [[Especialista]] (1º Nível)
Escolha um número de perícias treinadas igual a sua Inteligência, exceto bônus temporários (mínimo 1). Ao fazer um teste de uma dessas perícias, você pode gastar 1 PM para dobrar seu bônus de treinamento. Você não pode usar esta habilidade em testes de ataque.

### [[Evasão (Ladino)|Evasão]] (2º Nível)
A partir do 2º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.

### [[Esquiva Sobrenatural (Ladino)|Esquiva Sobrenatural]] (4º Nível)
No 4º nível, seus instintos são tão apurados que você consegue reagir ao perigo antes que seus sentidos percebam. Você nunca fica surpreendido.

### [[Olhos nas Costas]] (8º Nível)
A partir do 8º nível, você consegue lutar contra diversos inimigos como se fossem apenas um. Você não pode ser flanqueado.

### [[Evasão Aprimorada (Ladino)|Evasão Aprimorada]] (10º Nível)
No 10º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar e sofre apenas metade do dano se falhar. Esta habilidade exige liberdade de movimentos; você não pode usá- -la se estiver de armadura pesada ou na condição imóvel.

### [[A Pessoa Certa para o Trabalho]] (20º Nível)
No 20º nível, você se torna um mestre da ladinagem. Ao fazer um ataque furtivo ou usar uma perícia da lista de ladino, você pode gastar 5 PM para receber +10 no teste.


---

## ⚔️ Poderes de Ladino

A partir do 2º nível, e a cada nível seguinte, você pode escolher um dos poderes a seguir:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Ladino" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder"
  AND (!classes OR contains(classes, this.file.link) OR contains(classes, this.classe_base))
  AND !contains(default(this.poderes_proibidos, []), file.link)
SORT file.name ASC
```
