// Ejercicio 7 - Clases e interfaces

// Definición de la interfaz Empleado
interface Empleado {
    id: number;
    nombre: string;
    sueldoMensual: number;
}

// Clase que implementa la interfaz
class EmpleadoEmpresa implements Empleado {
    id: number;
    nombre: string;
    sueldoMensual: number;
    
    constructor(id: number, nombre: string, sueldoMensual: number) {
        this.id = id;
        this.nombre = nombre;
        this.sueldoMensual = sueldoMensual;
    }
    
    // Método para calcular el sueldo anual
    calcularSueldoAnual(): number {
        return this.sueldoMensual * 12;
    }
}

// Función para ejecutar el ejercicio
function ejecutarEjercicio7(): void {
    console.log("=== EJERCICIO 7: CLASES E INTERFACES ===");
    
    // Crear objeto de la clase
    const empleado1 = new EmpleadoEmpresa(101, "Eduardo Molinero", 2350);
    
    console.log(`Empleado: ${empleado1.nombre}`);
    console.log(`ID: ${empleado1.id}`);
    console.log(`Sueldo mensual: ${empleado1.sueldoMensual}€`);
    console.log(`Sueldo anual: ${empleado1.calcularSueldoAnual()}€`);
    
    console.log("=========================================\n");
}

// Event listener para el botón
document.getElementById("btn-ejercicio7")?.addEventListener("click", ejecutarEjercicio7);