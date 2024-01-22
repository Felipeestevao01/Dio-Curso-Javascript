
function escrevaMeuNome(nome) {
    return `Meu nome é ${nome}`;
}
console.log(escrevaMeuNome("Felipe"));

function verificaIdade(idade) {
    if (idade >= 18) {
        return escrevaMeuNome('Felipe') + ' e voce é maior de idade'
    } else {
        return 'Voce é menor de idade'
    }
}

console.log(verificaIdade(18))