// Ejercicio 2 - Funciones tipadas

// Función que calcula la media de dos números
function calcularMedia(num1: number, num2: number): number {
    return (num1 + num2) / 2;
}

// Función para ejecutar el ejercicio
function ejecutarEjercicio2(): void {
    console.log("=== EJERCICIO 2: FUNCIONES TIPADAS ===");
    
    // Llamada correcta
    const media: number = calcularMedia(8, 6);
    console.log(`La media de 8 y 6 es: ${media}`);
    
    // Llamada incorrecta (la comento porque sino me sale un error, no se por que)
    // const mediaIncorrecta = calcularMedia("8", 6); // Error: el argumento de tipo 'string' no se puede asignar al parámetro de tipo 'number'
    
    console.log("=======================================\n");
}

// Event listener para el botón
document.getElementById("btn-ejercicio2")?.addEventListener("click", ejecutarEjercicio2);