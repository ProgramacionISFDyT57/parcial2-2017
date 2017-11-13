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
