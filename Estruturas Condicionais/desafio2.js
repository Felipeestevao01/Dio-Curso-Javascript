/*Faça um Algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade
calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

media = (nota 1 + nota 2 + nota 3)/ 3;

classificação:

- Média menor que 5, reprovação.
- Média entre 5 e 7, recuperação.
- Média acima de ,. passou de semestre. 
*/

let nota1 = 6
let nota2 = 3
let nota3 = 5

let media = (nota1 + nota2 + nota3) / 3

if (media < 5) {
    console.log("Reprovado")
} else if (media < 7) {
    console.log("Recuperação")
} else {
    console.log("Aprovado!")
}