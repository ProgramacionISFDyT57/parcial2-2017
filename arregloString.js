// Ejemplo para resolver la segunda parte del ejercicio 4

var palabra = 'hola';
for (var i = 0; i < palabra.length; i++) {
    if (palabra[i] === 'a') {
        palabra = palabra.replace('a', 'i');
    }
}
console.log(palabra);