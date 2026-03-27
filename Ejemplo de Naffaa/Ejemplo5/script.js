function agregarElemento(){
    const itemText = document.getElementById("item").value;
    if(itemText.trim() === "") return; // Evita agregar elementos vacíos

    const listItem = document.createElement("li");
    listItem.innerText = itemText;

    document.getElementById("lista").appendChild(listItem);

    // Limpiar el input
    document.getElementById("item").value = "";
}