---
tipo: classe
subtipo: classe-base
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Bardo"
pv_inicial: 12
pv_por_nivel: 3
pm_inicial: 4
pm_por_nivel: 4
pericias_basicas:
  - "Atuação"
  - "Reflexos"
pericias_adicionais: 6
proficiencias:
  - "Armas Simples"
  - "Armaduras Leves"
  - "Armas Marciais"
---

# 🎭 Bardo

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe de Personagem
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 12 (+3 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 4 (+4 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armas Simples, Armaduras Leves, Armas Marciais
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Atuação, Reflexos
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 6 a sua escolha entre: Acrobacia, Cavalgar, Conhecimento, Diplomacia, Enganação, Furtividade, Iniciativa, Intuição, Investigação, Jogatina, Ladinagem, Luta, Misticismo, Nobreza, Percepção, Pontaria, Vontade

Artista polivalente que conjura magias através de canções, poemas ou danças, inspirando aliados com melodias lendárias e dominando inúmeras perícias.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Inspiração]] | Você pode gastar uma ação padrão e 2 PM para inspirar as pessoas com sua arte. Você e todo... |
| **1º** | [[Magias (Bardo)|Magias]] | Escolha três escolas de magia. Uma vez feita, essa escolha não pode ser mudada. Você pode ... |
| **2º** | [[Eclético]] | A partir do 2º nível, você pode gastar 1 PM para receber todos os benefícios de ser treina... |
| **20º** | [[Artista Completo]] | No 20º nível, você pode usar Inspiração como uma ação livre. Enquanto estiver sob efeito d... |

---

## 📖 Descrição Completa das Habilidades de Bardo

### [[Inspiração]] (1º Nível)
Você pode gastar uma ação padrão e 2 PM para inspirar as pessoas com sua arte. Você e todos os seus aliados em alcance curto ganham +1 em testes de perícia até o fim da cena. A cada quatro níveis, pode gastar +2 PM para aumentar o bônus em +1.

### [[Magias (Bardo)|Magias]] (1º Nível)
Escolha três escolas de magia. Uma vez feita, essa escolha não pode ser mudada. Você pode lançar magias arcanas de 1º círculo que pertençam a essas escolas. À medida que sobe de nível, pode lançar magias de círculos maiores (2º círculo no 6º nível, 3º círculo no 10º nível e 4º círculo no 14º nível). Você começa com duas magias de 1º círculo. A cada nível par (2º, 4º etc.), aprende uma magia de qualquer círculo e escola que possa lançar. Você pode lançar essas magias vestindo armaduras leves sem precisar de testes de Misticismo. Seu atributo-chave para lançar magias é Carisma e você soma seu bônus de Carisma no seu total de PM. Veja o Capítulo 4 para as regras de magia.

### [[Eclético]] (2º Nível)
A partir do 2º nível, você pode gastar 1 PM para receber todos os benefícios de ser treinado em uma perícia por um teste.

### [[Artista Completo]] (20º Nível)
No 20º nível, você pode usar Inspiração como uma ação livre. Enquanto estiver sob efeito de sua Inspiração, suas habilidades de bardo (incluindo magias) têm seu custo em PM reduzido pela metade (após aplicar aprimoramentos e quaisquer outros efeitos que reduzam custo).


---

## ⚔️ Poderes de Bardo

A partir do 2º nível, e a cada nível seguinte, você pode escolher um dos poderes a seguir:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Bardo"
WHERE tipo = "poder"
SORT file.name ASC
```
