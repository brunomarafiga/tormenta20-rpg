---
tipo: classe
subtipo: classe-base
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Bárbaro"
pv_inicial: 24
pv_por_nivel: 6
pm_inicial: 3
pm_por_nivel: 3
pericias_basicas:
  - "Luta"
  - "Fortitude"
pericias_adicionais: 4
proficiencias:
  - "Escudos"
  - "Armaduras Leves"
  - "Armas Marciais"
  - "Armas Simples"
---

# 🪓 Bárbaro

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe de Personagem
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 24 (+6 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 3 (+3 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Escudos, Armaduras Leves, Armas Marciais, Armas Simples
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Luta, Fortitude
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 4 a sua escolha entre: Adestramento, Atletismo, Cavalgar, Iniciativa, Intimidação, Ofício (Qualquer), Percepção, Pontaria, Sobrevivência, Vontade

Guerreiro feroz das terras ermas que canaliza a Fúria primitiva para desferir golpes devastadores e ignorar a dor de ferimentos mortais.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Fúria]] | Você pode gastar 2 PM para invocar uma fúria selvagem. Você recebe +2 em testes de ataque ... |
| **3º** | [[Instinto Selvagem]] | Você recebe +1 em rolagens de dano, Percepção e Reflexos. A cada seis níveis, esse bônus a... |
| **5º** | [[Resistência a Dano]] | Graças a seu vigor e força de vontade, você ignora parte de seus ferimentos. Você recebe r... |
| **20º** | [[Fúria Titânica]] | No 20º nível, o bônus que você recebe nos testes de ataque e rolagens de dano quando usa F... |

---

## 📖 Descrição Completa das Habilidades de Bárbaro

### [[Fúria]] (1º Nível)
Você pode gastar 2 PM para invocar uma fúria selvagem. Você recebe +2 em testes de ataque e rolagens de dano corpo a corpo, mas não pode fazer nenhuma ação que exija calma e concentração (como usar a perícia Furtividade ou lançar magias). A cada cinco níveis, pode gastar +1 PM para aumentar os bônus em +1. A Fúria termina se, ao fim da rodada, você não tiver atacado nem sido alvo de um efeito (ataque, habilidade, magia...) hostil.

### [[Instinto Selvagem]] (3º Nível)
Você recebe +1 em rolagens de dano, Percepção e Reflexos. A cada seis níveis, esse bônus aumenta em +1.

### [[Resistência a Dano]] (5º Nível)
Graças a seu vigor e força de vontade, você ignora parte de seus ferimentos. Você recebe resistência a dano 2 (todo dano que sofre é reduzido em 2). A cada três níveis, sua RD aumenta em 2, até um máximo de RD 10 no 17º nível.

### [[Fúria Titânica]] (20º Nível)
No 20º nível, o bônus que você recebe nos testes de ataque e rolagens de dano quando usa Fúria é dobrado. Por exemplo, se gastar 5 PM, em vez de um bônus de +5, recebe um bônus de +10


---

## ⚔️ Poderes de Bárbaro

A partir do 2º nível, e a cada nível seguinte, você pode escolher um dos poderes a seguir:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Bárbaro" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder"
  AND (!classes OR contains(classes, this.file.link) OR contains(classes, this.classe_base))
  AND !contains(default(this.poderes_proibidos, []), file.link)
SORT file.name ASC
```
