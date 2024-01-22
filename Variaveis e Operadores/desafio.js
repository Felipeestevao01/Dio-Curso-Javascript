let precoCombustivel = 5.57;
let kmPorLitro = 14.3;
let distanciaEmKm = 854;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const gastoTotal = litrosConsumidos * precoCombustivel;

console.log(`O valor do combustivel de uma viagem de itajaí para guairá é de ${gastoTotal.toFixed(2)}!`);