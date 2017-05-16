//Variaveis
var jogadorAtual = undefined;
var perguntaSelecionada = undefined;
var parteCorpoSelecionada = undefined;
var qntResposta = 0;
var primeiroClick = 0;
var jogoFinalizado = false;

//Abre e Fecha Ranking
function abreFechaRanking(){
    var lrank = document.getElementById('listaRank');
    lrank.classList.toggle('abreFechaRank');
}

//Escolher parte do corpo
function selecionaParteDoCorpo(e) {
    var rand = numeroRandomico(perguntas.length);    
    var p = perguntas.find(x => x.id == rand);
    perguntasGeral.style.display ='block';
    
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

//Funçao ao clicar em Responder
function responder() {
    document.getElementById(parteCorpoSelecionada.id).setAttribute('display', 'none');
    perguntaseRespostas.setAttribute('display', 'none');
    var resposta = document.getElementsByName('optionsRadios');
    for(var i=0; i < resposta.length;i++){
        if(resposta[i].checked){
            var resp = resposta[i].value;
            break;
        }
    }

    if(parteCorpoSelecionada.questoes.find(x => x.pergunta == perguntaSelecionada.id).alternativa == resp){
        contaPonto(10);
    } 
    qntResposta++;
    if(qntResposta == parteCorpo.length){              
        addNovoJogador(jogadorAtual);
        jogoFinalizado = true;
        mensagemFimJogo(); // Parte Bugada vamos arrumar;     
    }    
}


