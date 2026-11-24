# 📋 Relatório Pós-Fix de Auditoria do Cofre Tormenta 20

- **Data da Auditoria:** 2026-11-21
- **Total de Notas Inspecionadas:** 1609
- **Arquivos com Queries Dataview Corrigidas:** 0

## 1. Confirmação de YAML Válido (Templates e Arquivos Alterados)

| Arquivo | Status | Detalhes |
|---|---|---|
| `Templates/Template Classe.md` | ✅ Válido | YAML Válido (tipo: classe, fonte: Tormenta20 JdA) |
| `Templates/Template Deus.md` | ✅ Válido | YAML Válido (tipo: divindade, fonte: Deuses de Arton / Tormenta20 JdA) |
| `Templates/Template Magia.md` | ✅ Válido | YAML Válido (tipo: magia, fonte: Tormenta20 JdA) |
| `Mecânicas e Condições/Regras/Devoção Fundamentalista.md` | ✅ Válido | YAML Válido (tipo: mecanica, fonte: Deuses de Arton) |

## 2. Diagnóstico: Comparações contains(..., "[[")

✅ **Nenhuma nota** contém `contains(..., "[[")`. Todas as consultas usam links de objeto (`this.file.link` ou `link(...)`).

## 3. Diagnóstico: Cercas Dataview / Mermaid Inválidas

✅ **100% dos blocos** `dataview` e `mermaid` possuem cercas sintáticas válidas e fechamento correto.

## 4. Diagnóstico: Callouts [!t20-...] Seguidos por Listas sem Prefixo '> '

⚠️ Foram encontradas **26** ocorrências onde o callout é seguido imediatamente por lista sem prefixo `> `:

