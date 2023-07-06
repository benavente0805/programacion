function iniciarjuego(){
    let buttonmascotajugador =document.getElementById("boton-pokemon")
    buttonmascotajugador.addEventListener("click",seleccionarmascotajugador)
}


function seleccionarmascotajugador (){
    let inputCharmander = document.getElementById("charmander")
    let inputbulbasaur = document.getElementById("bulbasaur")
    let inputsquirtle = document.getElementById("squirtle")

    if (inputCharmander.checked){
        alert("elegiste a Charmander")
    } else if (inputbulbasaur.checked){
        alert("elegiste a bulbasaur")
    } else if (inputsquirtle.checked){
        alert("alegiste a squirtle")
    } else {
        alert("escoge un pokemon")

    }
    

}

window.addEventListener("load",iniciarjuego)
