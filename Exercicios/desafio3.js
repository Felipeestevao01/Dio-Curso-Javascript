/* 
    Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
    Para realizar o calculo receba o valor bruto do salário e o adicional dos beneficios.
    I sakarui a ser transferido é calculado da seguinte maneira:

    Valor Bruto do salário - percentual do imposto medianta a faixa salarial + adicional dos benefícios
        ((salario - 5%) + Beneficios)

        Para calcular o percentual do imposto segue as aliquotas:
            De R$ 0.00 a R$ 1100.00 = 5.00%
            De R$ 1100.01 a R$ 2500.00 = 10.00%
            Acima de R$ 2500.00 = 15.00%
*/

const { gets, print } = require('./funcoes-aux');

let salarioBruto = gets();
let adicional = 300;
let imposto = null;

if (imposto === null) {
    if (salarioBruto <= 1100) {
        let pagamento = ((salarioBruto - (salarioBruto * 0.05)) + adicional)
        print(`O seu salário será de ${pagamento}.`)
    } else if (salarioBruto <= 2500) {
        pagamento = ((salarioBruto - (salarioBruto * 0.10)) + adicional)
        print(`O seu salário será de ${pagamento}.`)
    } else {
        pagamento = ((salarioBruto - (salarioBruto * 0.15)) + adicional)
        print(`O seu salário será de ${pagamento}.`)
    }
}

