/*
Conversión de temperatura
• Solicita una temperatura en Celsius.
• Convierte a Fahrenheit usando la fórmula: F = (C × 9/5) + 32.
*/

console.log("conversion de temperatura");

let gradosc = parseFloat(prompt("ingresar la temperatura grados celcius: "));


let gradosf = (gradosc * 1.8) + 32;

console.log("la temperatura es: " + gradosc + " equivale a: " + gradosf.toFixed(2) + "°F");

