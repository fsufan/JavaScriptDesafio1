var precio = 400000;

//Input
var inputCantidad = document.querySelector("input[type='number']");
var inputColor = document.querySelector("input[type='text']");  

//Totales
var precioFinal = document.querySelector(".valortotal");
var cantidadFinal = document.querySelector(".cantidadtotal");
var colorFinal = document.querySelector(".color div");

//Funcion

function calcularTotal() {
    var cantidad = inputCantidad.value;
    var color = inputColor.value;

    precioFinal.innerHTML = (precio * cantidad).toLocaleString();
    cantidadFinal.innerHTML = cantidad;
    colorFinal.style.backgroundColor = color; 

}