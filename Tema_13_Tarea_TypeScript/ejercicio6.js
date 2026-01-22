"use strict";
// Ejercicio 6 - Clases y encapsulación
var _a;
// Clase Persona con encapsulación
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}
// Función para ejecutar el ejercicio
function ejecutarEjercicio6() {
    console.log("=== EJERCICIO 6: CLASES Y ENCAPSULACIÓN ===");
    // Crear objeto de la clase
    const persona1 = new Persona("Eduardo", 20);
    // Llamar al método presentarse
    persona1.presentarse();
    // Acceso a propiedad pública (funciona)
    console.log(`Acceso a nombre (público): ${persona1.nombre}`);
    // Acceso a propiedad privada (comentado porque da error en compilación)
    // console.log(`Acceso a edad (privado): ${persona1.edad}`); 
    // Error: La propiedad 'edad' es privada y solo se puede acceder desde la clase 'Persona'
    console.log("============================================\n");
}
// Event listener para el botón
(_a = document.getElementById("btn-ejercicio6")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio6);
