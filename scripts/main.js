var ligasTarget = document.getElementById("ligasTarget");
var divisoesTarget = document.getElementById("divisoesTarget");
var ligas = document.getElementById("ligas");
var divisoes = document.getElementById("divisoes");
var myDiv = document.getElementById("Preco");

var precoDivisoesAnteriores = 0;
var precoFinal = 0;
var precoB5Target = 0;
var precoB5Inicial = 0;

var x = new Object();

x["Bronze"] = 18;
x["Prata"] = 23;
x["Ouro"] = 28;
x["Platina"] = 55;
x["Diamante"] = 110;

var y = new Object();
y[1] = "images/diamante.png"
y[2] = "images/platina.png"
y[3] = "images/ouro.png"
y[4] = "images/prata.png"
y[5] = "images/bronze.png"

var calcularPreco = function (){

	var ligaInicial = ligas.options[ligas.selectedIndex].value;
	var divisaoInicial = divisoes.options[divisoes.selectedIndex].value;
	var divisaoTarget = divisoesTarget.options[divisoesTarget.selectedIndex].value;
	var ligaTarget = ligasTarget.options[ligasTarget.selectedIndex].value;
	var textoLigaTarget = ligasTarget.options[ligasTarget.selectedIndex].text;
	var textoLigaInicial = ligas.options[ligas.selectedIndex].text;

	var imagemInicial = document.getElementById("imgInicial");
	var imagemTarget = document.getElementById("imgTarget");

	imagemInicial.src = y[ligaInicial];
	imagemTarget.src = y[ligaTarget];

	precoDivisoesAnteriores = 0;

	for (i=5;i>ligaInicial;i--){
		if(i===5){
			precoDivisoesAnteriores += x["Bronze"] * 5;
		} 
		if(i===4){
			precoDivisoesAnteriores += x["Prata"] * 5;
		}
		if(i===3){
			precoDivisoesAnteriores += x["Ouro"] * 5;
		}
		if(i===2){
			precoDivisoesAnteriores += x["Platina"] * 5;
		}
	}

	precoB5Inicial = precoDivisoesAnteriores + (5 - divisaoInicial) * x[textoLigaInicial];

	precoDivisoesAnteriores = 0;

	for (i=5;i>ligaTarget;i--){
		if(i===5){
			precoDivisoesAnteriores += x["Bronze"] * 5;
		} 
		if(i===4){
			precoDivisoesAnteriores += x["Prata"] * 5;
		}
		if(i===3){
			precoDivisoesAnteriores += x["Ouro"] * 5;
		}
		if(i===2){
			precoDivisoesAnteriores += x["Platina"] * 5;
		}
	}

	precoB5Target = precoDivisoesAnteriores + (5 - divisaoTarget) * x[textoLigaTarget];

	precoFinal = precoB5Target - precoB5Inicial;


	if(precoFinal>=0){
		myDiv.innerHTML = "Preço: R$ " + precoFinal;
	} else {
		myDiv.innerHTML = "O elo final deve ser maior do que o incial!"
	}

	};