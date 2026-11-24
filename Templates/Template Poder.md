---
tipo: poder
subtipo: poder-classe               # poder-classe | poder-concedido | poder-combate | poder-destino | poder-magia | poder-tormenta | poder-origem
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"             # "Tormenta20 JdA" | "Atlas de Arton" | "Heróis de Arton" | "Ameaças de Arton" | "Deuses de Arton" | "Dragão Brasil 199"
nome: "Nome do Poder"
resumo: "Resumo sucinto do efeito mecânico do poder."
ativacao: "passiva"                 # passiva | livre | reação | movimento | padrão | completa
natureza: "extraordinaria"          # extraordinaria | magica | simulada | tormenta
custo_pm: 0
frequencia: "irrestrita"            # irrestrita | turno | rodada | cena | encontro | descanso | diaria
cd_formula: "10 + nivel/2 + atributo-chave"
# atributo_chave: "Força | Destreza | Constituição | Inteligência | Sabedoria | Carisma"
subcategoria_tatica: "combate-corpo-a-corpo" # combate-a-distancia | combate-corpo-a-corpo | defesa | manobra | utilidade | social | sobrevivencia | oficio | metamagia | fabrica-sobrenatural | tormenta | concedido | racial | grupo | distincao
area_efeito: "pessoal"             # pessoal | alvo | alcance-curto | alcance-medio | alcance-longo | area | efeito
escala_por_nivel: false
escala_por_poderes_tormenta: false

# === CLASSIFICAÇÃO DE CLASSE / TRILHA (SE FOR PODER DE CLASSE) ===
# classe: "[[Nome da Classe]]"
# trilha_poder: "Trilha Principal"
# caminho_exclusivo: "Qualquer"
# ordem: 10                         # dezenas: 10 (Raiz A), 11 (Dep A), 20 (Raiz B), 90 (Geral)
# classes:                          # apenas se for poder compartilhado em Poderes/Classe/Comuns/
#   - "[[Classe A]]"
#   - "[[Classe B]]"

# === CLASSIFICAÇÃO DE DEVOÇÃO (SE FOR PODER CONCEDIDO) ===
# deuses:
#   - "[[Nome do Deus]]"

# === GRAFO DE REGRAS E DEPENDÊNCIAS (OMITIR SE VAZIO) ===
# requer_nivel: 6
# requer_raca:
#   - "[[Nome da Raça]]"
# requer_poder:
#   - "[[Poder Pré-requisito]]"
# requer_pericia:
#   - "[[Luta]]"
# magias_relacionadas:
#   - "[[Nome da Magia]]"
# condicoes_previne:
#   - "[[Abalado]]"
# condicoes_inflige:
#   - "[[Cego]]"
---

# ⚡ Nome do Poder

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Poder de Classe ([[Nome da Classe]])
> - 🌿 <span class="t20-azul">Trilha:</span> Trilha Principal
> - 🎯 <span class="t20-laranja">Função Tática:</span> Corpo a Corpo / Disparo / Defesa / Manobra / Utilidade / Social / Metamagia
> - 🎖️ <span class="t20-amarelo">Nível Mínimo:</span> 6º Nível
> - 🔑 <span class="t20-verde">Pré-requisitos:</span> [[Poder Pré-requisito]], Treinado em [[Luta]]
> - ✨ <span class="t20-rosa">Magias Vinculadas:</span> [[Nome da Magia]]

Texto literal explicativo do poder conforme impresso nas regras oficiais de Tormenta 20.

---

### 🔗 Poderes Dependentes
```dataview
LIST
FROM "Poderes"
WHERE tipo = "poder" AND contains(requer_poder, this.file.link)
SORT default(requer_nivel, 1) ASC, file.name ASC
```
