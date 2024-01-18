/**
Desafíos

1-Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
2-Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
3-Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
4-Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
 */


//Resoluciones
//Desafío 1
alert("Desafío de 1 a 10");
let contador=1;
while (contador<=10) {
    alert("Contador en: " + contador);
    contador++;
}


//Desafío 2
alert("Desafío de 10 a 0");
let contadorDesc=10;
while (contadorDesc>=0) {
    alert("Contador en: " + contadorDesc);
    contadorDesc--;
}

//Desafío 3
alert("Cuenta regresiva");
let nroContadorDesc=prompt("Ingrese un número:");
while (nroContadorDesc>=0) {
    alert("Contador en: " + nroContadorDesc);
    nroContadorDesc--;
}
//Desafío 4
alert("Cuenta progresiva");
let nroContadorAsc=prompt("Ingrese un número:");
let cont=0;
while (cont<=nroContadorAsc) {
    alert("Contador en: " + cont);
    cont++;
}