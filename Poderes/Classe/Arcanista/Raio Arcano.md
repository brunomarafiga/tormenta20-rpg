---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA / Heróis de Arton"
nome: "Raio Arcano"
resumo: "Ação padrão e 1 PM: dispara raio de essência pura em alcance curto causando 1d8 pontos de dano."
ativacao: "padrao"
natureza: "extraordinaria"
custo_pm: 1
subcategoria_tatica: "metamagia"
area_efeito: "alcance-curto"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Arcanista]]"
trilha_poder: "Raio Arcano"
caminho_exclusivo: "Qualquer"
ordem: 1
---
# ⚡ Raio Arcano

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder de [[Arcanista]]
> - 🔮 <span class="t20-ciano">Caminho / Restrição:</span> Qualquer
> - 🌿 <span class="t20-azul">Trilha:</span> Raio Arcano
> - 🎖️ <span class="t20-amarelo">Nível Mínimo:</span> 1º Nível
> - 🔑 <span class="t20-verde">Pré-requisitos:</span> Nenhum
> - ✨ <span class="t20-rosa">Magias Vinculadas:</span> Nenhuma

Você pode gastar uma ação padrão e 1 PM para disparar um feixe de pura energia arcana em um alvo em alcance curto. O raio causa **1d8 pontos de dano de essência** (Reflexos reduz à metade). A cada quatro níveis, pode gastar +1 PM para aumentar o dano em +1d8.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + trilha_poder + " — " + caminho_exclusivo + ")"
FROM "Poderes/Classe/Arcanista"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
