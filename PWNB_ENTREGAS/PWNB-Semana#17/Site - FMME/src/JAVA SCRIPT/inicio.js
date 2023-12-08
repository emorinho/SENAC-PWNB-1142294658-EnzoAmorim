document.addEventListener("DOMContentLoaded", function () {

    function logar() {

        window.location.href = "login.html";
        
    }

    function cadastrar() {
        
        window.location.href = "cadastro.html";

    }

    var btnLogin = document.querySelector(".btn-login");

    btnLogin.addEventListener("click", function (e) {

        e.preventDefault(); 
        logar();

    });

    var btnCadastrar = document.querySelector(".btn-cadastrar");
    
    btnCadastrar.addEventListener("click", function (e) {

        e.preventDefault();
        cadastrar();

    });
});
