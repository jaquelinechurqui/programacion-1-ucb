function mostrar(id) {
  const secciones = document.querySelectorAll(".seccion");
  secciones.forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
}

function convertir() {
  const decimal = parseInt(document.getElementById("decimal").value);
  document.getElementById("resultadoBinario").textContent = decimal.toString(2);
}

function sumarBinarios() {
  const bin1 = document.getElementById("bin1").value;
  const bin2 = document.getElementById("bin2").value;
  const suma = parseInt(bin1, 2) + parseInt(bin2, 2);
  document.getElementById("resultadoSuma").textContent = suma.toString(2);
}

function hexABinario() {
  const hex = document.getElementById("hex").value;
  const bin = parseInt(hex, 16).toString(2);
  document.getElementById("resultadoHexBin").textContent = bin;
}

function binarioAHex() {
  const bin = document.getElementById("binHex").value;
  const hex = parseInt(bin, 2).toString(16).toUpperCase();
  document.getElementById("resultadoBinHex").textContent = hex;
}

function operarBinarios() {
  const bin1 = document.getElementById("binOp1").value;
  const bin2 = document.getElementById("binOp2").value;
  const op = document.getElementById("operacion").value;
  const n1 = parseInt(bin1, 2);
  const n2 = parseInt(bin2, 2);
  let resultado;
  switch (op) {
    case "+": resultado = n1 + n2; break;
    case "-": resultado = n1 - n2; break;
    case "*": resultado = n1 * n2; break;
    case "/": resultado = Math.floor(n1 / n2); break;
    default: resultado = "Operación inválida";
  }
  document.getElementById("resultadoOperacion").textContent = resultado.toString(2);
}

function tablaMultiplicar() {
  const num = parseInt(document.getElementById("tablaNum").value);
  let tabla = "";
  for (let i = 1; i <= 10; i++) {
    tabla += `${num} × ${i} = ${num * i}\n`;
  }
  document.getElementById("resultadoTabla").textContent = tabla;
}

function sumaPares() {
  const limite = parseInt(document.getElementById("limitePares").value);
  let suma = 0;
  for (let i = 2; i <= limite; i += 2) suma += i;
  document.getElementById("resultadoPares").textContent = suma;
}

function sumaPrimos() {
  const limite = parseInt(document.getElementById("limitePrimos").value);
  let suma = 0;
  for (let i = 2; i <= limite; i++) {
    if (esPrimo(i)) suma += i;
  }
  document.getElementById("resultadoPrimos").textContent = suma;
}

function esPrimo(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}



