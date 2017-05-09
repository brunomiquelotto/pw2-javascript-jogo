function abreFechaRanking(){
    var lrank = document.getElementById('listaRank');
    lrank.classList.toggle('abreFechaRank');
}

var perguntas = [
    {id: 1, pergunta:'Qual seu nome?', altA: "Biceps braquial", altB: "Triceps braquial", altC: "Deltoid", altD:"Extensor"},
    {},
    {}
];

var parteCorpo = [
    {id: 1, resp1: 'a', resp2: 'b', resp3: 'c'},
    {id: 2, resp1: 'b', resp2: 'c', resp3: 'd'},
    {id: 3, resp1: 'c', resp2: 'd', resp3: 'a'},
    {id: 4, resp1: 'd', resp2: 'a', resp3: 'b'},
];

function selecionaParteDoCorpo(id) {
    var p = perguntas.find(x => x.id == id);
    console.log(p.altA);
    document.getElementById('resp1').innerText = p.altA;
    rb = document.getElementById('resp2');
    rb = document.getElementById('resp3');
    document.getElementById('resp4').innerHTML = p.altD;
}


