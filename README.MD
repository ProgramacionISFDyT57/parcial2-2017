# Parcial 2

## Programación 1 - Tecnicatura Superior en Análisis de Sistemas

#### 1
El siguiente fragmento de código recibe una fecha por argumento con el formato “`DD/MM/AAAA`” e imprime por consola la misma fecha separada en una oración imprimiendo el nombre del mes en lugar de su número: “`Fecha ingresada: DD de [nombre del mes] de AAAA`”:

``` javascript
var cadenaFecha = process.argv[2];
var separadorFecha = '/';
var arrFecha = cadenaFecha.split(separadorFecha);
var cadenaMes = obtenerFecha(+arrFecha[1]);
console.log('Fecha ingresada: Día ' + arrFecha[0] + ' de ' + cadenaMes + ' de ' + arrFecha[2]);
```
Este código tiene una función sin declarar llamada “`obtenerFecha`”.
Escribir dicha función para que el resultado del programa sea el esperado.

#### 2
A continuación se presenta un fragmento de código que realiza una simple multiplicación de 2 argumentos numéricos:
``` javascript
if(process.argv[2] && process.argv[3]) {
    var entrada1 = +process.argv[2];
    var entrada2 = +process.argv[3];
    console.log(entrada1 * entrada2);
}
```
Tener en cuenta la estructura de control `if` que se encuentra en el fragmento y elegir a continuación la afirmación que corresponda a la función que cumple la misma en el código:
* Comprueba que al menos uno de los argumentos sean de tipo numérico.
* Comprueba que los 2 argumentos sean de tipo numérico.
* Comprueba que los 2 argumentos sean de tipo texto.
* Comprueba que los 2 argumentos estén definidos y tengan valor.
* Comprueba que al menos uno de los argumentos esté definido.

#### 3
El siguiente código intenta replicar una calculadora muy simple. Recibe 2 números por argumento y además recibe el símbolo que representa la operación, + - * /. Sin embargo el código contiene varios errores de sintaxis y de control.
Enumerar los mismos y corregirlos para que el programa sea funcional.
``` javascript
var num1 = +process.argv[2];
var num2 = +process.argv[3];
var operacion = process.argv[4];
switch(operacion) {
    case '+':
        console.log['La suma de los números da: ' + (num1 + num2)];
        break;
    case '-':
        console.log('La resta de los números da: ' + num1 - num2);
    case '*':
        console.log('La multiplicación de los números da: ' + num1 * num2);
        break;
    case '/':
        console.log('La división de los números da: ' + (num1 * num2));
        break;
    default:
        console.log('El símbolo recibido en el 3er parámetro no es válido o no se recibió ninguno!');
}
```

#### 4
Escribir un programa que reciba un texto por parámetro, cuente la cantidad de vocales (ya sean mayúsculas o minúsculas, con tildes o sin tildes) y las reemplace por la letra `i`. El programa debe imprimir un texto que informe la cantidad de vocales y luego imprimir nuevamente la cadena pero con el reemplazo ya mencionado.
Ejemplo: Se recibe la cadena `'Este es el parcial 2 de Programación 1'`, debe imprimir `El texto contiene 13 vocales` y `'Isti is il pirciil 2 di Prigrimiciin 1'`
