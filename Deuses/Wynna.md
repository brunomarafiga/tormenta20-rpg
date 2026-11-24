---
tipo: divindade
categoria: maior
sistema: tormenta20-jda
fonte: "Deuses de Arton / Tormenta20 JdA"
nome: "Wynna"
titulo: "Deusa da Magia, dos Arcanistas e dos Gênios"
outros_nomes: 
  - "Dallia (entre os elfos)"
  - "A Deusa dos Desejos"
  - "Mãe da Magia"
areas_influencia: 
  - "Magia"
  - "Arcanistas"
  - "Gênios"
dogma: "A magia é mais preciosa que a vida. Como tal, não deve ser negada a ninguém."
energia: "Qualquer"
arma_preferida: "[[Adaga]]"
simbolo_sagrado: "Um anel metálico, com ou sem runas"
devotos_permitidos: "Elfos, golens, qareen, sílfides. Classes: Arcanista, bardo."
aliados: 
  - "[[Valkaria]]"
  - "[[Tanna-Toh]]"
  - "[[Thyatis]]"
  - "[[Nimb]]"
rivais: 
  - "[[Kallyadranoch]]"
  - "[[Arsenal]]"
  - "[[Megalokk]]"
  - "[[Thwor]]"
avatar_nd: "S"
---

# 🏛️ Wynna
> *Deusa da Magia, dos Arcanistas e dos Gênios*  
> *"A magia é mais preciosa que a vida. Como tal, não deve ser negada a ninguém."*

> [!t20-stats]
> - 🏷️ <span class="t20-roxo">Símbolo:</span> Um anel metálico, com ou sem runas
> - ⚡ <span class="t20-laranja">Energia:</span> Qualquer
> - ⚔️ <span class="t20-vermelho">Arma Preferida:</span> [[Adaga]]
> - 🧬 <span class="t20-ciano">Raças:</span> Elfos, golens, qareen, sílfides
> - 🛡️ <span class="t20-verde">Classes:</span> Arcanista, bardo

## Resumo Operacional
Absoluta Deusa da Magia, Wynna personifica a força cósmica e misteriosa que torna toda a vida em Arton possível. Generosa, exuberante e infinitamente caridosa, Wynna concede a dádiva da magia arcana a todos os seres dispostos a aprendê-la, sem discriminação de índole ou propósito, mas reserva seu profundo rancor àqueles que rejeitam o poder arcano em favor de engenhocas mecânicas mundanas.

