"use strict";
// Ejercicio 5 - Arrays de interfaces
var _a;
// Función para ejecutar el ejercicio
function ejecutarEjercicio5() {
    console.log("=== EJERCICIO 5: ARRAYS DE INTERFACES ===");
    // Array de productos
    const productos = [
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
    let precioTotal = 0;
    productos.forEach((producto) => {
        precioTotal += producto.precio;
    });
    console.log(`\nPrecio total de todos los productos: ${precioTotal.toFixed(2)}€`);
    console.log("==========================================\n");
}
// Event listener para el botón
(_a = document.getElementById("btn-ejercicio5")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio5);
