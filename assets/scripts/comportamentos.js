
//Adicionando evneto para capturar qualquer click  na tela
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.addEventListener('click',(e)=>{
    //verifica se o botão clickado foi o do tela de email
    let formulario=document.querySelector('form');
    if(e.target.id==='botao-recuperar'&&formulario.checkValidity()){
        e.preventDefault();
        alternaTela();
    }


    else if(e.target.id==='botao-redefinir'){
        e.preventDefault();
        let botao=e.target;
        if(formulario.checkValidity()){
            botao.setAttribute('data-bs-toggle','modal');
            botao.setAttribute('data-bs-target','#exampleModal');
            botao.click();
            return;
        }
      
    }

    else if(e.target.id==='botao-modal-redefinir'){
        window.location.href='./page_log.html';
    }


    else if(e.target.id==='botao-cadastro'){
        e.preventDefault();
        let botao2=e.target;
        if(formulario.checkValidity()){
            botao2.setAttribute('data-bs-toggle','modal');
            botao2.setAttribute('data-bs-target','#exampleModal');
            botao2.click();
            return;
        }
        else{
            clicaInput();
            return;
        }
        
   


    }

    else if(e.target.id==='botao-modal-cadastro'){
        window.location.href='./Servicos.html';
        return;

    }

    

    

    
});


function alternaTela(){
    //declarando variaveis que serão utilizadas
    let contEmail=document.getElementById('cont');
    let contCode=document.getElementById('cont2');
    let emailCLiente=document.getElementById('inputEmail4').value;
    let textCode=document.getElementById('text-code').innerText;
    let newText=criptoEmail(emailCLiente);

    document.getElementById('text-code').innerText=textCode+''+ newText;
    contEmail.classList.remove('d-flex');

    contEmail.classList.add('d-none');
    contCode.classList.remove('d-none');
    contCode.classList.add('d-flex');  

    document.getElementById('inputEmail4').value='';    
    return;

}

//funcao que omite alguns caracteres do email do cliente para exibição na tela
function criptoEmail(value){
    let pos=value.indexOf('@');
    let newValue=value.split('');

    for(let i=1;i<=pos;i++){
        newValue[i]='*'
    }
    return newValue.join('');


}


//força o erro apra que o formulário exiba os campos invalidos
function clicaInput(){

    const fields=document.querySelectorAll('input');    
    fields.forEach(input=>{
        input.focus();
        input.blur();
        

    });
    


}

