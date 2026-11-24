---
tipo: "poder"
subtipo: "poder-destino"
categoria: "destino"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA"
nome: "Comandar"
resumo: "Você pode gastar uma ação de movimento e 1 PM para gritar ordens para seus aliados em alcance médio."
ativacao: "ativo"
natureza: "extraordinaria"
custo_pm: 1
subcategoria_tatica: "social"
area_efeito: "alcance-medio"
escala_por_nivel: false
escala_por_poderes_tormenta: false
requer_atributo:
  - "Carisma 1"
---
# ⚡ Comandar

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Categoria:</span> Destino
> - 🔑 <span class="t20-amarelo">Pré-requisitos:</span> Carisma 1
> - ⚙️ <span class="t20-verde">Ativação:</span> Ativo
> - 💧 <span class="t20-ciano">Custo:</span> 0 PM

Você pode gastar uma ação de movimento e 1 PM para gritar ordens para seus aliados em alcance médio. Eles recebem +1 em testes de perícia até o fim da cena.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + categoria + " — " + join(funcao, ", ") + ")"
FROM "Poderes"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
