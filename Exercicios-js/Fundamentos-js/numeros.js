const peso1 = 1.0;
const peso2 = 2;

console.log(peso1);
console.log(typeof(peso1));
console.log(peso2);
console.log(typeof(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 5.405;

// calculo para gerar a média da nota
const total = (avaliacao1 * peso1 +  avaliacao2 * peso2);
const media = total / (peso1 + peso2);
console.log('Média:' + media.toFixed(4).toString());
console.log(media.toString(2)); //binario
console.log('3' * '3'); // soma valores string como no abap
console.log("3" + 3); // concatena valor
