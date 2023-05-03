
function añadirProducto() {
    let producto = document.querySelector("#producto");
    console.log("el producto fue añadido")
}
function pagarMercado() {
    let productoMercado = document.querySelector("#productoMercado");
    if (productoMercado == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: 'Agrega los productos que desees adquirir.',
        })
    } else {

    }
}