function mostrarNombre() {
  const nombre = document.getElementById("input").value;
  const saludo = document.getElementById("saludo");

  saludo.textContent = nombre.trim() === ""
    ? "Por favor, escribe tu nombre."
    : "Hola, " + nombre + " 👋";
}

var lista = [];

function InsertarLista() {
  var valorAleatorio = Math.floor(Math.random() * 10);
  const resultado = document.getElementById("resultado");

  lista.push(valorAleatorio);

  const nuevoBoton = document.createElement("button");
  nuevoBoton.classList.add("boton-lista");
  nuevoBoton.textContent = valorAleatorio;

  resultado.appendChild(nuevoBoton);

  setTimeout(() => {
    nuevoBoton.classList.add("visible");
  }, 10);

  console.log(lista.toString());
}

function EliminarElementoLista() {
  const input = Number(document.getElementById("input").value);
  console.log("Input del usuario: ", input);

  while (lista.includes(input)) {
    var pos = lista.indexOf(input);
    lista.splice(pos, 1);
    console.log("Input eliminado: ", input);
  }

  console.log("Lista actualizada: ", lista.toString());
}

const ListaObjeto = [
  {nombre: "Valentina Justiniano Grimaldos", edad: 18, correo:"valentina.justiniano.g@ucb.edu.bo", carrera: "Ingeniería Industrial", telefono: "71380166"},
  {nombre: "Adrian Santiago Rada Paredes", edad: 19, correo:"arada@ucb.edu.bo", carrera: "Ingeniería en Software", telefono: "76089757"},
  {nombre: "Emita Teresa Echalar Cespedes", edad: 21, correo:"emita.echalar@ucb.edu.bo", carrera: "Arquitectura", telefono: "68822540"},
  {nombre: "Valeria Torrez Aguilar", edad: 18, correo:"valeria.torrez@ucb.edu.bo", carrera: "Ingeniería Financiera", telefono: "73121937"},
  {nombre: "Yessica Bustamante Suarez", edad: 19, correo:"yessica.bustamante@ucb.edu.bo", carrera: "Administración de Empresas", telefono: "73121937"},
  {nombre: "Mauro Nathaniel Chinellato Paz", edad: 18, correo:"mauro.chinellato@ucb.edu.bo", carrera: "Ingeniería en Software", telefono: "76625771"},
  {nombre: "Olvis Moreno", edad: 18, correo:"omoreno@ucb.edu.bo", carrera: "Ingeniería Civil", telefono: "62101134"},
  {nombre: "Samir Vidal", edad: 20, correo:"mattias.vidal@ucb.edu.bo", carrera: "Ingeniería Civil", telefono: "69185957"},
  {nombre: "Mateo Cossio", edad: 18, correo:"m.cossio@ucb.edu.bo", carrera: "Ingeniería Industrial", telefono: "75027212"},
  {nombre: "Rafael Rios", edad: 21, correo:"sebastian.rios@ucb.edu.bo", carrera: "Ingeniería Industrial", telefono: "72653409"},
  {nombre: "Leonardo Rivero", edad: 18, correo:"leonardo.rivero.l@ucb.edu.bo", carrera: "Ingeniería Industrial", telefono: "79802044"},
  {nombre: "Benjhamin Coca Galarza", edad: 18, correo:"Benjhamin.coca@ucb.edu.bo", carrera: "Ingeniería Industrial", telefono: "72207021"}
];

function AddEstudiante() {
  var varName = document.getElementById("input_name").value;
  var varEdad = Number(document.getElementById("input_edad").value);
  var varCorreo = document.getElementById("input_correo").value;
  var varCarrera = document.getElementById("input_carrera").value;
  var varPhone = document.getElementById("input_phone").value;

  var estudiante = {
    nombre: varName,
    edad: varEdad,
    correo: varCorreo,
    carrera: varCarrera,
    telefono: varPhone
  };

  if (estudiante.edad >= 18) {
    console.log("INSERTADO CON ÉXITO!!!");
    ListaObjeto.push(estudiante);
  } else {
    console.log("Ahorita no joven, vuelve cuando tengas 18 años");
  }

  console.log(ListaObjeto);
  crearTabla(ListaObjeto);
}

function crearTabla(datos) {
  let tabla = '<table>';
  tabla += `
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Edad</th>
        <th>Correo</th>
        <th>Carrera</th>
        <th>Teléfono</th>
      </tr>
    </thead>
    <tbody>
  `;

  datos.forEach(estudiante => {
    tabla += `
      <tr>
        <td>${estudiante.nombre}</td>
        <td>${estudiante.edad}</td>
        <td>${estudiante.correo}</td>
        <td>${estudiante.carrera}</td>
        <td>${estudiante.telefono}</td>
      </tr>
    `;
  });

  tabla += '</tbody></table>';
  document.getElementById("tabla-container").innerHTML = tabla;
}

function MostrarHabilitadosOEP() {
  ListaObjeto.forEach(elemento => {
    if (elemento.edad >= 18) {
      console.log("Hola, " + elemento.nombre + " estás habilitado para votar :)");
    }
  });
}

function MostrarNombre() {
  ListaObjeto.forEach(element => {
    console.log("Edad en 2025 de " + element.nombre + ": " + (2025 - element.edad));
  });
}

function cargarColores(){
  const colores = ["Rojo", "Verde", "Azul", "Amarillo", "Morado"];
  const select = document.getElementById("colorSelect");

  colores.forEach (color=> {
    const option = document.createElement("option");
    optionvalue = colores.toLowerCase();
    option.textContent = colores;
    select.appendChild(option);
  });
}

  cargarColores();
  
  //Metodo que muestra el color seleccionado
  function mostrarColor() {
    const select = document.getElementById("colorSelect");
    const valor = select.value;
    alert(valor);
  }
  