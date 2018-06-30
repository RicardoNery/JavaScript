
/// Criando objeto com propriedades Funcoes
const pessoa = {
    saudacao:'Bom dia!',
/// Novo recurso do ECMA2015(Criacao de funcoes dentro de objetos)    
    falar(){
        console.log(this.saudacao);  /// usando this, para acessar a propriedade do objeto
    } 

};

///Acessando a propriedade do objeto falar
pessoa.falar();

/// Armazenando o resultado do objeto falar
const falar = pessoa.falar;
// conflito entre paradigmas : funcional e OO
falar(); 

// Usando BIND para para amarrar o objeto que estamos referenciando.
// Associa a um objeto especifico
const falaDePessoa = pessoa.falar.bind(pessoa);
falaDePessoa();