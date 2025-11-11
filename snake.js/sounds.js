// ==========================
// 🎵 Sistema de sonidos
// ==========================

// Carga de sonidos
const soundButton    = new Audio("sounds/button.mp3.mp3");
const soundGameOver  = new Audio("sounds/death.mp3.mp3");
const soundEat       = new Audio("sounds/eat.mp3.mp3");

// Botón
function playButtonSound() {
  if (!soundButton.paused) soundButton.currentTime = 0;
  soundButton.play().catch(() => {});
}

// Fin del juego
function playGameOverSound() {
  if (!soundGameOver.paused) soundGameOver.currentTime = 0;
  soundGameOver.play().catch(() => {});
}

// Comer fruta
function playEatSound() {
  if (!soundEat.paused) soundEat.currentTime = 0;
  soundEat.play().catch(() => {});
}
