---
tipo: divindade
categoria: maior                    # maior | menor
sistema: tormenta20-jda
fonte: "Deuses de Arton / Tormenta20 JdA"
nome: "Nome do Deus"
titulo: "Título Divino"
dogma: "Lema ou frase síntese do culto"
energia: "Positiva"                 # Positiva | Negativa | Qualquer | Positiva ou Negativa
arma_preferida: "[[Espada Longa]]"
simbolo_sagrado: "Descrição resumida do símbolo"
racas_permitidas: "Aggelus, humanos, etc."
classes_permitidas: "Clérigo, paladino, guerreiro, etc."
avatar_nd: 20

# === CAMPOS OPCIONAIS ===
# outros_nomes:
#   - "Nome Alternativo"
# areas_influencia:
#   - "Guerra"
#   - "Coragem"
# aliados:
#   - "[[Khalmyr]]"
# rivais:
#   - "[[Arsenal]]"
---

# 🏛️ Nome do Deus
> *Título Divino*  
> *"Dogma ou lema principal da divindade."*

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Símbolo:</span> Descrição resumida do símbolo sagrado.
> - ⚡ <span class="t20-laranja">Energia:</span> Positiva
> - ⚔️ <span class="t20-vermelho">Arma Preferida:</span> [[Espada Longa]]
> - 🧬 <span class="t20-ciano">Raças:</span> Aggelus, humanos *(meios-elfos livres)*
> - 🛡️ <span class="t20-verde">Classes:</span> Clérigo, guerreiro, nobre, paladino

## Resumo Operacional
Resumo prático (1–2 parágrafos) com a essência do culto, atuação em Arton e perfil dos fiéis.

> [!t20-lore]- Lore e Origens
> Síntese operacional e referencial sobre a divindade em Arton, feitos primordiais, mitos e relações cósmicas (*Deuses de Arton*).

## Devoção Padrão

> [!t20-poder] Poderes Concedidos — Livro Básico (T20 JdA)
> ```dataview
> TABLE resumo AS "Efeito Resumido"
> FROM "Poderes/Concedidos"
> WHERE tipo = "poder" AND contains(deuses, this.file.link) AND contains(fonte, "Tormenta20 JdA")
> SORT file.name ASC
> ```

> [!t20-poder] Poderes Concedidos — Expansão (Deuses de Arton)
> ```dataview
> TABLE resumo AS "Efeito Resumido"
> FROM "Poderes/Concedidos"
> WHERE tipo = "poder" AND contains(deuses, this.file.link) AND contains(fonte, "Deuses de Arton")
> SORT file.name ASC
> ```

> [!t20-restricao] Obrigações & Restrições Canônicas
> - Texto literal e integral das restrições e código de conduta do devoto padrão extraído do *Tormenta20 JdA*.

## Devoção Fundamentalista (Deuses de Arton)

> [!t20-restricao] Preceitos Radicais e Dogmas
> Veja as regras gerais de penalidades, penitências e poderes em [[Devoção Fundamentalista]].
> 
> **Preceitos Específicos:**
> - **Sacerdotes:** *(dogmas radicais para clérigos, padres, frades)*
> - **Paladinos:** *(dogmas específicos para a classe)*
> - **Outras Classes:** *(dogmas adicionais)*

## Liturgia, Itens e Artefatos

> [!t20-item] Equipamentos Sagrados
> - [[Texto Sagrado]] — Descrição literal do efeito litúrgico do texto sagrado.
> - [[Patuá]] — Descrição literal do patuá consagrado.
> - [[Panfleto de Aforismos]] — Máximas e efeitos das páginas do panfleto.

### Artefatos Divinos Relacionados
- [[Holy Avenger]] — Descrição e poderes do artefato divino.

<!-- Omitir bloco Magias Exclusivas caso a divindade não possua magias exclusivas -->
## Magias de Devoção

> [!t20-magia] Magias Exclusivas
> ```dataview
> TABLE circulo AS "Círculo", escola AS "Escola", tradicao AS "Tradição"
> FROM "Magias"
> WHERE tipo = "magia" AND contains(exclusiva_devocao, this.file.link)
> SORT circulo ASC, file.name ASC
> ```

> [!t20-pm] Magias com Aprimoramento Exclusivo
> ```dataview
> TABLE circulo AS "Círculo", escola AS "Escola"
> FROM "Magias"
> WHERE tipo = "magia" AND contains(aprimoramento_exclusivo, this.file.link)
> SORT circulo ASC, file.name ASC
> ```

## Relações no Panteão
- **Aliados:** [[Khalmyr]]
- **Rivais:** [[Arsenal]]

## Avatar da Divindade

> [!t20-restricao]- Avatar da Divindade (ND 20)
> 💀 <span class="t20-vermelho">PV:</span> 2.500 • 🛡️ <span class="t20-laranja">Defesa:</span> 55 • 👁️ <span class="t20-ciano">Sentidos:</span> Percepção +35, Visão no Escuro  
> **Iniciativa:** +20 | **Deslocamento:** 18m (12q)  
> **Resistências:** Fort +30, Ref +25, Von +30, Redução de Dano 20, Resistência a Magia +5  
> **Ataques:** Corpo a corpo ou à distância com armas divinas.  
> **Habilidades e Ações:**  
> - **Habilidade Divina:** Descrição literal dos poderes do avatar.  
> **Equipamento:** Artefatos e itens empunhados.
