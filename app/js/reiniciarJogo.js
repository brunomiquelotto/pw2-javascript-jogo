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