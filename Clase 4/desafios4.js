/**
Desafíos

1-Crea una lista vacía llamada "listaGenerica".
2-Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
3-Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
4-Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
5-Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
6-Crea una función que calcule el promedio de los elementos en una lista de números.
7-Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
8-Crea una función que devuelva la suma de todos los elementos en una lista.
9-Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
10-Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
11-Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.


*/


//Resoluciones
//Desafío 1
console.log("Bienvenido al sistema.");

//Desafío 2
let nombre = "Gustavo";
console.log("Hola " + nombre + "!")

//Desafío 3
let nombre3 = "Gustavo";
alert("Hola " + nombre3 + "!")

//Desafío 4
let respuesta = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log("Usted ha ingresado: " + respuesta);

//Desafío 5
let valor1d5= 145;
let valor2d5= 354;

let resultadod5 = valor1d5 + valor2d5;

console.log("La suma de " + valor1d5 + " y " + valor2d5 + " es " + resultado +".");


//Desafío 6
let valor1d6= 145;
let valor2d6= 354;

let resultadod6 = valor1d6 - valor2d6;

console.log("La resta de " + valor1d6 + " y " + valor2d6 + " es " + resultadod6 +".");


//Desafío 7
let edad = prompt("¿Cuál es su edad?");

if (edad>=18) {
    console.log("Usted es mayor de edad.");
}else{
    console.log("Usted es menor de edad.");
    
}

//Desafío 8
let numerod8=prompt("Ingrese un número:");

if (numerod8==0) {
    alert("El numero es cero.");
}else{
    if(numerod8>0){
        alert("El numero es positivo.");
    }else{
        alert("El numero es negativo.");
    }
}

//Desafío 9
let num=1;
while (num<=10) {
    console.log("Número " + num);
    num++;
}

//Desafío 10
let nota = prompt("Ingrese nota del alumno:");

if (nota>=7) {
    console.log("Aprobado");
}else{
    console.log("Desaprobado");
}

//Desafío 11
let numAleatorio = Math.random();
console.log("El número aleatorio generado es: " + numAleatorio);

//Desafío 12
let numAleatoriod12 = Math.random()*10+1;
console.log("El número aleatorio generado entre 1 y 10 es: " + numAleatoriod12);


//Desafío 13
let numAleatoriod13 = Math.random()*1000+1;
console.log("El número aleatorio generado entre 1 y 1000 es: " + numAleatoriod13);
