let num1 = 5;
let num2 = 5;

// Resultado verdadeiro, primeiro faz a comparacao e depois faz operacao unaria
// respeitando a prioridade.
console.log(num1);
console.log(num2);
console.log(num1++ === num2--);




console.log(num1);
console.log(num2);
// Resultado falso, primeiro executa as operacores unarias e depois faz a comparacao
// respeitando a prioridade.
console.log(++num1 === --num2); 

