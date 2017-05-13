//Jogador = {nome: "Nome", ra:"94426", pontos}; Estrutura do objeto jogador
var ranking = [];
var maximoJogadoresRanking = 5;

function addNovoJogador(jogador) {
	ranking.push(jogador);
	ordenaRanking();
	if (ranking.length > maximoJogadoresRanking) ranking.pop();
	modificaHTML('listaRank');
}

function ordenaRanking() {
	ranking.sort(function(a, b) {
		return b.pontos - a.pontos;
	});
}

function modificaHTML(id) {
	var lista = document.getElementById(id);
	lista.innerHTML = "";
	ranking.forEach(function(jogador,index) {
		var element = document.createElement("li");
		var span1 = document.createElement("span");
		span1.innerText = jogador.nome + ' ' + jogador.ra;
		span1.className += 'rnome';
		element.appendChild(span1);
		var span2 = document.createElement("span");
		span2.innerHTML = jogador.pontos;
		span2.className += 'rpontos';
		element.appendChild(span2);
		lista.appendChild(element);
	});
}