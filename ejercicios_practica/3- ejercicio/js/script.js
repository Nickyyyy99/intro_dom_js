"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener todos los botones utilizando su clase o ID
y asignarle el evento de mouse "click"

Cuando un botón es presionado, se debe agregar la clase
"fuego" al botón (deberá cambiar de color)

*/
console.log(document)
const boton1 = document.getElementById("boton1")

boton1.addEventListener("click", function () {
    boton1.classList.add("fuego")
    console.log("boton1")
})

const boton2 = document.getElementById("boton2")

boton2-addEventListener("click" , function () {
    boton2.classList.add("fuego")
    console.log(boton2)
})

const boton3 = document.getElementById("boton3")

boton3.addEventListener("click" , function (){
    boton3.classList.add("fuego")
    console.log(boton3)
})

