var conTempo;
var timeStart = 60; 

function iniciarJogo(){
   var nome = document.getElementById('nomeJogador');
   var ra = document.getElementById('raJogador');
   nome.setAttribute('disabled','true');
   ra.setAttribute('disabled','true');

   btnIniciar.classList.toggle('abreFechaRank');
   btnRecomeçar.classList.toggle('abreFechaRank');
   
   startCountdown();
}
function startCountdown(){    
       if((timeStart - 1) >= 0){
               timeStart = timeStart - 1;
               tempo.innerText =  timeStart;
               
              conTempo = setTimeout('startCountdown()',1000);
       }
}

