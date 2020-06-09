
$("#campo").keypress(function(){
	
});

var altura = 400;
var largura = 100;


$("#campo").keydown(function(evento){

	if (largura >= 900 && altura >= 300) {
		alert('Você atingiu seu objetivo!')
	}

	if (evento.which == 37) {

		alert("Tem que andar para trás!");
		$("#cachorro").css("margin-left", largura);
		largura = largura -10;
	}

    if (evento.which == 38) {
    
    	alert("Tem que subir!");
    	$("#cachorro").css("margin-top", altura);
    	altura = altura - 10;
    }
	
	if (evento.which == 39) {

		alert("Tem que ir para frente!");
		$("#cachorro").css("margin-left", largura);
		largura = largura + 10;
	}

	if (evento.which == 40) {

		alert("Tem que descer!");
		$("#cachorro").css("margin-top", altura);
    	altura = altura + 10;
	}


});

$("#campo").keyup(function(){
	
});