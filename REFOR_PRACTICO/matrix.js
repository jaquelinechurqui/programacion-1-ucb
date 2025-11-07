class Matrix {
  rows;
  cols;
  data;

  constructor(rowsParam, colsParam, defaultValue) {
    this.rows = rowsParam;
    this.cols = colsParam;
    this.data = [];

    for (let i = 0; i < rowsParam; i++) {
      const rowTemp = [];
      for (let j = 0; j < colsParam; j++) {
        rowTemp.push(defaultValue);
      }
      this.data.push(rowTemp);
    }
  }

  //Función de validacion de rango valido en la matriz
  isValidPosition(row, col) {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }

  setValue(row, col, value) {
    //if (isValidPosition(row, col)) {
    this.data[row][col] = value;
    //}
  }

  getValue(row, col) {
    if (this.isValidPosition(row, col)) {
      return this.data[row][col];
    } else {
      return null
    }
  }

  fillRandom(min, max) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        this.data[i][j] = random;
      }
    }
  }

  //EJERCICIO 26 Reflejo vertical de la matriz
  ejercicio26() {
    const n = this.rows; 
    for (let i = 0; i < Math.floor(n / 2); i++) {
        let temp = this.data[i];
        this.data[i] = this.data[n - 1 - i];
        this.data[n - 1 - i] = temp;
    }
    return this.data;
}

//EJERCICIO 27 Reflejo horizontal de la matriz
ejercicio27(){
  const n = this.rows;
  const m = this.cols;
  for(let i = 0; i < n; i ++){
    for(let j = 0; j <Math.floor(m/2);j++){
    let temp = this.data[i][j];
    this.data[i][j]= this.data[i][m-1-j];
    this.data[i][m-1-j]= temp;
    }
  }
   return this.data;
}

//EJERCICIO 28()Rotación 90° a la derecha
ejercicio28(){
  const n = this.rows;
  const rotada = Array.from({length:n}, ()=> Array(n).fill(0));
  for(let i = 0; i <n; i++){
    for(let j = 0; j <n; j ++){
      rotada[j][n -1 - i] = this.data[i][j];

    }
  }
  this.data = rotada;
  return this.data ;
}

//EJERCICIO 29 Rotación 90° a la izquierda
ejercicio29(){
  const n = this.rows;
  const rotada = Array.from({length:n}, ()=> Array(n).fill(0));
  for(let i = 0; i <n; i++){
    for(let j = 0; j <n; j ++){
      rotada[n -1 - j][i] = this.data[i][j];

    }
  }
  this.data = rotada;
  return this.data ;
}

//EJERCICIO 30  Rotación 180
ejercicio30(){
  const n = this.rows;
  const m = this.cols;
  const rotada = Array.from({length:n}, ()=> Array(n).fill(0));
  for(let i = 0; i <n; i++){
    for(let j = 0; j <m; j ++){
      rotada[n -1 - i][m-1-j] = this.data[i][j];

    }
  }
  this.data = rotada;
  return this.data ;
}

//EJERCICIO 31 Intercambiar filas pares por impares
ejercicio31(){
  const n = this.rows;
  for(let i = 0; i <n-1; i+=2){
    let temp = this.data[i];
    this.data[i] =  this.data[i+1];
    this.data[i+1] = temp
    }
  return this.data;
}
//-------------------------------
//Ejercicio 32. Intercambiar columnas pares por impares
ejercicio32() {
    const n = this.rows;
    const m = this.cols;

    for (let j = 0; j < m - 1; j += 2) {
        for (let i = 0; i < n; i++) {
            let temp = this.data[i][j];
            this.data[i][j] = this.data[i][j + 1];
            this.data[i][j + 1] = temp;
        }
    }
    return this.data;
}

//EJERICICIO 33 Intercambiar primera y ultima fila
ejercicio33() {
    const n = this.rows;
    let temp = this.data[0];
    this.data[0] = this.data[n - 1];
    this.data[n - 1] = temp;
    return this.data;
}

