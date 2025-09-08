let puntos = 0;
let vidas = 3;
let numeroActual = 0;

function iniciarJuego() {
  puntos = 0;
  vidas = 3;
  document.getElementById("puntos").textContent = puntos;
  document.getElementById("vidas").textContent = vidas;
  generarNumero();
}

function generarNumero() {
  numeroActual = Math.floor(Math.random() * 5) + 1;
  document.getElementById("numeroObjetivo").textContent = numeroActual;
}

function verificar(seleccionado) {
  if (vidas <= 0) return;

  if (seleccionado === numeroActual) {
    puntos++;
    document.getElementById("puntos").textContent = puntos;
  } else {
    vidas--;
    document.getElementById("vidas").textContent = vidas;
  }

  if (vidas > 0) {
    generarNumero();
  } else {
    document.getElementById("numeroObjetivo").textContent = "💀";
    alert("¡Juego terminado! Puntos: " + puntos);
  }
}

window.onload = iniciarJuego;
