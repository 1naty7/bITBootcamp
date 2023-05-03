let nombre = prompt("Ingrese su nombre"); //el usuario ingresará su nombre.
let edad = prompt("Ingrese su edad"); //el usuario ingresará su edad.
let género = prompt("¿Eres hombre o mujer?"); //el usuario ingresará su edad.

if (edad <= 10) {
    console.log(`${nombre}, por favor, reclame un jugo en caja.`);
} else if (edad >= 18) {
    if (género === "hombre") {
        console.log (`${nombre}, por favor, reclame una cerveza y una porción de pizza tres
        carnes en caja.`)
    } else if (género === "mujer") {
        console.log(`${nombre}, por favor, reclame una cerveza y una porción de pizza Hawaiana.`)
    }
} else {
    console.log(`${nombre}, desafortunadamente no recibiste ningún premio`)
}
