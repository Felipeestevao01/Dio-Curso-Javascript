/* O IMC - Indice de Massa Corporal é um critério da organização mundial de saúde
para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição 
de acordo com a tabela abaixo.

IMC em adultos condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;
*/

let peso = 106
let altura = 1.79
let imc = peso / Math.pow(altura, 2)
if (imc > 40) {
    console.log("Obesidade Grave")
} else if (imc > 30) {
    console.log("Obeso")
} else if (imc > 25) {
    console.log("Acima do peso")
} else if (imc > 18.5) {
    console.log("Peso Normal")
} else {
    console.log("Abaixo do Peso")
}