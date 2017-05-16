//Variaveis Globais para controlar tempo
var conTempo;
var timeStart = 60; 


//Funcao ao clicar Iniciar Jogo
function iniciarJogo(){
   var nomeJogador = document.getElementById('nomeJogador');
   var raJogador = document.getElementById('raJogador');

   if(!validador(nomeJogador, raJogador))
        return;
  
   nomeJogador.setAttribute('disabled','true');
   raJogador.setAttribute('disabled','true');
   jogadorAtual = {nome: nomeJogador.value, ra: raJogador.value, pontos: 0};

   blocoImagem.style.display = "block";

   blocoImagem.classList.toggle('abreFechaRank');
   btnIniciar.classList.toggle('abreFechaRank');
   btnRecomeçar.classList.toggle('abreFechaRank');

   startCountdown();
}

//Contagem de tempo utilizando setTimeout() sendo chamado a cada 1 segundo, e modificando o text do id tempo.
function startCountdown() {
       if((timeStart - 1) >= 0){
               if(qntResposta < 4){
                timeStart = timeStart - 1;
                tempo.innerText =  timeStart;
                conTempo = setTimeout('startCountdown()',1000);
            }
            else if (!jogoFinalizado){
            }
            
       }
}

//Função que Reinicia todo o jogo, Menos o Ranking;
function reiniciarJogo(){
    var nome = document.getElementById('nomeJogador');
    var ra = document.getElementById('raJogador');
    
    mFim1.style.display = "none";
    mFim2.style.display = "none";

    nome.value = "";
    ra.value = "";
    nome.removeAttribute('disabled');
    ra.removeAttribute('disabled');
    jogadorAtual = undefined;
    jogoFinalizado = false;

    primeiroClick = 0;
    qntResposta = 0;
    blocoImagem.classList.toggle('abreFechaRank');
    btnIniciar.classList.toggle('abreFechaRank');
    btnRecomeçar.classList.toggle('abreFechaRank');
    perguntasGeral.classList.toggle('abreFechaRank');

    perguntaseRespostas.setAttribute('display', 'block');
    deltoid.setAttribute('display', 'block');
    extensor.setAttribute('display', 'block');
    triceps.setAttribute('display', 'block');
    biceps.setAttribute('display', 'block');



    clearTimeout(conTempo);
    tempo.innerText = 60;
    timeStart = 60;
}

//Contador de Pontos
function contaPonto(pontos) {
    jogadorAtual.pontos += pontos;
}

//Validador de campos ao iniciar
function validador(nomeJogador, raJogador){
    if((nomeJogador.value == '') || (raJogador.value == '')){
        alert('Digite seu Nome e RA para começar a jogar !');
        return false;
    }
    return true;
}

function mensagemFimJogo(){

    var pGeral = document.getElementById('perguntasGeral');
    var img = document.getElementById('blocoImagem');

        perguntasGeral.style.display = "none";
        blocoImagem.style.display = "none";

        mFim1.style.display = "block";
        mFim2.style.display = "block";

        mFim1.className = 'infoFim';
        mFim2.className = 'pFim';

        mFim2.innerHTML = "Você ganhou "+ jogadorAtual.pontos +" pontos.<br>Parabéns<br>Clique em 'Reiniciar' para voltar o jogo";
        mFim1.innerHTML = "GAME OVER";     
}
