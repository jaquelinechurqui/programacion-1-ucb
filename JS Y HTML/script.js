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

//lista = [ 8, 10, 6, 7, 8, 10, 10, 5.......]
function EliminarElementoLista() {
  //El valor del elemento ( pedir el input al usuario)
  const input = Number(document.getElementById("input").value);
  //El elemento esta incluido en la lista?
  console.log("Input del usuario:", input)
  while(lista.includes(input)){
    console.log("El input esta incluido en la Lista")
    var pos = lista.indexOf(input);
    console.log("Input en la posicion:", pos)
    lista.splice(pos,1);
    console.log("Input eliminado -------------:", input)
  }
  console.log("Lista actualizada !!!")
  console.log(lista.toString())
}





ListaObjetoJaqueline = [
  {nombre: "Valentina Justiniano Grimaldos", edad : 18, correo:"valentina.justiniano.g@ucb.edu.bo", carrera: "Ingeneria Industrial", telefono: "71380166"},
  {nombre: "Adrian Santiago Rada Paredes", edad : 18, correo:"arada@ucb.edu.bo", carrera: "Ingeneria en Sotware", telefono: "76089757"},
  {nombre: "Emita Teresa Echalar Cespedes", edad : 18, correo:"emita.echalar@ucb.edu.bo", carrera: "  Arquitectura", telefono: "68822540"},
  {nombre: "Valeria Torrez Aguilar", edad : 18, correo:"valeria.torrez@ucb.edu.bo", carrera: "Ingeneria Financiera", telefono: "73121937"},
  {nombre: "Yessica Bustamante Suarez", edad : 18, correo:"yessica.bustamante@ucb.edu.bo", carrera: "Administracioon de empresas", telefono: "73121937"},
  {nombre: "Mauro Nathaniel Chinellato Paz", edad : 18, correo:"mauro.chinellato@ucb.edu.bo", carrera: "Ingeneria en Sotware", telefono: "76625771"},
  {nombre: "Olvis Moreno", edad : 18, correo:"omoreno@ucb.edu.bo", carrera: "Ingeneria civil", telefono: "62101134"},
  {nombre: "Samir Vidal", edad : 18, correo:"mattias.vidal@ucb.edu.bo", carrera: "Ingeneria civil", telefono: "69185957"},
  {nombre: "Mateo Cossio", edad : 18, correo:"m.cossio@ucb.edu.bo", carrera: "Ingeneria Industrial", telefono: "75027212"},
  {nombre: "Rafael Rios", edad : 18, correo:"sebastian.rios@ucb.edu.bo", carrera: "Ingeneria Industrial", telefono: "72653409"},
  {nombre: "Leonardo Rivero", edad : 18, correo:"leonardo.rivero.l@ucb.edu.bo", carrera: "Ingeneria Industrial", telefono: "79802044"},
  {nombre: "Benjhamin Coca Galarza", edad : 18, correo:"Benjhamin.coca@ucb.edu.bo", carrera: "Ingeneria Industrial", telefono: "72207021"}
]