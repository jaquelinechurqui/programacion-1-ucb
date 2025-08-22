function ContarVocales(palabra) {
    let contarVocales = 0;
    palabra.split('').forEach(element => {
        if ('aeiouAEIOU'.includes(element)) {
            contarVocales++;
        }
    });
    console.log(contarVocales);
    return contarVocales;
}

function ContarPalabras(texto) {
    const palabras = texto.trim().split(/\s+/).filter(p => p.length > 0);
    const contar = palabras.length;
    console.log(contar);
    return contar;
}

function ContarCaracteres(texto) {
    const resultado = texto.length;
    console.log(resultado);
    return resultado;
}
