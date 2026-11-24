---
tipo: modificacao
sistema: tormenta20-jda
fonte: "Tormenta20 JdA"             # "Tormenta20 JdA" | "Atlas de Arton" | "Heróis de Arton" | "Ameaças de Arton" | "Deuses de Arton" | "Dragão Brasil 199"
nome: "Nome da Melhoria"
categoria_aplicavel: "universais"
slot_consumido: 1
---

# Nome da Melhoria

> [!t20-restricao]
> - **Categoria aplicável:** Universal / Arma / Armadura / Escudo / Vestuário / Ferramenta / Esotérico
> - **Pré-requisitos:** Nenhum ou melhoria específica
> - **Incompatibilidades:** Nenhuma ou nome das melhorias incompatíveis
> - **Fonte:** Tormenta20 JdA, Heróis de Arton, Ameaças de Arton ou Deuses de Arton

## Efeito

`[Descrição mecânica literal da melhoria.]`

## Requisitos de Aplicação

- `[tipo ou categoria de item]`
- `[preço ou matéria-prima adicional]`
- `[preço ou matéria-prima adicional]`

## Validação

- Máximo de 4 melhorias por item superior.
- Não repetir a mesma melhoria no mesmo item.
- Pré-requisitos ocupam slots próprios.
- Materiais especiais contam como uma melhoria.

---

No sistema de **Tormenta20** (_Edição Jogo do Ano_, complementado por _Heróis de Arton_, _Ameaças de Arton_ e _Deuses de Arton_), as **Melhorias** são modificações artesanais, mundanas ou de engenharia aplicadas a itens para torná-los **Itens Superiores**.

A ontologia das melhorias é regida por regras rígidas de **compatibilidade de categoria**, **árvores de pré-requisitos**, **limitações de acúmulo** e **materiais especiais**.

---

# 1. Regras Ontológicas Fundamentais das Melhorias

1. **Limite Numérico:** Um item superior pode ter no máximo **de uma a quatro melhorias**.
2. **Exclusividade Categórica:** Apenas itens de **Armas**, **Armaduras e Escudos**, **Ferramentas**, **Vestuário** e **Esotéricos** podem receber melhorias.
3. **Não Repetição:** Cada melhoria só pode ser aplicada **uma vez a um mesmo item**.
4. **Árvore e Slots Cumulativos:** Melhorias que exigem outra melhoria como pré-requisito (ex: _Pungente_ exige _Certeira_, _Sob Medida_ exige _Ajustada_, _Atroz_ exige _Cruel_, _Penetrante_ exige _Cruel_) **não substituem** a anterior; ambas coexistem e **cada uma consome 1 slot do limite de 4 melhorias** do item.
5. **Incompatibilidades Rígidas:**
    - Uma arma **não pode ser Maciça e Precisa ao mesmo tempo**.
    - Uma armadura/escudo **não pode ser Reforçada e Delicada ao mesmo tempo**.
    - Um item **não pode ser Brasonado e Discreto ao mesmo tempo**.
6. **Munições vs. Armas de Disparo:** Melhorias aplicadas em pacotes de munição custam metade do valor, mas **efeitos idênticos de munições não acumulam com os da arma de disparo** (ex: _Maciça_ no arco disparando flecha _Maciça_ não soma).
7. **Materiais Especiais:** Qualquer material especial (_Adamante, Mitral, Aço-Rubi, Madeira Tollon, Gelo Eterno, Matéria Vermelha, Casco de Monstro_) conta formalmente como **uma das melhorias** do item.

---

# 2. Mapa Ontológico por Categorias de Aplicação

```
                                [ SISTEMA DE MELHORIAS (T20) ]
                                               │
       ┌───────────────────┬───────────────────┼───────────────────┬───────────────────┐
       ▼                   ▼                   ▼                   ▼                   ▼
  [ UNIVERSAIS ]        [ ARMAS ]        [ ARMADURAS ]       [ VESTUÁRIO &       [ ESOTÉRICOS ]
  (Qualquer item)    (Corpo a corpo,     & [ ESCUDOS ]       FERRAMENTAS ]       (Conjuradores)
                     Disparo, Munição)
```

---

## I. Melhorias Universais (Qualquer Categoria)

Podem ser aplicadas em armas, armaduras, escudos, vestuários, ferramentas ou esotéricos:

