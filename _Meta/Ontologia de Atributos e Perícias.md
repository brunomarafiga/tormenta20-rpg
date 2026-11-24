---
tipo: documentacao
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"
nome: "Ontologia de Atributos e Perícias"
---

# Ontologia de Atributos e Perícias

## 1. Relação Fundamental

Os atributos são valores bio-mentais diretos de modificador. As perícias derivam desses atributos:

$$
\text{Perícia} = \frac{\text{Nível}}{2} + \text{Atributo-chave} + \text{Treino} + \text{Outros bônus}
$$

- **Bônus de treino:** +2 do 1º ao 6º nível, +4 do 7º ao 14º e +6 do 15º ao 20º.
- Alterações permanentes ou temporárias de atributo propagam efeitos para perícias, defesa, resistências e recursos derivados.
- Atributo-chave e modificador são o mesmo valor inteiro em Tormenta20 JdA.

## 2. Vetores de Incidência

### Alteração de atributo

- Avanços permanentes e mutações podem alterar atributos.
- Magias e posturas temporárias podem conceder atributos pela duração definida.
- Perdas de atributos devem atualizar todas as perícias dependentes.

### Modificadores diretos

- Bônus e penalidades de competência podem alterar o teste sem mudar o atributo.
- Penalidades de armadura afetam apenas perícias definidas pela regra da armadura.
- Circunstâncias podem impor bônus ou penalidades temporárias.

### Condições

- [[Fraco]]: –2 em testes baseados em Força, Destreza e Constituição.
- [[Debilitado]]: –5 em testes baseados em Força, Destreza e Constituição.
- [[Frustrado]]: –2 em testes baseados em Inteligência, Sabedoria e Carisma.
- [[Esmorecido]]: –5 em testes baseados em Inteligência, Sabedoria e Carisma.
- [[Abalado]]: –2 em testes de perícia; [[Apavorado]] impõe –5 e fuga.
- [[Desprevenido]]: –5 na Defesa e em [[Reflexos]].
- [[Ofuscado]]: –2 em ataques e em [[Percepção]].

Consultar a nota individual de cada condição para validar efeitos específicos.

### Substituição de atributo-chave

Uma habilidade ou poder pode trocar ou complementar o atributo-chave de uma perícia.

- Não se pode somar o mesmo atributo duas vezes pela mesma fonte.
- Pode haver uma adição secundária estritamente permitida pela regra da habilidade.
- O atributo substituto deve ser registrado no efeito, não inferido pela ontologia.

### Alteração da rolagem

- Rolar dois dados e usar o melhor ou o pior resultado.
- Resultados naturais críticos e falhas seguem a regra da ação aplicada.
- Ajustes de sucesso automático dependem de texto canônico específico.

## 3. Acúmulo de Bônus

- Bônus de fontes distintas podem se acumular.
- Dois bônus da mesma categoria não se acumulam automaticamente; prevalece o maior ou aplica-se a regra específica.
- Uma fonte não acumula consigo mesma por repetição.
- Condições repetidas aplicam o efeito mais severo quando a própria regra assim determina.
- Itens, magias, parceiros e ambiente seguem regras próprias e acumulam com habilidades distintas.

## 4. Campos do Cofre

As perícias devem registrar:

- `atributo_chave`
- `somente_treinada`
- `penalidade_armadura`
- `atributos_substitutos` quando permitido
- `perícias_relacionadas` quando aplicável
- `efeitos_relacionados`: lista opcional de wikilinks diretos

Os efeitos que alteram atributos ou perícias devem indicar:

- vetor: permanente, temporário, numérico, substituição ou rolagem
- origem da fonte
- atributo ou perícia afetada
- bônus ou penalidade
- duração e frequência
- regra de acúmulo

Marcar `[VERIFICAR]` quando o dado não puder ser confirmado no Livro Básico ou nos suplementos oficiais.

## 5. Links Reversos no Cofre

Cada perícia reúne automaticamente fontes que a afetam com Dataview:

- poderes com `requer_pericia`;
- itens com `pericias_envolvidas`;
- habilidades e magias com `pericias_relacionadas`;
- condições que afetam atributos associados.