//EJERCICIO 34 Intercambiar primera y última columna
ejercicio34() {
    const n = this.rows;
    const m = this.cols;

    for (let i = 0; i < n; i++) {
        let temp = this.data[i][0];
        this.data[i][0] = this.data[i][m - 1];
        this.data[i][m - 1] = temp;
    }
    return this.data;
}
//EJERCICIO 35  Transponer solo la mitad superior
ejercicio35() {
    const n = this.rows; // matriz cuadrada
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let temp = this.data[i][j];
            this.data[i][j] = this.data[j][i];
            this.data[j][i] = temp;
        }
    }
    return this.data;
}

//EJERICICIO 36 Contar ceros en la matriz
ejercicio36(){
  const n = this.rows;
  const m = this.cols;
  let contador = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0 ; j < m; j++) {
      if( this.data [i][j]=== 0)contador ++;
    }
  }
  return  contador;

}

//EJERCICIO 37 Contar valores mayores que el promedio
ejercicio37() {
    let suma = 0;
    const total = this.rows * this.cols;
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
            suma += this.data[i][j];
        }
    }
    const promedio = suma / total;
    let contador = 0;
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
            if (this.data[i][j] > promedio) contador++;
        }
    }
    return { promedio, contador }; // devolvemos ambos valores
}

//EJERCICIO 38Contar valores únicos
ejercicio38(){
const set = new Set();
for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
        set.add(this.data[i][j]);
    }
}
return set.size;
}
 
//EJERCICIO 39 FRECUENICA DE CADA NUMERO
ejercicio39(){
  const freq = {}; // objeto para guardar las frecuencias
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      const val = this.data[i][j];
                if (freq[val]) freq[val]++;
                else freq[val] = 1;
            }
        }

        return freq;
    }

