/**
1-Crear una función que muestre "¡Hola, mundo!" en la consola.
2-Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
3-Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
4-Crear una función que reciba tres números como parámetros y devuelva su promedio.
5-Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
6-Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

*/


//Resoluciones
//Desafío 1
function hola(){
    console.log("Hola Mundo.")
}



//Desafío 2
function saludo(nombre){
    console.log("Hola " + nombre + ".")
}

//Desafío 3
function dobleDeNumero(numero){
    let doble = parseInt(numero*2);
    return doble;
}

//Desafío 4
function promedio(n1,n2,n3){
    let promedio = (n1+n2+n3)/3;
    return promedio;
}
//Desafío 5
function mayorNumero(n1,n2){
    mayor=n2;
    
    if (n1>n2) {
        mayor=n1;
    }
    return mayor;
}

//Desafío 6
function multiplicarNumero(n1,n2){
    
    return n1*n2;
}
