/*
Cálculo de descuento simple
• Solicita el precio de un producto.
• Calcula el precio final con un 10% de descuento.
*/

console.log("calculo descuento");

let precio = parseInt(prompt("ingrese el precio del producto: "));
let descuento = precio * 0.10

let total  = precio - descuento;

console.log("el precio final es: " + total + " el descuento es: " + descuento);
