---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Engenhoqueiro"
resumo: "Você pode fabricar engenhocas. Veja as regras para isso na página 70."
ativacao: "passiva"
natureza: "extraordinaria"
subcategoria_tatica: "utilidade"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Inventor]]"
requer_pericia:
  - "Ofício (Engenhoqueiro)"
requer_atributo:
  - "Inteligência 3"
---
# ⚡ Engenhoqueiro

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Poder de Classe ([[Inventor]])
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Inteligência 3, Treinado em Ofício (Engenhoqueiro)
> - 📜 <span class="t20-ciano">Fonte:</span> Tormenta20 JdA

Você pode fabricar engenhocas. Veja as regras para isso na página 70.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
