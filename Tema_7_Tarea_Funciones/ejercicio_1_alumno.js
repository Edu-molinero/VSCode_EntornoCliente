// Plantilla para alumnos - Tema07 Ejercicio 1
// Completa las funciones marcadas con TODO y ejecuta desde el navegador.

// Ejercicio 1 - raizCuadrada (plantilla)
document.getElementById('run-e1').addEventListener('click', function () {
  const v = parseFloat(document.getElementById('a-e1').value);
  const out = document.getElementById('out-e1');
  // TODO: implementar raizCuadrada(numero) 
    function raizCuadrada(numero) {
        return Math.sqrt(numero);
    }

  const res = raizCuadrada(v);

  out.textContent = `Resultado: ${res}`;
});

// Ejercicio 2 - alerta (plantilla)
document.getElementById('run-e2').addEventListener('click', function () {
  const msg = document.getElementById('a-e2').value || 'Mensaje de ejemplo';
  alert(msg);
  console.log('Alerta mostrada con el mensaje:');

  document.getElementById('out-e2').textContent = 'Implementa la función alerta(mensaje) para mostrar un alert en el navegador.';
});

// Ejercicio 3 - new Function (plantilla)
document.getElementById('run-e3').addEventListener('click', function () {
  const a = parseFloat(document.getElementById('a-e3a').value);
  const b = parseFloat(document.getElementById('a-e3b').value);

  // usa new Function para construir y ejecutar una función que sume a y b
  const sumar = new Function('a', 'b', 'return a + b;');
  const resultado = sumar(a, b);
  document.getElementById('out-e3').textContent = `Resultado: ${resultado}`;

});

// Ejercicio 4 - Hoisting con var (plantilla)
document.getElementById('run-e4').addEventListener('click', function () {
  const out = document.getElementById('out-e4');

  // TODO: reproduce el ejemplo en el código editando esta función.
  out.textContent = 'Implementa el ejemplo de hoisting con var aquí.';
});

// Ejercicio 5 - IIFE (plantilla)
document.getElementById('run-e5').addEventListener('click', function () {
  const out = document.getElementById('out-e5');

  // TODO: crea una IIFE que haga console.log y devuelva un valor. Luego muestra el resultado aquí.
  console.log('IIFE ejecutada.');
  alert('IIFE ejecutada.');
  out.textContent = 'IIFE ejecutada. Revisa la consola y la alerta.';

});

// Ejercicio 6 - Función anónima dividir (plantilla)
document.getElementById('run-e6').addEventListener('click', function () {
  const a = parseFloat(document.getElementById('a-e6a').value);
  const b = parseFloat(document.getElementById('a-e6b').value);

  // TODO: define y usa esa función para devolver el resultado
  const dividir = function(x, y) {
      return x / y;
  };
  const resultado = dividir(a, b);
  document.getElementById('out-e6').textContent = `Resultado: ${resultado}`;

});

// Ejercicio 7 - Función flecha multiplicar (plantilla)
document.getElementById('run-e7').addEventListener('click', function () {
  const a = parseFloat(document.getElementById('a-e7a').value);
  const b = parseFloat(document.getElementById('a-e7b').value);

  // TODO: implementa una función flecha multiplicar = 
  const multiplicar = (a, b) => a * b;
  document.getElementById('out-e7').textContent = `Resultado: ${multiplicar(a, b)}`;

});

// Ejercicio 8 - Parámetros por defecto (plantilla)
document.getElementById('run-e8').addEventListener('click', function () {
  const nombre = document.getElementById('a-e8').value;

  function saludar(nombre = 'Invitado') {
      return `Hola, ${nombre}!`;
  }

  document.getElementById('out-e8').textContent = saludar(nombre);

  // La función saludar ya está implementada correctamente

});

// Ejercicio 9 - Funciones anidadas (plantilla)
document.getElementById('run-e9').addEventListener('click', function () {

  // TODO: implementar función externa e interna
  function externa(a, b) {
      function interna(a, b) {
          return a + b;
      }
      return interna(a, b) * 2;
  }
  const resultado = externa(3, 4);
  document.getElementById('out-e9').textContent = `Resultado: ${resultado}`;

});

// Ejercicio 10 - Métodos nativos (plantilla)
document.getElementById('run-e10').addEventListener('click', function () {

  // TODO: usa los métodos nativos vistos (length, toUpperCase, trim, indexOf, Math.random, Date.now)
  const str = "  Hola Mundo  ";
  const length = str.length;
  const upper = str.toUpperCase();
  const trimmed = str.trim();
  const index = str.indexOf("Mundo");
  const randomNum = Math.random();
  const timestamp = Date.now();
  const out = `Length: ${length}, Upper: ${upper}, Trimmed: '${trimmed}', Index of 'Mundo': ${index}, Random: ${randomNum}, Timestamp: ${timestamp}`;
  document.getElementById('out-e10').textContent = out;

});