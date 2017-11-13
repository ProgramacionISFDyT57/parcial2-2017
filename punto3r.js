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