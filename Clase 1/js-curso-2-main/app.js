let contenido = document.querySelector("h1");
contenido.innerHTML= "Hora del Desafío";

function consolePresionado(){
    alert("El botón fue clicado");
}
function preguntarCiudad(){
    let ciudad=prompt("Ingrese una ciudad de Brasil:");
    alert("Estuve en " + ciudad +" y me acordé de ti.")
}
function alertaPresionado(){
    alert("Yo amo JS");
}
function sumarNumeros(){
    let val1=prompt("Ingrese nro 1:");
    let val2=prompt("Ingrese nro 2:");
    let resultado= parseInt(val1) + parseInt(val2);
    alert("El resultado de la suma es " + resultado + ".");
}