//Ejercicio 40 detectar filas duplicadas
    ejercicio40() {
    this.data = [
  [1, 4, 7, 4, 2, 3, 5, 6, 2, 1],
  [3, 4, 1, 5, 6, 2, 7, 3, 4, 5],
  [1, 4, 7, 4, 2, 3, 5, 6, 2, 1],
  [2, 4, 3, 4, 1, 7, 2, 5, 3, 4],
  [5, 2, 4, 3, 6, 1, 4, 2, 5, 3],
  [3, 1, 5, 2, 4, 3, 6, 1, 4, 2],
  [4, 7, 2, 5, 3, 4, 1, 5, 2, 6],
  [2, 3, 6, 1, 4, 2, 3, 7, 1, 5],
  [5, 2, 4, 3, 6, 1, 4, 2, 5, 3],
  [1, 4, 7, 4, 2, 3, 5, 6, 2, 1]
];

    const duplicadas = [];  // Aquí guardaremos las filas que sean iguales
    for (let i = 0; i < this.rows; i++) { // Recorrer fila por fila
        for (let j = i + 1; j < this.rows; j++) { // Comparar fila i con todas las filas siguientes
            let iguales = true;  // Asumimos que las filas son iguales
            for (let k = 0; k < this.cols; k++) { // Revisar cada columna de las filas
                if (this.data[i][k] !== this.data[j][k]) { // Si hay diferencia
                    iguales = false;  // No son iguales
                    break;            // No necesitamos seguir revisando
                }
            }
            if (iguales) duplicadas.push(`Fila ${i} y Fila ${j}`); // Guardar duplicadas
        }
    }
    return duplicadas;  // Devolver todas las filas duplicadas
}


 // Ejercicio 41 - Detectar Columnas duplicadas (sin join)
    ejercicio41() {
    this.data = [
  [1, 2, 3, 4, 5, 1, 7, 8, 9, 7],
  [6, 7, 8, 9, 10, 6, 3, 4, 5, 3],
  [2, 3, 4, 5, 1, 2, 6, 7, 8, 6],
  [7, 8, 9, 1, 2, 7, 1, 2, 3, 1],
  [3, 4, 5, 6, 7, 3, 4, 5, 6, 4],
  [8, 9, 1, 2, 3, 8, 9, 1, 2, 9],
  [4, 5, 6, 7, 8, 4, 5, 6, 7, 5],
  [9, 1, 2, 3, 4, 9, 1, 2, 3, 1],
  [5, 6, 7, 8, 9, 5, 6, 7, 8, 6],
  [1, 2, 3, 4, 5, 1, 7, 8, 9, 7]
];


        const duplicadas = [];
        for (let i = 0; i < this.cols; i++) {
            for (let j = i + 1; j < this.cols; j++) {
                let iguales = true;
                for (let k = 0; k < this.rows; k++) {
                    if (this.data[k][i] !== this.data[k][j]) {
                        iguales = false;
                        break;
                    }
                }
                if (iguales) duplicadas.push(`Columna ${i} y Columna ${j}`);
            }
        }
        return duplicadas;
    }

    // Ejercicio 42 -  Detectar Simetría vertical
    ejercicio42() {
        this.data = [
  [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
  [6, 7, 8, 9, 0, 0, 9, 8, 7, 6],
  [1, 3, 5, 7, 9, 9, 7, 5, 3, 1],
  [2, 4, 6, 8, 0, 0, 8, 6, 4, 2],
  [3, 5, 7, 9, 1, 1, 9, 7, 5, 3],
  [4, 6, 8, 0, 2, 2, 0, 8, 6, 4],
  [5, 7, 9, 1, 3, 3, 1, 9, 7, 5],
  [6, 8, 0, 2, 4, 4, 2, 0, 8, 6],
  [7, 9, 1, 3, 5, 5, 3, 1, 9, 7],
  [8, 0, 2, 4, 6, 6, 4, 2, 0, 8]
];

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols / 2; j++) {
                if (this.data[i][j] !== this.data[i][this.cols - 1 - j]) {
                    return false;
                }
            }
        }
        return true;
    }

    // Ejercicio 43 - Detectar Simetría horizontal
    ejercicio43() {
        this.data = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  [2, 3, 4, 5, 6, 7, 8, 9, 0, 1],
  [3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
  [4, 5, 6, 7, 8, 9, 0, 1, 2, 3],
  [5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
  [4, 5, 6, 7, 8, 9, 0, 1, 2, 3],
  [3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
  [2, 3, 4, 5, 6, 7, 8, 9, 0, 1],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
];

        for (let j = 0; j < this.cols; j++) {
            for (let i = 0; i < this.rows / 2; i++) {
                if (this.data[i][j] !== this.data[this.rows - 1 - i][j]) {
                    return false;
                }
            }
        }
        return true;
    }
//------------REVISAR
    // Ejercicio 44 - Detectar Simetría diagonal secundaria
    ejercicio44() {
this.data = [
  [1, 2, 3, 4, 5, 6, 5, 4, 2, 1],
  [7, 8, 9, 0, 1, 1, 0, 9, 8, 7],
  [2, 3, 4, 5, 6, 6, 5, 4, 3, 2],
  [8, 9, 0, 1, 2, 2, 1, 0, 9, 8],
  [3, 4, 5, 6, 7, 7, 6, 5, 4, 3],
  [3, 4, 5, 6, 7, 7, 6, 5, 4, 3],
  [8, 9, 0, 1, 2, 2, 1, 0, 9, 8],
  [2, 3, 4, 5, 6, 6, 5, 4, 3, 2],
  [7, 8, 9, 0, 1, 1, 0, 9, 8, 7],
  [1, 2, 3, 4, 5, 6, 5, 4, 2, 1]
];
    if (this.rows !== this.cols) return false;
    const n = this.rows;
    for (let i = 0; i < n; i++){
      for (let j = 0; j < n; j++){
        if (this.data[i][j] !== this.data[n - 1 - j][n - 1 - i]) return false;
    return true;
        }
     }
  }
  
//---------------------------
    // Ejercicio 45 - Detectar Patrón escalonado
  ejercicio45() {
    this.data = [
      
  [  1,  "",  "",  "",  "",  "",  "",  "",  "",  ""],
  [  2,   3,  "",  "",  "",  "",  "",  "",  "",  ""],
  [  4,   5,   6,  "",  "",  "",  "",  "",  "",  ""],
  [  7,   8,   9,  10,  "",  "",  "",  "",  "",  ""],
  [ 11,  12,  13,  14,  15,  "",  "",  "",  "",  ""],
  [ 16,  17,  18,  19,  20,  21,  "",  "",  "",  ""],
  [ 22,  23,  24,  25,  26,  27,  28,  "",  "",  ""],
  [ 29,  30,  31,  32,  33,  34,  35,  36,  "",  ""],
  [ 37,  38,  39,  40,  41,  42,  43,  44,  45,  ""],
  [ 46,  47,  48,  49,  50,  51,  52,  53,  54,  55]
];
for (let i = 0; i < this.data.length; i++) {
        let count = 0;
        for (let j = 0; j < this.data[i].length; j++) {
            if (this.data[i][j] !== "") {
                count++;
            }
        }
        if (count !== i + 1) {
            return false;
        }
    }

    return true;
}


    // Ejercicio 46 - Generar matriz escalonada
    ejercicio46() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = i * this.cols + j + 1;
            }
        }
    }

    // Ejercicio 47 - Tablero de ajedrez
    ejercicio47() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if ((i + j) % 2 === 0) {
                    this.data[i][j] = 1;
                } else {
                    this.data[i][j] = 0;
                }
            }
        }
    }

    // Ejercicio 48 - Diagonales en 1
    ejercicio48() {
        if (this.rows !== this.cols) return;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (i === j || i + j === this.cols - 1) {
                    this.data[i][j] = 1;
                } else {
                    this.data[i][j] = 0;
                }
            }
        }
    }

    // Ejercicio 49 - Borde en 1
    ejercicio49() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (i === 0 || i === this.rows - 1 || j === 0 || j === this.cols - 1) {
                    this.data[i][j] = 1;
                } else {
                    this.data[i][j] = 0;
                }
            }
        }
    }

    // Ejercicio 50 - Patrón triangular
    ejercicio50() {
        if (this.rows !== this.cols) return;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (j <= i) {
                    this.data[i][j] = i + j + 1;
                } else {
                    this.data[i][j] = 0;
                }
            }
        }
    }
   //Ejercicio 51 Geneerar matriz en espiral
   ejercicio51() {
    const n = this.rows;
    this.data = [];
    for (let i = 0; i < n; i++) {
        this.data[i] = [];
        for (let j = 0; j < n; j++) {
            this.data[i][j] = 0;
        }
    }

    let value = 1;
    let top = 0, bottom = n - 1, left = 0, right = n - 1;

    while (top <= bottom && left <= right) {
        for (let j = left; j <= right; j++) this.data[top][j] = value++;
        top++;
        for (let i = top; i <= bottom; i++) this.data[i][right] = value++;
        right--;
        for (let j = right; j >= left; j--) this.data[bottom][j] = value++;
        bottom--;
        for (let i = bottom; i >= top; i--) this.data[i][left] = value++;
        left++;
    }
}


   // 52. Matriz en zigzag horizontal
    ejercicio52() {
        let count = 1;
        for (let i = 0; i < this.rows; i++) {
            if (i % 2 === 0) {
                for (let j = 0; j < this.cols; j++) this.data[i][j] = count++;
            } else {
                for (let j = this.cols - 1; j >= 0; j--) this.data[i][j] = count++;
            }
        }
    }

    // 53. Matriz en zigzag vertical
    ejercicio53() {
        let count = 1;
        for (let j = 0; j < this.cols; j++) {
            if (j % 2 === 0) {
                for (let i = 0; i < this.rows; i++) this.data[i][j] = count++;
            } else {
                for (let i = this.rows - 1; i >= 0; i--) this.data[i][j] = count++;
            }
        }
    }

    // 54. Matriz con múltiplos de 3
    ejercicio54() {
        let value = 3;
        for (let i = 0; i < this.rows; i++)
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = value;
                value += 3;
            }
    }

    //Ejercicio 55. Generar matriz con números primos
    ejercicio55() {
    const n = this.rows;
    const m = this.cols;
    this.data = [];
    for (let i = 0; i < n; i++) {
        this.data[i] = [];
    }
    function esPrimo(num) {
        if (num < 2) return false;
        for (let k = 2; k <= Math.sqrt(num); k++) {
            if (num % k === 0) return false;
        }
        return true;
    }
    let value = 2;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            while (!esPrimo(value)) value++;
            this.data[i][j] = value;
            value++;
        }
    }
}

