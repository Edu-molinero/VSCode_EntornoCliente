"use strict";
// Ejercicio 7 - Clases e interfaces
var _a;
// Clase que implementa la interfaz
class EmpleadoEmpresa {
    constructor(id, nombre, sueldoMensual) {
        this.id = id;
        this.nombre = nombre;
        this.sueldoMensual = sueldoMensual;
    }
    // Método para calcular el sueldo anual
    calcularSueldoAnual() {
        return this.sueldoMensual * 12;
    }
}
// Función para ejecutar el ejercicio
function ejecutarEjercicio7() {
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
(_a = document.getElementById("btn-ejercicio7")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio7);
