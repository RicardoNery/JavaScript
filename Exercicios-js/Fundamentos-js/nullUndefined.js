let valor // variavel nao inicializada
console.log(valor); // undefined

const produto = {} // Criado objeto
console.log(produto); // objeto vazio(undefined)

produto.preco = 3.50
console.log(produto); // definido atributo de preco a 3.50
// teste verifica se objeto tem valor (true)
console.log(!produto); 
// para deletar uma propriedade
delete produto.preco
// objeto vazio
console.log(produto); 
// teste verifica se objeto tem valor = (false)
console.log(!produto); 
// teste verifica se objeto nao tem valor = (true)
console.log(!!produto); 





