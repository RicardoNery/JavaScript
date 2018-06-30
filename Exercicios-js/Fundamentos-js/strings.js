const escola = "cod3r"; 
let nome = [0];
console.log(escola.charAt(4)); // Posicionando cursor via indice

if (console.log(escola.charAt(5)) === undefined){ // Buscano por um indice inexistente
    console.log('indice invalido');
}

console.log(escola.charCodeAt(3)); // retorna um valor unicode
console.log(escola.substring(1,3)); // Retorna a posicao de uma string
console.log('Escola '.concat(escola).concat('!')); //Usando metodo concat para string
console.log(escola.replace('3','e')); // alterando uma string
nome = ('Ricardo,Nery,souza'.split(',')); // Transformando uma string em um array, separando os dados por (,)
console.log(nome);

