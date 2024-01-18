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

if (numero==0){
    alert("el número es cero.");
} else {
    
    if (numero>0) {
        alert("el número es positivo.");
    }else{
        alert("el número es negativo.");
    }
}

//Desafío 3
let puntuacion=prompt("Ingrese un puntuación:");

if (puntuacion>=100){
    alert("¡Felicidades, has ganado!");
}else{
    alert("Intenta nuevamente para ganar.");
}
    
//Desafío 4
let saldo = 34039003.98;
alert("El saldo de su cuenta es: $" + parseFloat(saldo));
//Desafío 5
let nombreUsuario = prompt("Ingrese su nombre:");
alert("Bienvenido " + nombreUsuario + ".")
