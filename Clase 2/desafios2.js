/**
Desafíos:

1-Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
2-Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
3-Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
4-Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
5-Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

*/


//Resoluciones
//Desafío 1
let diaSemana=prompt("¿Qué día de la semana es?");

if (diaSemana=="sabado" || diaSemana=="domingo") {
    alert("¡Buen fin de semana!");
}else{
    alert("¡Buena semana!");
}
//Desafío 2
let numero=prompt("Ingrese un número:");
if (numero>0) {
    alert("el número es positivo.");
}else{
    alert("el número es negativo.");
}else{
    alert("el número es cero.");
}
//Desafío 3

//Desafío 4

//Desafío 5

