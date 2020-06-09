var distancia = 200;

$('#botao-pular-cima').click(function(){
    $('#sapo').css('margin-top','300px');
    $('#sapo').css('margin-left',distancia);
    distancia = distancia + 50;
    if (distancia > 1200) {
		distancia = 50
    }
    
});

$('#botao-pular-baixo').click(function(){
    $('#sapo').css('margin-top','400px');
    $('#sapo').css('margin-left',distancia);
    distancia = distancia + 50;
    
    
    
});