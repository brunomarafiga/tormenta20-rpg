---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA / Heróis de Arton"
nome: "Abençoar Arma"
resumo: "Proficiência na arma preferida da divindade. Gasta 3 PM para aumentar dano em um passo e usar Sabedoria no ataque e dano."
ativacao: "movimento"
natureza: "magica"
subcategoria_tatica: "metamagia"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Clérigo]]"
trilha_poder: "Prece de Combate"
ordem: 1
magias_relacionadas:
  - "[[Arma Mágica]]"
---
# ⚡ Abençoar Arma

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder de [[Clérigo]]
> - 🌿 <span class="t20-azul">Trilha:</span> Prece de Combate
> - 🎖️ <span class="t20-amarelo">Nível Mínimo:</span> 1º Nível
> - 🔑 <span class="t20-verde">Pré-requisitos:</span> Nenhum
> - 🔮 <span class="t20-ciano">Magias Vinculadas:</span> [[Arma Mágica]]

Você se torna proficiente na arma preferida de sua divindade. Se estiver empunhando essa arma, pode gastar uma ação de movimento e 3 PM para infundi-la com poder divino (como na magia [[Arma Mágica]]). Até o final da cena, a arma é considerada mágica, emite luz sagrada, seu dano aumenta em um passo e você pode usar sua **Sabedoria em testes de ataque e rolagens de dano** em vez de Força ou Destreza.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + trilha_poder + ")"
FROM "Poderes/Classe/Clérigo"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
