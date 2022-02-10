/*

//redireciona
document.querySelector('#botao-modal-recuperar').addEventListener('click',()=>{
    console.log('entrou em recuperar');
    window.location.href = "./redefinir_Senha.html";
});



//redireciona
document.querySelector('#botao-modal-redefinir').addEventListener('click',()=>{
    console.log('entrou em redefinir');
    window.location.href = "./index.html";
});

*/

//Adicionando evneto para capturar qualquer click  na tela
document.addEventListener('click',(e)=>{
    //verifica se o botão clickado foi o do formulario 1
    let formulario=document.querySelector('.form-pass');
    if(e.target.id==='botao-recuperar'&&formulario.checkValidity()){
        e.preventDefault();
        let a=document.getElementById('emailHelp');
        let b=document.getElementById('emailSuccess');
        a.style.display='none';
        b.style.display='block';
        document.getElementById('inputEmail4').value='';
        return;
        

    }
    //verifica se o botão clickado foi o do mformulario 2

    else if(e.target.id==='botao-redefinir'){
        e.preventDefault();
        window.location.href = "./index.html";
    }

    else if(e.target.id==='botao-recuperar'){
        e.preventDefault();
        console.log(e.target);
    }

});

