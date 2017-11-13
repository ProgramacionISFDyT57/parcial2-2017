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

var fecha = '12/12/2001';
if (comprobadorFecha(fecha)) {
    console.log('piola');
} else {
    console.log('todo mal');
}