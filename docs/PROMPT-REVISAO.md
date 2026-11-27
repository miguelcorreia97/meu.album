# Prompt para a revisão geral (colar no Claude Code)

Cola a mensagem abaixo no Claude Code, dentro da pasta do projeto.

---

Vais fazer uma revisão geral do Meu Álbum à procura de problemas de **design**, **acessibilidade/toque**, **adaptação a telemóvel e computador** e **erros**. Nesta tarefa **NÃO alteras nada no jogo**: o resultado é só uma lista de problemas.

Antes de começar, lê o `CLAUDE.md` e o `docs/GUIA-DE-REVISAO.md`. Segue as regras do Miguel (português de Portugal, cores quentes e escuras, nada de fundos brancos, sem scroll durante os jogos) e a lista de revisão do guia.

Usa as skills que eu tenho instaladas quando fizerem sentido: `design-critique` para o visual, `accessibility-review` e `a11y-check` para os botões e o contraste, `contrast` para cores específicas e `frontend-design` como referência de bom design.

Como fazer:
1. Põe o jogo a correr localmente (`python3 -m http.server 8765`) e abre-o no Chrome.
2. Percorre todos os ecrãs da lista do guia: início, menu, jogo do álbum (amigo e computador), desafio do dia, carreira de DJ (noites 1, 10 e 20, com a mesa, as bebidas e a expulsão), banca de vinis, quarto (loja, edição, luzes, agenda) e as regras.
3. Testa cada ecrã em **pelo menos** dois tamanhos: telemóvel (uns 390×664) e computador (uns 1440×900). Repara em: coisas cortadas, a flutuar ou sobrepostas; scroll necessário para jogar; botões pequenos de mais para o dedo; texto com pouco contraste sobre o fundo escuro; balões ou avisos que se sobrepõem; e erros na consola.
4. Joga mesmo um bocado cada jogo, não olhes só para o ecrã parado.

No fim, escreve um ficheiro `docs/ERROS-ENCONTRADOS.md` com uma lista dos problemas **do mais grave para o menos grave**. Para cada um: em que ecrã e em que tamanho acontece, o que se vê de errado e uma sugestão de correção. Agrupa por jogo (DJ, banca, quarto, etc.).

Não publiques nada e não mudes o `index.html`. No fim, resume-me em português de Portugal os problemas mais importantes que encontraste e pergunta-me quais queres que corrija primeiro.
