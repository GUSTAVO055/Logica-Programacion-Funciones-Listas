/**
Desafíos
1-Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
2-Crea una función que calcule el valor del factorial de un número pasado como parámetro.
3-Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
4-Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
5-Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
6-Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/

//Resoluciones
//Desafío 1
function calcularIndiceMC(altura, peso){
    let imc = peso / (altura*altura);
    return imc;

}

//Desafío 2
function factorial(numero){

    let resultado=parseInt(numero);

    if(numero==0)return 1;

    if(numero<0)return 0;

    while (numero>=1) {
        numero--;
        resultado = resultado * numero;

    }
    return resultado;

}


//Desafío 3
function convertirEnDolares(reales){

    let dolares = parseFloat(reales)/4.80;

    return dolares;
}

//Desafío 4
function calcularAreaYPerimetro(ancho, alto){

    let perimetro = ancho*alto;

    return perimetro;

}

//Desafío 5
function calcularAreaYPerimetro(radio){

    let perimetro = ancho*alto;

    return perimetro;

}


//Desafío 6