
//Função para verificar o tipo de input e fazer a manipulação de DOM caso encontre algum erro.

export function valida(input) {
        const tipoDeInput = input.dataset.tipo
        //Verifica se existe alguma condição especial para o preenchimento do imput.

        if (validadores[tipoDeInput]) {
                validadores[tipoDeInput](input);
        };

        //Verifica o atributo (.valid) do objeto input, caso seja TRUE, remove a classe de erro (form-group--invalido).

        if (input.validity.valid) {
                input.parentElement.classList.remove('form-group-erro');
                input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';

                //Caso encontre o erro de imput ou o erro de função, adiciona a classe de erro (form-group--invalido).

        } else {
                input.parentElement.classList.add('form-group-erro');
                input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input);
        };
};

//Objeto contendo a lista de erros.

const tiposDeErro = [
        'valueMissing',
        'typeMismatch',
        'patternMismatch',
        'customError'
] 

//Objeto contendo as mensagens de erro.

const mensagensDeErro = {
        nomeResponsavel: {
                valueMissing: 'O campo de nome do responsavel não pode estar vazio.'
        },
        
        nomeAluno: {
                valueMissing: 'O campo nome não pode estar vazio.'
        },

        email: {
                valueMissing: 'O campo de email não pode estar vazio.',
                typeMismatch: 'O email digitado não é válido.'
        },

        senha: {
                valueMissing: 'O campo de senha não pode estar vazio.',
                patternMismatch: 'A senha deve conter entre 6 a 30 caracteres, deve conter pelo menos um número e não deve conter simbolos.'
        },

        confirmarSenha: {
                valueMissing: 'O campo de confirmação de senha não pode estar vazio.',
                customError: 'As senhas devem ser iguais.'
        },

        rg: {
                valueMissing: 'O campo de RG não pode estar vazio.',
                customError: 'O RG digitado é inválido'
        },

        cep: {
                valueMissing: 'O campo de CEP não pode estar vazio.',
                customError: 'O CEP digitado é inválido'
        },

        numero: {
                valueMissing: 'O campo de numero não pode estar vazio.'
        },

        complemento: {
                valueMissing: 'O campo de complemento não pode estar vazio.'
        },


};

//Objeto para erros de função ou com funções específicas.

const validadores = {
        confirmarSenha: input => validadorDeSenha (input),

};

//Função para selecionar dentro dos objetos o erro e o tipo de erro, retornando o valor da mensagem,
function mostraMensagemDeErro(tipoDeInput, input) {
        let mensagem = '';
        tiposDeErro.forEach(erro => {
                if (input.validity[erro]) {
                        mensagem = mensagensDeErro[tipoDeInput][erro];
                }
        });

        return mensagem;
}

//Criando evento para auto preenchimento quando fora de foco;
 $('#inputZip').on('focusout', function (event) {
        event.preventDefault();
        buscaCep();
}); 
 
//Declarando a função buscaCep, que faz a solicitação à API;
function buscaCep() {
        let cep = document.querySelector('#inputZip').value.replace(/\D/g, '');
        $.ajax({
                url: `https://viacep.com.br/ws/${cep}/json/`,
                method: 'GET',

                //Caso tenha sucesso ele busca o (parametro);
                success: function (parametro) {

                        //Realiza a manipulação de DOM, preenchendo os campos;
                        $('#inputState').val(parametro.uf);
                        $('#inputCity').val(parametro.localidade);
                        $('#inputBairro').val(parametro.bairro);
                        $('#inputRua').val(parametro.logradouro);

                },
                //Tratamento de ERRO;
                error: function () {

                }
        })
};


function validadorDeSenha (input){
        const senha = document.querySelector('#inputPassword4').value;
        const confirmaSenha = input.value;
        const erro = document.querySelector('.erroTeste');
        if (senha === confirmaSenha) {
                /* erro.style.display = 'none';
                erro.innerText = ''; */
                test = true;
                
        } else {
                /* erro.style.display = 'block';
                erro.innerText = 'As senhas não conferem.';    */
                test = false;     
        };

}

let test = true;
document.querySelector('.btn').onclick = (event) =>{
        
        if (!test){
                event.preventDefault();
                
        } else {
                alert('Cadastrado com sucesso');
        };
}