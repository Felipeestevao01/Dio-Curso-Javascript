const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(6);
notas.push(9);

let soma = 0
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota;
}

media = soma / notas.length;
console.log(media);