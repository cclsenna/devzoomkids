
//Adicionando evneto para capturar qualquer click  na tela


document.addEventListener('click',(e)=>{
    //let formulario=document.querySelector('.form-pass');

    //verifica se o botão clickado foi o do tela de email   

    if(e.target.id==='botao-recuperar'){
        e.preventDefault();
        alternaTela();
    }  

    
});




function alternaTela(){
    let contEmail=document.getElementById('cont');
    let contCode=document.getElementById('cont2');
    let emailCLiente=document.getElementById('inputEmail4').value;
    contEmail.classList.remove('d-flex');
    contEmail.classList.add('d-none');
    contCode.classList.remove('d-none');
    contCode.classList.add('d-flex');  
    document.getElementById('inputEmail4').value='';
    console.log(emailCLiente);
    
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

