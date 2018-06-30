 /// Funcao em JS é First-Class object (Citizens)
 // higher-order function

 // Criar de forma loteral
function func1() {}


// Armazenar em uma variavel
const func2 = function () { }

// Armazenar em um array
const array = [function (a,b) {return a + b }, func1, func2]
console.log(array[0](2,3));

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar());
