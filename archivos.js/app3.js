/*
Promedio de tres notas
• Solicita tres calificaciones.
• Calcula y muestra el promedio.
*/

console.log("programa para calcular la nota.")

let nota1 = parseFloat(prompt("ingresar nota1: "))
let nota2 = parseFloat(prompt("ingresar nota2: "))
let nota3 = parseFloat(prompt("ingresar nota3: "))

let acumulado = (nota1 + nota2 + nota3) / 3;

console.log("su nota es: " + acumulado);
