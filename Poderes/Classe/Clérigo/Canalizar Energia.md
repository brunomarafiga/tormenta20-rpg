---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA / Heróis de Arton"
nome: "Canalizar Energia"
resumo: "Você pode gastar uma ação padrão e 1 PM para liberar uma onda de energia divina em alcance curto."
ativacao: "padrao"
natureza: "magica"
custo_pm: 1
subcategoria_tatica: "metamagia"
area_efeito: "alcance-curto"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Clérigo]]"
trilha_poder: "Canalização"
ordem: 1
magias_relacionadas:
  - "[[Curar Ferimentos]]"
  - "[[Infligir Ferimentos]]"
---
# ⚡ Canalizar Energia

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder de [[Clérigo]]
> - 🌿 <span class="t20-azul">Trilha:</span> Canalização
> - 🎖️ <span class="t20-amarelo">Nível Mínimo:</span> 1º Nível
> - 🔑 <span class="t20-verde">Pré-requisitos:</span> Nenhum
> - 🔮 <span class="t20-ciano">Magias Vinculadas:</span> [[Curar Ferimentos]], [[Infligir Ferimentos]]

Você pode gastar uma ação padrão e 1 PM para liberar uma onda de energia divina em alcance curto. Se canalizar energia positiva, cura 1d6 PV em criaturas vivas e causa 1d6 de dano de luz em mortos-vivos (Vontade reduz à metade). Se canalizar energia negativa, causa 1d6 de dano de trevas em criaturas vivas e cura 1d6 PV em mortos-vivos. A cada três níveis, pode gastar +1 PM para aumentar o efeito em +1d6 (similar aos efeitos das magias [[Curar Ferimentos]] e [[Infligir Ferimentos]]).

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + trilha_poder + ")"
FROM "Poderes/Classe/Clérigo"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
