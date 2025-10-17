class Matrix {
    rows;
    cols;
    data;
    constructor( rowsParam, colsParam, defaulValue = 0){
        this.rows = rowsParam;
        this.cols = colsParam;
        this.data = [];

        for ( let i = 0;i < rowsParam; i ++){
            const rowTemp = [];
            for (let j = 0;  j < colsParam; j ++){
                rowTemp.push(defaulValue);
            }
            this.data.push(rowTemp);
        }    
    }
    
//Fubcion de validACION DE RANGO VALIDO EN LA MATRIZ
    isValidPosition(row,col){
        return row >= 0 && row < this.rows &&  col>= 0 &&   col < this.cols;
    
}

    setValue(row, col, value)  {
        if(isValidPosition(row,col)){
            this.data[row][col] = value;
        }   
    }

    getValue(row,col){
        if(this.isValidPosition(row,col)){
        return this.data[row][col];
    } else{
        return null
    }
}

    fillRandom(min,max){
        for(let i = 0; i < this.rows; i ++){
            for(let j = 0; j < this.cols; j ++){
                const random = Math.floor(Math.random() * (max - min + 1)) +  min;
                this.data[i][j] = random;
            }
        }
    }

   fillIncrementRows() {
    // Cada fila i se rellena con el valor i (0..rows-1)
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
            this.data[i][j] = i;
        }
    }
}



    toString(){
       return this.data.map(row => row.join('\t'). join('\n'));
    }

    // ----------------------------
    // EJERCICIOS DEL PRÁCTICO SIS-112
    // ----------------------------

    // Ejercicio 1: Cuadrado Relleno
    fillExercise1() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = 1;
            }
        }
    }

    // Ejercicio 2: Marco Interno
    fillExercise2() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (i === 0 || i === this.rows - 1 || j === 0 || j === this.cols - 1) {
                    this.data[i][j] = 0;
                } else {
                    this.data[i][j] = 1;
                }
            }
        }
    }

    // Ejercicio 3: Cruces
    fillExercise3() {
        const mid = Math.floor(this.rows / 2);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (i === mid || j === mid) {
                    this.data[i][j] = 1;
                } else {
                    this.data[i][j] = 0;
                }
            }
        }
    }

    // Ejercicio 4: Bordes y Diagonales
    fillExercise4() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (i === 0 || j === 0 || i === this.rows - 1 || j === this.cols - 1) {
                    this.data[i][j] = 1;
                } else if (i === j || i + j === this.cols - 1) {
                    this.data[i][j] = 2;
                } else {
                    this.data[i][j] = 0;
                }
            }
        }
    }

    // Ejercicio 5: Bandera (3 franjas horizontales)
    fillExercise5() {
        const franja = Math.floor(this.rows / 3);
        for (let i = 0; i < this.rows; i++) {
            let valor = 0;
            if (i < franja) valor = 1;
            else if (i < franja * 2) valor = 2;
            else valor = 0;
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = valor;
            }
        }
    }

    // Ejercicio 6: Relleno Alterno
    fillExercise6() {
        for (let i = 0; i < this.rows; i++) {
            const valor = i % 2 === 0 ? 1 : 0;
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = valor;
            }
        }
    }

    // Ejercicio 7: Zig-Zag Horizontal
    fillExercise7() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (j === i) {
                    this.data[i][j] = 1;
                } else {
                    this.data[i][j] = 0;
                }
            }
        }
    }

    // Ejercicio 8: Relleno en Espiral (versión simplificada)
    fillExercise8() {
    // Reiniciar matriz a ceros
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
            this.data[i][j] = 0;
        }
    }

    let top = 0;
    let bottom = this.rows - 1;
    let left = 0;
    let right = this.cols - 1;

    // Recorremos "capas" pero avanzando las fronteras en 2
    // para dejar una fila/columna de ceros entre vueltas (camino).
    while (top <= bottom && left <= right) {
        // izquierda -> derecha (fila superior)
        for (let j = left; j <= right; j++) this.data[top][j] = 1;
        // bajar la frontera superior
        top++;

        // arriba -> abajo (columna derecha)
        for (let i = top; i <= bottom; i++) this.data[i][right] = 1;
        // mover la frontera derecha
        right--;

        // derecha -> izquierda (fila inferior)
        if (top <= bottom) {
            for (let j = right; j >= left; j--) this.data[bottom][j] = 1;
            bottom--;
        }

        // abajo -> arriba (columna izquierda)
        if (left <= right) {
            for (let i = bottom; i >= top; i--) this.data[i][left] = 1;
            left++;
        }

        // IMPORTANTE: avanzamos las fronteras una vez más para dejar
        // una "línea" de ceros entre esta vuelta y la siguiente.
        top++;
        left++;
        bottom--;
        right--;
    }
}



    // Ejercicio 9: Triángulo Superior Izquierdo
    fillExercise9() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (j <= i) {
                    this.data[i][j] = 1;
                } else {
                    this.data[i][j] = 0;
                }
            }
        }
    }

    // Ejercicio 10: Triángulo Inferior Derecho
    fillExercise10() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (j >= this.cols - i - 1) {
                    this.data[i][j] = 1;
                } else {
                    this.data[i][j] = 0;
                }
            }
        }
    }

    // Ejercicio 11: Cuadrícula
    fillExercise11() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (i % 2 === 0 || j === 0 || j === this.cols - 1) {
                    this.data[i][j] = 1;
                } else {
                    this.data[i][j] = 0;
                }
            }
        }
    }

    // Ejercicio 12: Triángulo Central
    fillExercise12() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (i >= 1 && i <= 5 && j >= 4 - i + 1 && j <= 4 + i - 1) this.data[i][j] = 1;
                else this.data[i][j] = 0;
            }
        }
    }

    // Ejercicio 13: Rombos Concéntricos
    fillExercise13() {
        const mid = Math.floor(this.rows / 2);
        for (let i = 0; i < this.rows; i++)
            for (let j = 0; j < this.cols; j++)
                this.data[i][j] = (Math.abs(i - mid) + Math.abs(j - mid) <= mid) ? 1 : 0;
    }

    // Ejercicio 14: Cruces Concéntricas
    fillExercise14() {
        for (let i = 0; i < this.rows; i++)
            for (let j = 0; j < this.cols; j++)
                this.data[i][j] = (i === 2 || i === 7 || j === 2 || j === 7 || i === 4 || j === 4) ? 1 : 0;
    }

    // Ejercicio 15: Bandera Diagonal
    fillExercise15() {
        for (let i = 0; i < this.rows; i++)
            for (let j = 0; j < this.cols; j++)
                this.data[i][j] = (j <= i) ? 1 : 0;
    }

    // Ejercicio 16: Cuadrado dentro de Cuadrado
    fillExercise16() {
        for (let i = 0; i < this.rows; i++)
            for (let j = 0; j < this.cols; j++) {
                if (i === 0 || i === 9 || j === 0 || j === 9) this.data[i][j] = 1;
                else if (i >= 2 && i <= 7 && j >= 2 && j <= 7) {
                    if (i === 2 || i === 7 || j === 2 || j === 7) this.data[i][j] = 2;
                    else this.data[i][j] = 0;
                } else this.data[i][j] = 0;
            }
    }

   // Ejercicio 17: Bordes y Centro (bloque central 4x4)
    fillExercise17() {
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
            if (i === 0 || i === this.rows - 1 || j === 0 || j === this.cols - 1) {
                // Bordes exteriores
                this.data[i][j] = 1;
            } 
            // 🔹 Centro 4x4 (filas 3–6 y columnas 3–6)
            else if (i >= 3 && i <= 6 && j >= 3 && j <= 6) {
                this.data[i][j] = 2;
            } 
            else {
                this.data[i][j] = 0;
            }
        }
    }
}


    // Ejercicio 18: Líneas Paralelas
    fillExercise18() {
        for (let i = 0; i < this.rows; i++)
            for (let j = 0; j < this.cols; j++)
                this.data[i][j] = (i % 2 === 0 || j === 0 || j === 9) ? 1 : 0;
    }

    // Ejercicio 19: Marcas de Cruz
    fillExercise19() {
        for (let i = 0; i < this.rows; i++)
            for (let j = 0; j < this.cols; j++)
                this.data[i][j] = ((i + j) % 4 === 0 || (i - j) % 4 === 0) ? 1 : 0;
    }

    // Ejercicio 20: Rombo de Esquinas
    fillExercise20() {
        for (let i = 0; i < this.rows; i++)
            for (let j = 0; j < this.cols; j++)
                this.data[i][j] = (i + j < 4 || i - j > 5 || j - i > 5 || i + j > 13) ? 1 : 0;
    }

    // Ejercicio 21: Relleno de Ajedrez
    fillExercise21() {
        for (let i = 0; i < this.rows; i++)
            for (let j = 0; j < this.cols; j++)
                this.data[i][j] = (i + j) % 2 === 0 ? 1 : 0;
    }

    // Ejercicio 22: Reloj de Arena
    fillExercise22() {
        for (let i = 0; i < this.rows; i++)
            for (let j = 0; j < this.cols; j++) {
                const cond = (j >= i && j < this.cols - i) || (j <= i && j >= this.cols - i - 1);
                this.data[i][j] = cond ? 1 : 0;
            }
    }
}

