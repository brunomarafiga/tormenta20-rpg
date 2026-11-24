---
tipo: classe
subtipo: classe-base
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Druida"
pv_inicial: 16
pv_por_nivel: 4
pm_inicial: 4
pm_por_nivel: 4
pericias_basicas:
  - "Sobrevivência"
  - "Vontade"
pericias_adicionais: 4
proficiencias:
  - "Armas Simples"
  - "Armaduras Leves"
  - "Escudos"
---

# 🌿 Druida

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Classe de Personagem
> - ❤️ <span class="t20-vermelho">Pontos de Vida:</span> 16 (+4 PV por nível além do 1º)
> - 💧 <span class="t20-ciano">Pontos de Mana:</span> 4 (+4 PM por nível além do 1º)
> - 🛡️ <span class="t20-azul">Proficiências:</span> Armas Simples, Armaduras Leves, Escudos
> - 🎯 <span class="t20-verde">Perícias Básicas:</span> Sobrevivência, Vontade
> - 📚 <span class="t20-amarelo">Perícias Adicionais:</span> Mais 4 a sua escolha entre: Adestramento, Atletismo, Cavalgar, Conhecimento, Cura, Fortitude, Iniciativa, Intuição, Luta, Misticismo, Ofício (Qualquer), Percepção, Religião

Guardião sagrado da Criação e da natureza virgem, capaz de assumir formas selvagens aterrorizantes e conjurar os elementos climáticos primordiais.

---

## ⚡ Progressão de Habilidades

| Nível | Habilidade | Resumo Operacional |
| :
---: | :
--- | :
--- |
| **1º** | [[Devoto Fiel (Druida)|Devoto Fiel]] | Você se torna devoto de um deus disponível para druidas (Aharadak, Allihanna, Megalokk, Oc... |
| **1º** | [[Empatia Selvagem (Druida)|Empatia Selvagem]] | Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pod... |
| **1º** | [[Magias (Druida)|Magias]] | Escolha três escolas de magia. Uma vez feita, essa escolha não pode ser mudada. Você pode ... |
| **2º** | [[Caminho dos Ermos]] | No 2º nível, você pode atravessar terrenos difíceis sem sofrer redução em seu deslocamento... |
| **20º** | [[Força da Natureza]] | No 20º nível, você diminui o custo de todas as suas magias em –2 PM e aumenta a CD delas e... |

---

## 📖 Descrição Completa das Habilidades de Druida

### [[Devoto Fiel (Druida)|Devoto Fiel]] (1º Nível)
Você se torna devoto de um deus disponível para druidas (Aharadak, Allihanna, Megalokk, Oceano ou Tenebra). Veja as regras de devotos na página 96. Ao contrário de devotos normais, você recebe dois poderes concedidos por se tornar devoto, em vez de apenas um.

### [[Empatia Selvagem (Druida)|Empatia Selvagem]] (1º Nível)
Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento com animais para mudar atitude e persuasão (veja a página 118).

### [[Magias (Druida)|Magias]] (1º Nível)
Escolha três escolas de magia. Uma vez feita, essa escolha não pode ser mudada. Você pode lançar magias divinas de 1º círculo que pertençam a essas escolas. À medida que sobe de nível, pode lançar magias de círculos maiores (2º círculo no 6º nível, 3º círculo no 10º nível e 4º círculo no 14º nível). Você começa com duas magias de 1º círculo. A cada nível par (2º, 4º etc.), aprende uma magia de qualquer círculo e escola que possa lançar. Seu atributo-chave para lançar magias é Sabedoria e você soma sua Sabedoria no seu total de PM. Veja o Capítulo 4 para as regras de magia.

### [[Caminho dos Ermos]] (2º Nível)
No 2º nível, você pode atravessar terrenos difíceis sem sofrer redução em seu deslocamento e a CD para rastreá-lo aumenta em +10. Esta habilidade só funciona em terrenos naturais.

### [[Força da Natureza]] (20º Nível)
No 20º nível, você diminui o custo de todas as suas magias em –2 PM e aumenta a CD delas em +2. Os bônus dobram (–4 PM e +4 na CD) se você estiver em terrenos naturais.


---

## ⚔️ Poderes de Druida

A partir do 2º nível, e a cada nível seguinte, você pode escolher um dos poderes a seguir:

```dataview
TABLE resumo AS "Efeito Resumido", join(requer_poder, ", ") AS "Pré-requisitos", requer_nivel AS "Nível Mín."
FROM "Poderes/Classe/Druida" OR "Poderes/Classe/Comuns"
WHERE tipo = "poder"
  AND (!classes OR contains(classes, this.file.link) OR contains(classes, this.classe_base))
  AND !contains(default(this.poderes_proibidos, []), file.link)
SORT file.name ASC
```
