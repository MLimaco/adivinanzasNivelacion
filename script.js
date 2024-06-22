'use strict';

let numeroRandom = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

function compararNumero(inputUsuario) {
    if (intentos < 2) {
        if (inputUsuario === numeroRandom) {
            alert('Felicitaciones, lo lograste');
        } else if (inputUsuario > numeroRandom) {
            alert('Apestas, ingresa un numero menor');
            intentos++;
            solicitarNumero();
        }
        else {
            alert('Apestas, ingresa un numero mayor');
            intentos++;
            solicitarNumero();
        }
    } else {
        alert('PERDISTE, EL JUEGO TERMINA AQUI');

    }
}

function solicitarNumero() {
    for (let index = 0; index < 3; index++) {
        let inputUsuario = parseInt(prompt('ingresa un numero del 1 al 10'));
        if (inputUsuario === numeroRandom) {
            alert('felicitaciones');
        }
        else if (inputUsuario > 10) {
            alert('ingresa un numero del 1 al 10')
        }
        else {
            alert('ingresa otro numero')
        }

    }


    // let inputUsuario = parseInt(prompt('Escribe un numero del 1 al 10'));
    // if (inputUsuario < 1 || inputUsuario > 10) {
    //     alert('Ingresa un numero valido');
    //     solicitarNumero();
    // } else {
    //     compararNumero(inputUsuario);
    // }
}


alert('Bienvenido al juego de adivinanzas');
solicitarNumero();
