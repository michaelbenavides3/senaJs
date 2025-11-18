/*
Conversión de monedas
• Solicita un valor en pesos colombianos.
• Convierte a dólares (suponiendo 1 USD = 4000 COP).
*/

console.log("convertidos de pesos a dolar ");

let pesos = parseInt(prompt("ingrese la cantidad de pesos: "))
let dolar = 4000;

let convertir = pesos / dolar;

console.log("su total es: " + convertir);

