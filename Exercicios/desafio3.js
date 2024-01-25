/* 
    Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
    Para realizar o calculo receba o valor bruto do salário e o adicional dos beneficios.
    o salario a ser transferido é calculado da seguinte maneira:

    Valor Bruto do salário - percentual do imposto medianta a faixa salarial + adicional dos benefícios
        ((salario - 5%) + Beneficios)

        Para calcular o percentual do imposto segue as aliquotas:
            De R$ 0.00 a R$ 1100.00 = 5.00%
            De R$ 1100.01 a R$ 2500.00 = 10.00%
            Acima de R$ 2500.00 = 15.00%
*/

const { gets, print } = require('./funcoes-aux');

let valorSalario = gets();
let valorBeneficios = gets();

function calcularPorcentagem(valor, percentual) {
    let porcentagem = valor * (percentual / 100)
    return porcentagem
}

function pegarAliquota(salario) {

    if (salario <= 1100) {
        return 5
    } else if (salario <= 2500) {
        return 10
    } else {
        return 15
    }
}

const aliquotasImposto = pegarAliquota(valorSalario);
const valorComImposto = valorSalario - calcularPorcentagem(valorSalario, aliquotasImposto);
const valorATransferir = valorComImposto + valorBeneficios
print(valorATransferir);
