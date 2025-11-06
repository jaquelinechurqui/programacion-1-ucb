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

    }``
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


 // Ejercicio 41 - Columnas duplicadas (sin join)
    ejercicio41() {
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

    // Ejercicio 42 - Simetría vertical
    ejercicio42() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols / 2; j++) {
                if (this.data[i][j] !== this.data[i][this.cols - 1 - j]) {
                    return false;
                }
            }
        }
        return true;
    }

    // Ejercicio 43 - Simetría horizontal
    ejercicio43() {
        for (let j = 0; j < this.cols; j++) {
            for (let i = 0; i < this.rows / 2; i++) {
                if (this.data[i][j] !== this.data[this.rows - 1 - i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    // Ejercicio 44 - Simetría diagonal secundaria
    ejercicio44() {
        if (this.rows !== this.cols) return false;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.data[i][j] !== this.data[this.rows - 1 - j][this.cols - 1 - i]) {
                    return false;
                }
            }
        }
        return true;
    }

    // Ejercicio 45 - Patrón escalonado
  ejercicio45() {
  for (let i = 0; i < this.rows; i++) {
      if (this.data[i].length !== i + 1) return false;
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







  toString() {
    return this.data.map(row => row.join('\t')).join('\n');
  }
}
