# Meu Álbum — notas para o Claude

> Para rever o jogo à procura de erros, lê também `docs/GUIA-DE-REVISAO.md` (ideia do jogo, o que o Miguel gosta, queixas habituais, erros já corrigidos e lista de revisão).

Jogo web de música brasileira (MPB) feito pelo Miguel para jogar com a Clara. Está publicado em GitHub Pages: https://miguelcorreia97.github.io/meu.album/

## Como falar e escrever
- Responde sempre em **português de Portugal** (não do Brasil).
- Todo o texto do jogo também é em português de Portugal ("ecrã", "telemóvel", "partilhar", "equipa").
- O Miguel não é programador: explica as mudanças pelo que ele vê no jogo, não pelo código.

## Estrutura
- `index.html` tem o jogo todo (HTML, CSS e JavaScript num só ficheiro, cerca de 1 MB). O script principal é o maior `<script>` do ficheiro.
- `musica/` e `festa/`: músicas completas em MP3. `capas/`, `posters/`, `stickers/`, `fundo/`: imagens.
- `musicas.json`: lista de músicas. No código, `PLAYLIST` e `song(i)` dão os dados de cada música.
- Dados partilhados (perfis, quartos, salas multijogador, tops) ficam no Firestore através da API REST (`FS_DOCS`, `PROF_URL`). Usa sempre `updateMask` nos PATCH para não apagar campos.

## Partes principais do código (prefixos das funções)
- **Jogo do álbum** (contra amigo ou computador): `newScreen`, `startGame`, `rulesBox`.
- **Carreira de DJ** (festa): tudo começa por `fe` (`feStart`, `feGo`, `feDeal`, `fePick`, `feMix`, `feTick`, `feEnd`, `feDesk`, `feFit`). 20 noites em `L20`/`CAR`. Sons de ambiente: `FSX`, `fs*`. Música: `fePlay`, `FA`.
- **Banca de vinis**: `bk*`. Multijogador da banca: `bkm*`. Multijogador do DJ: `djm*`.
- **Desafio do dia**: `dd*`.
- **Quarto**: objetos em `RIT` (lista) e `RDR` (desenhos SVG). Desenho do quarto em `roomSvg`. Modo de edição: `edPointerDown`, `edLimit`, `offKey`. Luzes: `LUZES`, `glow`, `luzZoom`, `lintOf`, `lcOf`.
- Vários desenhos foram refeitos e estão em blocos `PLANT_RDR`, `DECO_RDR`, `DECO2_RDR`… aplicados com `Object.assign(RDR, …)`. Um desenho mais abaixo no ficheiro substitui o de cima.
- Ecrãs: `render()` escolhe o ecrã com `L.screen`.

## Regras de design (pedidas pelo Miguel)
- Design rigoroso e realista. Cores quentes e escuras como o fundo; nada de branco puro.
- Os balões de comentários nunca se podem sobrepor.
- No DJ a música de fundo do site pára e volta no fim, com os pássaros e o mar.
- Tem de funcionar bem no telemóvel (iPhone) e no computador, sem scroll durante os jogos.

## Cuidados com o iPhone
- O iPhone não deixa mudar o volume por código; usa `IS_IOS`.
- Não ligar `createMediaElementSource` às músicas no iPhone (a música desaparece).
- Não mudar `playbackRate` muitas vezes por segundo (a música trava).

## Testar antes de publicar
1. `node --check` no script principal (extrai o maior `<script>` para um ficheiro .js).
2. `npm install` (só da primeira vez) e depois `npm test`. Corre `tests/smoke.js`, que simula partidas com o Firestore falso. Tem de acabar com `errs []`.
3. Para ver no browser: `python3 -m http.server 8765` nesta pasta e abrir http://localhost:8765. Para testar no iPhone, abrir `http://<IP do computador>:8765` com o iPhone na mesma rede Wi-Fi.

## Publicar
- Atualizar a constante `BUILD` (no fim do script) para um número novo, assim os jogadores recebem o aviso "Há uma versão nova".
- Fazer commit com o autor "Miguel Correia" e `git push` para `main`. O GitHub Pages publica sozinho em 1 a 2 minutos.
- Não mexer no workflow do GitHub Actions.
