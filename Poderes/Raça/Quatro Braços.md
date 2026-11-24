---
tipo: "poder"
subtipo: "poder-racial"
categoria: "racial"
sistema: "tormenta20-jda"
fonte: "Heróis de Arton"
nome: "Quatro Braços"
resumo: "Possui par de braços extras, permitindo empunhar até quatro objetos (não concede ações extras)."
ativacao: "passivo-constante"
natureza: "extraordinaria"
subcategoria_tatica: "racial"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
requer_raca:
  - "[[Lefou]]"
  - "[[Trog]]"
---
# ⚡ Quatro Braços

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder Geral (Racial)
> - 🧬 <span class="t20-verde">Raças Exigidas:</span> [[Lefou]], [[Trog]] *(Também disponível para: Kaijin, Nagah, Orc)*
> - 📜 <span class="t20-amarelo">Fonte:</span> Heróis de Arton

Você possui um par de braços extras. Isso permite que você empunhe até quatro objetos, mas não fornece ações extras — por exemplo, você continua fazendo apenas um ataque com a ação agredir (mas veja Quadridestria).

*Nota: Em mesas que utilizem suplementos de expansão, este poder também está disponível para Kaijin, Nagah e Orc.*

---

### 🔗 Poderes Dependentes
```dataview
LIST
FROM "Poderes"
WHERE tipo = "poder" AND contains(requer_poder, this.file.link)
SORT default(requer_nivel, 1) ASC, file.name ASC
```
