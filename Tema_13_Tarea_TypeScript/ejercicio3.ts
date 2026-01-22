// Ejercicio 3 - Parámetros opcionales

// Función con parámetro opcional
function saludar(nombre?: string): void {
    if (nombre) {
        console.log(`Hola, ${nombre}.`);
    } else {
        console.log("Hola, invitado.");
    }
}

// Función para ejecutar el ejercicio
function ejecutarEjercicio3(): void {
    console.log("=== EJERCICIO 3: PARÁMETROS OPCIONALES ===");
    
    // Llamada con nombre
    saludar("María");
    
    // Llamada sin nombre
    saludar();
    
    console.log("===========================================\n");
}

// Event listener para el botón
document.getElementById("btn-ejercicio3")?.addEventListener("click", ejecutarEjercicio3);