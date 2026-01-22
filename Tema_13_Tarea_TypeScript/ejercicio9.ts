// Ejercicio 9 - Uso de unknown

// Función que maneja tipo unknown
function toUpperSeguro(valor: unknown): string {
    // Comprobación de tipo
    if (typeof valor === "string") {
        return valor.toUpperCase();
    } else {
        throw new Error("El valor proporcionado no es un texto");
    }
}

// Función para ejecutar el ejercicio
function ejecutarEjercicio9(): void {
    console.log("=== EJERCICIO 9: USO DE UNKNOWN ===");
    
    // Caso 1: Valor correcto (string)
    try {
        const resultado1 = toUpperSeguro("hola mundo");
        console.log(`Texto en mayúsculas: ${resultado1}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        }
    }
    
    // Caso 2: Valor incorrecto (número)
    try {
        const resultado2 = toUpperSeguro(12345);
        console.log(`Resultado: ${resultado2}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error capturado: ${error.message}`);
        }
    }
    
    // Caso 3: Valor incorrecto (objeto)
    try {
        const resultado3 = toUpperSeguro({ nombre: "test" });
        console.log(`Resultado: ${resultado3}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error capturado: ${error.message}`);
        }
    }
    
    console.log("====================================\n");
}

// Event listener para el botón
document.getElementById("btn-ejercicio9")?.addEventListener("click", ejecutarEjercicio9);