//Ejercicio 56. Multiplicar matriz por escalar
ejercicio56() {
    const n = this.rows;
    const m = this.cols;
    const k = 3; // aquí defines el escalar que quieras

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            this.data[i][j] *= k;
        }
    }
}

// Ejercicio 57: Sumar dos matrices
ejercicio57(matrixB) {
    const n = this.rows;
    const m = this.cols;
    const result = [];

    for (let i = 0; i < n; i++) {
        result[i] = [];
        for (let j = 0; j < m; j++) {
            result[i][j] = this.data[i][j] + matrixB.data[i][j];
        }
    }

    return result;
}

// Ejercicio 58: Multiplicar dos matrices
ejercicio58(matrixB) {
    const n = this.rows;
    const p = this.cols;
    const m = matrixB.cols;
    const result = [];

    for (let i = 0; i < n; i++) {
        result[i] = [];
        for (let j = 0; j < m; j++) {
            let suma = 0;
            for (let k = 0; k < p; k++) {
                suma += this.data[i][k] * matrixB.data[k][j];
            }
            result[i][j] = suma;
        }
    }

    return result;
}

// Ejercicio 59: Verificar si una matriz es identidad
ejercicio59() {
    this.data = [
  [1,0,0,0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0],
  [0,0,1,0,0,0,0,0,0,0],
  [0,0,0,1,0,0,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,0],
  [0,0,0,0,0,0,1,0,0,0],
  [0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,0,1,0],
  [0,0,0,0,0,0,0,0,0,1]
];
    const n = this.rows;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j && this.data[i][j] !== 1) return false;
            if (i !== j && this.data[i][j] !== 0) return false;
        }
    }
    return true;
}

