const promedio = parseFloat(prompt("Ingresa tu promedio:"));

// Validamos el promedio y calculamos el valor de la matrícula
let matricula = 1000000;
if (promedio < 3) {
    // Si el promedio es menor a 3, no se le descuenta nada
    console.log("No tienes descuento en la matrícula.");
} else if (promedio >= 3 && promedio <= 4) {
    // Si el promedio está entre 3 y 4, se le descuenta el 5%
    const descuento = matricula * 0.05;
    matricula -= descuento;
    console.log(`Tu matrícula con descuento es: ${matricula}`);
} else {
    // Si el promedio es mayor que 4, se le descuenta el 50%
    const descuento = matricula * 0.5;
    matricula -= descuento;
    console.log(`Tu matrícula con descuento es: ${matricula}`);
}