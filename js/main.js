var precio = prompt("Introduce el precio del producto");
var precioConIva;
const iva=21;
precio=parseFloat(precio);
precioConIva=precio+(precio*iva/100);
console.log("Precio:"+precio+"| Precio con Iva:"+precioConIva);
