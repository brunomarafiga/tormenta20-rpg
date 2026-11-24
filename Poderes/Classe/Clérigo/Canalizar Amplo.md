---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA / Heróis de Arton"
nome: "Canalizar Amplo"
resumo: "Gasta +2 PM para aumentar o alcance da sua Canalização de Energia para médio."
ativacao: "passiva"
natureza: "extraordinaria"
subcategoria_tatica: "metamagia"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Clérigo]]"
trilha_poder: "Canalização"
ordem: 2
requer_poder:
  - "[[Canalizar Energia]]"
---
# ⚡ Canalizar Amplo

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder de [[Clérigo]]
> - 🌿 <span class="t20-azul">Trilha:</span> Canalização
> - 🎖️ <span class="t20-amarelo">Nível Mínimo:</span> 1º Nível
> - 🔑 <span class="t20-verde">Pré-requisitos:</span> [[Canalizar Energia]]
> - 🔮 <span class="t20-ciano">Magias Vinculadas:</span> Nenhuma

Quando você usa a habilidade [[Canalizar Energia]], pode gastar **+2 PM** para aumentar o alcance dela de curto (9m) para **médio (30m)**.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + trilha_poder + ")"
FROM "Poderes/Classe/Clérigo"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
