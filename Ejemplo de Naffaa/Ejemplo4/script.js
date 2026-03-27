function ocultarMostrar(){

    let elemento = document.getElementById("color");
    let boton = document.getElementById("boton");

    if(elemento.className === "mostrar"){
        elemento.className = "ocultar";
        boton.innerText = "MOSTRAR";
    }else{
        elemento.className = "mostrar";
        boton.innerText = "OCULTAR";
    }

}