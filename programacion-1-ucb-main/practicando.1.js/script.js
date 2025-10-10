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

function contarLetra() {
      let nombre = document.getElementById("nombreUsuario").value.toLowerCase();
      let letra = document.getElementById("letraBuscar").value.toLowerCase();
      let contador = 0;

      for (let i = 0; i < nombre.length; i++) {
        if (nombre.charAt(i) === letra) {
          contador++;
        }
      }

      let mensaje = "La letra '" + letra + "' aparece " + contador + " veces.";
      console.log(mensaje);
      document.getElementById("resultadoContador").textContent = mensaje;
    }

function mostrarPares() {
      let limite = Number(document.getElementById("limite").value);
      let contador = 0;
      let resultado = "";

      while (contador <= limite) {
        if (contador % 2 === 0) {
          resultado += contador + "\n";
        }
        contador++;
      }

      console.log("Números pares hasta " + limite + ":\n" + resultado);
      document.getElementById("resultadoPares").textContent = resultado;
    }