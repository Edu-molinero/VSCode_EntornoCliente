// Ejercicio 1 - Tipos básicos

// Declaración de variables con tipos
let nombreAlumno: string = "Eduardo Molinero";
let edad: number = 20;
let estaMatriculado: boolean = true;
let notas: number[] = [8.5, 7.0, 9.2, 6.8, 8.0];
const nombreCentro: string = "Medac";

// Función para ejecutar el ejercicio
function ejecutarEjercicio1(): void {
    console.log("=== EJERCICIO 1: TIPOS BÁSICOS ===");
    console.log(`Nombre del alumno: ${nombreAlumno}`);
    console.log(`Edad: ${edad}`);
    console.log(`Está matriculado: ${estaMatriculado}`);
    console.log(`Notas: [${notas.join(", ")}]`);
    console.log(`Centro educativo: ${nombreCentro}`);
    console.log("===================================\n");
}

// Event listener para el botón
document.getElementById("btn-ejercicio1")?.addEventListener("click", ejecutarEjercicio1);