function mostrarNombre() {
  const nombre = document.getElementById("nombre").value;
  const saludo = document.getElementById("saludo");

  if (nombre.trim() === "") {
    saludo.textContent = "Por favor, escribe tu nombre.";
  } else {
    saludo.textContent = "Hola, " + nombre + " 👋";
  }
}

let lista = [];

function InsertarLista() {
  const contenedor = document.getElementById("resultado");
  const valorAleatorio = Math.floor(Math.random() * 10);
  lista.push(valorAleatorio);

  const nuevoBoton = document.createElement("button");
  nuevoBoton.textContent = valorAleatorio;
  nuevoBoton.classList.add("boton-lista");

  contenedor.appendChild(nuevoBoton);

  setTimeout(() => {
    nuevoBoton.classList.add("visible");
  }, 10);
}

function EliminarLista() {
  const valorEliminar = parseInt(document.getElementById("eliminarValor").value);
  if (isNaN(valorEliminar)) return;

  lista = lista.filter(num => num !== valorEliminar);

  const contenedor = document.getElementById("resultado");
  contenedor.innerHTML = "";

  lista.forEach(num => {
    const boton = document.createElement("button");
    boton.textContent = num;
    boton.classList.add("boton-lista", "visible");
    contenedor.appendChild(boton);
  });
}