- **Banhado a Ouro:** Fornece **+2 em testes de Diplomacia**.
- **Cravejado de Gemas:** Fornece **+2 em testes de Enganação**.
- **Discreto:** Ocupa **–1 espaço** (mínimo 1) e fornece **+5 em testes de Ladinagem para ser ocultado**.
- **Macabro:** Fornece **+2 em Intimidação**, mas impõe **–2 em Diplomacia**.
- **Brasonado (_Heróis de Arton_):** Estampado por guilda famosa; no primeiro teste de Diplomacia da cena para mudar atitude, pode substituir o teste por outra perícia que o item aprimore (incompatível com _Discreto_).
- **Canônico (_Deuses de Arton_):** Inscrições sagradas de uma divindade; se for devoto dela, a **CD de suas habilidades mágicas aumenta em +1**.
- **Devotado (_Deuses de Arton_):** Reduz o custo de um poder concedido em **–1 PM** _(Pré-requisito: Canônico/Inscrito)_.
- **Usado (_Heróis de Arton_):** Adquirido de segunda mão; permite **rolar novamente um resultado 1 natural** em teste de perícia com o item 1x ao dia.

---

## II. Melhorias de Armas e Munições

### A. Ataque e Precisão

- **Certeira:** Fornece **+1 nos testes de ataque**.
- **Pungente:** Fornece **+2 nos testes de ataque** _(Pré-requisito: Certeira)_.
- **Precisa:** Aumenta a **margem de ameaça em +1** (incompatível com _Maciça_).
- **Equilibrada:** Fornece **+2 em testes de manobras** de combate.
- **Guarda (_Heróis de Arton_):** Fornece **+1 na Defesa e em testes contra manobras** ao empunhar a arma.

### B. Dano, Crítico e Letalidade

- **Cruel:** Fornece **+1 nas rolagens de dano**.
- **Atroz:** Fornece **+2 nas rolagens de dano** _(Pré-requisito: Cruel)_.
- **Maciça:** Aumenta o **multiplicador de crítico em +1** (incompatível com _Precisa_).
- **Penetrante (_Ameaças de Arton_):** A arma ignora **5 pontos da Redução de Dano (RD)** do alvo _(Pré-requisito: Cruel)_.
- **Farpada (_Heróis de Arton_):** Acertos críticos deixam a vítima **sangrando** e impõem **–5 em testes de Constituição para estancar a condição** até o fim da cena.
- **Pressurizada (_Heróis de Arton_):** Ao acionar o mecanismo interno, fornece **+2 em ataque e dano** naquele golpe.

### C. Alcance, Mecanismo e Disparo

- **Mira Telescópica:** Aumenta o alcance da arma em uma categoria e o alcance do Ataque Furtivo para médio _(apenas armas de disparo, exceto fundas)_.
- **Injeção Alquímica:** Mecanismo oco que permite descarregar preparado alquímico no acerto.
- **Harmonizada:** Sintonizada com o usuário; **reduz em –1 PM o custo de uma habilidade** ativada ao fazer um ataque ou usar a ação agredir _(Pré-requisito: outra melhoria qualquer)_.
- **Conduíte (_Deuses de Arton_):** Reduz o custo do poder _Abençoar Arma_ nela em **–1 PM**.

### D. Exclusivas de Munições (_Heróis de Arton_)

- **Incendiária:** Causa **+1 ponto de dano de fogo** e, se acertar por 5 ou mais, **deixa o alvo em chamas**.
- **Fósforo:** A munição explode em clarão radiante e **deixa o alvo ofuscado**.

---

## III. Melhorias de Armaduras e Escudos

### A. Defesa e Absorção

- **Reforçada:** Aumenta o **bônus na Defesa em +1**, mas aumenta a penalidade de armadura em 1 (incompatível com _Delicada_).
- **Polida:** O metal brilha intensamente; concede **+5 na Defesa durante a primeira rodada** do combate.
- **Prudente (_Heróis de Arton_):** Estrutura que **atenua e anula as consequências desastrosas de uma falha crítica**.
- **Selada:** Fornece **+1 em testes de resistência** _(apenas armaduras pesadas)_.

### B. Mobilidade e Flexibilidade

- **Ajustada:** Peças milimétricas; **reduz a penalidade de armadura em 1**.
- **Sob Medida:** Forjada para o biotipo exato do usuário; **reduz a penalidade de armadura em 2** _(Pré-requisito: Ajustada)_.
- **Delicada:** Estrutura flexível que **permite aplicar 1 ponto de Destreza na Defesa** mesmo em armaduras que normalmente não permitem (incompatível com _Reforçada_).

### C. Recursos Especiais de Escudos e Armaduras

- **Espinhosa (Armadura):** Causa dano de perfuração ao usuário realizar a manobra agarrar.
- **Espinhoso (Escudo):** **Aumenta o dano do ataque com escudo em um passo**.
- **Balístico (_Heróis de Arton_):** _(Apenas escudos)_. Usa a detonação de balas de arma de fogo no escudo para aumentar o dano do golpe com escudo em **+2d6** _(Pré-requisito: Reforçado)_.
- **Injetora (_Heróis de Arton_):** Compartimento automático que aplica uma poção ou preparado corporal no usuário sob gatilho de reação.

