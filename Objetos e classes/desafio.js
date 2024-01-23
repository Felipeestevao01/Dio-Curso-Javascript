/* Crie uma classe para representar carros. Os carrros possuem uma marca, uma cor 
e um gasto médio de combustivel por kilometro rodado.
Crie um método que dado a quantidade de quilometros 
e o preço do combustivel nos dê o valor gasto em reais para realizar o percurso.
*/

class Carro {

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularGastoDeViagem(distanciaEmKm, precoCombustivel) {
        return (distanciaEmKm * this.gastoMedio) * precoCombustivel
    }
}

const Polo = new Carro('volkswagen', 'Vermelho', 1 / 12.9)
console.log(Polo.calcularGastoDeViagem(100, 5.57))
const Palio = new Carro('Fiat', 'Azul', 1 / 14)
console.log(Palio.calcularGastoDeViagem(100, 5.57))