"use strict";
// Ejercicio 4 - Interfaces como tipo
var _a;
// Función para ejecutar el ejercicio
function ejecutarEjercicio4() {
    console.log("=== EJERCICIO 4: INTERFACES COMO TIPO ===");
    // Variable de tipo Producto (correcta)
    const producto1 = {
        id: 1,
        nombre: "Portátil",
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
(_a = document.getElementById("btn-ejercicio4")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio4);