// Ejercicio 60: Verificar si una matriz es diagonal
ejercicio60() {
this.data = [
  [1,0,0,0,0,0,0,0,0,0],
  [0,2,0,0,0,0,0,0,0,0],
  [0,0,3,0,0,0,0,0,0,0],
  [0,0,0,4,0,0,0,0,0,0],
  [0,0,0,0,5,0,0,0,0,0],
  [0,0,0,0,0,6,0,0,0,0],
  [0,0,0,0,0,0,7,0,0,0],
  [0,0,0,0,0,0,0,8,0,0],
  [0,0,0,0,0,0,0,0,9,0],
  [0,0,0,0,0,0,0,0,0,10]
];
    const n = this.rows;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j && this.data[i][j] !== 0) return false;
        }
    }
    return true;
}

// Ejercicio 61: Verificar si una matriz es nula
ejercicio61() {
    this.data = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
];
    const n = this.rows;
    const m = this.cols;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (this.data[i][j] !== 0) return false;
        }
    }
    return true;
}

// Ejercicio 62: Verificar si una matriz es ortogonal
ejercicio62() {
    this.data = [
  [1,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,1],
  [0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,1,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0],
  [0,0,0,1,0,0,0,0,0,0],
  [0,0,1,0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,1,0,0,0],
  [0,0,0,0,0,0,0,0,1,0]
];

    const n = this.rows;
    // Transpuesta
    const transpuesta = [];
    for (let i = 0; i < n; i++) {
        transpuesta[i] = [];
        for (let j = 0; j < n; j++) {
            transpuesta[i][j] = this.data[j][i];
        }
    }

    // Producto matriz * transpuesta
    const producto = [];
    for (let i = 0; i < n; i++) {
        producto[i] = [];
        for (let j = 0; j < n; j++) {
            let suma = 0;
            for (let k = 0; k < n; k++) {
                suma += this.data[i][k] * transpuesta[k][j];
            }
            producto[i][j] = suma;
        }
    }

    // Verificación identidad
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j && producto[i][j] !== 1) return false;
            if (i !== j && producto[i][j] !== 0) return false;
        }
    }

    return true;
}


