---
tipo: "poder"
subtipo: "poder-racial"
categoria: "racial"
sistema: "tormenta20-jda"
fonte: "Heróis de Arton"
nome: "Glamour"
resumo: "Aprende três magias de 1º círculo (Carisma) que contam como ilusão; alvos podem resistir com Vontade."
ativacao: "acao-padrao"
natureza: "magica"
custo_pm: 1
subcategoria_tatica: "racial"
area_efeito: "pessoal"
escala_por_nivel: false
escala_por_poderes_tormenta: false
requer_raca:
  - "[[Duende]]"
  - "[[Eiradaan]]"
  - "[[Sílfide]]"
---
# ⚡ Glamour

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder Geral (Racial)
> - 🧬 <span class="t20-verde">Raças Exigidas:</span> [[Duende]], [[Eiradaan]], [[Sílfide]]
> - 📜 <span class="t20-amarelo">Fonte:</span> Heróis de Arton

O mais icônico dos poderes feéricos, glamour é uma ilusão tão poderosa que gera efeitos reais. Escolha três magias de 1º círculo, arcanas ou divinas. Você pode lançar essas magias (atributo-chave Carisma), com as seguintes mudanças: Elas contam como magias de ilusão além de seus tipos normais (por exemplo, um glamour de Explosão de Chamas conta como uma magia de evocação e de ilusão). Sempre que você lança uma magia de glamour que não pede testes de resistência, precisa rolar 1d6. Se rolar 1, a magia não funciona (mas você gasta os PM mesmo assim) e você não pode mais lançar magias de glamour até o fim da cena. Sempre que você lança uma magia de glamour que permite testes de resistência de Fortitude ou Reflexos, os alvos podem substituir os testes originais por Vontade. Além disso, se um alvo passar no teste de resistência, você não pode mais lançar magias de glamour até o fim da cena.

---

### 🔗 Poderes Dependentes
```dataview
LIST
FROM "Poderes"
WHERE tipo = "poder" AND contains(requer_poder, this.file.link)
SORT default(requer_nivel, 1) ASC, file.name ASC
```
