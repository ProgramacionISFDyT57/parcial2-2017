# Parcial 2 - Segunda Instancia

## Programación 1 - Tecnicatura Superior en Análisis de Sistemas - 2017

#### 1
La siguiente función comprueba el formato de una fecha en una cadena de texto:

``` javascript
function comprobadorFecha(cadenaFecha) {
    var separador = '-';
    if (cadenaFecha.substr(2,1) !== separador && cadenaFecha.substr(5,1) !== separador) {
        return false;
    }
    if (cadenaFecha.length !== 10) {
        return false;
    }
    if (+cadenaFecha.split(separador)[0] > 31) {
        return false;
    }
    if (+cadenaFecha.split(separador)[1] > 12) {
        return false;
    }
    return true;
}
```
En base al código mencionado, identificar qué formato debe tener la fecha para que la función siempre devuelva True.

#### 2
La siguiente función calcula el promedio entre un arreglo de números que es provisto por parámetro:
``` javascript
function promedio(arregloNumeros) {
    if (arregloNumeros.length) {
        var sumatoria = 0;
        for (var i = 0; i < arregloNumeros.length; i++) {
            sumatoria = sumatoria + arregloNumeros[i];
        }
        return sumatoria / arregloNumeros.length;
    } else {
        return 0;
    }
}
```

Dentro de la función, hay una estructura de control `if` que define una característica del arreglo. Elegir la opción correcta a continuación:
* Pregunta si el arreglo es de números
* Pregunta si es un arreglo
* Pregunta si el arreglo tiene elementos
* Pregunta si los elementos del arreglo son 0

#### 3
El siguiente programa recibe un texto por argumento e intenta encontrar la palabra más larga en el texto e informarla por consola:
``` javascript
var texto = process.argv[2];
var palabras = texto.split(' ');
var longitudMaxima = 0;
var palabraLarga = '';
for (var i = 0; i < texto.length; i++) {
    if (palabras[i].length > longitudMaxima) {
        longitudMaxima = palabras[i].length;
        palabraLarga = palabras[i];
    }
}
console.log('La palabra más larga del texto ingresado es ' + palabraLarga +
    ' que tiene ' + longitudMaxima + ' letras');
```
Sin embargo, el programa tiene un error de lógica (no de sintaxis) que hace que el resultado no sea el esperado. Encontrar dicho error y corregirlo para que el programa funcione correctamente.

#### 4
Teniendo en cuenta el Ejercicio 3, modificar el programa para que se imprima la cadena te texto original en la pantalla pero con la palabra más larga toda en mayúsculas.