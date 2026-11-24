---
tipo: magia
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"             # "Tormenta20 JdA" | "Deuses de Arton" | "Heróis de Arton" | "Dragão Brasil 199"
nome: "Detectar Ameaças"
circulo: 1                          # 1 | 2 | 3 | 4 | 5
custo_pm: 1                         # 1 | 3 | 6 | 10 | 15
tradicao: divina                    # arcana | divina | universal
escola: "Adivinhação"               # Abjuração | Adivinhação | Convocação | Encantamento | Evocação | Ilusão | Necromancia | Transmutação
execucao: "padrão"
alcance: "pessoal"
area: "esfera com 18m de raio"      # usar apenas o que se aplicar: alvo | area | efeito
duracao: "cena (até ser descarregada)"
funcao:
  - utilidade                       # dano | controle | suporte | defesa | cura | utilidade | invocacao

# === OPCIONAIS (OMITIR QUANDO NÃO SE APLICAR) ===
# resistencia: "Vontade anula"
# descritores:
#   - mental
# tipos_dano:
#   - fogo
# condicoes_inflige:
#   - "[[Abalado]]"
# condicoes_previne:
#   - "[[Surpreendido]]"
# condicoes_remove:
#   - "[[Envenenado]]"
# exclusiva_devocao:
#   - "[[Azgher]]"
# aprimoramento_exclusivo:
#   - "[[Arsenal]]"
---

# 🔮 Detectar Ameaças
*Adivinhação • 1º Círculo • Divina*

> [!t20-stats]
> - ⚡ <span class="t20-amarelo">Execução:</span> Padrão
> - 🎯 <span class="t20-ciano">Alcance:</span> Pessoal
> - 🌐 <span class="t20-verde">Área:</span> Esfera com 18m de raio
> - ⏳ <span class="t20-laranja">Duração:</span> Cena (até ser descarregada)
> - 🛡️ <span class="t20-roxo">Resistência:</span> Nenhuma

Texto mecânico fiel extraído das regras oficiais, com wikilinks para condições (`[[Surpreendido]]`), perícias (`[[Percepção]]`) e mecânicas citadas.

> [!t20-pm] Aprimoramentos Canônicos
> - **<span class="t20-ciano">+1 PM:</span>** Descrição fiel do aprimoramento.
> - **<span class="t20-ciano">+2 PM:</span>** Descrição fiel do aprimoramento. *(Requer 2º círculo)*

<!-- OPCIONAL: manter apenas se houver aprimoramento de Deuses de Arton / DB199 -->
> [!t20-poder] Aprimoramentos Exclusivos de Devoção
> - **[[Arsenal]] (<span class="t20-roxo">+X PM</span>):** Efeito fiel exclusivo extraído de *Deuses de Arton* / *Dragão Brasil 199*.

---

### 🔗 Poderes e Itens Vinculados
```dataview
LIST WITHOUT ID link(file.link) + " (" + tipo + ")"
FROM ("Poderes" OR "Itens") AND -"Templates"
WHERE contains(magias_relacionadas, this.file.link)
SORT tipo ASC, file.name ASC
```
