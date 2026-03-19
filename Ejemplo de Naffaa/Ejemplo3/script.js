function cambiarColor(){

    let elemento = document.getElementById("color");

    if(elemento.className == "rojo")
        elemento.className = "agua";
    else
        elemento.className = "rojo";

}