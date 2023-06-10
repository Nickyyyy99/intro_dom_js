"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

// Enunciado:

// 1)
// Obtener cada uno de los botones utilizando su ID,
// luego cambiar el texto de los botones por:
// PEGAR / COPIAR / CORTAR

// console.log(document)
// let boton1 = document.getElementById("boton1")
// let boton2 = document.getElementById("boton2")
// let boton3 = document.getElementById("boton3")

// boton1.textContent = "PEGAR"
// boton2.textContent = "CORTAR"
// boton3.textContent = "COPIAR"

// console.log(boton1 + " "  + boton2 + " " + boton3)

// 2)
// Obtener todos los botones utilizando la clase "btn",
// luego a todos los botones agregar la clase "agua"
console.log(document)

let btn1 = document.querySelectorAll(".btn")
console.log(btn1)

btn1[0].classList.add("agua")
btn1[1].classList.add("agua")
btn1[2].classList.add("agua")








