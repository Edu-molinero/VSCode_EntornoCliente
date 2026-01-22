// Ejercicio 5 - Arrays de interfaces

// Definición de la interfaz Producto (reutilizada)
interface Producto {
    id: number;
    nombre: string;
    precio: number;
}

// Función para ejecutar el ejercicio
function ejecutarEjercicio5(): void {
    console.log("=== EJERCICIO 5: ARRAYS DE INTERFACES ===");
    
    // Array de productos
    const productos: Producto[] = [
        { id: 1, nombre: "Portátil", precio: 899.99 },
        { id: 2, nombre: "Ratón", precio: 25.50 },
        { id: 3, nombre: "Teclado", precio: 65.00 }
    ];
    
    // Recorrer y mostrar productos
    console.log("Lista de productos:");
    productos.forEach((producto) => {
        console.log(`- ${producto.nombre}: ${producto.precio}€`);
    });
    
    // Calcular precio total
    let precioTotal: number = 0;
    productos.forEach((producto) => {
        precioTotal += producto.precio;
    });
    
    console.log(`\nPrecio total de todos los productos: ${precioTotal.toFixed(2)}€`);
    console.log("==========================================\n");
}

// Event listener para el botón
document.getElementById("btn-ejercicio5")?.addEventListener("click", ejecutarEjercicio5);