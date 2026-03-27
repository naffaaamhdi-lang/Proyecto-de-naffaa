function cambiarColor(){

    let elemento = document.getElementById("color");

    if(elemento.style.backgroundColor == "red"){
        elemento.style.backgroundColor = "aqua";
    }else{
        elemento.style.backgroundColor = "red";
    }

}