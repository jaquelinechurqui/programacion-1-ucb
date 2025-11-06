// Elementos del DOM
const canvas = document.getElementById('matrixCanvas');
const fillButton = document.getElementById('fillBtn');
const clearButton = document.getElementById('clearBtn');
//anadir aca  tu ejercicio ------------------------------------------------
const ejercicioVeintiSeisBtn = document.getElementById('ejercicioVeintiSeisBtn');//Convierto el btn en una var
const ejercicioVeintiSieteBtn = document.getElementById('ejercicioVeintiSieteBtn');
const ejercicioVeintiOchoBtn = document.getElementById('ejercicioVeintiOchoBtn');
const ejercicioVeintiNueveBtn = document.getElementById('ejercicioVeintiNueveBtn');
const ejercicioTreintaBtn = document.getElementById('ejercicioTreintaBtn');
const ejercicioTreintaUnoBtn = document.getElementById('ejercicioTreintaUnoBtn');
const ejercicioTreintaDosBtn = document.getElementById('ejercicioTreintaDosBtn');
const ejercicioTreintaTresBtn = document.getElementById('ejercicioTreintaTresBtn');
const ejercicioTreintaCuatroBtn = document.getElementById('ejercicioTreintaCuatroBtn');
const ejercicioTreintaCincoBtn = document.getElementById('ejercicioTreintaCincoBtn');
const ejercicioTreintaSeisBtn = document.getElementById('ejercicioTreintaSeisBtn');
const ejercicioTreintaSieteBtn = document.getElementById('ejercicioTreintaSieteBtn');
const ejercicioTreintaOchoBtn = document.getElementById('ejercicioTreintaOchoBtn');
const ejercicioTreintaNueveBtn = document.getElementById('ejercicioTreintaNueveBtn');
const ejercicioCuarentaBtn = document.getElementById('ejercicioCuarentaBtn');
const ejercicioCuarentaUnoBtn = document.getElementById('ejercicioCuarentaUnoBtn');
const ejercicioCuarentaDosBtn = document.getElementById('ejercicioCuarentaDosBtn');
const ejercicioCuarentaTresBtn = document.getElementById('ejercicioCuarentaTresBtn');
const ejercicioCuarentaCuatroBtn = document.getElementById('ejercicioCuarentaCuatroBtn');
const ejercicioCuarentaCincoBtn = document.getElementById('ejercicioCuarentaCincoBtn');
const ejercicioCuarentaSeisBtn = document.getElementById('ejercicioCuarentaSeisBtn');
const ejercicioCuarentaSieteBtn = document.getElementById('ejercicioCuarentaSieteBtn');
const ejercicioCuarentaOchoBtn = document.getElementById('ejercicioCuarentaOchoBtn');
const ejercicioCuarentaNueveBtn = document.getElementById('ejercicioCuarentaNueveBtn');
const ejercicioCincuentaBtn = document.getElementById('ejercicioCincuentaBtn');

// Contexto de dibujo
const context = canvas.getContext('2d');

// Instancia de la CLASS matrix
const matrix = new Matrix(10, 10, 0);