// Ejercicio 63: Normalizar matriz
ejercicio63() {
    const n = this.rows;
    const m = this.cols;
    this.fillRandom(1, 100);

    let min = this.data[0][0];
    let max = this.data[0][0];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (this.data[i][j] < min) min = this.data[i][j];
            if (this.data[i][j] > max) max = this.data[i][j];
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            this.data[i][j] = parseFloat(((this.data[i][j] - min) / (max - min)).toFixed(2));
        }
    }
}

// Ejercicio 64: Aplicar umbral binario
// Ejercicio 64: Aplicar umbral
ejercicio64(t) {
    const n = this.rows;
    const m = this.cols;

    // Llenar la matriz con valores aleatorios entre 0 y 255
    this.fillRandom(0, 255);

    // Aplicar el umbral (threshold)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (this.data[i][j] >= t) {
                this.data[i][j] = 1;   // Si el valor es mayor o igual al umbral, se asigna 1
            } else {
                this.data[i][j] = 0;   // Si es menor, se asigna 0
            }
        }
    }
}

// Ejercicio 65: Aplicar máscara booleana
ejercicio65() {
    const n = this.rows;
    const m = this.cols;
    const matrizDatos = [];
    const mascara = [];
    const resultado = [];

    for (let i = 0; i < n; i++) {
        matrizDatos[i] = [];
        mascara[i] = [];
        resultado[i] = [];
        for (let j = 0; j < m; j++) {
            matrizDatos[i][j] = Math.floor(Math.random() * 100) + 1;
            mascara[i][j] = Math.round(Math.random());
            resultado[i][j] = matrizDatos[i][j] * mascara[i][j];
        }
    }
    this.data = resultado;
}

// Extrae submatriz central p×q
  ejercicio66(p, q) {
    const si = Math.floor((this.rows - p) / 2);
    const sj = Math.floor((this.cols - q) / 2);
    const out = new Matrix(p, q, 0);

    for (let i = 0; i < p; i++) {
      for (let j = 0; j < q; j++) {
        out.data[i][j] = this.data[si + i][sj + j];
      }
    }
    return out;
  }



// Ejercicio 67: Extraer borde como arreglo
ejercicio67() {
    const n = this.rows;
    const m = this.cols;
    this.fillRandom(1, 100);

    const borde = [];

    for (let j = 0; j < m; j++) borde.push(this.data[0][j]);
    for (let i = 1; i < n - 1; i++) {
        borde.push(this.data[i][0]);
        borde.push(this.data[i][m - 1]);
    }
    for (let j = 0; j < m; j++) borde.push(this.data[n - 1][j]);

    return borde;
}

// Ejercicio 68: Extraer diagonales como arreglos
ejercicio68() {
    const n = this.rows;
    this.fillRandom(1, 100);

    const diagPrincipal = [];
    const diagSecundaria = [];

    for (let i = 0; i < n; i++) {
        diagPrincipal.push(this.data[i][i]);
        diagSecundaria.push(this.data[i][n - 1 - i]);
    }

    return { diagPrincipal, diagSecundaria };
}

// Ejercicio 69: Detectar si una matriz es simétrica
ejercicio69() {
    this.data = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [2, 11,12,13,14,15,16,17,18,19],
  [3,12,20,21,22,23,24,25,26,27],
  [4,13,21,28,29,30,31,32,33,34],
  [5,14,22,29,35,36,37,38,39,40],
  [6,15,23,30,36,41,42,43,44,45],
  [7,16,24,31,37,42,46,47,48,49],
  [8,17,25,32,38,43,47,50,51,52],
  [9,18,26,33,39,44,48,51,53,54],
  [10,19,27,34,40,45,49,52,54,55]
];
    const n = this.rows;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (this.data[i][j] !== this.data[j][i]) return false;
        }
    }
    return true;
}

// Ejercicio 70: Generar matriz triangular superior
ejercicio70() {
    const n = this.rows;
    this.fillRandom(1, 100);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j < i) this.data[i][j] = 0;
        }
    }
}

