"use strict";

// Descripcion de los tipos
const descripcion_agua = "Los Pokémon tipo agua se dice que son puro y que suelen adaptarse a cualquier situación o condición climática, ya que el agua puede adoptar cualquier forma en cualquier momento. Por ejemplo, en un vaso adopta una forma, mientras que, en un cubo, adopta otra distinta. Por eso, los Pokémon de tipo agua se sienten a menudo libres en cualquier sitio donde haya agua a su disposición."
const descripcion_planta = "Los Pokémon de tipo planta suelen ser pacíficos y les gusta cuidar de las flores y a los demás, pero también son grandes luchadores y pueden envenenar, paralizar o dormir al rival en combate"
const descripcion_electrico = "Los Pokémon de tipo eléctrico tienen hábitats variados, desde bosques y praderas, hasta ciudades y centrales eléctricas. Los Pokémon de tipo dragón, eléctrico y planta son resistentes al tipo eléctrico, y aún más los de tipo tierra, quienes son inmunes a los ataques eléctricos. Por consiguiente, los Pokémon eléctricos deben de ser muy precavidos con los ataques de tipo tierra, el cual representa su única debilidad."
const descripcion_normal = "Los Pokémon de tipo normal abarcan la mayor cantidad y variedad de movimientos que el resto de tipos. Gran parte de estos son movimientos que no realizan daño o no lo hacen directamente, sino que afectan a las características o estados del Pokémon. Los tipos normal son los más diversos entre los Pokémon, con características variadas, desarrollos y requisitos para las evoluciones diferentes de cada uno, al igual que diferir en las zonas donde se pueden capturar, desde bosques, cuevas, montañas, ciudades, etc."
const descripcion_fuego = "Los Pokémon de tipo tipo fuego basan sus ataques, principalmente, en el control de este elemento; y la mayoría pueden quemar al Pokémon oponente, mientras que ellos no sufren quemaduras. Son apasionados y, algunos, de mal carácter (como el Charizard de Ash); viven en cuevas o zonas rocosas y muy áridas; y, más probable, aun cerca de volcanes activos. Sin embargo, los únicos Pokémon que aparentemente suelen andar por lugares verdes como las praderas, son Ponyta y Rapidash, pudiendo ser que estos lugares les permiten galopar sin obstáculos. También, algunos son más dóciles, como Growlithe, Vulpix y sus respectivas evoluciones."

/* Comienza a escribir su código aquí */

const btnPlanta = document.querySelector("#btnPlanta", ".planta")


btnPlanta.addEventListener("click", function () {
let titulo = document.querySelector(".header")
    titulo.textContent="Tipo Planta"

let p = document.querySelector("#descripcion")
    p.textContent=(descripcion_planta)

let imagen = document.querySelector("img", ".icon-type")
    imagen.setAttribute("src", "./images/grass_type.png")

let classe = document.querySelector("article", ".planta")
    classe.classList.add("planta")

   console.log(btnPlanta)
})


console.log()

const aqua = document.querySelector("#btnAgua", ".agua")

aqua.addEventListener("click", function () {
 let titulo = document.querySelector("div", ".header")
    titulo.textContent="Tipo Agua"

 let fondo = document.querySelector("article" , ".planta")
    fondo.classList.remove("planta")
    fondo.classList.add("agua")

 let desc= document.querySelector("p", "#descripcion")
    desc.textContent=(descripcion_agua)

 let imagen = document.querySelector("img", ".icon-type")
    imagen.setAttribute("src", "./images/water_type.png")
})

let electro = document.querySelector("#btnElectricidad", ".electricidad")

electro.addEventListener("click", function () {
 let titulo = document.querySelector("div", ".header")
   titulo.textContent="Tipo Electricidad"

 let fondo1= document.querySelector("article" , ".planta")
    fondo1.classList.remove("planta")
   fondo1.classList.add("electricidad")

 let descrip = document.querySelector("p", "#descripcion")
    descrip.textContent=(descripcion_electrico)

let imagen = document.querySelector("img", ".icon-type")
    imagen.setAttribute("src", "./images/electric_type.png")
})

const normal = document.querySelector("#btnNormal", ".normal" )

normal.addEventListener("click" , function (){
 let titulo = document.querySelector("div", ".header")
      titulo.textContent="Tipo Normal"

let descrip = document.querySelector("p" , "#descripcion")
  descrip.textContent=(descripcion_normal)

let imagen = document.querySelector("img", ".icon-type")
   imagen.setAttribute("src" ,"./images/normal_type.png")

 let fondo2 = document.querySelector("article",".planta")
    fondo2.classList.remove("planta")
    fondo2.classList.add("normal")    
 })

const fuego = document.querySelector("#btnFuego", ".fuego")

fuego.addEventListener("click", function(){
let titulo = document.querySelector("div", ".header")
    titulo.textContent="Tipo Fuego"

let fondo3 = document.querySelector("article" , ".planta")
    fondo3.classList.remove("planta")
    fondo3.classList.add("fuego")

let descrip = document.querySelector("p", "#descripcion")
    descrip.textContent=(descripcion_fuego)

let imagen = document.querySelector("img, .icon-type")
    imagen.setAttribute("src", "./images/fire_type.png")
})

let plant = document.querySelector("article", ".planta")

plant.addEventListener("click", function (){
    let plantaa = document.querySelector("article", ".planta")
})

// let title = document.querySelector(".header")





