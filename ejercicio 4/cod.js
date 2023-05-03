
//realizamos el menú de opciones

let menú = [
    { plato: "Arroz chino", precio: 25.000 },
    { plato: "Malteada", precio: 6.000 },
    { plato: "Hamburguesa", precio: 12.300 },
    { plato: "Cuy", precio: 180.000 },
    { plato: "Pasta", precio: 18.600 }
]



function solcitarComida() {
    let peticiónPlatoUsuario = document.querySelector("#platoUsuario")
    let precioActual = 0
    if (localStorage.getItem("total_cuenta") != null) {
        precioActual = localStorage.getItem("total_cuenta")
    } else {
        localStorage.setItem("total_cuenta", precioActual)
    }
    menú.forEach((opciónMenú) => {
        if (peticiónPlatoUsuario.value == opciónMenú.plato) {
            precioActual = parseInt(precioActual) + opciónMenú.precio
        }
        localStorage.setItem("total_cuenta", precioActual)
        Swal.fire({
            icon: 'success',
            title: 'Su plato fue agregado a la orden con éxito.',
        } else {
            
        }
        )
    })


    if (peticiónPlatoUsuario.value != 'pagar') {
        menubar.forEach((opciónMenú) => {
            if (peticiónPlatoUsuario.value == opciónMenú.plato) {
                precioActual = parseInt(precioActual) + opciónMenú.precio
            }
        })
    } else {
        document.querySelector("#totalCuentaUsuario").innerHTML = "El total a pagar es: $" + localStorage.getItem("")
    }

    localStorage.setItem("total_cuenta", precioActual)

}