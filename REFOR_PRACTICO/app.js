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
const ejercicioCincuentaUnoBtn = document.getElementById('ejercicioCincuentaUnoBtn');
const ejercicioCincuentaDosBtn = document.getElementById('ejercicioCincuentaDosBtn');
const ejercicioCincuentaTresBtn = document.getElementById('ejercicioCincuentaTresBtn');
const ejercicioCincuentaCuatroBtn = document.getElementById('ejercicioCincuentaCuatroBtn');
const ejercicioCincuentaCincoBtn = document.getElementById('ejercicioCincuentaCincoBtn');
const ejercicioCincuentaSeisBtn = document.getElementById('ejercicioCincuentaSeisBtn');
const ejercicioCincuentaSieteBtn = document.getElementById('ejercicioCincuentaSieteBtn');
const ejercicioCincuentaOchoBtn = document.getElementById('ejercicioCincuentaOchoBtn');
const ejercicioCincuentaNueveBtn = document.getElementById('ejercicioCincuentaNueveBtn');
const ejercicioSesentaBtn = document.getElementById('ejercicioSesentaBtn');
const ejercicioSesentaUnoBtn = document.getElementById('ejercicioSesentaUnoBtn');
const ejercicioSesentaDosBtn = document.getElementById('ejercicioSesentaDosBtn');
const ejercicioSesentaTresBtn = document.getElementById('ejercicioSesentaTresBtn');
const ejercicioSesentaCuatroBtn = document.getElementById('ejercicioSesentaCuatroBtn');
const ejercicioSesentaCincoBtn = document.getElementById('ejercicioSesentaCincoBtn');
const ejercicioSesentaSeisBtn = document.getElementById('ejercicioSesentaSeisBtn');
const ejercicioSesentaSieteBtn = document.getElementById('ejercicioSesentaSieteBtn');
const ejercicioSesentaOchoBtn = document.getElementById('ejercicioSesentaOchoBtn');
const ejercicioSesentaNueveBtn = document.getElementById('ejercicioSesentaNueveBtn');
const ejercicioSetentaBtn = document.getElementById('ejercicioSetentaBtn');
const ejercicioSetentaUnoBtn = document.getElementById('ejercicioSetentaUnoBtn');
const ejercicioSetentaDosBtn = document.getElementById('ejercicioSetentaDosBtn');
const ejercicioSetentaTresBtn = document.getElementById('ejercicioSetentaTresBtn');
const ejercicioSetentaCuatroBtn = document.getElementById('ejercicioSetentaCuatroBtn');
const ejercicioSetentaCincoBtn = document.getElementById('ejercicioSetentaCincoBtn');
const ejercicioSetentaSeisBtn = document.getElementById('ejercicioSetentaSeisBtn');
const ejercicioSetentaSieteBtn = document.getElementById('ejercicioSetentaSieteBtn');
const ejercicioSetentaOchoBtn = document.getElementById('ejercicioSetentaOchoBtn');
const ejercicioSetentaNueveBtn = document.getElementById('ejercicioSetentaNueveBtn');
const ejercicioOchentaBtn = document.getElementById('ejercicioOchentaBtn');
const ejercicioOchentaUnoBtn = document.getElementById('ejercicioOchentaUnoBtn');
const ejercicioOchentaDosBtn = document.getElementById('ejercicioOchentaDosBtn');
const ejercicioOchentaTresBtn = document.getElementById('ejercicioOchentaTresBtn');
const ejercicioOchentaCuatroBtn = document.getElementById('ejercicioOchentaCuatroBtn');
const ejercicioOchentaCincoBtn = document.getElementById('ejercicioOchentaCincoBtn');
const ejercicioOchentaSeisBtn = document.getElementById('ejercicioOchentaSeisBtn');
const ejercicioOchentaSieteBtn = document.getElementById('ejercicioOchentaSieteBtn');
const ejercicioOchentaOchoBtn = document.getElementById('ejercicioOchentaOchoBtn');


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
ejercicioCincuentaUnoBtn.addEventListener('click', ejercicioCincuentaUnoBtnApp);
ejercicioCincuentaDosBtn.addEventListener('click', ejercicioCincuentaDosBtnApp);
ejercicioCincuentaTresBtn.addEventListener('click', ejercicioCincuentaTresBtnApp);
ejercicioCincuentaCuatroBtn.addEventListener('click', ejercicioCincuentaCuatroBtnApp);
ejercicioCincuentaCincoBtn.addEventListener('click', ejercicioCincuentaCincoBtnApp);
ejercicioCincuentaSeisBtn.addEventListener('click', ejercicioCincuentaSeisBtnApp);
ejercicioCincuentaSieteBtn.addEventListener('click', ejercicioCincuentaSieteBtnApp);
ejercicioCincuentaOchoBtn.addEventListener('click', ejercicioCincuentaOchoBtnApp);
ejercicioCincuentaNueveBtn.addEventListener('click', ejercicioCincuentaNueveBtnApp);
ejercicioSesentaBtn.addEventListener('click', ejercicioSesentaBtnApp);
ejercicioSesentaUnoBtn.addEventListener('click', ejercicioSesentaUnoBtnApp);
ejercicioSesentaDosBtn.addEventListener('click', ejercicioSesentaDosBtnApp);
ejercicioSesentaTresBtn.addEventListener('click', ejercicioSesentaTresBtnApp);
ejercicioSesentaCuatroBtn.addEventListener('click', ejercicioSesentaCuatroBtnApp);
ejercicioSesentaCincoBtn.addEventListener('click', ejercicioSesentaCincoBtnApp);
ejercicioSesentaSeisBtn.addEventListener('click', ejercicioSesentaSeisBtnApp);
ejercicioSesentaSieteBtn.addEventListener('click', ejercicioSesentaSieteBtnApp);
ejercicioSesentaOchoBtn.addEventListener('click', ejercicioSesentaOchoBtnApp);
ejercicioSesentaNueveBtn.addEventListener('click', ejercicioSesentaNueveBtnApp);
ejercicioSetentaBtn.addEventListener('click', ejercicioSetentaBtnApp);
ejercicioSetentaUnoBtn.addEventListener('click', ejercicioSetentaUnoBtnApp);
ejercicioSetentaDosBtn.addEventListener('click', ejercicioSetentaDosBtnApp);
ejercicioSetentaTresBtn.addEventListener('click', ejercicioSetentaTresBtnApp);
ejercicioSetentaCuatroBtn.addEventListener('click', ejercicioSetentaCuatroBtnApp);
ejercicioSetentaCincoBtn.addEventListener('click', ejercicioSetentaCincoBtnApp);
ejercicioSetentaSeisBtn.addEventListener('click', ejercicioSetentaSeisBtnApp);
ejercicioSetentaSieteBtn.addEventListener('click', ejercicioSetentaSieteBtnApp);
ejercicioSetentaOchoBtn.addEventListener('click', ejercicioSetentaOchoBtnApp);
ejercicioSetentaNueveBtn.addEventListener('click', ejercicioSetentaNueveBtnApp);
ejercicioOchentaBtn.addEventListener('click', ejercicioOchentaBtnApp);
ejercicioOchentaUnoBtn.addEventListener('click', ejercicioOchentaUnoBtnApp);
ejercicioOchentaDosBtn.addEventListener('click', ejercicioOchentaDosBtnApp);
ejercicioOchentaTresBtn.addEventListener('click', ejercicioOchentaTresBtnApp);
ejercicioOchentaCuatroBtn.addEventListener('click', ejercicioOchentaCuatroBtnApp);
ejercicioOchentaCincoBtn.addEventListener('click', ejercicioOchentaCincoBtnApp);
ejercicioOchentaSeisBtn.addEventListener('click', ejercicioOchentaSeisBtnApp);
ejercicioOchentaSieteBtn.addEventListener('click', ejercicioOchentaSieteBtnApp);
ejercicioOchentaOchoBtn.addEventListener('click', ejercicioOchentaOchoBtnApp);



  
  
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
  for (let i = 0; i < resultado.length; i++) {
    texto += resultado[i] + "\n"; // cada fila duplicada en nueva línea
  }
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
    "¿Es simétrica verticalmente?: " + (esSimetrica ? "True" : "False");
}

