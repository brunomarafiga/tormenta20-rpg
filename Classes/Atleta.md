---
tipo: classe
subtipo: classe-variante
classe_base: "[[Lutador]]"
sistema: tormenta20-jda
fonte: "Heróis de Arton"
nome: "Atleta"
pv_inicial: 20
pv_por_nivel: 5
pm_inicial: 3
pm_por_nivel: 3
pericias_basicas:
  - "Atletismo"
  - "Fortitude"
pericias_adicionais: 2
proficiencias:
  - "Armas Simples"
---

# 🏅 Atleta

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe Variante de [[Lutador]] (*Heróis de Arton*)
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 20 (+5 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 3 (+3 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armas Simples
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Atletismo, Fortitude
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 2 a sua escolha entre: Acrobacia, Adestramento, Cavalgar, Iniciativa, Intimidação, Luta, Percepção, Pontaria, Reflexos

O Atleta condiciona o corpo humano até o ápice do vigor físico, velocidade e elasticidade, combinando acrobacias monumentais, saltos e arremessos olímpicos com combate corporal.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Façanha Atlética]] | Quando faz um teste de perícia, você pode gastar uma quantidade de PM a sua escolha (limit... |
| **2º** | [[Arremesso Atlético]] | No 2º nível, o alcance de seus ataques com armas de arremesso aumenta em um passo (de curt... |
| **2º** | [[Poderio Muscular]] | No 2º nível, você aprende e pode lançar Primor Atlético, mas apenas em si mesmo. Esta não ... |
| **5º** | [[Mais Alto e Mais Rápido]] | No 5º nível, seu deslocamento aumenta em +3m. Além disso, você recebe deslocamento de esca... |
| **9º** | [[Disciplina Atlética]] | A partir do 9º nível, quando falha em um teste de resistência, você pode gastar 2 PM para ... |
| **20º** | [[Corpo Ideal]] | No 20º nível, você atinge o ápice físico de um corpo mortal. Você recebe imunidade a cansa... |

---

## 📖 Descrição Completa das Habilidades de Atleta

### [[Façanha Atlética]] (1º Nível)
Quando faz um teste de perícia, você pode gastar uma quantidade de PM a sua escolha (limitada pela sua Força). Para cada PM que gastar, recebe +2 no teste.

### [[Arremesso Atlético]] (2º Nível)
No 2º nível, o alcance de seus ataques com armas de arremesso aumenta em um passo (de curto para médio e de médio para longo). Além disso, quando ataca com uma dessas armas, você pode usar o dano da habilidade Briga no lugar do dano básico da arma. A partir do 10º nível, seus ataques com armas de arremesso contam como ataques desarmados para efeito de suas habilidades de lutador.

### [[Poderio Muscular]] (2º Nível)
No 2º nível, você aprende e pode lançar Primor Atlético, mas apenas em si mesmo. Esta não é uma habilidade mágica e provém de seu extenso treinamento físico.

### [[Mais Alto e Mais Rápido]] (5º Nível)
No 5º nível, seu deslocamento aumenta em +3m. Além disso, você recebe deslocamento de escalada e natação igual à metade de seu deslocamento normal (se já os possui, em vez disso eles aumentam em +3m). Ao contrário do normal, esse deslocamento de natação não fornece a capacidade de respirar debaixo d'água, mas você soma seu nível de atleta no total de rodadas para prender sua respiração.

### [[Disciplina Atlética]] (9º Nível)
A partir do 9º nível, quando falha em um teste de resistência, você pode gastar 2 PM para rolar esse teste novamente, usando Atletismo no lugar da perícia original.

### [[Corpo Ideal]] (20º Nível)
No 20º nível, você atinge o ápice físico de um corpo mortal. Você recebe imunidade a cansaço, condições de metabolismo e veneno, redução de dano 10 e seu dano desarmado e com armas de arremesso aumenta para 2d10 (criaturas Médias).


---

## ⚔️ Poderes de Lutador Disponíveis para Atleta

Como classe variante, o Atleta acessa toda a lista de poderes da sua classe base [[Lutador]]:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Lutador" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder"
  AND (!classes OR contains(classes, this.file.link) OR contains(classes, this.classe_base))
  AND !contains(default(this.poderes_proibidos, []), file.link)
SORT file.name ASC
```
