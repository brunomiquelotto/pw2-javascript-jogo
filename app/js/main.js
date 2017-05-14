//Variaveis
var jogadorAtual = undefined;
var perguntaSelecionada = undefined;
var parteCorpoSelecionada = undefined;
var qntResposta = 0;
var primeiroClick = 0;


function abreFechaRanking(){
    var lrank = document.getElementById('listaRank');
    lrank.classList.toggle('abreFechaRank');
}

function selecionaParteDoCorpo(e) {
    var rand = numeroRandomico(perguntas.length);    
    var p = perguntas.find(x => x.id == rand);
    perguntaseRespostas.setAttribute('display', 'block');

    if(primeiroClick == 0)
    perguntasGeral.classList.toggle('abreFechaRank');
    

    

    document.getElementById('campoQuestao').innerText = p.pergunta;
    document.getElementById('resp1').innerText = p.respostas.find(r => r.alt == 'a').resp;
    document.getElementById('resp2').innerText = p.respostas.find(r => r.alt == 'b').resp;
    document.getElementById('resp3').innerText = p.respostas.find(r => r.alt == 'c').resp;
    document.getElementById('resp4').innerText = p.respostas.find(r => r.alt == 'd').resp;
    perguntaSelecionada = p;
    parteCorpoSelecionada = parteCorpo.find(x => x.id == e.id);
    primeiroClick++;
}

function responder() {
   
    
    document.getElementById(parteCorpoSelecionada.id).setAttribute('display', 'none');

    perguntaseRespostas.setAttribute('display', 'none');

    var resposta = document.getElementsByName('optionsRadios')[0].value;
    if(parteCorpoSelecionada.questoes.find(x => x.pergunta == perguntaSelecionada.id).alternativa == resposta){
        contaPonto(10);
    } 
    qntResposta++;

    if(qntResposta == 4){              
        addNovoJogador(jogadorAtual);        
    }    
}


