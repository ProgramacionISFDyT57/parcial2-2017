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