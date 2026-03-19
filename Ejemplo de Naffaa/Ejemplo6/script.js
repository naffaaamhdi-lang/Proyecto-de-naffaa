let cont = 0;

function actualizarContador() {
    document.getElementById("contador").innerText = cont;
}

function incrementar() {
    cont++;
    actualizarContador();
}

function decrementar() {
    cont--;
    actualizarContador();
}