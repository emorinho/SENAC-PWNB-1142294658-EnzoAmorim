function testeRegex() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    var regNome = /^([A-Za-záàâãéêíóôõúç']+)( )([\w']+)$/;
    var regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var regSenha = /^[a-zA-Z0-9]{8,}$/;

    if (!regNome.test(nome)) {
        swal("Atenção", "Informe um Nome corretamentre!", "warning");
        return false;
    }

    if (!regEmail.test(email)) {
        swal("Atenção", "Informe um Email corretamentre!", "warning");
        return false;
    }

    if (!regSenha.test(senha)) {
        swal("Atenção", "Informe uma Senha corretamentre!", "warning");
        return false;
    }

    return true;
}

document.addEventListener("DOMContentLoaded", function (event) {
    var fmCad = document.getElementById("formularioCad");
    fmCad.addEventListener("submit", function (e) {
        e.preventDefault();

        if (testeRegex()) {
            var fmNome = document.getElementById("nome").value;
            var fmEmail = document.getElementById("email").value;
            var fmSenha = document.getElementById("senha").value;

            var cadastros = [];

            if (localStorage.hasOwnProperty("cadastros")) {
                cadastros = JSON.parse(localStorage.getItem("cadastros"));
            }

            cadastros.push({

                nome: fmNome,
                email: fmEmail,
                senha: fmSenha,

            });

            localStorage.setItem("cadastros", JSON.stringify(cadastros));

            swal("Obrigado", "Cadastro Concluído!", "success");
            window.location.href = "Login.html";

        } else {
            swal("Atenção", "Erro no Cadastro!", "error");
        }
    });
});