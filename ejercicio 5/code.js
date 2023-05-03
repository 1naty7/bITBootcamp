// Pedimos al usuario que ingrese un número
const numero = parseInt(prompt("Ingresa un número:"));

// Verificamos si el número ingresado es válido
if (!isNaN(numero)) {
    // Mostramos la tabla de multiplicar y calculamos el total
    let total = 0;
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
        total += resultado;
    }

    // Mostramos el total de las multiplicaciones
    console.log(`Total: ${total}`);
} else {
    console.log("El valor ingresado no es un número válido.");
}











