/*
1. Factura de compra simple

• Solicita el nombre de un producto, su precio y la cantidad comprada.
• Calcula el total a pagar.
• Muestra: "El total a pagar por [cantidad] [producto] es: [total]".
*/

console.log("factura de compra simple");

let nombre = prompt("ingrese el nombre del producto: ");
let precio = parseFloat(prompt("ingrese el precio del producto: "));
let cantidad = parseInt(prompt("ingrese la cantidad comprada: "))

let total = precio * cantidad;

console.log("su producto es: " + nombre + " la cantidad es: " + cantidad + " su precio es: " + precio + " el total a pagar es: " + total);

