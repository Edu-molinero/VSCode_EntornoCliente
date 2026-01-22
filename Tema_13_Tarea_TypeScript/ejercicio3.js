"use strict";
// Ejercicio 3 - Parámetros opcionales
var _a;
// Función con parámetro opcional
function saludar(nombre) {
    if (nombre) {
        console.log(`Hola, ${nombre}.`);
    }
    else {
        console.log("Hola, invitado.");
    }
}
// Función para ejecutar el ejercicio
function ejecutarEjercicio3() {
    console.log("=== EJERCICIO 3: PARÁMETROS OPCIONALES ===");
    // Llamada con nombre
    saludar("María");
    // Llamada sin nombre
    saludar();
    console.log("===========================================\n");
}
// Event listener para el botón
(_a = document.getElementById("btn-ejercicio3")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio3);
