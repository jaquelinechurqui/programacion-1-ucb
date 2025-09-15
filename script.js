console.log (Math.floor(0.9)); /// redondea al anterior en este caso sera 0
console.log (Math.cell(0.9)); /// redondea al entero de arriba en este caso sera 1
console.log(Math.PI);
console.log(Math.sqrt(4));


///CADENAS, CONCATENACION
var nombre = "Kristhen";
var cadena = 'HOLA'+ nombre;
var resultado 
console.log (cadena.length);  ///length  sirve par ver la longitud d el aacadena incluye espacios

if (nombre.indexOf("Kristhen" != -1)){ /// index of e spara saber is el valoe estadentro d ela cadena pero tabien nos aydua a saber l aposicion de un elemento
    console.log ("Eres el tutor")
    }else {
        console.log("No eres el tutor");
    }

console.log(nombre.indexOf[1]);  /// la primer apsiicon siempre es 0
//tambien podemos ver la posicion con charAt

console.log (nombre.charAt(1));

//REPLACE es reemplazar
nombre = nombre.replace ("K", "C");
console.log(nombre);
//slice es para obtener pedazos d ela cadena
console.log(nombre.slice(1,2)); //el dos no e sinclusivo, si tomo 1, 3 toara el  ri, peo en 1-2 toma solo la 
// PARA CONVERTIR  mayuscula
console.log(nombre.toUpperCase());
//PARA CONVERTIR A MINUSCULA
console.log(nombre.toLowerCase());
//PUSH
lista.push(nombre);     // es par aanidr un valor al final d elista
//splice elimiman un valor agrega o reemplaza
let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2, 2, "March", "April");


let nombre = ["A", "B", "C", "D"];
let pos = 1;

lista.splice(pos, 1); // elimina 1 elemento desde la posición 1
// INCLUDES
let lista = [5, 8, 10];

lista.includes(8); // ✅ true → porque el 8 está en la lista
lista.includes(3); // ❌ false → porque el 3 no está

//charAt , me ayuda a saber que letra esta segun su posicion
let nombre = "Kristhen";
console.log(nombre.charAt(0)); // "K"
console.log(nombre.charAt(3)); // "s"
console.log(nombre.charAt(100)); // "" (vacío, porque no existe esa posición)



//CVONDICONLALES . puede ser verdadero o fals0

/* operadores logicos:
|| or
&& AND ---- if (numero_uno && true)---> ambas deben ser verdaderos
== IGUAL, Comparar
=== comapra el tipo d evariable
!no
!= diferente de */

//if

if(true){
    console.log("La condicion fue verdadera");
}


var numero_uno = 23;
var numero_dos = 30;
if (numero_uno > numero_dos){
    console.log("Ingrese");
}

if(numero_uno == numero_dos){  // el == convierte al mismo tipo d evariable es decir si uno e snumero y el otro texto convierte al mismo tipo y los compara
    console.log("ingrese al programa");
}

if(numero_uno === numero_dos){  // el === compara el tipo de  variable, no convierte el dato, un 30 caden no e sigual aun 30  nnuemro, === directamente convieete los datos.
    console.log("ingrese al programa");
}


if(True){
}else if(false){

}else{
    console.log();
}



document.getElementById(valor).value; // value solo se ocupa en <input> , <textarea>, <select>
document.getElementById("resultado").textContent = "La letra es: " + letra; //Si querés mostrar algo en un <p> o <div>, necesitás usar .textContent.

//WHILE
contador = 0;
while(contador<10){ // asi retorna verdadero se ejecuta y si retorna falso no se ejecuta, el codigo se ejecuta constantemente, hasta que de falsa
    contador ++; // es contador mas 1
    if (contador % 2 == 0){
        console.log(contador);
    }
}