// A base do javascript se baseia em funcao

// O tipo object internamente é uma funcao
console.log(typeof Object); 

// A classe produto internamente também é uma Funcao
class Produto {}
Produto.nome = 'Televisao'; 
Produto.preco = 2500.00;
Produto.marca = 'Samsung';
console.log(typeof Produto);

console.log(Produto);

const venda = new Produto();
