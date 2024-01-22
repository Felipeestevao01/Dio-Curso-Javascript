/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.
Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Código condição de pagamento:
- (1) - A vista debito, recebe 10% de desconto;
- (2) - A vista no dinheiro ou PIX, recebe 15% de desconto;
- (3) - em duas vezes, preço normal de etiqueta sem juros;
- (4) - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let precoEtiqueta = 100;
let metodoPagamento = 4;



if (metodoPagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.10));
} else if (metodoPagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (metodoPagamento === 3) {
    console.log(precoEtiqueta)
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.10));
}
