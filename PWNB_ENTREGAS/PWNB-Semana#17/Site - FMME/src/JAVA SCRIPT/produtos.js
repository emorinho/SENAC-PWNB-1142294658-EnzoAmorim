function comprar() {
    
    Swal.fire({

        title: "Sucesso!",
        text: "Compra Realizada...",
        icon: "success"

      });

}

document.addEventListener("DOMContentLoaded", function () {
    
    var btnCompra = document.querySelector(".btn-comprar");

    btnCompra.addEventListener("click", function (e) {

        e.preventDefault();
        comprar();

    });
});
