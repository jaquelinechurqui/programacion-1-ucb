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

  //EJERCICIO 1
  ejercicio1(){
    var suma_total = 0;
    for( let i = 0; i< this.rows; i++){
        for( let j = 0; j < this.cols; j++){
            suma_total += this.data [i][j];
        }
    }
    return suma_total;
  }

  //EJERICICIO 2
  ejercicio2(){
    let max = this.data [0][0]
    let min = this.data [0][0]
   for( let i = 0; i <this.rows; i++){
        for(let j = 0;  j< this.cols; j ++){
        var numero = this.data[i][j];
        if (numero > max){
            max = numero;
        }
        if ( numero < min){
            min = numero;
           }
        }
    }
    return {max,min};
}


//EJERCICIO 3
ejercicio3(){
var suma_total = 0;
var promedio = [];
    for( let i = 0; i< this.rows; i++){
        for( let j = 0; j < this.cols; j++){
            suma_total += this.data [i][j];
            promedio = suma_total/(this.rows*this.cols);
        }
    }
    return promedio;
}
  
//EJERCICIO 5
ejercicio5(){
    for( let i = 0; i< this.rows; i++){
        for( let j = 0; j < Math.floor(this.cols/2); j++){
            var temp =this.data[i][j];
            this.data[i][j]=this.data[i][this.cols-1-j];
            this.data[i][this.cols-1-j]= temp;
        }
    }

}

//EJERCICIO 6  revisar
ejercicio6() {
    if (this.rows !== this.cols) {
      // devolver matriz vacía y mensaje de error
      return { resultMatrix: null, message: "Rotación 90°: se requiere matriz cuadrada." };
    }
    const n = this.rows;
    const res = new Matrix(n, n, 0);
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) 
        res.data[j][n - 1 - i] = this.data[i][j];
    return { resultMatrix: res, message: "Matriz rotada 90° en sentido horario." };
  }







  //EJERICICIO 14
  ejercicio14(){
    for( let i = 0; i <this.rows; i++){
        for(let j = 0;  j< this.cols; j ++){
            if (i ===j){
                this.data [i][j] = 1;
            }else{
                this.data [i][j]= 0;
            }
        } 
    }
  }


//ejercicio 66 del exmaenOJO
class Matrix {
  constructor(rows, cols, fill = 0) {
    this.rows = rows;
    this.cols = cols;
    this.data = Array.from({ length: rows }, () => Array(cols).fill(fill));
  }

  fillRandom(min, max) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }
  }

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
}





  toString() {
    return this.data.map(row => row.join('\t')).join('\n');
  }
}
