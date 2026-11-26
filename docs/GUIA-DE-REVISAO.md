# Guia de revisão do Meu Álbum

Este documento é para o Claude Code rever o jogo inteiro, no telemóvel e no computador, à procura de erros. Junta a ideia do jogo, o que o Miguel gosta, as queixas que costuma fazer e os erros que já foram cometidos e corrigidos. Lê também o `CLAUDE.md`.

> Como usar: percorre o jogo ecrã a ecrã com a lista do fim. Em cada problema, primeiro confirma-o num browser a sério (computador e tamanho de telemóvel), depois corrige, testa e só então publica. Antes de mexer em algo grande, pergunta ao Miguel.

---

## 1. A ideia do jogo

O **Meu Álbum** é um jogo de música brasileira (sobretudo MPB) feito pelo Miguel para jogar com a Clara, sua amiga. Ambos gostam muito de MPB. As músicas vêm das playlists dos dois (cerca de 150, em `musicas.json`). Parte delas tem o MP3 completo no site (`musica/` e `festa/`); para as outras usa-se a amostra de 30 segundos do iTunes.

Há uma moeda, o **BPM**, que se ganha a jogar e se gasta no **quarto** virtual de cada um.

### Jogos
1. **Jogo do álbum** (o original). Contra um amigo (salas com código, cada um no seu telemóvel) ou contra o computador (Fácil, Normal, Difícil).
   - À vez, cada um recebe duas músicas e fica com uma.
   - Há um **pedido da noite** (estilo, cantor, energia ou tema) que dá pontos extra.
   - Cada um ordena o álbum em segredo. As faixas seguidas que combinam dão pontos (química).
   - No fim há **duelos** faixa a faixa (nota de 0 a 10: legado, letra, som, vibe) e **combinações** (arco, tema, coesão, variedade).
2. **Desafio do dia**. O mesmo jogo do álbum para toda a gente: mesmas músicas, computador no Difícil, uma tentativa por dia e um top do dia.
3. **Carreira de DJ** (a "festa"). É o modo mais trabalhado e o mais imersivo.
   - **Noites:** 20, cada uma num sítio a sério onde se ouve MPB (quiosque na praia, bares, restaurantes, rooftop, roda de samba, arraial, Pedra do Sal…). Cada sítio tem o seu horário, o seu céu e os seus sons de ambiente: pratos e gargalhadas no restaurante, bolas de futebol e mar na praia, pássaros.
   - **Duração e ritmo:** cada noite dura cerca de 10 minutos. Antes de começar há 30 segundos para ler o pedido da noite.
   - **Tocar:** escolhes uma de **6 músicas** e misturas carregando na zona verde da agulha (perfeita, boa ou falhada).
   - **Desempenho:** vai de 0 a 20 e é igual à nota da noite. Para passar é preciso entre 12/20 (primeira noite) e 19/20 (última). O silêncio penaliza.
   - **Mesa do DJ:** buzina, luzes, falar ao microfone, dedicatória e volume. Há também pedidos do público: parabéns, mais alto ou mais baixo, selfie, pedido de casamento, bebidas.
   - **Álcool:** há uma barra de álcool no sangue. As bebidas têm graus diferentes, as sem álcool baixam a barra e o tempo também. Com 1,2 g/L o DJ é expulso, e também é expulso se o desempenho ficar abaixo de 4/20 durante muito tempo.
   - **Efeitos do álcool:** o palco desfoca e balança, as frases e os nomes baralham-se ("???"), as capas desfocam, a agulha acelera, às vezes tira-se o disco errado e a música acelera e fica mais animada.
   - **Fim da noite:** fade out da música e palmas do público.
   - **Multijogador:** salas com código. Todos tocam a mesma festa ao mesmo tempo e veem a nota e o álcool dos outros. Ganha a nota mais alta.
