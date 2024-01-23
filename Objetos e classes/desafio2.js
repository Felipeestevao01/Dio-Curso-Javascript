/* Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC
(IMC = peso / (altura * altura));
instancie uma pessoa chamada josé que tenha 70kg de peso e 1,75 de altura
e peça ao josé para dizer o valor do seu IMC;
*/

class Pessoa1 {

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (Math.pow(this.altura, 2))
    }

    classificarImc() {
        const imc = this.calcularImc()
        if (imc > 40) {
            return 'Obesidade Grave'
        } else if (imc > 30) {
            return 'Obeso'
        } else if (imc > 25) {
            return 'Acima do peso'
        } else if (imc > 18.5) {
            return 'Peso Normal'
        } else {
            return 'Abaixo do Peso'
        }

    }
}

const pessoa1 = new Pessoa1('Jose', 70, 1.75)
console.log(pessoa1.calcularImc())

const pessoa2 = new Pessoa1('Felipe', 107, 1.79)
console.log(pessoa2.calcularImc())
console.log(pessoa1.classificarImc())
console.log(pessoa2.classificarImc())