const numero = 0;

const numeroPar = (numero % 2) === 0;

if (numero === 0) {
    console.log('O número é inválido.')
} else if (numeroPar === true) {
    console.log('O Numero é Par')
} else {
    console.log('O numero é impar')
}
