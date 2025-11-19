/*
Consumo de gasolina
• Solicita la cantidad de kilómetros recorridos y el consumo por kilómetro
(litros/km).
• Calcula los litros totales consumidos.
*/

console.log("programa de consumo de gasolina");

let kilometros = parseFloat(prompt("ingresar la cantidad de kilometros:  "));
let consumo = parseFloat(prompt("ingresar consumo por litro"));

let consumoTotal = kilometros * consumo;

console.log("el total consumo es: " + consumoTotal + " litros");

