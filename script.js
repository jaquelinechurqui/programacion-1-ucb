let lista = [];
let ListaObjeto = [];

function mostrarNombre() {
  let nombre = document.getElementById("input").value;
  let resultado = document.getElementById("resultado");
  resultado.textContent = nombre.trim() === "" ? "Por favor, escribe tu nombre." : "Hola, " + nombre;
}

function InsertarLista() {
  let valorAleatorio = Math.floor(Math.random() * 10);
  lista.push(valorAleatorio);
  actualizarListaVisual(); // ← se asegura que se vea
}

function EliminarElementoLista() {
  let input = Number(document.getElementById("inputEliminar").value);
  lista = lista.filter(num => num !== input); // ← elimina todos los iguales
  actualizarListaVisual();
}


function actualizarListaVisual() {
  let contenedor = document.getElementById("lista-contenedor");
  contenedor.innerHTML = "";
  lista.forEach(num => {
    let btn = document.createElement("button");
    btn.textContent = num;
    btn.className = "boton-lista"; // ← estilo visual
    contenedor.appendChild(btn);
  });
}

function MostrarHabilitadosOEP() {
  let output = document.getElementById("funciones-output");
  output.innerHTML = ""; // ← limpia antes de mostrar
  ListaObjeto.forEach(est => {
    if (est.edad >= 18) {
      let p = document.createElement("p");
      p.textContent = est.nombre + " está habilitado para votar.";
      output.appendChild(p);
    }
  });
}

function MostrarNombre() {
  let output = document.getElementById("funciones-output");
  output.innerHTML = ""; // ← limpia antes de mostrar
  ListaObjeto.forEach(est => {
    let p = document.createElement("p");
    p.textContent = est.nombre + " nació en " + (2025 - est.edad);
    output.appendChild(p);
  });
}

function AddEstudiante() {
  let nombre = document.getElementById("input_name").value;
  let edad = Number(document.getElementById("input_edad").value);
  let correo = document.getElementById("input_correo").value;
  let carrera = document.getElementById("input_carrera").value;
  let telefono = document.getElementById("input_phone").value;

  if (edad >= 18) {
    ListaObjeto.push({ nombre, edad, correo, carrera, telefono });
    crearTabla(ListaObjeto); // ← actualiza tabla
  }
}

function crearTabla(datos) {
  let tablaHTML = "<table><thead><tr><th>Nombre</th><th>Edad</th><th>Correo</th><th>Carrera</th><th>Teléfono</th></tr></thead><tbody>";
  datos.forEach(est => {
    tablaHTML += `<tr>
      <td>${est.nombre}</td>
      <td>${est.edad}</td>
      <td>${est.correo}</td>
      <td>${est.carrera}</td>
      <td>${est.telefono}</td>
    </tr>`;
  });
  tablaHTML += "</tbody></table>";
  document.getElementById("tabla-container").innerHTML = tablaHTML;
}

