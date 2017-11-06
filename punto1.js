// Fragmento correspondiente al Punto 1 del parcial

var cadenaFecha = process.argv[2];
var separadorFecha = '/';
var arrFecha = cadenaFecha.split(separadorFecha);
var cadenaMes = obtenerFecha(+arrFecha[1]);
console.log('Fecha ingresada: Día ' + arrFecha[0] + ' de ' + cadenaMes + ' de ' + arrFecha[2]);