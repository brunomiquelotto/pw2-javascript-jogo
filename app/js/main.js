//Variaveis
var jogadorAtual = undefined;
var perguntaSelecionada = undefined;
var parteCorpoSelecionada = undefined;


function abreFechaRanking(){
    var lrank = document.getElementById('listaRank');
    lrank.classList.toggle('abreFechaRank');
}

function selecionaParteDoCorpo(id) {
    var rand = numeroRandomico(perguntas.length);
    var p = perguntas.find(x => x.id == rand);
    document.getElementById('campoQuestao').innerText = p.pergunta;
    document.getElementById('resp1').innerText = p.respostas.find(r => r.alt == 'a').resp;
    document.getElementById('resp2').innerText = p.respostas.find(r => r.alt == 'b').resp;
    document.getElementById('resp3').innerText = p.respostas.find(r => r.alt == 'c').resp;
    document.getElementById('resp4').innerText = p.respostas.find(r => r.alt == 'd').resp;
    perguntaSelecionada = p;
    parteCorpoSelecionada = parteCorpo.find(x => x.id == id);
    //Fazer iniciar o tempo
}

function responder() {
    var resposta = document.getElementsByName('optionRadios')[0].value;
    if(parteCorpoSelecionada.questoes.find(x => x.pergunta == perguntaSelecionada.id).alternativa == resposta){
        contaPonto(10);
    } 
}


