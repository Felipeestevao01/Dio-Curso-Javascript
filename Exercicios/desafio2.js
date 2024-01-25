/* Faça um programa que receba N (quantidade de numeros) e seus respectivos valores e imprima o maior número par e o menor numero impar.

    Exemplo:
        Entradas:
            [15, 3, 1, 10, 31, 50, 61, 81, 90, 92, 97, 46, 94, 80, 64, 31]
                
            Saida:
                Maior Número par: ?
                Meno Número Impar: ?
*/

const { gets, print } = require('./funcoes-aux');

let numerosAleatorios = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < numerosAleatorios; i++) {
    let numeroAleatorio = gets();

    if (numeroAleatorio % 2 == 0) {
        if (maiorNumeroPar === null || numeroAleatorio > maiorNumeroPar) {
            maiorNumeroPar = numeroAleatorio;
        }

    } else {
        if (menorNumeroImpar === null || numeroAleatorio < menorNumeroImpar) {
            menorNumeroImpar = numeroAleatorio;
        }
    }
}

print(`Maior número par: ${maiorNumeroPar}`)
print(`Menor número par: ${menorNumeroImpar}`)