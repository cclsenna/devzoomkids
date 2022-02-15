
//altera a exiibção das divs na tela de recuperação de senha
export function alternaTela(){
    let contEmail=document.getElementById('cont');
    let contCode=document.getElementById('cont2');
    let emailCLiente=document.getElementById('inputEmail4').value;
    let textCode=document.getElementById('text-code').innerText;
    let newText=criptoEmail(emailCLiente);

    //insere na tela o valor o email do  cliente "escondido"
    document.getElementById('text-code').innerText=textCode+''+ newText;

    //faz a alternancia entre as divs
    contEmail.classList.remove('d-flex');
    contEmail.classList.add('d-none');
    contCode.classList.remove('d-none');
    contCode.classList.add('d-flex');
    document.getElementById('inputEmail4').value='';    
    return;

}



//funcao que omite alguns caracteres do email do cliente para exibição na tela
export function criptoEmail(value){
    let pos=value.indexOf('@');
    let newValue=value.split('');

    for(let i=1;i<=pos;i++){
        newValue[i]='*'
    }
    return newValue.join('');


}


//força o erro apra que o formulário exiba os campos invalidos
export function clicaInput(){
    const fields=document.querySelectorAll('input');    
    fields.forEach(input=>{
        input.focus();
        input.blur();      

    });
    


}

//adiciona as classes  para que o modal apareça.
export function setModal(botao){
    botao.setAttribute('data-bs-toggle','modal');
    botao.setAttribute('data-bs-target','#exampleModal');
    return;
    
}
           