/// Acessando array
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (i in notas){
    console.log(i, notas[i]);
}

/// Acessando propriedades do objeto
const pessoa = {
    nome: 'Ana',
    sobrenome: 'silva',
    idade:29,
    peso:69
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}