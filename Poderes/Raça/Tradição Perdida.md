---
tipo: "poder"
subtipo: "poder-racial"
categoria: "racial"
sistema: "tormenta20-jda"
fonte: "Heróis de Arton"
nome: "Tradição Perdida"
resumo: "Soma atributo a escolha no total de PM de uma classe conjuradora em vez do atributo padrão (limite 6 +2/patamar)."
ativacao: "passivo-constante"
natureza: "magica"
subcategoria_tatica: "racial"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
---
# ⚡ Tradição Perdida

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder Geral (Racial)
> - 🧬 <span class="t20-verde">Raças Exigidas:</span> Várias *(Qualquer raça não humana)*
> - 📜 <span class="t20-amarelo">Fonte:</span> Heróis de Arton
> - 🔑 <span class="t20-verde">Pré-requisitos:</span> Não humano, habilidade de classe Magias

Membros de sua raça sabem lançar magias de uma forma diferente das conhecidas. Escolha um atributo (Força, Destreza, Constituição, Inteligência, Sabedoria ou Carisma) e uma de suas classes com a habilidade Magias. Para essa classe, você soma o atributo escolhido no seu total de PM, em vez do atributo determinado por ela, até um limite de 6 pontos de atributo, +2 pontos por patamar acima de iniciante — com parte de seu conhecimento perdido, as tradições mais antigas possuem certas limitações. Aumentos temporários nesse atributo não fornecem PM adicionais. Pré-requisitos: não humano, habilidade de classe Magias.

---

### 🔗 Poderes Dependentes
```dataview
LIST
FROM "Poderes"
WHERE tipo = "poder" AND contains(requer_poder, this.file.link)
SORT default(requer_nivel, 1) ASC, file.name ASC
```
