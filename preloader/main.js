$(document).ready(function () {
	//Exibe a DIV
	$("#divCarregando").show();
    $(window).load(function () {
        // Quando a página estiver totalmente carregada, esconde a DIV
        $('#divCarregando').fadeOut('slow');
    });
});