4. **Banca de vinis**. Durante 2 minutos o jogador vende discos numa barraca de feira.
   - **Cena:** está sentado dentro da barraca, com os vinis expostos em prateleiras e no balcão, e os clientes fazem fila. Há uma animação do vendedor a ir buscar o vinil e a entregá-lo.
   - **Negociação:** cada cliente tem gosto, feitio e paciência. O jogador aceita a oferta ou negoceia (raridade, história do disco, outro cliente interessado, arredondar).
   - **Metas:** 260€, 370€ ou 500€.
   - **Multijogador:** todos têm os mesmos discos e os mesmos clientes, e no fim vê-se quem fez mais dinheiro.

### O quarto
Cada jogador tem um quarto em SVG que pode decorar com o BPM: cama, lençóis, móveis, mesas de cabeceira, secretária, gira-discos, prateleiras com os discos ganhos, pósteres e quadros (tamanhos A2 a A5, molduras à volta), quadros de recados (giz, digital, espelho, grafíti…), plantas, animais, luzes, tapetes, cortinas, cor das paredes e chão.
- **Modo de edição:** arrastar os objetos. Os do chão encostam-se à parede (há um limite), o candeeiro de teto só anda na horizontal e as decorações só deslizam em cima do móvel, do parapeito ou da mesa de cabeceira.
- **Interações:** as cortinas abrem e fecham ao tocar. Com a janela aberta, as plantas abanam ao de leve.
- **Luzes:** cada luz tem intensidade e cor próprias (Original, RGB arco-íris, vermelho, verde, azul…). A fita LED acende em todas as prateleiras.
- **Vida do quarto:** agenda mensal visual com cores quentes e escuras. As semanas são diferentes umas das outras, só se veem esta semana e a próxima, e há surpresas. Inclui regar as plantas, limpezas, discos gastos, trocar a agulha, visitas, festas e imprevistos, com limites por dia e por semana.
- **Ver outros quartos:** há visitas aos quartos dos outros jogadores.
- **Pontos diários:** o botão de BPM mostra os pontos do dia (músicas, vitórias, 10 partidas = +10 BPM), sem missões.

### Avatares
- **Miguel:** pele morena clara, cabelo curto encaracolado (caracóis desenhados como curvas, não como bolas), camisola castanha, calças pretas e ténis brancos.
- **Clara:** pele morena, cabelo comprido cacheado até às costas e também atrás do pescoço, com pouco volume. Blusa laranja suave com um **sol amarelo** do lado esquerdo do peito, cinto, calças largas creme e brincos.

---

## 2. O que o Miguel gosta
- **Imersão:** que pareça real. Sítios que existem, sons de ambiente, público que reage, danças diferentes conforme o estilo e a energia, horários e céu que mudam.
- **Design rigoroso, realista, "aesthetic" e limpo**, com detalhe: sombras, veios da madeira, dobras nos tecidos, folhas com nervuras.
- **Cores quentes e escuras**, como o fundo do site. Nada de fundos brancos.
- **Animações boas**, mas suaves. Nada de agressivo.
- **Desafio a sério:** os jogos não podem ser fáceis.
- **Surpresas e variedade:** semanas diferentes, imprevistos, pedidos inesperados.
- **Coisas personalizáveis:** cores, intensidades, tamanhos, posições.
- **Multijogador** para jogar com a Clara e com amigos.
- **Funcionar bem no telemóvel (sobretudo iPhone) e no computador.**
- **Explicações claras:** regras organizadas por jogo e só depois de escolher o jogo.

---

## 3. Queixas que o Miguel costuma fazer (verificar sempre)

### Layout
- **Ter de fazer scroll durante um jogo.** Tudo o que é preciso para jogar tem de estar visível: negociar na banca, aceitar ou recusar bebidas e pedidos no DJ.
- **Coisas cortadas.** Palco cortado em cima e em baixo, textos cortados, botões fora do ecrã.
- **Coisas que mudam de tamanho sozinhas.** Por exemplo, o palco encolhia quando aparecia o botão "Trocar já".
- **Botões inalcançáveis no telemóvel**, como os botões no topo em ecrã inteiro.
- **Palco pequeno no computador:** o palco deve ocupar o espaço e o painel de baixo deve ser compacto.

