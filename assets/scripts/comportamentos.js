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
    //verifica se o botão clickado foi o do modal 1
    if(e.target.id==='botao-modal-recuperar'){
        window.location.href = "./redefinir_Senha.html";

    }
    //verifica se o botão clickado foi o do modal 2

    else if(e.target.id==='botao-modal-redefinir'){
        window.location.href = "./index.html";
    }

});

