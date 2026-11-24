---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA / Heróis de Arton"
nome: "Prece de Combate"
resumo: "Gasta +2 PM para lançar magias divinas de ação padrão em si mesmo como ação de movimento."
ativacao: "padrao"
natureza: "magica"
subcategoria_tatica: "metamagia"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Clérigo]]"
trilha_poder: "Prece de Combate"
ordem: 4
magias_relacionadas:
  - "[[Bênção]]"
  - "[[Escudo da Fé]]"
  - "[[Curar Ferimentos]]"
---
# ⚡ Prece de Combate

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder de [[Clérigo]]
> - 🌿 <span class="t20-azul">Trilha:</span> Prece de Combate
> - 🎖️ <span class="t20-amarelo">Nível Mínimo:</span> 1º Nível
> - 🔑 <span class="t20-verde">Pré-requisitos:</span> Nenhum
> - 🔮 <span class="t20-ciano">Magias Vinculadas:</span> [[Bênção]], [[Escudo da Fé]], [[Curar Ferimentos]]

Quando lança uma magia divina com tempo de conjuração de uma ação padrão tendo você mesmo como alvo (como [[Bênção]], [[Escudo da Fé]] ou [[Curar Ferimentos]]), você pode gastar **+2 PM para lançá-la como uma ação de movimento**, permitindo atacar e conjurar na mesma rodada!

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + trilha_poder + ")"
FROM "Poderes/Classe/Clérigo"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
