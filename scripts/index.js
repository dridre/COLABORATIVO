let cartasLevantadas = 0

function changeImage() {

    if (document.getElementById("image").src = "/images/cuadrado.png") {
        document.getElementById("image").src = "/images/rojo.png";
    }
    else if(document.getElementById("image").src = "/images/rojo.png"){
        document.getElementById("image").src = "/images/cuadrado.png";
    }
    cartasLevantadas = cartasLevantadas + 1
    console.log(cartasLevantadas)

}


let pareja = prompt("Introduce el numero de parejas")
let parejas = parseInt(pareja) * 2
console.log(parejas)
let division = parseInt(pareja)
console.log(division)
//Por Samuel


let imagenes = document.querySelector("div.conjunto")
let imagenes2 = document.querySelector("div.conjunto2")

let rojo = "/images/cuadrado.png"

for (let index = parejas; index > division; index--) {
    imagenes.innerHTML += '<img src="/images/cuadrado.png" alt="" onclick="changeImage()" id="image">'

    console.log("hola")

}
for (let index2 = division; index2 > 0; index2--) {
    console.log(index2)

    imagenes2.innerHTML += '<img src="/images/rojo.png" alt="" onclick="changeImage()" id="image" class="">'

    console.log("hola")


}

function insertarImagen() {


}
