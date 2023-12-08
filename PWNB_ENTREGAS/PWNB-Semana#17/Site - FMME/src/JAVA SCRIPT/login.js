document.addEventListener("DOMContentLoaded", function () {

    function logar() {

        var fmEmail = document.getElementById("email").value; 
        var fmSenha = document.getElementById("senha").value;

        var cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];

        var usuarioEncontrado = cadastros.find(function (usuario) {

            return usuario.email === fmEmail && usuario.senha === fmSenha;

        });

        if (usuarioEncontrado) {

            swal("Obrigado", "Login Concluído!", "success");
            
            localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
            window.location.href = "principal.html";

        } else {

            swal("Atenção", "Erro no Login!", "error");

        }
        
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
