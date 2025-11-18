/*
Salario semanal
• Solicita el número de horas trabajadas y el valor por hora.
• Calcula el salario semanal.
*/

console.log("calcular salario");

let horas = parseInt(prompt("ingrese el numero de horas: "));
let valor = parseInt(prompt("ingrese el valor por hora: "));

let subtotal = horas * valor;

let semana = parseInt(prompt("ingresar el numero de semana: "))

let total = semana * subtotal;

console.log("su salario es: " + total);

