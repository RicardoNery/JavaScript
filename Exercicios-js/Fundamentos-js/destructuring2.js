function PrecoProduto({ v_tipo_prod, v_preco }) {
    
    let v_valor = Math.random().toPrecision(2);
    v_preco = (v_preco * v_valor);
    Math.ceil(v_valor);


    switch (v_tipo_prod) {
        case 'Arroz':
            return 'Produto:' + v_tipo_prod + ' Preço: ' + v_preco;
            break;
        case 'Feijao':
            return 'Produto:' + v_tipo_prod + ' Preço: ' + v_preco;
            break;
    }
}

// Podemos passar os parametros de duas maneiras usando o conseito de destructuring.
const obj = { v_tipo_prod:'Arroz', v_preco:20.5};
console.log(typeof obj);
console.log(PrecoProduto(obj));

console.log(PrecoProduto({v_tipo_prod:'Feijao', v_preco: 0}));
