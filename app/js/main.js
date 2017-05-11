function abreFechaRanking(){
    var lrank = document.getElementById('listaRank');
    lrank.classList.toggle('abreFechaRank');
}

var perguntas = [
    {id: 1, pergunta:'Qual o nome do musculo selecionado?', respostas:
        [
            {alt: 'a', resp:"Biceps braquial"},
            {alt:'b', resp:"Triceps braquial"},
            {alt: 'c', resp:"Deltoid"},
            {alt: 'd', resp:"Extensor"}
        ]
    },
    {},
    {}
];

var perguntaSelecionada = undefined;
var parteCorpoSelecionada = undefined;

var parteCorpo = [
    {id: 1, questoes:[
        {pergunta:1, alternativa: 'a'},
        {pergunta:2, alternativa: 'b'},
        {pergunta:3, alternativa: 'c'}
    ]},
    {id: 2, questoes:[
        {pergunta:1, alternativa: 'a'},
        {pergunta:2, alternativa: 'b'},
        {pergunta:3, alternativa: 'c'}
    ]},
    {id: 3, questoes:[
        {pergunta:1, alternativa: 'a'},
        {pergunta:2, alternativa: 'b'},
        {pergunta:3, alternativa: 'c'}
    ]},
    {id: 4, questoes:[
        {pergunta:1, alternativa: 'a'},
        {pergunta:2, alternativa: 'b'},
        {pergunta:3, alternativa: 'c'}
    ]},
];

function selecionaParteDoCorpo(id) {

    var rand = Math.floor( Math.random() *perguntas.length + 1 ) +1;

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
    var idDoCorpo = document.getElementById()
    
   if(parteCorpoSelecionada.questoes.find(x => x.pergunta == perguntaSelecionada.id).alternativa == resposta){
        contaPonto();
   }


   
 
}