> [!t20-lore]- Lore Completo e Origens (Deuses de Arton)
> É consenso geral que os deuses forjaram e povoaram Arton. Tudo que compõe o mundo, tudo que torna a vida possível, é presente do Panteão. Também é consenso que, sem magia, Arton não poderia seguir existindo. A sobrevivência em um mundo desprovido de mágica simplesmente não seria possível — não apenas pela proteção, conforto e possibilidades que oferece, mas também porque essa força misteriosa promove o funcionamento de tudo. Os deuses exerceriam seu poder sem meios mágicos? Como explicar o movimento dos astros no céu, as estações do ano, os milagres da natureza, senão por magia?
> 
> Para outros, contudo, não existe dúvida. Toda a mágica arcana é um milagre trazido por Wynna, a absoluta Deusa da Magia.
> 
> Por suprir algo tão fundamental à existência do mundo e à vida como conhecemos, Wynna está entre as divindades mais importantes, bondosas e generosas. Mágica é sua dádiva a cada ser vivente, disponível para todo e qualquer indivíduo disposto a estudá-la. É o instrumento supremo para trazer prosperidade, felicidade e dignidade aos povos. Graças a esse poder os mortais erguem torres fabulosas e cidades esplêndidas, transportam-se além dos horizontes, mantêm monstros distantes. O domínio da magia arcana atesta o avanço da civilização.
> 
> Mágica arcana é abundante, está ao alcance de todos que escolhem conjurá-la (e até de alguns que não escolhem). Todo arcanista pode, com empenho, se tornar um grande arquimago — seja devoto de Wynna ou não. Aqueles que louvam seu nome, no entanto, são agraciados com suas bênçãos. A deusa ama arcanistas, bardos, todos que aceitam sua dádiva. Ama mais ainda aqueles que escolhem usar esses poderes para benefício de outros, para tornar vidas felizes, para afastar o mal. Dizem seus seguidores: *“A magia existe para desfrutar da vida, a vida existe para desfrutar da magia.”*
> 
> Ainda que nem todos concordem quanto à procedência da mágica, Wynna é honrada e respeitada por quase todos os arcanistas. Sua compaixão é amplamente reconhecida. Contudo, a deusa também tem sua face caprichosa, enciumada e rancorosa.
> 
> Viajantes planares experientes, que tenham visitado outros mundos, contam histórias sobre como as coisas funcionam longe de Arton. Existem ciências e fórmulas mundanas sofisticadas, capazes de produzir engenhos técnicos extraordinários — cujos efeitos rivalizam as magias mais poderosas. Máquinas para fabricar todo tipo de item, falar por longas distâncias, produzir fogo e luz, conservar alimentos, viajar por terra, ar e mar. Em Arton, contudo, muitos tipos de máquinas simplesmente não funcionam. Um experimento repetido da mesma forma não vai produzir sempre o mesmo resultado. Por isso certas áreas da ciência parecem coisa de inventores loucos.
> 
> Para muitos, isso parece algo natural. Para outros, são os deuses que impedem o funcionamento da tecnologia em Arton. E para outros mais, a maior responsável por barrar a ciência é Wynna. A enciumada Deusa da Magia considera ofensa indesculpável quando mortais rejeitam seu grande presente, buscando formas anômalas de realizar suas façanhas.
> 
> Aqueles que tentam implementar avanços técnicos no Reinado, sem sucesso, afirmam ser ela a responsável. Muitas vezes acabam acusados de tentar apontar outros culpados para suas próprias falhas. Por esse e outros motivos, engenhos tecnológicos têm péssima reputação por toda Arton.
> 
> Assim, para aqueles que acolhem sua dádiva arcana, Wynna é a mais amorosa e caridosa das divindades. Mesmo os que não acreditam em sua procedência divina, mas ainda utilizam magia, são tratados com ternura e paciência. Quanto aos que recorrem a outros caminhos, deveriam se acautelar, pois a deusa lhes reserva seu profundo rancor.

## Devoção Padrão

> [!t20-poder] Poderes Concedidos — Livro Básico (T20 JdA)
> ```dataview
> TABLE resumo AS "Efeito Resumido"
> FROM "Poderes/Concedidos"
> WHERE tipo = "poder" AND (contains(deuses, this.file.link) OR contains(string(deuses), this.file.name)) AND contains(fonte, "Tormenta20")
> SORT file.name ASC
> ```

> [!t20-poder] Poderes Concedidos — Expansão (Deuses de Arton)
> ```dataview
> TABLE resumo AS "Efeito Resumido"
> FROM "Poderes/Concedidos"
> WHERE tipo = "poder" AND (contains(deuses, this.file.link) OR contains(string(deuses), this.file.name)) AND contains(fonte, "Deuses de Arton")
> SORT file.name ASC
> ```

> [!t20-restricao] Obrigações & Restrições Canônicas (Tormenta20 JdA)
> Assim como a magia jamais deva ser negada para quem a busca, devotos de Wynna devem praticar a bondade e a generosidade de sua deusa, jamais recusando um pedido de ajuda de alguém inocente. Além disso, devotos de Wynna são proibidos de matar seres mágicos (elfos, qareen, sílfides e outros a critério do mestre) e conjuradores arcanos.

## Devoção Fundamentalista (Deuses de Arton)

> [!t20-restricao] Preceitos Radicais: Sacerdote Fundamentalista
> Jamais impede a execução de uma magia, nem promove seu cancelamento, de aliados ou inimigos. É proibido de usar *Dissipar Magia*, *Campo Antimagia* e similares (mas ainda pode interromper suas próprias magias sustentadas).
> 
> **Benefício Fundamentalista:** Adota este dogma rígido e recebe +1 poder concedido adicional da divindade.

