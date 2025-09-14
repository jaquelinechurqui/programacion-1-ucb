let lista = []; // Aquí se guardan los números que vas insertando


function saludar (){
    const nombre = document.getElementById("nombreInput").value;
    const resultado = document.getElementById("saludoResultado");

    if (nombre.trim() === "") {
        resultado.textContent =  "Estimado usuario, escribe tu nombre";
    } else {
        resultado.textContent = "Hola, " + nombre + " 👋";
    }
}

function insertarNumero(){
    var numero = Math.floor( Math.random () * 10);
    }

