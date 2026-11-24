---
tipo: "poder"
subtipo: "poder-racial"
categoria: "racial"
sistema: "tormenta20-jda"
fonte: "Heróis de Arton"
nome: "Duas Cabeças"
resumo: "Gasta 1 PM para rolar 2 dados em Vontade e ganha uma mordida extra idêntica caso possua mordida racial."
ativacao: "passivo-gatilho"
natureza: "extraordinaria"
custo_pm: 1
subcategoria_tatica: "racial"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
requer_raca:
  - "[[Lefou]]"
  - "[[Trog]]"
---
# ⚡ Duas Cabeças

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder Geral (Racial)
> - 🧬 <span class="t20-verde">Raças Exigidas:</span> [[Lefou]], [[Trog]] *(Também disponível para: Gnoll, Kaijin, Orc)*
> - 📜 <span class="t20-amarelo">Fonte:</span> Heróis de Arton

Você nasceu com duas cabeças, ou então uma segunda cabeça brotou de seu corpo em determinado momento. Elas podem ser iguais ou não (por exemplo, uma pode ser menor ou atrofiada) e podem ter personalidades compatíveis ou não — fique à vontade para interpretar diálogos entre elas. Sempre que fizer um teste de Vontade, você pode gastar 1 PM para rolar dois dados e usar o melhor resultado. Além disso, se você tem uma arma natural de mordida, recebe uma arma natural extra do mesmo tipo e com as mesmas estatísticas (se você pode fazer um ataque extra com sua mordida original gastando 1 PM, agora poderá fazer um ataque com cada mordida gastando 2 PM). Se um efeito modificar uma de suas mordidas, escolha qual é afetada.

*Nota: Em mesas que utilizem suplementos de expansão, este poder também está disponível para Gnoll, Kaijin e Orc.*

---

### 🔗 Poderes Dependentes
```dataview
LIST
FROM "Poderes"
WHERE tipo = "poder" AND contains(requer_poder, this.file.link)
SORT default(requer_nivel, 1) ASC, file.name ASC
```
