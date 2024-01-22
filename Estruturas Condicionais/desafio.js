let precoGasolina = 5.57;
let precoEtanol = 4.01;
let tipoDeCombustivel = 'Gasolina'
let kmPorLitro = 14.3;
let distanciaEmKm = 854;

if (tipoDeCombustivel === 'Etanol') {
    const litrosConsumidos = distanciaEmKm / kmPorLitro;
    const gastoTotal = litrosConsumidos * precoEtanol;
    console.log(`O valor de uma viagem com Etanol de itajaí para guairá é de ${gastoTotal.toFixed(2)}!`)
} else if (tipoDeCombustivel === 'Gasolina') {
    const litrosConsumidos = distanciaEmKm / kmPorLitro;
    const gastoTotal = litrosConsumidos * precoGasolina;
    console.log(`O valor de uma viagem com gasolina de itajaí para guairá é de ${gastoTotal.toFixed(2)}!`)
} else {
    console.log('Tipo de Combustivel incorreto.')
}