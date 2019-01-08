// Funcoes arrow sempre tem o (this)
// Definindo um corpo para a funcao
let dobro = function(a){
    return 2 * a;
}
console.log(dobro(3));

// Definir corpo de forma reduzida
dobro = (b) => { return 3 * b }
console.log(dobro(4));


// Definir o corpo de forma mais reduzida ainda.
dobro = c => 4 * c; /// O RETORNO É IMPLICITO NESSE CASO
console.log(dobro(4));
console.log(dobro(Math.PI))

let soma = param1 => Math.PI * 2;
console.log(soma().toFixed());