// Inicializa el canvas y dibuja la matriz
function initializeCanvas() {
  drawMatrix();
  window.addEventListener('resize', drawMatrix);
  fillButton.addEventListener('click', fillMatrix);
  clearButton.addEventListener('click', clearCanvas);
  //anadir aca tu ejericicio----------------------------------------------------------
  ejercicioVeintiSeisBtn.addEventListener('click', ejercicioVeintiSeisBtnApp);//Click a "ejercicioUnoBtn"
  ejercicioVeintiSieteBtn.addEventListener('click', ejercicioVeintiSieteBtnApp);//Click a "ejercicioUnoBtn"
  ejercicioVeintiOchoBtn.addEventListener('click', ejercicioVeintiOchoBtnApp);
  ejercicioVeintiNueveBtn.addEventListener('click', ejercicioVeintiNueveBtnApp);//Click a "ejercicioUnoBtn"
  ejercicioTreintaBtn.addEventListener('click', ejercicioTreintaBtnApp);
  ejercicioTreintaUnoBtn.addEventListener('click', ejercicioTreintaUnoBtnApp);
  ejercicioTreintaDosBtn.addEventListener('click', ejercicioTreintaDosBtnApp);
  ejercicioTreintaTresBtn.addEventListener('click', ejercicioTreintaTresBtnApp);
  ejercicioTreintaCuatroBtn.addEventListener('click', ejercicioTreintaCuatroBtnApp);
  ejercicioTreintaCincoBtn.addEventListener('click', ejercicioTreintaCincoBtnApp);
  ejercicioTreintaSeisBtn.addEventListener('click', ejercicioTreintaSeisBtnApp);
  ejercicioTreintaSieteBtn.addEventListener('click', ejercicioTreintaSieteBtnApp);
  ejercicioTreintaOchoBtn.addEventListener('click', ejercicioTreintaOchoBtnApp);
  ejercicioTreintaNueveBtn.addEventListener('click', ejercicioTreintaNueveBtnApp);
  ejercicioCuarentaBtn.addEventListener('click', ejercicioCuarentaBtnApp);
ejercicioCuarentaUnoBtn.addEventListener('click', ejercicioCuarentaUnoBtnApp);
ejercicioCuarentaDosBtn.addEventListener('click', ejercicioCuarentaDosBtnApp);
ejercicioCuarentaTresBtn.addEventListener('click', ejercicioCuarentaTresBtnApp);
ejercicioCuarentaCuatroBtn.addEventListener('click', ejercicioCuarentaCuatroBtnApp);
ejercicioCuarentaCincoBtn.addEventListener('click', ejercicioCuarentaCincoBtnApp);
ejercicioCuarentaSeisBtn.addEventListener('click', ejercicioCuarentaSeisBtnApp);
ejercicioCuarentaSieteBtn.addEventListener('click', ejercicioCuarentaSieteBtnApp);
ejercicioCuarentaOchoBtn.addEventListener('click', ejercicioCuarentaOchoBtnApp);
ejercicioCuarentaNueveBtn.addEventListener('click', ejercicioCuarentaNueveBtnApp);
ejercicioCincuentaBtn.addEventListener('click', ejercicioCincuentaBtnApp);

  
  
}

// Dibuja la matriz en el canvas
function drawMatrix() {
  const width = canvas.width = canvas.clientWidth;
  const height = canvas.height = canvas.clientHeight;
  const cellWidth = width / matrix.cols;
  const cellHeight = height / matrix.rows;

  context.clearRect(0, 0, width, height);
  context.font = `${Math.min(cellWidth, cellHeight) / 3}px Arial`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  for (let row = 0; row < matrix.rows; row++) {
    for (let col = 0; col < matrix.cols; col++) {
      const x = col * cellWidth;
      const y = row * cellHeight;
      const value = matrix.getValue(row, col);

      context.strokeRect(x, y, cellWidth, cellHeight);//margen de la celda
      context.fillText(value, x + cellWidth / 2, y + cellHeight / 2);//dibuja el valor
    }
  }
}

// Llena la matriz con valores aleatorios y la dibuja
function fillMatrix() {
  matrix.fillRandom(1, 100);
  drawMatrix();
}

// Limpia el canvas
function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
  //anadir aca tu ejercicio--------------------------
function ejercicioVeintiSeisBtnApp() {
  matrix.ejercicio26();
  drawMatrix(matrix);
  
}
function ejercicioVeintiSieteBtnApp() {
  matrix.ejercicio27();
  drawMatrix(matrix);
}
function ejercicioVeintiOchoBtnApp() {
  matrix.ejercicio28();
  drawMatrix(matrix);
  
}
function ejercicioVeintiNueveBtnApp() {
  matrix.ejercicio29();
  drawMatrix(matrix);
  
}
function ejercicioTreintaBtnApp() {
  matrix.ejercicio30();
  drawMatrix(matrix);
  
}
function ejercicioTreintaUnoBtnApp() {
  matrix.ejercicio31();
  drawMatrix(matrix);
  
}
function ejercicioTreintaDosBtnApp() {
  matrix.ejercicio32();
  drawMatrix(matrix);
  
}
function ejercicioTreintaTresBtnApp() {
  matrix.ejercicio33();
  drawMatrix(matrix);
  
}
function ejercicioTreintaCuatroBtnApp() {
  matrix.ejercicio34();
  drawMatrix(matrix);
  
}
function ejercicioTreintaCincoBtnApp() {
  matrix.ejercicio35();
  drawMatrix(matrix);
  
}
function ejercicioTreintaSeisBtnApp() {
  matrix.fillRandom(0,9);
  const contador = matrix.ejercicio36();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "resultado " + contador;
}
function ejercicioTreintaSieteBtnApp() {
  matrix.fillRandom(1,9);
  const calculo = matrix.ejercicio37();
  document.getElementById("resultadoTexto").textContent =
  "Promedio: " + calculo.promedio.toFixed(2) + " | Valores mayores que el promedio: " + calculo.contador;
  drawMatrix(matrix);
  
}

