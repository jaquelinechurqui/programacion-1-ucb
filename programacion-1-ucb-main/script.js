// ==============================
// Clase Pasajero
// ==============================
class Pasajero {
    // Atributos
    nombre = "";
    edad = 0;
    genero = "";
    tipoBoleto = "";

    // Constructor
    constructor(paramNombre, paramEdad, paramGenero, paramTipoBoleto){ 
        this.nombre  =  paramNombre;
        this.edad  =  paramEdad;
        this.genero  =  paramGenero;
        this.tipoBoleto  =  paramTipoBoleto;
    }
    
    // Setters
    setNombre(paramNombre){ this.nombre = paramNombre; }
    setEdad(paramEdad){ this.edad = paramEdad; }
    setGenero(paramGenero){ this.genero = paramGenero; }
    setTipoBoleto(paramTipoBoleto){ this.tipoBoleto = paramTipoBoleto; }

    // Getters
    GetNombre (){ return this.nombre; }
    GetEdad (){ return this.edad; }
    GetGenero (){ return this.genero; }
    GetTipoBoleto (){ return this.tipoBoleto; }

    // Mostrar datos
    ToString(){
        return "Pasajero: " + 
            "Nombre: "  + this.GetNombre() + ", " +
            "Edad: "  + this.GetEdad() + ", " +
            "Genero: " + this.GetGenero() + ", " +
            "Tipo de Boleto: " + this.GetTipoBoleto();
    }
}

// ==============================
// Clase BoteRescate
// ==============================
class BoteRescate {
    capacidad = 0;
    ListaOcupantes = [];

    constructor(paramCapacidad) { 
        this.capacidad = paramCapacidad;
        this.ListaOcupantes = [];
    }

    // Setters y Getters
    setCapacidad(paramCapacidad){ this.capacidad = paramCapacidad; }
    setListaOcupantes(paramLista){ this.ListaOcupantes = paramLista; }
    getCapacidad(){ return this.capacidad; }
    getListaOcupantes(){ return this.ListaOcupantes; }

    // Agregar pasajero
    agregarPasajero(pasajero){
        if(this.ListaOcupantes.length < this.capacidad){
            this.ListaOcupantes.push(pasajero);
            return true;
        } else {
            return false;
        }
    }

    // Mostrar ocupantes 
    listarOcupantes(){
        let texto = "Bote con capacidad: " + this.capacidad + "\n";

        if(this.ListaOcupantes.length === 0){
            texto += "No hay ocupantes.\n";
        } else {
            for(let i = 0; i < this.ListaOcupantes.length; i++){
                let p = this.ListaOcupantes[i];
                texto += (i+1) + ". " + p.GetNombre() + 
                         " (" + p.GetGenero() + ", " + p.GetEdad() + " años, " + p.GetTipoBoleto() + ")\n";
            }
        }
        return texto;
    }

    // Información general
    mostrarInformacion(){
        let texto = "INFORMACIÓN DEL BOTE\n";
        texto += "Capacidad máxima: " + this.capacidad + "\n";
        texto += "Pasajeros actuales: " + this.ListaOcupantes.length + "\n";
        return texto;
    }
}

// ==============================
// Algoritmo de evacuación
// ==============================
function simulacionEvacuacion() {

    // --- Crear pasajeros ---
    let pasajeros = [
        new Pasajero("Ana", 25, "F", "1ra"),
        new Pasajero("Luis", 30, "M", "2da"),
        new Pasajero("Sofía", 10, "F", "3ra"),
        new Pasajero("Pedro", 40, "M", "1ra"),
        new Pasajero("Juan", 28, "M", "3ra"),
        new Pasajero("Lucía", 12, "F", "3ra"),
        new Pasajero("Elena", 45, "F", "2da"),
        new Pasajero("Miguel", 18, "M", "3ra"),
        new Pasajero("Valeria", 8, "F", "1ra"),
        new Pasajero("Andrés", 60, "M", "2da")
    ];

    // --- Crear varios botes ---
    let botes = [
        new BoteRescate(2),
        new BoteRescate(3),
        new BoteRescate(3)
    ];

    // --- Ordenar pasajeros por criterio (género/edad, luego clase de boleto) ---
    pasajeros.sort(function(a, b){
        // Mujeres y niños primero
        let prioridadA = (a.GetGenero() === "F" || a.GetEdad() < 18) ? 0 : 1;
        let prioridadB = (b.GetGenero() === "F" || b.GetEdad() < 18) ? 0 : 1;

        if(prioridadA !== prioridadB) return prioridadA - prioridadB;

        // Orden por clase de boleto
        let ordenClase = {"1ra":0, "2da":1, "3ra":2};
        return ordenClase[a.GetTipoBoleto()] - ordenClase[b.GetTipoBoleto()];
    });

    // --- Llenar los botes ---
    let fuera = [];
    for(let p of pasajeros){
        let subio = false;
        for(let bote of botes){
            if(bote.agregarPasajero(p)){
                subio = true;
                break;
            }
        }
        if(!subio){
            fuera.push(p);
        }
    }

    // --- Mostrar resultados ---
    let texto = "SIMULACIÓN DE EVACUACIÓN \n\n";

    for(let i = 0; i < botes.length; i++){
        texto += "Bote " + (i+1) + ":\n";
        texto += botes[i].listarOcupantes() + "\n";
    }

    if(fuera.length > 0){
        texto += "\nPasajeros que NO lograron subir:\n";
        for(let p of fuera){
            texto += "- " + p.ToString() + "\n";
        }
    } else {
        texto += "\nTodos los pasajeros lograron subir a los botes.\n";
    }

    return texto;
}