function ejercicioCuarentaTresBtnApp() {
  matrix.fillRandom(1, 9);
  const esSimetrica = matrix.ejercicio43(); // true o false
  drawMatrix(matrix);

  document.getElementById("resultadoTexto").textContent =
    "¿Es simétrica horizontalmente?: " + (esSimetrica ? "True" : "False");
}

function ejercicioCuarentaCuatroBtnApp() {
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

function ejercicioCincuentaUnoBtnApp() {
  matrix.ejercicio51();
  drawMatrix(matrix);
  
}
function ejercicioCincuentaDosBtnApp() {
  matrix.ejercicio52();
  drawMatrix(matrix);
  
}
function ejercicioCincuentaTresBtnApp() {
  matrix.ejercicio53();
  drawMatrix(matrix);
  
}
function ejercicioCincuentaCuatroBtnApp() {
  matrix.ejercicio54();
  drawMatrix(matrix);
  
}
 
function ejercicioCincuentaCincoBtnApp() {
  matrix.ejercicio55();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "Matriz generada con números primos.";
}

function ejercicioCincuentaSeisBtnApp() {
  matrix.fillRandom(1, 10);
  matrix.ejercicio56();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "Matriz multiplicada por escalar (k=3).";
}

function ejercicioCincuentaSieteBtnApp() {
  const matrixB = new Matrix(matrix.rows, matrix.cols);
  matrix.fillRandom(1, 50);
  matrixB.fillRandom(1, 50);
  const result = matrix.ejercicio57(matrixB);
  drawMatrix({ data: result });
  document.getElementById("resultadoTexto").textContent = "Suma de dos matrices (A + B).";
}

function ejercicioCincuentaOchoBtnApp() {
  const matrixB = new Matrix(matrix.cols, 5);
  matrix.fillRandom(1, 10);
  matrixB.fillRandom(1, 10);
  const result = matrix.ejercicio58(matrixB);
  drawMatrix({ data: result });
  document.getElementById("resultadoTexto").textContent = "Multiplicación de matrices (A × B).";
}

function ejercicioCincuentaNueveBtnApp() {
  const esIdentidad = matrix.ejercicio59();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "¿Es matriz identidad?: " + (esIdentidad ? "Sí" : "No");
}

function ejercicioSesentaBtnApp() {
  const esDiagonal = matrix.ejercicio60();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "¿Es matriz diagonal?: " + (esDiagonal ? "Sí" : "No");
}

function ejercicioSesentaUnoBtnApp() {
  const esNula = matrix.ejercicio61();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "¿Es matriz nula?: " + (esNula ? "Sí" : "No");
}

function ejercicioSesentaDosBtnApp() {
  const esOrtogonal = matrix.ejercicio62();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "¿Es matriz ortogonal?: " + (esOrtogonal ? "Sí" : "No");
}

function ejercicioSesentaTresBtnApp() {
  matrix.ejercicio63();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "Matriz normalizada (valores entre 0 y 1).";
}

function ejercicioSesentaCuatroBtnApp() {
  const umbral = 100;
  matrix.ejercicio64(umbral);
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "Umbral aplicado (≥100 → 1, <100 → 0).";
}

function ejercicioSesentaCincoBtnApp() {
  matrix.ejercicio65();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "Máscara booleana aplicada a la matriz.";
}
function ejercicioSesentaSeisBtnApp() {
  const matrix = new Matrix(10, 10, 0);
  matrix.fillRandom(1, 100);

  // Extraer directamente la submatriz central 8×8
  const sub = matrix.ejercicio66(8, 8);

  // Mostrar solo la submatriz
  drawMatrix(sub);
  document.getElementById("resultadoTexto").textContent = "Submatriz central 8×8 extraída";
}



function ejercicioSesentaSieteBtnApp() {
  const borde = matrix.ejercicio67();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "Borde extraído: [" + borde.join(", ") + "]";
}

function ejercicioSesentaOchoBtnApp() {
  const { diagPrincipal, diagSecundaria } = matrix.ejercicio68();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent =
    "Diagonal principal: [" + diagPrincipal.join(", ") + "] | Diagonal secundaria: [" + diagSecundaria.join(", ") + "]";
}

function ejercicioSesentaNueveBtnApp() {
  const esSimetrica = matrix.ejercicio69();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "¿Es matriz simétrica?: " + (esSimetrica ? "Sí" : "No");
}

function ejercicioSetentaBtnApp() {
  matrix.ejercicio70();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "Matriz triangular superior generada.";
}

function ejercicioSetentaUnoBtnApp() {
  matrix.ejercicio71();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "Matriz triangular inferior generada.";
}

function ejercicioSetentaDosBtnApp() {
  matrix.ejercicio72();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "Matriz con patrón de cruz generada.";
}

function ejercicioSetentaTresBtnApp() {
  matrix.ejercicio73();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "Matriz con patrón de X generada.";
}

function ejercicioSetentaCuatroBtnApp() {
  matrix.ejercicio74();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "Matriz con borde alternado generada.";
}

function ejercicioSetentaCincoBtnApp() {
  matrix.ejercicio75();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "Matriz con patrón de espina de pescado generada.";
}

function ejercicioSetentaSeisBtnApp() {
  matrix.ejercicio76();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "Matriz con patrón de serpiente generada.";
}

function ejercicioSetentaSieteBtnApp() {
  matrix.ejercicio77();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "Matriz con columnas alternadas generada.";
}

function ejercicioSetentaOchoBtnApp() {
  matrix.ejercicio78();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "Matriz con espiral inversa generada.";
}

function ejercicioSetentaNueveBtnApp() {
  matrix.ejercicio79();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "Matriz con patrón de zigzag diagonal generada.";
}

function ejercicioOchentaBtnApp() {
  matrix.ejercicio80();
  drawMatrix(matrix);
  document.getElementById("resultadoTexto").textContent = "Matriz con capas concéntricas generada.";
}

function ejercicioOchentaUnoBtnApp() {
    matrix.ejercicio81();
    drawMatrix(matrix);
    document.getElementById("resultadoTexto").textContent = "Pirámide numérica generada.";
}

function ejercicioOchentaDosBtnApp() {
    matrix.ejercicio82();
    drawMatrix(matrix);
    document.getElementById("resultadoTexto").textContent = "Diamante centrado generado.";
}

function ejercicioOchentaTresBtnApp() {
    matrix.ejercicio83();
    drawMatrix(matrix);
    document.getElementById("resultadoTexto").textContent = "Escalera diagonal generada.";
}

function ejercicioOchentaCuatroBtnApp() {
    matrix.ejercicio84();
    drawMatrix(matrix);
    document.getElementById("resultadoTexto").textContent = "Flecha apuntando hacia abajo generada.";
}

function ejercicioOchentaCincoBtnApp() {
    matrix.ejercicio85();
    drawMatrix(matrix);
    document.getElementById("resultadoTexto").textContent = "Reloj de arena generado.";
}

let ejercicio86MostradaOriginal = true;

function ejercicioOchentaSeisBtnApp() {
    if (ejercicio86MostradaOriginal) {
        matrix.fillRandom(1, 9);
        drawMatrix(matrix);
        document.getElementById("resultadoTexto").textContent = "Matriz original.";
        ejercicio86MostradaOriginal = false;
    } else {
        matrix.ejercicio86();
        drawMatrix(matrix);
        document.getElementById("resultadoTexto").textContent = "Matriz reflejada respecto a la diagonal principal.";
        ejercicio86MostradaOriginal = true;
    }
}


function ejercicioOchentaSieteBtnApp() {
    matrix.ejercicio87();
    drawMatrix(matrix);
    document.getElementById("resultadoTexto").textContent = "Serpiente vertical generada.";
}

function ejercicioOchentaOchoBtnApp() {
    matrix.fillRandom(1, 9);
    drawMatrix(matrix);
    matrix.ejercicio88();
    drawMatrix(matrix);
    document.getElementById("resultadoTexto").textContent = "Columnas espejo generadas.";
}




// Ejecuta la inicialización
initializeCanvas();
