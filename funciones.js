// CAPTURAR ELEMENTOS DEL DOM
const cero = document.querySelector("#cero")
const uno = document.querySelector("#uno")
const dos = document.querySelector("#dos")
const tres = document.querySelector("#tres")
const cuatro = document.querySelector("#cuatro")
const cinco = document.querySelector("#cinco")
const seis = document.querySelector("#seis")
const siete = document.querySelector("#siete")
const ocho = document.querySelector("#ocho")
const nueve = document.querySelector("#nueve")
const coma = document.querySelector("#coma")
const suma = document.querySelector("#suma")
const resta = document.querySelector("#resta")
const division = document.querySelector("#division")
const multiplicacion = document.querySelector("#multiplicacion")
const borrar = document.querySelector("#borrar")
const reset = document.querySelector("#reset")
const igual = document.querySelector("#igual")
const circulo = document.querySelector(".circulo")
const chk = document.getElementById('chk')


// AÑADIR EVENTOS
chk.addEventListener('change', () => {
	document.body.classList.toggle('light');
});

cero.addEventListener("click", function() {
    mostrarValor(0);
})

uno.addEventListener("click", function() {
    mostrarValor(1);
})

dos.addEventListener("click", function() {
    mostrarValor(2);
})

tres.addEventListener("click", function() {
    mostrarValor(3);
})

cuatro.addEventListener("click", function() {
    mostrarValor(4);
})

cinco.addEventListener("click", function() {
    mostrarValor(5);
})

seis.addEventListener("click", function() {
    mostrarValor(6);
})

siete.addEventListener("click", function() {
    mostrarValor(7);
})

ocho.addEventListener("click", function() {
    mostrarValor(8);
})

nueve.addEventListener("click", function() {
    mostrarValor(9);
})


coma.addEventListener("click", function() {
    mostrarValor(".");
})    


suma.addEventListener("click", function() {
    mostrarValor("+");
})

resta.addEventListener("click", function() {
    mostrarValor("-");
})

division.addEventListener("click", function() {
    mostrarValor("/");
})

multiplicacion.addEventListener("click", function() {
    mostrarValor("*");
})

igual.addEventListener("click", function() {
    operar()
})

reset.addEventListener("click", function() {
    reiniciar()
})

borrar.addEventListener("click", function() {
    borrarDigito()
})

circulo.addEventListener("click", function() {
    circulo.classList.add("desplazar")
})

//FUNCIONALIDADES
function mostrarValor(valor) {
    document.querySelector(".operacion").innerHTML += valor
    if(document.querySelector(".operacion").innerHTML.length > 13) {
        document.querySelector(".operacion").style.fontSize = "1.5rem"
    }
    
    if(document.querySelector(".operacion").innerHTML.length > 22) {
        document.querySelector(".operacion").style.fontSize = "1rem"
    }

    
}

function reiniciar() {
    document.querySelector(".operacion").innerHTML = ""
}

function operar() {
    resultado = eval(document.querySelector(".operacion").innerHTML)
    document.querySelector(".operacion").innerHTML = resultado
}

function borrarDigito() {
    cifras = document.querySelector(".operacion").innerHTML.length
    operacionString = String(document.querySelector(".operacion").innerHTML)
    nuevaOperacion =  operacionString.substr(0,cifras-1)
    document.querySelector(".operacion").innerHTML = nuevaOperacion
}
