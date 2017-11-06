var cadenaFecha = process.argv[2];
var separadorFecha = '/';
var arrFecha = cadenaFecha.split(separadorFecha);
var cadenaMes = obtenerFecha(+arrFecha[1]);
console.log('La fecha ingresada: Día ' + arrFecha[0] + ' de ' + cadenaMes + ' de ' + arrFecha[2]);