---
tipo: habilidade
subtipo: habilidade-de-classe
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Nome da Habilidade"
resumo: "Resumo sucinto do efeito mecânico da habilidade."

# === ORIGEM (ESCOLHER APLICÁVEL) ===
# classe: "[[Nome da Classe]]"
# raca:
#   - "[[Nome da Raça]]"
# origem: "[[Nome da Origem]]"
# criador: "[[Nome da Criatura/Ameaça]]"
# nivel: 1

# === ATIVAÇÃO ===
ativacao: "passiva"                 # passiva | livre | reação | movimento | padrão | completa
custo_pm: 0
frequencia: "irrestrita"            # irrestrita | turno | rodada | cena | encontro | descanso | diaria
# gatilho: "Descrição do gatilho externo ou temporal"
cd_formula: "10 + nivel/2 + atributo-chave"
# atributo_chave: "Força | Destreza | Constituição | Inteligência | Sabedoria | Carisma"

# === NATUREZA ===
natureza: "extraordinaria"          # extraordinaria | magica | simulada | tormenta

# === RELAÇÕES MECÂNICAS (OMITIR SE VAZIO) ===
# requer_habilidade:
#   - "[[Nome da Habilidade Pré-requisito]]"
# requer_pericia:
#   - "[[Nome da Perícia]]"
# requer_poder:
#   - "[[Nome do Poder]]"
# pericias_envolvidas:
#   - "[[Nome da Perícia]]"
# magias_relacionadas:
#   - "[[Nome da Magia]]"
# condicoes_inflige:
#   - "[[Nome da Condição]]"
# condicoes_previne:
#   - "[[Nome da Condição]]"
# condicoes_remove:
#   - "[[Nome da Condição]]"

# === ACÚMULO ===
# acumulo: "Atributos de fontes diferentes se acumulam; a mesma habilidade não acumula consigo mesma."
# acumulo_com_itens: true
# acumulo_com_magias: true
# acumulo_com_parceiros: true
---

# ⚡ Nome da Habilidade

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Tipo:</span> Habilidade de Classe / Racial / Origem / Criatura
> - 🧬 <span class="t20-verde">Origem:</span> [[Classe, Raça, Origem ou Criatura]]
> - 🎯 <span class="t20-amarelo">Ativação:</span> Passiva / Livre / Reação / Movimento / Padrão / Completa
> - 🔮 <span class="t20-rosa">Natureza:</span> Extraordinária / Mágica / Simulada / Tormenta
> - 💧 <span class="t20-ciano">Custo:</span> 0 PM
> - 🔁 <span class="t20-cinza">Frequência:</span> Irrestrita / Cena / Descanso / Outros

## Descrição Mecânica

Texto literal ou fielmente resumido da regra oficial.

## Gatilho e Janela Temporal

- **Gatilho:** `[situação exata que permite a ativação]`
- **Antes da rolagem:** `[se aplicável]`
- **Antes da resolução:** `[se aplicável]`
- **Depois da resolução:** `[se aplicável]`

## Limites e Recursos

- **Custo:** `[PM, carga, ação ou outro recurso]`
- **Limite:** `[nível, turno, rodada, cena, encontro ou descanso]`
- **Pré-requisitos:** `[[Poder ou Habilidade]]`, `[[Perícia]]`, raça ou classe aplicável.

## Acúmulo
- **Entre fontes distintas:** bônus de habilidades diferentes podem se acumular entre si.
- **Mesma fonte ou efeito:** não acumular bônus iguais provenientes da mesma habilidade, poder ou efeito repetido.
- **Categorias próprias:** itens, magias, parceiros e condições seguem as regras específicas da própria categoria.
- Habilidades e poderes de fontes diferentes seguem a regra geral de acúmulo.
- Não registrar acúmulo sem confirmação canônica explícita.

## Resistência e CD

Quando a habilidade exige teste de resistência:

$$
CD = 10 + \frac{\text{nível aplicável}}{2} + \text{atributo-chave aplicável}
$$

- O nível aplicável pode ser o nível da classe ou o nível do personagem, conforme a regra.
- O atributo-chave pertence à habilidade, classe ou efeito específico e deve ser registrado apenas quando definido.

---

### 🔗 Dependentes e Relações

```dataview
LIST
FROM "Habilidades" OR "Poderes"
WHERE tipo = "habilidade" OR tipo = "poder"
  AND (
    (requer_habilidade AND contains(requer_habilidade, this.file.link))
    OR (requer_poder AND contains(requer_poder, this.file.link))
  )
SORT file.name ASC
```
