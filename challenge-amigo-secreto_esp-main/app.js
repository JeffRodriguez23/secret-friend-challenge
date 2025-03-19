// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//declarar el array donde se ingresaran los nombres de los participantes
let listaAmigos = [];

// Función para agregar nombres al array de participantes

let amigos = [];

//funcion para agregar amigos al juego
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    limpiarLista();
    actualizarLista();
    input.value = ""; //con esto limpiamos el input para poder ingresar un nuevo nombre 
}

//funcion para actualizar la lista
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

//funcion para realizar el sorteo 
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let li = document.createElement("li");
    li.textContent = "Amigo sorteado: " + amigoSorteado;
    resultado.appendChild(li);
}

//funcion que limpia la lista
function limpiarLista() {
    document.getElementById("listaAmigos").innerHTML = "";
}

//funcion para volver a realizar otro sorteo
function reiniciarJuego() {
    amigos = [];
    limpiarLista();
    document.getElementById("resultado").innerHTML = "";
}


