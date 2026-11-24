---
tipo: classe
subtipo: classe-variante
classe_base: "[[Bárbaro]]"
sistema: tormenta20-jda
fonte: "Heróis de Arton"
nome: "Machado de Pedra"
pv_inicial: 24
pv_por_nivel: 6
pm_inicial: 3
pm_por_nivel: 3
pericias_basicas:
  - "Fortitude"
  - "Luta"
pericias_adicionais: 4
proficiencias:
  - "Armas Simples"
  - "Armas Marciais"
---

# 🪓 Machado de Pedra

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe Variante de [[Bárbaro]] (*Heróis de Arton*)
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 24 (+6 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 3 (+3 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armas Simples, Armas Marciais
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Fortitude, Luta
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 4 a sua escolha entre: Adestramento, Atletismo, Cavalgar, Iniciativa, Intimidação, Ofício (Qualquer), Percepção, Pontaria, Sobrevivência, Vontade

O guerreiro dos tempos ancestrais. Desprezando o aço refinado e vestindo apenas tangas de pele e pedras lascadas, o Machado de Pedra canaliza uma fúria brutal e puramente rústica que esmaga qualquer sofisticação.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Grunhidos]] | Você conhece apenas o idioma rústico da pequena comunidade onde viveu e nenhum outro. Você... |
| **1º** | [[Machado de Pedra (Habilidade)|Machado de Pedra]] | Você não recebe proficiência com armas simples. Você sabe usar apenas adaga, azagaia, clav... |
| **1º** | [[Tanga de Peles]] | Você não recebe proficiência com armaduras leves. Entretanto, se não estiver usando armadu... |
| **2º** | [[Fúria Primitiva]] | A partir do 2º nível, se não estiver usando armadura e estiver empunhando uma das armas de... |
| **5º** | [[Resiliência Primal]] | A partir do 5º nível, graças a seu vigor e força de vontade, você ignora parte de seus fer... |
| **20º** | [[Fúria Rústica]] | No 20º nível, quando entra em fúria, você pode gastar 5 PM. Se fizer isso, durante a fúria... |

---

## 📖 Descrição Completa das Habilidades de Machado de Pedra

### [[Grunhidos]] (1º Nível)
Você conhece apenas o idioma rústico da pequena comunidade onde viveu e nenhum outro. Você não só é incapaz de compreender outros dialetos como não se importa com isso, comunicando-se com grunhidos e sons simples. Contudo, você conhece uma palavra no idioma valkar (o mais comum de Arton) por nível de machado de pedra.

### [[Machado de Pedra (Habilidade)|Machado de Pedra]] (1º Nível)
Você não recebe proficiência com armas simples. Você sabe usar apenas adaga, azagaia, clava, funda, lança, machadinha e tacape. No 9º nível, aprende a usar uma arma simples ou marcial a sua escolha. Entretanto, quando ataca com uma arma natural, um ataque desarmado ou uma dessas armas, você recebe +1 no teste de ataque e na rolagem de dano.

### [[Tanga de Peles]] (1º Nível)
Você não recebe proficiência com armaduras leves. Entretanto, se não estiver usando armadura, você soma sua Constituição na Defesa. Além disso, no 3º nível, e a cada quatro níveis seguintes, você recebe +1 na Defesa.

### [[Fúria Primitiva]] (2º Nível)
A partir do 2º nível, se não estiver usando armadura e estiver empunhando uma das armas de sua habilidade Machado de Pedra, o custo de sua Fúria é reduzido em –1 PM. Além disso, uma vez por cena, quando entra em fúria, você recebe uma quantidade de PV temporários igual ao seu nível + sua Constituição.

### [[Resiliência Primal]] (5º Nível)
A partir do 5º nível, graças a seu vigor e força de vontade, você ignora parte de seus ferimentos. Você recebe redução de dano 3. A cada três níveis, sua RD aumenta em 3, até um máximo de RD 15 no 17º nível.

### [[Fúria Rústica]] (20º Nível)
No 20º nível, quando entra em fúria, você pode gastar 5 PM. Se fizer isso, durante a fúria você recebe Cura Acelerada 10 (cumulativo com outras Curas Aceleradas) e, quando faz a ação agredir, pode fazer um ataque desarmado adicional.


---

## ⚔️ Poderes de Bárbaro Disponíveis para Machado de Pedra

Como classe variante, o Machado de Pedra acessa toda a lista de poderes da sua classe base [[Bárbaro]]:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Bárbaro" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder"
  AND (!classes OR contains(classes, this.file.link) OR contains(classes, this.classe_base))
  AND !contains(default(this.poderes_proibidos, []), file.link)
SORT file.name ASC
```
