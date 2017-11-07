var num1 = +process.argv[2];
var num2 = +process.argv[3];
var operacion = process.argv[4];
switch(operacion) {
    case '+':
        console.log('La suma de los números da: ' + num1 + num2);
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