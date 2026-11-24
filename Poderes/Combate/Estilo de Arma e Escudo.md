---
tipo: "poder"
subtipo: "poder-combate"
categoria: "combate"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Estilo de Arma e Escudo"
resumo: "Se você estiver usando um escudo, o bônus na Defesa que ele fornece aumenta em +2."
ativacao: "passivo-condicional"
natureza: "extraordinaria"
subcategoria_tatica: "defesa"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
requer_pericia:
  - "[[Luta]]"
---
# ⚡ Estilo de Arma e Escudo

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Combate
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> treinado em [[Luta]]
> - ⚙️ <span class="t20-verde">Ativação:</span> Passivo Condicional
> - 💧 <span class="t20-ciano">Custo:</span> 0 PM

Se você estiver usando um escudo, o bônus na Defesa que ele fornece aumenta em +2.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + " — " + join(funcao, ", ") + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
