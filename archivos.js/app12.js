/*
5. Tiempo de viaje
• Solicita la distancia de un recorrido (km) y la velocidad promedio (km/h).
• Calcula el tiempo estimado del viaje en horas.
*/


console.log("calcular tiempo de viaje");

let recorrido = parseFloat(prompt("ingresar la distancia recorrida: " + "km"));
let velocidad = parseFloat(prompt("ingresar la velocidad: "))

let calcularTiempo = recorrido / velocidad;

console.log("el tiempo estimado es: " + calcularTiempo + " horas");

