function logar(){

    var login = document.getElementById( 'nome' ).value;
    var senha = document.getElementById( 'senha' ).value;

    if( login == "adm" && senha == "adm" ){

        alert( 'Sucesso!!!' );
        location.href = "principal.html";

    }

    else{

        alert( 'Usuário ou Senha Incorretos...' );

    }

}

function cadastrar(){

    location.href = "cadastro.html";

}