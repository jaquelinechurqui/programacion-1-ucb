// la clase pasajero
class Pasajero {

    //Atributos de la clase, con valores por defeceto
    nombre = "";
    edad = 0;
    genero = "";
    tipoBoleto = "";

    //Constructor
    constructor(paramNombre, paramEdad, paramGenero, paramTipoBoleto){ 
        this.nombre  =  paramNombre;
        this.edad  =  paramEdad;
        this.genero  =  paramGenero;
        this.tipoBoleto  =  paramTipoBoleto;

    }
    
    //Setters, colocar o modificar
    setNombre(paramNombre){this.nombre = paramNombre;}
    setEdad(paramEdad){this.edad = paramEdad;}
    setGenero(paramGenero){this.genero = paramGenero;}
    setTipoBoleto(paramTipoBoleto){this.tipoBoleto = paramTipoBoleto;}

    //Getters, extrae o obtener los valores de los atributos
    GetNombre (){ return this.nombre;}
    GetEdad (){ return this.edad;}
    GetGenero (){ return this.genero;}
    GetTipoBoleto (){ return this.tipoBoleto;}

    //Mostrar los valores de los atributos
    ToString(){
        return "Pasajero:" + 
            "Nombre:"  + this.GetNombre()+
            "Edad:"  + this.GetEdad()+
            "Genero" + this.GetGenero()+
            "Tipo de Boleto:" + this.GetTipoBoleto();
    }

}


// La clase boteRescate
    //Atributos de la clase, con valores por defeceto
    capacidad = 0;
    ListaOcupantes = [];

    //constructor
    constructor(paramCapacidad,paramListaOcupantes) { 
        this.capacidad  =  paramCapacidad;
        this.ListaOcupantes =  paramListaOcupantes;
    }



//Algoritmo de evacuacion