// Ejercicio 71: Generar matriz triangular inferior
ejercicio71() {
    const n = this.rows;
    this.fillRandom(1, 100);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i < j) this.data[i][j] = 0;
        }
    }
}

// Ejercicio 72: Generar matriz con patrón de cruz
ejercicio72() {
    const n = this.rows;
    const c = Math.floor(n / 2); // índice central
    this.data = [];

    for (let i = 0; i < n; i++) {
        this.data[i] = [];
        for (let j = 0; j < n; j++) {
            if (i === c || j === c) {
                // fila central o columna central → poner 1
                this.data[i][j] = 1;
            } else {
                // resto de la matriz → poner 0
                this.data[i][j] = 0;
            }
        }
    }
}


// Ejercicio 73: Generar matriz con patrón de X
ejercicio73() {
    const n = this.rows;
    this.data = [];

    for (let i = 0; i < n; i++) {
        this.data[i] = [];
        for (let j = 0; j < n; j++) {
            if (i === j || i + j === n - 1) {
                // diagonal principal (i === j) o diagonal secundaria (i + j === n-1)
                this.data[i][j] = 1;
            } else {
                this.data[i][j] = 0;
            }
        }
    }
}


// Ejercicio 74: Generar matriz con patrón de borde alternado
ejercicio74() {
    const n = this.rows;
    const m = this.cols;
    this.data = [];

    for (let i = 0; i < n; i++) {
        this.data[i] = [];
        for (let j = 0; j < m; j++) {
            if (i === 0 || i === n - 1 || j === 0 || j === m - 1) {
                this.data[i][j] = (i + j) % 2;
            } else {
                this.data[i][j] = 0;
            }
        }
    }
}

// Ejercicio 75: Generar matriz con patrón de espina de pescado
ejercicio75() {
        const n = this.rows;
        const m = this.cols;
        let count = 1;

        for (let s = 0; s < n + m - 1; s++) {
            let start = Math.max(0, s - m + 1);
            let end = Math.min(n - 1, s);

            // Invertimos la alternancia
            if (s % 2 === 0) {
                // ahora recorre de abajo hacia arriba
                for (let i = end; i >= start; i--) {
                    let j = s - i;
                    this.data[i][j] = count++;
                }
            } else {
                // y en impar recorre de arriba hacia abajo
                for (let i = start; i <= end; i++) {
                    let j = s - i;
                    this.data[i][j] = count++;
                }
            }
        }
    }


// Ejercicio 76: Generar matriz con patrón de serpiente
ejercicio76() {
    const n = this.rows;
    const m = this.cols;
    let contador = 1;
    this.data = [];

    for (let i = 0; i < n; i++) {
        this.data[i] = [];
        if (i % 2 === 0) {
            for (let j = 0; j < m; j++) this.data[i][j] = contador++;
        } else {
            for (let j = m - 1; j >= 0; j--) this.data[i][j] = contador++;
        }
    }
}

// Ejercicio 77: Generar matriz con patrón de columnas alternadas
ejercicio77() {
    const n = this.rows;
    const m = this.cols;
    let contador = 1;
    this.data = Array.from({ length: n }, () => Array(m).fill(0));

    for (let j = 0; j < m; j++) {
        if (j % 2 === 0) {
            for (let i = 0; i < n; i++) this.data[i][j] = contador++;
        } else {
            for (let i = n - 1; i >= 0; i--) this.data[i][j] = contador++;
        }
    }
}

// Ejercicio 78: Generar matriz con patrón de espiral inversa
ejercicio78() {
    const n = this.rows;
    this.data = Array.from({ length: n }, () => Array(n).fill(0));

    let top = 0, bottom = n - 1, left = 0, right = n - 1;
    let num = n * n;

    while (top <= bottom && left <= right) {
        // fila superior, izquierda a derecha
        for (let j = left; j <= right; j++) this.data[top][j] = num--;
        top++;

        // columna derecha, arriba a abajo
        for (let i = top; i <= bottom; i++) this.data[i][right] = num--;
        right--;

        // fila inferior, derecha a izquierda
        if (top <= bottom) {
            for (let j = right; j >= left; j--) this.data[bottom][j] = num--;
            bottom--;
        }

        // columna izquierda, abajo a arriba
        if (left <= right) {
            for (let i = bottom; i >= top; i--) this.data[i][left] = num--;
            left++;
        }
    }
}




