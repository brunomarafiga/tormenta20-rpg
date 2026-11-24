# Auditoria Estática do tormenta20.css

**Data:** 2026-11-21

## Resultado

| Critério | Estado |
|---|---|
| Paletas claro/escuro | Atendido |
| Variáveis semânticas | Atendido |
| Redução de movimento | Atendido |
| Layout responsivo do paperdoll | Atendido |
| Unidades relativas no texto | Parcialmente atendido |
| Contraste WCAG mensurável | Requer inspeção visual pelo usuário |
| Área clicável em tabelas/callouts | Parcialmente atendido |
| Independência cromática por rótulos | Orientação incorporada |

## Observações

- As classes utilitárias usam variáveis separadas em `.theme-dark` e `.theme-light`.
- Aliases de magia usam as mesmas paletas semânticas das classes utilitárias.
- Dice Roller e cards do mestre usam a variável vermelha do tema.
- O paperdoll usa grid responsivo com largura mínima de 230px.
- O texto principal usa `em` e `rem`; o CSS ainda contém algumas medidas de layout em `px`, permitidas para geometria.
- O contraste exato exige inspeção visual em Obsidian claro e escuro, pois o relatório estático não calcula pares sobre fundos reais.
