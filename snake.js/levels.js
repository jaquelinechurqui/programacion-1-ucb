// ===== levels.js =====

// Lista de niveles con propiedades y estado inicial
const levels = [
  {
    number: 1,
    name: "Primavera 🌸",
    fruitColor: "red",
    fruitValue: 10,
    speed: 150,
    obstacles: [],
    locked: false, // primer nivel desbloqueado
  },
  {
    number: 2,
    name: "Verano 🏖️",
    fruitColor: "silver", // manzana plateada
    fruitValue: 20,
    speed: 130,
    obstacles: [
      { x: 5, y: 5 },
      { x: 10, y: 15 },
    ],
    locked: true,
  },
  {
    number: 3,
    name: "Invierno ❄️",
    fruitColor: "gold", // manzana dorada
    fruitValue: 30,
    speed: 110,
    obstacles: [
      { x: 4, y: 10 },
      { x: 8, y: 12 },
      { x: 12, y: 6 },
    ],
    locked: true,
  },
  {
    number: 4,
    name: "Halloween 🎃",
    fruitColor: "orange",
    fruitValue: 40,
    speed: 90,
    obstacles: [
      { x: 6, y: 6 },
      { x: 7, y: 7 },
      { x: 13, y: 10 },
      { x: 14, y: 14 },
    ],
    locked: true,
  },
  {
    number: 5,
    name: "Cárcel Final 🕷️",
    fruitColor: "purple",
    fruitValue: 50,
    speed: 70,
    obstacles: [
      { x: 5, y: 5 },
      { x: 6, y: 5 },
      { x: 7, y: 5 },
      { x: 10, y: 10 },
      { x: 15, y: 15 },
    ],
    locked: true,
  },
];

// ===== FUNCIONES =====

// Devuelve un nivel según su número
function getLevel(number) {
  return levels.find(lvl => lvl.number === number);
}

// Devuelve todos los niveles
function getAllLevels() {
  return levels;
}

// Desbloquea el siguiente nivel
function unlockNextLevel(number) {
  const nextLevel = getLevel(number + 1);
  if (nextLevel) nextLevel.locked = false;
}

// Reinicia todos los niveles (sólo el primero desbloqueado)
function resetLevels() {
  levels.forEach((lvl, idx) => {
    lvl.locked = idx !== 0;
  });
}

// Exportación global para otros scripts
window.getLevel = getLevel;
window.getAllLevels = getAllLevels;
window.unlockNextLevel = unlockNextLevel;
window.resetLevels = resetLevels;
