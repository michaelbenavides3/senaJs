/*
Conversión de minutos a horas y minutos
• Solicita un número de minutos.
• Convierte a formato: “X horas y Y minutos”.
*/

console.log("convertir minutos a horas");

let minutos = parseFloat(prompt("ingresar los minutos: "))

//calculamos cuantas horas caben dentro de los mintuos
//con math.floor busca redondear el resulado
let horas = Math.floor(minutos / 60);

//calculamos los minutos restantes con %
let total = minutos % 60;

console.log(horas + " horas y " + total + " minutos");