- `Mecânicas e Condições\Perícias\Acrobacia.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Amortecer Queda (CD 15, Apenas Treinado):** Quando cai, você pode gastar uma reação e fazer um teste de Acrobacia para reduzir o dano. Se passar, reduz o dano da queda em 1d6, mais 1d6 para cada 5 pontos pelos quais o resultado do teste exceder a CD. Se reduzir o dano a zero, você cai de pé.`
- `Mecânicas e Condições\Perícias\Adestramento.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Acalmar Animal (CD 25):** Você acalma um animal nervoso ou agressivo. Isso permite a você controlar um cavalo assustado ou convencer um lobo a não devorá-lo. Este uso gasta uma ação completa.`
- `Mecânicas e Condições\Perícias\Atletismo.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Corrida:** Gaste uma ação completa e faça um teste de Atletismo. Você avança um número de quadrados de 1,5m igual ao resultado do teste. Você recebe um modificador de +/–2 para cada 1,5m de deslocamento acima ou abaixo de 9m que possua. Você só pode correr em linha reta e não pode correr através de terreno difícil.`
- `Mecânicas e Condições\Perícias\Atuação.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Impressionar:** Faça um teste de Atuação oposto pelo teste de Vontade de quem você quer impressionar. Se passar, recebe +2 em testes de perícias baseadas em Carisma contra essa pessoa no mesmo dia. Se falhar, sofre –2 nesses testes e não pode tentar de novo no mesmo dia.`
- `Mecânicas e Condições\Perícias\Cavalgar.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Conduzir:** Cavalgar através de obstáculos exige testes de Cavalgar. A CD é 15 para terreno ruim e obstáculos pequenos e 25 para terreno perigoso ou obstáculos grandes. Se falhar, cai da montaria e sofre 1d6 pontos de dano.`
- `Mecânicas e Condições\Perícias\Conhecimento.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Idiomas (CD 20):** Você pode entender idiomas desconhecidos. Se falhar por 5 ou mais, tira uma conclusão falsa. Idiomas exóticos ou antigos têm CD 30.`
- `Mecânicas e Condições\Perícias\Cura.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Primeiros Socorros (CD 15):** Estabiliza um personagem sangrando ou moribundo.`
- `Mecânicas e Condições\Perícias\Diplomacia.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Mudar Atitude:** Altera a disposição de um PNJ em relação a você ou seus aliados.`
- `Mecânicas e Condições\Perícias\Enganação.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Mentir:** Teste oposto contra Intuição do interlocutor.`
- `Mecânicas e Condições\Perícias\Furtividade.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Esconder-se:** Exige cobertura ou camuflagem. Teste oposto contra Percepção dos observadores. Se bem-sucedido, seus alvos ficam [[Desprevenido]] contra seus ataques.`
- `Mecânicas e Condições\Perícias\Guerra.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Analisar Terreno:** Concede vantagens táticas para aliados.`
- `Mecânicas e Condições\Perícias\Intimidação.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Assustar:** Em combate, você pode gastar uma ação padrão para deixar um alvo em alcance curto [[Abalado]] (teste oposto de Intimidação contra Vontade).`
- `Mecânicas e Condições\Perícias\Intuição.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Perceber Mentira:** Teste oposto contra Enganação para identificar blefes e falsidades.`
- `Mecânicas e Condições\Perícias\Investigação.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Procurar Pistas:** Vasculha aposentos, corpos e cenas de crime em busca de pistas escondidas.`
- `Mecânicas e Condições\Perícias\Jogatina.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Apostar:** Permite auferir lucros em apostas ou disputar com outros jogadores.`
- `Mecânicas e Condições\Perícias\Ladinagem.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Abrir Fechaduras:** Usar gazuas para destravar trancas e portas.`
- `Mecânicas e Condições\Perícias\Luta.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Testes de Ataque:** Define o acerto de ataques corpo a corpo.`
- `Mecânicas e Condições\Perícias\Misticismo.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Identificar Magia:** Reconhece uma magia sendo conjurada ou ativa.`
- `Mecânicas e Condições\Perícias\Nobreza.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Etiqueta:** Saber portar-se perante nobres e monarcas.`
- `Mecânicas e Condições\Perícias\Ofício.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Fabricação:** Permite manufaturar armas, armaduras, itens alquímicos, engenhocas e vestuários.`
- `Mecânicas e Condições\Perícias\Percepção.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Observar e Ouvir:** Detectar inimigos escondidos (teste oposto contra [[Furtividade]]) e notar detalhes no ambiente.`
- `Mecânicas e Condições\Perícias\Pontaria.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Ataques de Disparo:** Precisão no manuseio de arcos, bestas e armas de fogo.`
- `Mecânicas e Condições\Perícias\Religião.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Teologia e Dogmas:** Identificar divindades, símbolos sagrados e ritos litúrgicos.`
- `Mecânicas e Condições\Perícias\Sobrevivência.md` (linha 22, após callout `> [!t20-lore]` da linha 20): `- **Rastrear:** Seguir pegadas e pistas de criaturas.`
- `Mecânicas e Condições\Regras\Camuflagem.md` (linha 19, após callout `> [!t20-lore]` da linha 17): `- **Camuflagem Total:** Quando um efeito impede completamente a visão dos inimigos (câmara em escuridão total, invisibilidade). A chance de falha é de 50% (resultado 1 a 5 em 1d10).`
- `Mecânicas e Condições\Regras\Cobertura.md` (linha 19, após callout `> [!t20-lore]` da linha 17): `- **Cobertura Total:** Você recebe cobertura total quando seus inimigos não podem alcançá-lo — por exemplo, se estiver atrás de uma parede. Cobertura total impede que você seja atacado.`

## 5. Resumo e Conclusão Operacional

- Snippet `tormenta20.css` e `.obsidian/appearance.json`: Conferidos e operacionais.
- Templates (`Template Classe.md`, `Template Deus.md`, `Template Magia.md`): Alinhados aos schemas vigentes e regras do ARQUITETURA.md.
- Regra Canônica `Devoção Fundamentalista.md`: Criada em `Mecânicas e Condições/Regras/` com metadados estritos.
- Conforme regra de parada do usuário, os itens de diagnóstico acima foram apenas reportados e preservados sem alteração manual ou mecânica desautorizada.
