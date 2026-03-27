function agregar(){

    const tabla = document.getElementById("tabla");

    const fila = tabla.insertRow();
    const celda1 = fila.insertCell(0);
    const celda2 = fila.insertCell(1);

    celda1.innerText = document.getElementById("nombre").value;
    celda2.innerText = document.getElementById("edad").value;

    // Limpiar inputs
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";

}