### Design pouco rigoroso
- **Elementos a flutuar no nada:** a etiqueta "A3" solta, a mesa de DJ em cima da água, a bancada sem chão.
- **Objetos a sobrepor-se ao que não deviam:** molduras em cima da foto do quadro (têm de ficar por fora), balões de comentários uns por cima dos outros.
- **Coisas que não encostam à parede quando deviam:** cama, móveis.
- **Balões ou pop-ups no sítio errado:** um balão aparecia no canto superior esquerdo ao fechar a cortina.
- **Designs pouco realistas ou "infantis".**

### Comportamento
- **Ações involuntárias:** arrastar um disco abria os detalhes; um botão de fechar não funcionava.
- **Animações demasiado agressivas:** por exemplo, as plantas.
- **Transições de música demasiado rápidas,** ou opções de músicas que não combinam umas com as outras.
- **Música que corta, trava, recomeça ou desaparece,** sobretudo no iPhone.
- **Coisas sem limite:** tudo o que se compra ou faz tem de ter limites por dia ou por semana.
- **Pedidos que ainda não estão visíveis:** "ainda não vi o botão…". Confirmar sempre que a funcionalidade aparece mesmo no ecrã.
- **Efeitos exagerados:** com o álcool, a música não pode ficar pior, só mais rápida e animada.

---

## 4. Erros já cometidos e corrigidos (não repetir)

### Carreira de DJ
- **Música de fundo e ambiente:** a música de fundo do site continuava a tocar no DJ. Tem de parar ao entrar e voltar no fim, sempre com os pássaros e o mar.
- **Amostras em loop:** as amostras de 30 s faziam loop e a música "recomeçava". Agora tocam uma vez só (cerca de 29 s).
- **Última música:** a noite ficava presa quando a última música acabava antes do tempo, por exemplo acelerada pelo álcool. Agora a festa acaba quando a música termina.
- **Limite de músicas:** a noite acabava antes da hora com mais de 8 músicas (havia um limite de rondas). Agora só o horário manda.
- **Volume sem música:** o público queixava-se do volume antes de haver música a tocar.
- **Palco cortado:** cortava em cima e em baixo porque ficava maior do que o espaço disponível. O tamanho tem de se ajustar sempre, também quando o painel de baixo muda.
- **Botão "Trocar já":** encolhia o palco. Agora tem o espaço reservado.
- **Trocar cedo demais:** dava para trocar de música logo no início. Agora é impossível trocar nos primeiros **20 segundos**.
- **iPhone:** a distorção da música com álcool fazia-a desaparecer, e mudar a velocidade muitas vezes por segundo fazia-a travar.
- **Distorção:** com o álcool, a música ficava "estragada". O Miguel quer só mais rápida e mais animada.
- **Pedidos do público:** no telemóvel era preciso fazer scroll para os ver.

### Banca de vinis
- **Negociação no telemóvel:** era preciso fazer scroll para negociar.
- **Painéis fixos:** os painéis fixos no fundo do ecrã não funcionavam porque o desfocado do fundo do site (`backdrop-filter` em `.view`) os prendia ao contentor. No telemóvel esse efeito está desligado durante a banca e o DJ.

### Quarto
- **Decorações e móvel:** arrastar a primeira decoração em cima do móvel mexia o móvel todo. Agora só se mexe a decoração, e só ao longo do tampo.
- **Gato:** ficou fora do sítio porque havia duas definições do mesmo animal e foi alterada a errada. Procura sempre a **última** definição de um objeto em `RDR`.
- **Candeeiro na mesa de cabeceira:** ficava em cima da cama porque não se contou com o deslocamento próprio das decorações (`ST.mesa`).
- **Mesas de cabeceira:** tinham candeeiros embutidos. Agora são só mesas, e o candeeiro é uma decoração à parte.
- **LED:** era verde fixo. Agora é RGB e escolhe-se a cor. O mesmo para o néon dos nomes.
- **Fita LED:** só acendia numa prateleira mesmo com duas.
- **Plantas:** abanavam de forma agressiva (sede e rega). Agora só abanam com a janela aberta, e ao de leve.

