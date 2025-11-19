/*
Promedio de edad en un grupo
• Solicita las edades de 4 personas.
• Calcula el promedio de edad.
*/

console.log("calcular el promedio de edad de un grupo");

let edad1 = parseInt(prompt("ingresar edad1: "));
let edad2 = parseInt(prompt("ingresar edad2: "));
let edad3 = parseInt(prompt("ingresar edad3: "));
let edad4 = parseInt(prompt("ingresar edad4: "));

// ()operacion entre parentesis para darle priorirdad, de lo contrario empieza por la division
let calcular = (edad1 + edad2 + edad3 + edad4) / 4;

console.log("la edad promedio es: " + calcular);

