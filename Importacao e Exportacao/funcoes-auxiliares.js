let listaNumeros = [10, 5, 50, 10, 98, 23, 94, 14, 38, 66, 41];
let i = 0;

function gets() {
    const valor = listaNumeros[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };