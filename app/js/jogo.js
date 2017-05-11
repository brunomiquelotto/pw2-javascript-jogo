var conTempo;
var timeStart = 60; 

function iniciarJogo(){
   var nomeJogador = document.getElementById('nomeJogador');
   var raJogador = document.getElementById('raJogador');
   if(!validador(nomeJogador, raJogador))
        return;
   
   nomeJogador.setAttribute('disabled','true');
   raJogador.setAttribute('disabled','true');
   jogadorAtual = {nome: nomeJogador.value, ra: raJogador.value, pontos: 0};
   btnIniciar.classList.toggle('abreFechaRank');
   btnRecomeçar.classList.toggle('abreFechaRank');

   startCountdown();
}
function startCountdown() {
       if((timeStart - 1) >= 0){
                timeStart = timeStart - 1;
                tempo.innerText =  timeStart;
                conTempo = setTimeout('startCountdown()',1000);
       }
}

function reiniciarJogo(){
    var nome = document.getElementById('nomeJogador');
    var ra = document.getElementById('raJogador');

    nome.value = "";
    ra.value = "";
    nome.removeAttribute('disabled');
    ra.removeAttribute('disabled');
    btnIniciar.classList.toggle('abreFechaRank');
    btnRecomeçar.classList.toggle('abreFechaRank');
    clearTimeout(conTempo);
    tempo.innerText = 60;
    timeStart = 60;
}

function contaPonto(pontos) {
    jogadorAtual.pontos += pontos;
}

function validador(nomeJogador, raJogador){
    if((nomeJogador.value == '') || (raJogador.value == '')){
        alert('Digite seu Nome e RA para começar a jogar !');
        return false;
    }
    return true;
}