## Liturgia, Itens e Artefatos

> [!t20-item] Equipamentos Sagrados
> - [[Texto Sagrado]] — Manuais e grimórios arcanos que dissipam aflições mentais através da meditação mágica.
> - [[Patuá]] — Argola metálica polida com pequenas runas luminosas incisas.
> - [[Panfleto de Aforismos]] — Tratados sobre a benevolência e o fluxo do mana que limpam a fadiga corporal.
> - [[Argolas Místicas]] — Acessório litúrgico consagrado que potencializa a condução de energias arcanas.

### Artefatos Divinos Relacionados
- [[Belo Presente (Artefato)|Belo Presente]] — A adaga mágica símbolo e amplificador supremo empunhada pelo Avatar de Wynna.

> [!t20-restricao]- Avatar da Divindade (ND S)
> 💀 <span class="t20-vermelho">PV:</span> 1.800 • 🛡️ <span class="t20-laranja">Defesa:</span> 63 • 👁️ <span class="t20-ciano">Sentidos:</span> Iniciativa +26, Percepção +24  
> **Resistências & Imunidades:** Fort +22, Ref +36, Von +30, imunidade a efeitos mentais e itens mundanos, maior que a morte, redução de dano 10, resistência a magia +5. Deslocamento: 9m (6q), voo 12m (9q).  
> **Ataques:** Corpo a Corpo: [[Belo Presente (Artefato)|Belo Presente]] +54 (1d4+11).  
> **Carícia Mágica (Padrão):** O Avatar de Wynna pode abençoar uma criatura em alcance curto. A criatura aprende e pode lançar uma magia qualquer de 1º círculo, à escolha do Avatar (atributo-chave escolhido pela criatura entre Inteligência e Carisma).  
> **Centelha Divina:** O Avatar pode lançar qualquer magia como um conjurador de 20º nível sem gastar PM (CD 55, limite de PM 30).  
> **Conjuração Tríplice (Completa):** O Avatar lança três magias de escolas e círculos diferentes que tenham tempo de conjuração de uma ação padrão ou menor.  
> **Metamagia Suprema (Reação):** Uma vez por rodada, quando uma magia é lançada a partir de um ponto em alcance longo, o Avatar pode alterar algumas de suas características. Ele pode mudar o tipo de dano da magia, pode escolher se o dano será letal ou não letal e pode mudar o tipo de teste de resistência dela.  
> **Sem Atalhos (Completa):** O Avatar dissipa todos os itens mágicos permanentes em alcance curto. Para cada item dissipado dessa forma, seu portador aprende uma magia de 1º círculo, arcana ou divina, à escolha do Avatar (atributo-chave escolhido pelo portador entre Inteligência e Carisma).  
> **Visão da Magia:** O Avatar está sempre sob efeito de *Visão Mística*, com todos os aprimoramentos.  
> **Vivificar Magia (Reação):** Uma vez por rodada, o Avatar pode anular uma magia lançada em alcance médio. No início do próximo turno do Avatar, essa magia se torna um capanga *feitiço vivo* que surge em um ponto à escolha do Avatar entre ele e a fonte da magia original. Um feitiço vivo tem Defesa 20, 1 PV, é imune a dano e falha automaticamente em qualquer teste de resistência ou oposto. O Avatar pode gastar uma ação de movimento para fazer todos os feitiços vivos andarem (eles têm deslocamento de voo 12m) ou para dissipá-los. Para cada feitiço vivo que se dissipa dessa forma, o Avatar lança a magia da qual o feitiço se originou (usando suas próprias características), tendo como ponto de origem o espaço onde o feitiço estava quando foi dissipado.  
> **Atributos & Perícias:** For 6, Des 8, Con 6, Int 15, Sab 6, Car 19. Atuação +37, Diplomacia +37, Misticismo +41.  
> **Equipamento:** [[Belo Presente (Artefato)|Belo Presente]]. Tesouro: Nenhum.
