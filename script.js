function mostrarLetra() {
    let nombre = document.getElementById("nombre1").value;
    let posicion = Number(document.getElementById("posicion").value);
    let letra = nombre.charAt(posicion).toUpperCase();
    console.log("La letra es:", letra);
    document.getElementById("resultado").textContent = "La letra es: " + letra;
}

function redondear() {
  let numero = Number(document.getElementById("numeroRedondear").value);
  let redondeado = Math.ceil(numero);
  document.getElementById("resultadoRedondeo").textContent = "Resultado: " + redondeado;
  console.log("Resultado:", redondeado);
}

function contarLetra(){
    let buscar = document.getElementById("letraBuscar").value;


}


function mostrarPares() {
    let limite = document.getElementById("limite").value;
    while (contador < 10);
}