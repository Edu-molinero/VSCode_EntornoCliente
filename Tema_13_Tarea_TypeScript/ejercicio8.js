"use strict";
// Ejercicio 8 - Manejo de errores
var _a;
// Función que lanza error si el número es negativo
function doblarPositivo(n) {
    if (n < 0) {
        throw new Error("El número no puede ser negativo");
    }
    return n * 2;
}
// Función para ejecutar el ejercicio
function ejecutarEjercicio8() {
    console.log("=== EJERCICIO 8: MANEJO DE ERRORES ===");
    // Caso 1: Número válido (positivo)
    try {
        const resultado1 = doblarPositivo(5);
        console.log(`El doble de 5 es: ${resultado1}`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(`Error: ${error.message}`);
        }
    }
    // Caso 2: Número inválido (negativo)
    try {
        const resultado2 = doblarPositivo(-3);
        console.log(`El doble de -3 es: ${resultado2}`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(`Error capturado: ${error.message}`);
        }
    }
    console.log("=======================================\n");
}
// Event listener para el botón
(_a = document.getElementById("btn-ejercicio8")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio8);
