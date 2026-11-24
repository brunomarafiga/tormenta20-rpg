---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA / Heróis de Arton"
nome: "Herança Superior"
resumo: "Você manifesta a **Herança Superior** da sua linhagem mística: - *Dracônica:* Dobro de Carisma nos PV iniciais, imunidade ao elemento."
ativacao: "passiva"
natureza: "tormenta"
subcategoria_tatica: "defesa"
area_efeito: "area"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Arcanista]]"
trilha_poder: "Feiticeiro"
caminho_exclusivo: "Feiticeiro"
ordem: 3
requer_nivel: 12
requer_poder:
  - "[[Herança Aprimorada]]"
---
# ⚡ Herança Superior

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder de [[Arcanista]]
> - 🔮 <span class="t20-ciano">Caminho / Restrição:</span> Feiticeiro
> - 🌿 <span class="t20-azul">Trilha:</span> Feiticeiro
> - 🎖️ <span class="t20-amarelo">Nível Mínimo:</span> 12º Nível
> - 🔑 <span class="t20-verde">Pré-requisitos:</span> [[Herança Aprimorada]]
> - ✨ <span class="t20-rosa">Magias Vinculadas:</span> Nenhuma

Você manifesta a **Herança Superior** da sua linhagem mística: 
- *Dracônica:* Dobro de Carisma nos PV iniciais, imunidade ao elemento e PM temporários.
- *Feérica:* +2 Carisma permanente e alvo que passar na resistência fica alquebrado.
- *Rubra:* +4 PM para cada poder da Tormenta que possuir.
- *Abençoada:* +1 permanente em Sabedoria, aprende magias divinas flexíveis diárias e acessa 4º e 5º círculos divinos.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + trilha_poder + " — " + caminho_exclusivo + ")"
FROM "Poderes/Classe/Arcanista"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