function ejercicioTreintaOchoBtnApp() {
  matrix.fillRandom(1,20);
  const contador = matrix.ejercicio38();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "resultado " + contador;
}



function ejercicioTreintaNueveBtnApp() {
    matrix.fillRandom(1, 9); // llenar matriz
    const resultado = matrix.ejercicio39(); // {1: 4, 2: 3, ...}
    drawMatrix(matrix);

    let texto = "Frecuencia:\n";
    for (const numero in resultado) {
        texto += numero + " → " + resultado[numero] + " veces\n";
    }

    document.getElementById("resultadoTexto").textContent = texto;
}


function ejercicioCuarentaBtnApp() {
  matrix.fillRandom(1, 9);
  const resultado = matrix.ejercicio40(); // devuelve lista de filas duplicadas
  drawMatrix(matrix);

  let texto = "Filas duplicadas:\n";
  if (resultado.length === 0) texto += "No hay filas duplicadas";
  else {
    for (let i = 0; i < resultado.length; i++) texto += resultado[i] + "\n";
  }
  document.getElementById("resultadoTexto").textContent = texto;
}

function ejercicioCuarentaUnoBtnApp() {
  matrix.fillRandom(1, 9);
  const resultado = matrix.ejercicio41(); // devuelve lista de columnas duplicadas
  drawMatrix(matrix);

  let texto = "Columnas duplicadas:\n";
  if (resultado.length === 0) texto += "No hay columnas duplicadas";
  else {
    for (let i = 0; i < resultado.length; i++) texto += resultado[i] + "\n";
  }
  document.getElementById("resultadoTexto").textContent = texto;
}

function ejercicioCuarentaDosBtnApp() {
  matrix.fillRandom(1, 9);
  const esSimetrica = matrix.ejercicio42(); // true o false
  drawMatrix(matrix);

  document.getElementById("resultadoTexto").textContent =
    "¿Es simétrica verticalmente?: " + (esSimetrica ? "Sí" : "No");
}

function ejercicioCuarentaTresBtnApp() {
  matrix.fillRandom(1, 9);
  const esSimetrica = matrix.ejercicio43(); // true o false
  drawMatrix(matrix);

  document.getElementById("resultadoTexto").textContent =
    "¿Es simétrica horizontalmente?: " + (esSimetrica ? "Sí" : "No");
}

function ejercicioCuarentaCuatroBtnApp() {
  matrix.fillRandom(1, 9);
  const esSimetrica = matrix.ejercicio44(); // true o false
  drawMatrix(matrix);

  document.getElementById("resultadoTexto").textContent =
    "¿Es simétrica respecto a la diagonal secundaria?: " + (esSimetrica ? "Sí" : "No");
}

function ejercicioCuarentaCincoBtnApp() {
  matrix.fillRandom(1, 9);
  const tienePatron = matrix.ejercicio45(); // true o false
  drawMatrix(matrix);

  document.getElementById("resultadoTexto").textContent =
    "¿Tiene patrón escalonado?: " + (tienePatron ? "Sí" : "No");
}

function ejercicioCuarentaSeisBtnApp() {
  matrix.ejercicio46(); // genera la matriz escalonada
  drawMatrix(matrix);
}

function ejercicioCuarentaSieteBtnApp() {
  matrix.ejercicio47(); // genera tablero de ajedrez
  drawMatrix(matrix);
}

function ejercicioCuarentaOchoBtnApp() {
  matrix.ejercicio48(); // genera matriz con diagonales en 1
  drawMatrix(matrix);
}

function ejercicioCuarentaNueveBtnApp() {
  matrix.ejercicio49(); // genera matriz con borde en 1
  drawMatrix(matrix);
}

function ejercicioCincuentaBtnApp() {
  matrix.ejercicio50(); // genera matriz con patrón triangular
  drawMatrix(matrix);
}



// Ejecuta la inicialización
initializeCanvas();
