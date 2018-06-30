// Arow function para aplicar operador ternario
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';
console.log(resultado(7));


const resultado2 = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado';
}
console.log(resultado2(6));

function resultado3(nota){
    return nota >= 7 ? 'Aprovado' : 'Reprovado';
}
console.log(resultado3(9));

const resultado4 = resultado3(2);
console.log(resultado4);