---

## IV. Melhorias de Vestuário e Ferramentas

- **Aprimorado:** Exclusivo para vestuário ou ferramentas que já modificam uma perícia; **aumenta o bônus fornecido (ou reduz a penalidade) em +1**.
- **Multifuncional (_Ameaças de Arton_):** Exclusivo para itens que modificam uma perícia; permite escolher **uma segunda perícia com o mesmo atributo-chave** para receber o benefício.
- **Insinuante (_Heróis de Arton_):** Vestuário sedutor e refinado; concede **+2 em Enganação e +2 na CD de seus efeitos mentais**.
- **Autoritário (_Heróis de Arton_):** Vestuário ou elmo imponente; concede **+2 em Intimidação e +2 na CD de efeitos de medo**.
- **Imaculado (_Heróis de Arton_):** Tecido auto-limpante; concede **+2 em Diplomacia e +2 na CD de Aparência Inofensiva**.
- **Deslumbrante (_Heróis de Arton_):** Exige _Gemas_ ou _Ouro_; aumenta a **CD de todas as suas habilidades baseadas em Carisma em +1**.
- **Aconchegante (_Heróis de Arton_):** Melhora a qualidade de descanso da noite de sono em uma categoria.
- **Ligeiro (_Heróis de Arton_):** Permite vestir ou descalçar o item como uma **ação livre**.
- **Compacto (_Heróis de Arton_):** O vestuário não ocupa nenhum espaço de carga.

---

## V. Melhorias de Itens Esotéricos (Conjuradores)

- **Canalizador:** Aumenta o seu **limite de gastos de PM em +1** ao lançar magias através dele.
- **Potencializador (_Heróis de Arton_):** Aumenta o seu **limite de gastos de PM em +2**.
- **Poderoso:** Aumenta a **CD para resistir a todas as suas magias em +1**.
- **Harmonizado:** Escolha uma magia; o **custo daquela magia diminui em –1 PM** ao ser canalizada pelo item.
- **Energético:** Catalisadores alquímicos; magias que causam dano causam **+1d6 pontos de dano** do mesmo tipo.
- **Vigilante:** Enquanto empunha o esotérico em mãos, você recebe **+2 na Defesa**.

---

## VI. Materiais Especiais (Conta como 1 Melhoria)

O material especial altera a substância base do item e consome 1 slot de melhoria:

- **Adamante:** Armas aumentam o dano em **um passo**; armaduras/escudos leves concedem **RD 2** (pesadas **RD 5**); esotéricos permitem pagar +1 PM para rerrolar qualquer dado 1 de dano.
- **Mitral:** Armaduras/escudos **diminuem penalidade em 2** e pesadas passam a permitir **+2 de Destreza na Defesa**; esotéricos permitem pagar +2 PM para aumentar CD em +2.
- **Aço-Rubi:** Armas e magias via esotéricos **ignoram 10 de RD e imunidade lefeu**; armaduras e escudos fornecem chance de **Fortificação** (25% leves/escudos, 50% pesadas).
- **Gelo Eterno:** Armas causam **+2 de dano de frio**; armaduras e escudos fornecem **Resistência a Fogo 5** (leves) ou **10** (pesadas).
- **Madeira Tollon:** Reduz em **–1 PM** o custo de magias de uma escola ou poderes marciais (armas/esotéricos leves de madeira).
- **Matéria Vermelha:** Matéria da Tormenta que distorce as propriedades do equipamento e concede bônus profanos.
- **Casco de Monstro (_Ameaças de Arton_):** Substituto biológico mais leve para o metal, embora vulnerável a dano de impacto.

---

# 3. Tabela de Custos e Dificuldade (T20 JdA, p. 165)

|Quantidade de Melhorias|Aumento no Preço de Mercado|Custo de Matéria-Prima (1/3)|Aumento na CD de Ofício|
|:-:|:-:|:-:|:-:|
|**1 Melhoria**|+ T$ 300|T$ 100|+5|
|**2 Melhorias**|+ T$ 3.000|T$ 1.000|+10|
|**3 Melhorias**|+ T$ 9.000|T$ 3.000|+15|
|**4 Melhorias**|+ T$ 18.000|T$ 6.000|+20|

_(Nota: Materiais Especiais somam um preço adicional fixo de tabela além do custo de melhoria acima)._

---

Essa estrutura mapeia todas as opções para Khinlannas escolher exatamente quais melhorias combinam com seu arco (_Cruel + Farpada_), com suas flechas (_Incendiárias/Maciças_) ou com seu vestuário (_Cravejado de Gemas / Insinuante_) sem desperdiçar recursos na mesa!

🏹 Deseja que eu simule uma lista de compras ideal para o seu patamar atual de 4º nível, priorizando as melhorias de melhor custo-benefício em tibares?