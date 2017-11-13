# Parcial 2 - Segunda Instancia

## Programación 1 - Tecnicatura Superior en Análisis de Sistemas - 2017

#### 1
La siguiente función comprueba el formato de una fecha en una cadena de texto:

``` javascript
function comprobadorFecha(cadenaFecha) {
    var separador = '/';
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
