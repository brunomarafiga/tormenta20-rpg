---
tipo: classe
subtipo: classe-base
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Caçador"
pv_inicial: 16
pv_por_nivel: 4
pm_inicial: 4
pm_por_nivel: 4
pericias_basicas:
  - "Luta ou Pontaria"
  - "Sobrevivência"
pericias_adicionais: 6
proficiencias:
  - "Armaduras Leves"
  - "Armas Marciais"
  - "Escudos"
  - "Armas Simples"
---

# 🏹 Caçador

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe de Personagem
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 16 (+4 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 4 (+4 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armaduras Leves, Armas Marciais, Escudos, Armas Simples
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Luta ou Pontaria, Sobrevivência
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 6 a sua escolha entre: Adestramento, Atletismo, Cavalgar, Cura, Fortitude, Furtividade, Iniciativa, Investigação, Luta, Ofício (Qualquer), Percepção, Pontaria, Reflexos

Rastreador implacável e mestre da sobrevivência selvagem, especialista em abater presas designadas com armadilhas engenhosas e disparos precisos.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Marca da Presa]] | Você pode gastar uma ação de movimento e 1 PM para analisar uma criatura em alcance curto.... |
| **1º** | [[Rastreador]] | Você recebe +2 em Sobrevivência. Além disso, pode se mover com seu deslocamento normal enq... |
| **3º** | [[Explorador]] | Escolha um tipo de terreno entre aquático, ártico, colina, deserto, floresta, montanha, pâ... |
| **5º** | [[Caminho do Explorador]] | Você pode atravessar terrenos difíceis sem sofrer redução em seu deslocamento e a CD para ... |
| **20º** | [[Mestre Caçador]] | No 20º nível, você pode usar a habilidade Marca da Presa como uma ação livre. Além disso, ... |

---

## 📖 Descrição Completa das Habilidades de Caçador

### [[Marca da Presa]] (1º Nível)
Você pode gastar uma ação de movimento e 1 PM para analisar uma criatura em alcance curto. Até o fim da cena, você recebe +1d4 nas rolagens de dano contra essa criatura. A cada quatro níveis, você pode gastar +1 PM para aumentar o bônus de dano (veja a tabela da classe).

### [[Rastreador]] (1º Nível)
Você recebe +2 em Sobrevivência. Além disso, pode se mover com seu deslocamento normal enquanto rastreia sem sofrer penalidades no teste de Sobrevivência.

### [[Explorador]] (3º Nível)
Escolha um tipo de terreno entre aquático, ártico, colina, deserto, floresta, montanha, pântano, planície, subterrâneo ou urbano. A partir do 11º nível, você também pode escolher área de Tormenta. Quando estiver no tipo de terreno escolhido, você soma sua Sabedoria (mínimo +1) na Defesa e nos testes de Acrobacia, Atletismo, Furtividade, Percepção e Sobrevivência. A cada quatro níveis, escolha outro tipo de terreno para receber o bônus ou aumente o bônus em um tipo de terreno já escolhido em +2.

### [[Caminho do Explorador]] (5º Nível)
Você pode atravessar terrenos difíceis sem sofrer redução em seu deslocamento e a CD para rastrear você aumenta em +10. Esta habilidade só funciona em terrenos nos quais você tenha a habilidade Explorador.

### [[Mestre Caçador]] (20º Nível)
No 20º nível, você pode usar a habilidade Marca da Presa como uma ação livre. Além disso, quando usa a habilidade, pode gastar 5 PM para aumentar sua margem de ameaça contra a criatura em +2. Se você reduz uma criatura contra a qual usou Marca da Presa a 0 pontos de vida, recupera 5 PM.


---

## ⚔️ Poderes de Caçador

A partir do 2º nível, e a cada nível seguinte, você pode escolher um dos poderes a seguir:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Caçador" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder"
  AND (!classes OR contains(classes, this.file.link) OR contains(classes, this.classe_base))
  AND !contains(default(this.poderes_proibidos, []), file.link)
SORT file.name ASC
```
