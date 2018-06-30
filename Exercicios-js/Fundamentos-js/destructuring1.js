// Novo recurso do ECMAScript2015

const pessoa = {
    nome: 'Ricardo',
    sobrenome: 'Nery',
    idade: 38,
    endereco: {
        rua: 'Luiz de montalvor',
        numero: 162,
        bairro: 'Americanopolis',
        cep: '04338-130',
    }
}
console.log(typeof pessoa);

// Retirar(desestruturacao - Destructuring) propriedades do objeto aninhado
const { sobrenome, idade } = pessoa;

//  console.log(sobrenome, idade);
// console.log(pessoa);
// //Retirar propriedade endereco
const { endereco: { rua, numero, cep, estado } } = pessoa;
 console.log(rua, numero, cep, estado);
