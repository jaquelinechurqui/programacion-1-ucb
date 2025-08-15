//SIN RETURN
function mi_primer_algoritmo(){
    var mensaje = "Hola Mundo";
    alert (mensaje);
}
//CON RETURN

//Convertir a binario
function binarioADecimal (binario) {
    let decimal = 0;
    for (let i = 0; i < binario.length; i ++){
        digitoBinario = binario[i];
        if(digitoBinario === '1'){
            decimal = decimal * 2 + 1;
        }
        else{
                decimal = decimal * 2 + 0;
        }
    }
    alert (decimal) ;
}







