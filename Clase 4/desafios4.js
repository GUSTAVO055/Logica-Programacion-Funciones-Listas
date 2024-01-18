/**
Desafíos
1-Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
2-Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
3-Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
4-Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
5-Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
6-Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
7-Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
8-Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
9-Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
10-Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
11-Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
12-Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
13-Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

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
