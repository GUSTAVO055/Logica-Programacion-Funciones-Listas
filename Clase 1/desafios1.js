/**
Desafíos

1-Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro sitio web!".
2-Declara una variable llamada nombre y asígnale el valor "Luna".
3-Crea una variable llamada edady asígnale el valor 25.
4-Establece una variable numeroDeVentas y asígnale el valor 50.
5-Establece una variable saldoDisponible y asígnale el valor 1000.
6-Muestra una alerta con el texto "¡Error! Completa todos los campos".
7-Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .
8-Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .
9-Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
10-Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!". 
 */


//Resoluciones
//Desafío 1
alert("Bienvenido a nuestro sitio web.");
//Desafío 2
let nombre = "Luna";
//Desafío 3
let edad = 25;
//Desafío 4
let numeroDeVentas = 50;
//Desafío 5
let saldoDisponible = 1000;
//Desafío 6
alert("¡Error! Completa todos los campos");
//Desafío 7
let mensajeDeError="¡Error! Completa todos los campos";
alert('Error: ' + mensajeDeError);
//Desafío 8
let nombreUsuario=prompt("¿Cuál es su nombre?");
//Desafío 9
let edadUsuario = prompt("¿Cuál es su edad?");
//Desafio 10
if (edadUsuario>=18) {
    alert("¡Puedes obtener tu licencia de conducir!")
}