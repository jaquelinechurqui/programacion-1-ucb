function mostrarNombre() {
  const nombre = document.getElementById("nombre").value;
  const resultado = document.getElementById("resultado");

  if (nombre.trim() === "") {
    resultado.textContent = "Por favor, escribe tu nombre.";
  } else {
    resultado.textContent = "Hola, " + nombre + " 👋";
  }
}

let lista = [];

function InsertarLista() {
  const contenedor = document.getElementById("resultado");
  const valorAleatorio = Math.floor(Math.random() * 10);

  lista.push(valorAleatorio);

  // Crear botón dinámico
  const nuevoBoton = document.createElement("button");
  nuevoBoton.textContent = valorAleatorio;
  nuevoBoton.classList.add("boton-lista");

  // Agregar con animación
  contenedor.appendChild(nuevoBoton);

  // Activar animación con clase
  setTimeout(() => {
    nuevoBoton.classList.add("visible");
  }, 10);
}

