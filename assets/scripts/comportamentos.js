
//Adicionando evneto para capturar qualquer click  na tela


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

    

    
});


function alternaTela(){
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

//funcao que omite alguns caracteres do email do cliente
function criptoEmail(value){
    let pos=value.indexOf('@');
    let newValue=value.split('');

    for(let i=1;i<=pos;i++){
        newValue[i]='*'
    }
    return newValue.join('');


}

