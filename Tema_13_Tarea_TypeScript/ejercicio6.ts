// Ejercicio 6 - Clases y encapsulación

// Clase Persona con encapsulación
class Persona {
    public nombre: string;
    private edad: number;
    
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    public presentarse(): void {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Función para ejecutar el ejercicio
function ejecutarEjercicio6(): void {
    console.log("=== EJERCICIO 6: CLASES Y ENCAPSULACIÓN ===");
    
    // Crear objeto de la clase
    const persona1 = new Persona("Carlos", 30);
    
    // Llamar al método presentarse
    persona1.presentarse();
    
    // Acceso a propiedad pública (funciona)
    console.log(`Acceso a nombre (público): ${persona1.nombre}`);
    
    // Acceso a propiedad privada (comentado porque da error en compilación)
    // console.log(`Acceso a edad (privado): ${persona1.edad}`); 
    // Error: La propiedad 'edad' es privada y solo se puede acceder desde la clase 'Persona'
    
    console.log("============================================\n");
}

// Event listener para el botón
document.getElementById("btn-ejercicio6")?.addEventListener("click", ejecutarEjercicio6);