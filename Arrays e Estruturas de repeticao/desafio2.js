// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

let listaNumeros = [7, 21, 8, 16, 55, 36, 62, 62, 75, 62, 89, 63, 7, 93, 53, 91, 72, 15, 100, 22, 11, 8, 26, 2]
let listaNumerosPares = []
let listaNumerosImpares = []
for (i = 0; i < listaNumeros.length; i++) {
    if (listaNumeros[i] % 2 == 0) {
        listaNumerosPares.push(listaNumeros[i])
    } else {
        listaNumerosImpares.push(listaNumeros[i])
    }
}

console.log(listaNumerosPares)
console.log(listaNumerosImpares)
