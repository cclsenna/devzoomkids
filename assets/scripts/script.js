 //Criando evento para auto preenchimento quando fora de foco;
 $('#cep').on('focusout', function(event){
    event.preventDefault();
    buscaCep();
 });

 //Declarando a função buscaCep, que faz a solicitação à API;
function buscaCep() {
    let cep = $('#cep').val().replace(/\D/g,'');
    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        method: 'GET',
        
//Caso tenha sucesso ele busca o (parametro);
        success: function(parametro){

//Realiza a manipulação de DOM, preenchendo os campos;
        $('#estado').val(parametro.uf);
        $('#cidade').val(parametro.localidade);
        $('#bairro').val(parametro.bairro);
        $('#rua').val(parametro.logradouro);

        },
//Tratamento de ERRO;
        error: function(){

        }
    })
};