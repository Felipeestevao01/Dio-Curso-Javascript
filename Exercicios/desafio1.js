/* Faça um programa que receba a média de um aluno.
    Caso a média seja < 5 imprima "Reprovado".
    Caso a média seja >= 5 e < 7 imprima "Recuperação".
    Caso a média seja >= 7 imprima "Aprovado".

    Exemplo:
        Entrada:
            5.5
        Saida:
            Recuperação.
*/

const { gets, print } = require('./funcoes-aux');

const media = gets();

if (media < 5) {
    print('Reprovado');
} else if (media < 7) {
    print('Recuperação');
} else if (media < 10) {
    print('Aprovado');
} else {
    print('Numero Invalido');
}