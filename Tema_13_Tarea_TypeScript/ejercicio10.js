"use strict";
// Ejercicio 10 - Mini proyecto: gestión de alumnos
var _a;
// Clase que implementa la interfaz
class AlumnoApp {
    constructor(id, nombre, notas) {
        this.id = id;
        this.nombre = nombre;
        this.notas = notas;
    }
    // Método para calcular la nota media
    calcularNotaMedia() {
        if (this.notas.length === 0) {
            return 0;
        }
        const suma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
        return suma / this.notas.length;
    }
    // Método que devuelve un resumen del alumno
    obtenerResumen() {
        const media = this.calcularNotaMedia();
        return `Alumno: ${this.nombre} (ID: ${this.id}) - Notas: [${this.notas.join(", ")}] - Media: ${media.toFixed(2)}`;
    }
}
// Función para ejecutar el ejercicio
function ejecutarEjercicio10() {
    console.log("=== EJERCICIO 10: MINI PROYECTO - GESTIÓN DE ALUMNOS ===");
    // Crear array de alumnos
    const alumnos = [
        new AlumnoApp(1, "Eduardo Molinero", [7.5, 8.0, 6.5, 9.0, 7.0]),
        new AlumnoApp(2, "Manuel Robles", [9.0, 8.5, 9.5, 8.0, 9.0]),
        new AlumnoApp(3, "Jesús Fernández", [6.0, 5.5, 7.0, 6.5, 6.0])
    ];
    // Mostrar resumen de cada alumno
    console.log("\n--- Resumen de alumnos ---");
    alumnos.forEach((alumno) => {
        console.log(alumno.obtenerResumen());
    });
    // Calcular media global
    let sumaMedias = 0;
    alumnos.forEach((alumno) => {
        sumaMedias += alumno.calcularNotaMedia();
    });
    const mediaGlobal = sumaMedias / alumnos.length;
    console.log(`\n--- Media global de todos los alumnos: ${mediaGlobal.toFixed(2)} ---`);
    console.log("==========================================================\n");
}
// Event listener para el botón
(_a = document.getElementById("btn-ejercicio10")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio10);
