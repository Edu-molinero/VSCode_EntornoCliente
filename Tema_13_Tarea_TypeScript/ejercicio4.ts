// Ejercicio 4 - Interfaces como tipo

// Definición de la interfaz Producto
interface Producto {
    id: number;
    nombre: string;
    precio: number;
}

// Función para ejecutar el ejercicio
function ejecutarEjercicio4(): void {
    console.log("=== EJERCICIO 4: INTERFACES COMO TIPO ===");
    
    // Variable de tipo Producto (correcta)
    const producto1: Producto = {
        id: 1,
        nombre: "Laptop",
        precio: 899.99
    };
    
    console.log("Producto correcto:");
    console.log(`ID: ${producto1.id}`);
    console.log(`Nombre: ${producto1.nombre}`);
    console.log(`Precio: ${producto1.precio}€`);
    
    // Objeto incorrecto (comentado para que compile)
    // const productoIncorrecto: Producto = {
    //     id: 2,
    //     nombre: "Mouse"
    //     // Falta la propiedad 'precio'
    // };
    
    console.log("==========================================\n");
}

// Event listener para el botón
document.getElementById("btn-ejercicio4")?.addEventListener("click", ejecutarEjercicio4);