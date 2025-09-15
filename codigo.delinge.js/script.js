function mostrarNombre() {
  const nombre = document.getElementById("input").value;
  const resultado = document.getElementById("resultado");

  if (nombre.trim() === "") {/// trim es para eliminar espacios
    resultado.textContent = "Por favor, escribe tu nombre.";
  } else {
    resultado.textContent = "Hola, " + nombre + " 👋";
  }
}

var lista = []; //Variable Global


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
  console.log(lista.toString())
}

// lista = [8,10,6,7,8,10,10,5,...]
function EliminarElementoLista() {
  //El valor del elemento (pedir el input al usuario)
  const input = Number(document.getElementById("input").value);
  //El elemento esta incluido en la lista?
  console.log("Input del usuario: ", input)
  while (lista.includes(input)) {
    console.log("El input esta incluido en la Lista")
    var pos = lista.indexOf(input);
    console.log("Input en la posición: ", pos)
    lista.splice(pos, 1);
    console.log("Input eliminado ------------ :", input)
  }
  console.log("Lista actualizada !!!")
  console.log(lista.toString())
}



// lista = [8,10,6,7,8,10,10,5,...]
/*
ListaObjetoValentina = [
  {nombre: "Juan Medina", edad: 20, correo: "jmedina@ucb.edu.bo", carrera: "MEDICINA", telefono: "+591 98789451"},
  {nombre: "Marco Lopex", edad: 21, correo: "mlopex@ucb.edu.bo", carrera: "DERECHO",  telefono: "+591 62189451"},
...
10 REGISTROS
]
*/


ListaObjeto = [
  { nombre: "Juan Medina", edad: 15, correo: "jmedina@ucb.edu.bo", carrera: "MEDICINA", telefono: "+591 98789451" },
  { nombre: "Marco Lopez", edad: 21, correo: "mlopex@ucb.edu.bo", carrera: "DERECHO", telefono: "+591 62189451" },
  { nombre: "Mateo Mateo", edad: 17, correo: "mmateo@ucb.edu.bo", carrera: "", telefono: "+591 63389451" },
    { nombre: "2134 234", edad: 17, correo: "mmateo@ucb.edu.bo", carrera: "", telefono: "+591 63389451" }

]

function AddEstudiante() {
  var varName = document.getElementById("input_name").value;
  var varEdad = Number(document.getElementById("input_edad").value);
  var varCorreo = document.getElementById("input_correo").value;
  var varCarrera = document.getElementById("selectCarrera").value;
  var varPhone = document.getElementById("input_phone").value;
  //console.log(varCarrera)

  var estudiante = {
    nombre: varName,
    edad: varEdad,
    correo: varCorreo,
    carrera: varCarrera,
    telefono: varPhone
  }

  if (estudiante.edad >= 18) {
    console.log("INSERTADO CON EXITO!!!");
    ListaObjeto.push(estudiante);
  } else {
    console.log("Ahorita no joven, vuelve cuanto tengas 18 años");
  }

  console.log(ListaObjeto);
  crearTabla(ListaObjeto);
  CargarUltimoEstudiante(estudiante);
}


function CargarSelectEstudiantes(){
  const select = document.getElementById("estudianteNombreSelect");

  ListaObjeto.forEach(elemento => {
    const option = document.createElement("option");
    option.value = elemento.nombre.toLowerCase();
    option.textContent = elemento.nombre;
    select.appendChild(option);
  });
}
CargarSelectEstudiantes();//Al cargar la pag web

function CargarUltimoEstudiante(estudiante){
  const select = document.getElementById("estudianteNombreSelect");

  const option = document.createElement("option");
  option.value = estudiante.nombre.toLowerCase();
  option.textContent = estudiante.nombre;
  
  select.appendChild(option);
}


function mostrarNombreEstudiante(){

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
      console.log("Hola, " + elemento.nombre + " estas habilitado para votar :)");
    }
  });
}

function MostrarNombre() {
  ListaObjeto.forEach(element => {
    console.log(2025 - element.edad);
  });
}


function cargarColores() {
  const colores = ["Rojo", "Verde", "Azul", "Amarillo", "Morado"];
  const select = document.getElementById("colorSelect");

  colores.forEach(color => {
    const option = document.createElement("option");
    option.value = color.toLowerCase();
    option.textContent = color;
    select.appendChild(option);
  });
}

cargarColores();

// Método que muestra el color seleccionado (click al Select)
function mostrarColor() {
  const select = document.getElementById("colorSelect");
  const valor = select.value;
  alert(valor);
}