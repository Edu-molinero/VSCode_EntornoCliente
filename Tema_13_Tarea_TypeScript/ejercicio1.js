"use strict";
// Ejercicio 1 - Tipos básicos
var _a;
// Declaración de variables con tipos
let nombreAlumno = "Eduardo Molinero";
let edad = 20;
let estaMatriculado = true;
let notas = [8.5, 7.0, 9.2, 6.8, 8.0];
const nombreCentro = "Medac";
// Función para ejecutar el ejercicio
function ejecutarEjercicio1() {
    console.log("=== EJERCICIO 1: TIPOS BÁSICOS ===");
    console.log(`Nombre del alumno: ${nombreAlumno}`);
    console.log(`Edad: ${edad}`);
    console.log(`Está matriculado: ${estaMatriculado}`);
    console.log(`Notas: [${notas.join(", ")}]`);
    console.log(`Centro educativo: ${nombreCentro}`);
    console.log("===================================\n");
}
// Event listener para el botón
(_a = document.getElementById("btn-ejercicio1")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio1);