### Outros
- **Regras:** estavam todas misturadas. Agora estão organizadas por jogo, e no "Contra o computador" aparecem primeiro só os jogos, com as regras dentro de cada um.

---

## 5. Lista de revisão (fazer em computador e em telemóvel)

Tamanhos a testar no mínimo: **390×664** (iPhone com a barra do Safari), **430×900**, **1280×720**, **1440×900** e **1600×666** (portátil com pouca altura).

Em cada ecrã, verifica:
- [ ] Não é preciso fazer scroll para jogar (só para ler regras ou listas longas).
- [ ] Nada está cortado, a flutuar ou por cima do que não devia.
- [ ] Os botões têm tamanho bom para o dedo (no telemóvel, pelo menos ~40 px).
- [ ] Os textos estão em português de Portugal e sem erros.
- [ ] Não há erros na consola.
- [ ] Os balões e avisos nunca se sobrepõem.

### Ecrãs e situações
1. **Início, escolha de jogador e menu.**
2. **Jogar:** "Com um amigo" e "Contra o computador" (lista dos 4 jogos e entrada em cada um, com as regras).
3. **Jogo do álbum:** escolha de músicas, ordenar, duelos, resultado e moeda. Online: criar e entrar em sala com o mesmo código em dois separadores.
4. **Desafio do dia:** jogar, resultado, top e bloqueio depois de jogar.
5. **Carreira de DJ:** mapa das noites e noites 1, 10 e 20.
   - Ecrã do pedido (30 s).
   - Escolher entre 6 músicas e misturar.
   - Mesa (buzina, luzes, falar, dedicar, volume) e pedidos do público (responder e deixar passar o tempo).
   - Beber até 0,5, 0,8 e 1,2 g/L e confirmar os efeitos e a expulsão.
   - Mau desempenho até ser expulso.
   - Botão "Trocar já" (nunca antes dos 20 s).
   - Última música e fim com palmas.
   - Música de fundo, pássaros e mar a voltar no fim.
   - Multijogador com dois separadores.
6. **Banca de vinis:** os 3 níveis, escolher discos, negociar até o cliente ir embora, fim e multijogador.
7. **Quarto:** abrir, ecrã inteiro (botões alcançáveis no telemóvel) e modo de edição.
   - Arrastar cama, móveis, decorações (móvel, parapeito, mesa de cabeceira), discos na prateleira, candeeiro de teto e quadros.
   - Cortinas, luzes (intensidade e cor de cada uma), LED, néon e fita LED com duas prateleiras.
   - Loja (todas as abas), agenda, regar, limpar, visitas, festa e ver outros quartos.
   - Dia e noite.
8. **Regras:** os 5 separadores.
9. **Aviso "Há uma versão nova"** depois de publicar.

### Áudio (testar num iPhone a sério se possível)
- [ ] A música não trava, não recomeça e não desaparece.
- [ ] As transições entre músicas são suaves (perfeita ~6 s, boa ~4 s, falhada com fade out e fade in).
- [ ] A música de fundo pára nos jogos e volta depois.
- [ ] Os sons da mesa (buzina, bebidas, luzes) ouvem-se.

---

## 6. Ao propor correções
- **Escrever ao Miguel** em português de Portugal, explicando pelo que ele vê no jogo.
- **Não remover funcionalidades** sem perguntar.
- **Manter o estilo visual:** cores quentes e escuras e detalhe realista.
- **Testar sempre** (`npm test` e browser em dois tamanhos) antes de publicar e atualizar o `BUILD`.
