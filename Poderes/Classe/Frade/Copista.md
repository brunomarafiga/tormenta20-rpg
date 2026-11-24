---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Deuses de Arton"
nome: "Copista"
resumo: "Você pode criar pergaminhos, como se tivesse o poder Escrever Pergaminho."
ativacao: "passiva"
natureza: "extraordinaria"
subcategoria_tatica: "metamagia"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Frade]]"
requer_pericia:
  - "Ofício"
---
# ⚡ Copista

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Frade]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Treinado em Ofício
> - 📜 <span class="t20-ciano">Fonte:</span> Deuses de Arton

Você pode criar pergaminhos, como se tivesse o poder Escrever Pergaminho. Se tiver ambos, pode fabricar o dobro de pergaminhos ao mesmo tempo (pagando o custo de matéria-prima de ambos).

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