// Ejercicio 79: Generar matriz con patrón de zigzag diagonal
ejercicio79() {
    const n = this.rows;
    const m = this.cols;
    let contador = 1;
    this.data = Array.from({ length: n }, () => Array(m).fill(0));

    for (let s = 0; s < n + m - 1; s++) {
        if (s % 2 === 0) {
            for (let i = 0; i < n; i++) {
                let j = s - i;
                if (j >= 0 && j < m) this.data[i][j] = contador++;
            }
        } else {
            for (let i = n - 1; i >= 0; i--) {
                let j = s - i;
                if (j >= 0 && j < m) this.data[i][j] = contador++;
            }
        }
    }
}

// Ejercicio 80: Generar matriz con patrón de capas concéntricas
ejercicio80() {
    const n = this.rows;
    this.data = Array.from({ length: n }, () => Array(n).fill(0));
    let capa = 1;

    for (let layer = 0; layer < Math.ceil(n / 2); layer++) {
        for (let i = layer; i < n - layer; i++) {
            this.data[layer][i] = capa;
            this.data[n - layer - 1][i] = capa;
        }
        for (let i = layer + 1; i < n - layer - 1; i++) {
            this.data[i][layer] = capa;
            this.data[i][n - layer - 1] = capa;
        }
        capa++;
    }
}

// 81. Pirámide numérica
  ejercicio81() {
    let count = 1;
    const n = this.rows;
    for (let i = 0; i < n; i++) {
      const start = Math.floor((n - (2 * i + 1)) / 2);
      const end = start + 2 * i + 1;
      for (let j = 0; j < n; j++) {
        if (j >= start && j < end) this.data[i][j] = count++;
        else this.data[i][j] = 0;
      }
    }
  }

  // 82. Diamante centrado
  ejercicio82() {
    const n = this.rows;
    const c = Math.floor(n / 2);
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++)
        this.data[i][j] = (Math.abs(i - c) + Math.abs(j - c) <= c) ? 1 : 0;
  }

  // 83. Escalera diagonal
  ejercicio83() {
    const n = this.rows;
    const m = this.cols;
    for (let i = 0; i < n; i++)
      for (let j = 0; j < m; j++)
        this.data[i][j] = (i === j) ? 1 : 0;
  }

  // 84. Flecha apuntando hacia abajo
  ejercicio84() {
    const n = this.rows;
    const c = Math.floor(n / 2);
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++)
        this.data[i][j] = (j === c || (i === j && i <= c)) ? 1 : 0;
  }

  // 85. Reloj de arena
  ejercicio85() {
    const n = this.rows;
    const c = Math.floor(n / 2);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        this.data[i][j] = (j >= i && j < n - i) ? 1 : 0;
        if (i > c) this.data[i][j] = (j >= n - 1 - i && j <= i) ? 1 : this.data[i][j];
      }
    }
  }

  // 86. Espejo diagonal
  ejercicio86() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = i + 1; j < this.cols; j++) {
        const temp = this.data[i][j];
        this.data[i][j] = this.data[j][i];
        this.data[j][i] = temp;
      }
    }
  }

  // 87. Serpiente vertical
  ejercicio87() {
    let count = 1;
    for (let j = 0; j < this.cols; j++) {
      if (j % 2 === 0) {
        for (let i = 0; i < this.rows; i++) this.data[i][j] = count++;
      } else {
        for (let i = this.rows - 1; i >= 0; i--) this.data[i][j] = count++;
      }
    }
  }

  // 88. Columnas espejo
  ejercicio88() {
    const mid = Math.floor(this.cols / 2);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j <= mid; j++) {
        this.data[i][this.cols - 1 - j] = this.data[i][j];
      }
    }
  }

  toString() {
    return this.data.map(row => row.join('\t')).join('\n');
  }
}
