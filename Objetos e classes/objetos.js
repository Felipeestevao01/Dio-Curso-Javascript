
const pessoa = {
    nome: 'Felipe Estevão Silva',
    idade: 33,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}
// Adicionar a altura a uma pessoa.
pessoa.altura = 1.79

console.log(pessoa.nome)
pessoa.descrever()

const atributo = 'idade'

console.log(pessoa[atributo])