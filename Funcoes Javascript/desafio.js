
function calculaImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
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

// Main
(function () {
    let peso = 106
    let altura = 1.79

    let imc = calculaImc(peso, altura);
    console.log(classificarImc(imc));
})()

