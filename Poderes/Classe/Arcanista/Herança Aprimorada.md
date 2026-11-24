---
tipo: "poder"
subtipo: "poder-classe"
categoria: "classe"
sistema: "tormenta20-jda"
fonte: "Tormenta20 JdA / Heróis de Arton"
nome: "Herança Aprimorada"
resumo: "Você desperta o estágio intermediário de poder de sua Linhagem Sobrenatural (Dracônica, Feérica, Rubra ou Abençoada)."
ativacao: "passiva"
natureza: "tormenta"
subcategoria_tatica: "metamagia"
area_efeito: "area"
escala_por_nivel: false
escala_por_poderes_tormenta: false
classe: "[[Arcanista]]"
trilha_poder: "Feiticeiro"
caminho_exclusivo: "Feiticeiro"
ordem: 2
requer_nivel: 6
requer_poder:
  - "[[Caminho do Arcanista — Feiticeiro]]"
---
# ⚡ Herança Aprimorada

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder de [[Arcanista]]
> - 🔮 <span class="t20-ciano">Caminho / Restrição:</span> Feiticeiro
> - 🌿 <span class="t20-azul">Trilha:</span> Feiticeiro
> - 🎖️ <span class="t20-amarelo">Nível Mínimo:</span> 6º Nível
> - 🔑 <span class="t20-verde">Pré-requisitos:</span> [[Caminho do Arcanista — Feiticeiro]]
> - ✨ <span class="t20-rosa">Magias Vinculadas:</span> Nenhuma

Você recebe o efeito da **Herança Aprimorada** da linhagem que escolheu no 1º nível: 
- *Dracônica:* Magias do elemento custam –1 PM e causam +1 de dano por dado.
- *Feérica:* +2 na CD e –1 PM em magias de Encantamento e Ilusão.
- *Rubra:* Reduz custo em –1 PM de uma magia por poder da Tormenta.
- *Abençoada:* Magias divinas de círculo <= Sabedoria custam –1 PM e aprende 2º e 3º círculos divinos.

---

### 🔗 Poderes Dependentes
```dataview
LIST WITHOUT ID link(file.link) + " (" + trilha_poder + " — " + caminho_exclusivo + ")"
FROM "Poderes/Classe/Arcanista"
WHERE tipo = "poder" AND (contains(requer_poder, this.file.link) OR contains(string(requer_poder), this.file.name))
SORT file.name ASC
```
