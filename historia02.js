// var classe = prompt(`Escolha sua classe:`)
// var nome = prompt("Digite o nome do seu robo: ");


var nome;
var classe;

function mudarTela(){

    nome = prompt("Digite  o nome para o robo: ");


    var telaAtual = document.querySelector("#telaApresenta")
    telaAtual.addEventListener("click", function() {
        window.scrollTo(0, 0);
    });
    telaAtual.remove();
}

function proximaTela(conteudo1){
    elemento.innerHTML = conteudo1;
    estilo();
}



var conteudoA =         

"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nesciunt, repellat officia nemo harum commodi atque ipsum fugit repellendus et rem quos vero neque doloremque? Nemo doloribus repellat quod culpa.</p>"+


"<img src='imagens/arcanobrabo.jpg'>"+


"<p>Escolha: <br>A) Beber agua <br>B) Não beber</p>"+


"<div class='row border border-info' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger'>A</button>"+

    "</div>"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger'>B</button>"+

    "</div>"+

    

"</div>"

var inicio01 = 

"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nesciunt, repellat officia nemo harum commodi atque ipsum fugit repellendus et rem quos vero neque doloremque? Nemo doloribus repellat quod culpa.</p>"+


"<img src='imagens/arcanobrabo.jpg'>"+


"<p>Escolha: <br>A) Beber agua <br>B) Não beber</p>"+


"<div class='row border border-info' >"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger'>A</button>"+

    "</div>"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger'>B</button>"+

    "</div>"+

    "<div class='col-sm d-flex justify-content-center'>"+

        "<button class='btn btn-danger'>C</button>"+

"   </div>"+

    

    

"</div>"

var inicio02 = "<p>Após o robo acordar em uma cidade deserta chamada Kardor que fica no centro da terra e é flutuante, quase sem batéria e seu livro ao seu lado, a única lembrança que restou de seu hd, é que as criaturas misteriosas mataram todos os ciêntistas e que precisa achar seu fantasma. Antes dos ciêntistas morrerem, um ciêntista em si, conseguiu deixar ele(robo) escondido na cidade de Kardor, programado para acordar depois de 5 dias após a morte dos ciêntistas, porém o ciêntista esqueceu de levar junto com o robo o fantasma dele, e então o fantasma está junto com o único ciêntista sobrevivente.</p> <p> Sem saber o que fazer, o robo se levanta e começa a procura de como ele vai achar seu fantasma para recarregar sua bateria, andando pela cidade perdida Kandor, o robo se depara com o uma criatura misteriosa atacando um humano. </p> <img src='imagens/arcanoarcodando.jpg' style='width:500px' /> <p> O robo caminha em direção a criatura, chamando a atenção dela, e tentar usar sua magia, porém ele percebe que não pode usar magia porque está com a bateria muito baixa, a criatura parte para cima do robo e acaba pulando em cima dele, quebrando algumas peças, o robo empurra a criatura e acaba golpenado ela, jogando ela para longe, a criatura se levanta e corre em direção do robo, o robo olha para o lado e acha uma lança no chão, ele pega e joga em direção a criatura, acertando a cabeça dela e a matando de uma vez por todas.</p> <img src='imagens/batalha.jpg' style='width:500px' /> <p> O humano agradece mas fica meio assutado com o robo, porém o robo explica que está lá para ajudar os humanos e matar todas as criaturas, o humano agradece mais uma vez, e explica para o robo que sua família foi morta por eles, e o humano pergunta se você pode ajuda-lo.</p> <h2>Escolha :<h2/> <button onclick='carregarConteudo1(ajudar)'>Ajudar o humano e levar ele com você para achar o fantasma.</button> <button onclick='carregarConteudo1(naoAjudar)'>Dizer que não pode ajudar, e deixar ele onde está.</button>";

var ajudar = "<p>Você e o humano acabam indo a procura do fantasma perdido, no caminho vocês encontram um predio tecnológico abandonado e decidam entrar para ver se acham alguma coisa.</p> <p>Após entrarem o robo acha algumas peças tecnológicas perdidas, e pede ajuda do humano para consertar algumas peças, que acabou sendo quebradas durante a batalha.</p> <p>O humano começa a ajudar você e de repente vocês escutam um barulho estranho, vindo do segundo andar do prédio, vocês vão na direção do barulho, e a cada passo, o barulho fica mais alto.</p> <p>Vocês se deparam com outra criatura batendo em uma porta, como se tivesse alguém lá dentro, o próprio humano consegue tomar a lança que está com você, e lança na direção da criatura, porém, por falta mira acaba errando o alvo e chamando a atenção dela.</p><button onclick='carregarConteudo(conteudoC1)'>Ir para a Direita</button> <button onclick='carregarConteudo(conteudoC2)'></button>";

var naoAjudar = " <p>Você acaba partindo sem o humano, e volta a procurar seu fantasma, você acaba escutando barulhos vindo de um túnel próximo e acaba se escondendo. Sai muitas criaturas do túnel e você acaba vendo o humano que você ajudou a morrer, você espera eles passar e tenta se levantar, mas não consegue se levantar porque está com a bateria baixa e você acaba ficando 'preso', tendo que esperar alguém.</p> <img src='imagens/arcanodecosta.jpg' style='width:500px'/> <p>Por coincidência o ciêntista que deixou você, volta para tentar achar você mas ele não consegue te achar e muitas criaturas vão em direação a ele para mata-lo, sendo assim, antes do ciêntista morrer, ele consegue soltar o seu fantasma e ativa-lo, sendo assim como ele é seu fantasma, ele consegue te localizar em qualquer lugar que você esteja.</p> <img src='imagens/fantasma.jpg' style='width:500px'/> <p>Por sorte, o fantasma chega até você a tempo e começa a te carrega, poucos minutos depois, você e o fantasma antes de sairem, começam a aperfeiçoar a adaga na qual usou para matar a criatura, deixando sua adaga com magia suficiente para matar qualquer criatura com apenas um corte. Eles começam andar pela cidade e encontra algumas criaturas e chama a atenção delas, todas as criaturas vão em sua direção, mas você com suas magias consegue desenvolver uma magia chamada NOVA BOMB, são alguns dardos explosivos, desintegrando quem for atingido na explosão. A batalha começa e você até que consegue se dar bem, porém percebe que são muitos deles.</p> <img src='imagens/poder.jpg' style='width:500px'/> <h2>Escolha</h2> <button onclick='carregarConteudo1(fim)'>Continuar a batalha</button> <button onclick='carregarConteudo1(conteudoC2)'>Fugir para tentar encontrar outros aliados para ajudar</button>";

var fim = "<p> Você e seu fantasma continuam na batalha, matando todos que conseguem, mas pouco tempo depois, você acaba se destraindo e seu fantasma morre, você até tenta ajudar, mas percebe que já é tarde, você até tenta fica na batalha, mas você não resiste e acaba sendo atingido por uma criatura, e então sem ter o que fazer, todas as criaturas pulam em cima de você e te matam, sendo assim o seu fim.</p> <img src='imagens/fim.png' style='width:500px'/> <h2>ESSE FOI O SEU FIM</h2>";

var elemento = document.getElementById('conteudo1');

function carregarConteudo1(conteudo1){
    elemento.innerHTML = conteudo1;
    estilo();
}

function estilo(){
    text.style.fontFamily = "Arial";
    text.style.color = 'red';
}
