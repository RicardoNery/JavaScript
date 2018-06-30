/// Estrategia para gerar valor padrão (Forma antiga);
function soma1(a, b, c) {
    a = a || 1; /// se (a) for null, considera o valor fixo 1
    b = b || 1; /// se (b) for null, considera o valor fixo 1
    c = c || 1; /// se (c) for null, considera o valor fixo 1

    return a + b + c;

}
console.log(soma1())  // Retorna a soma de resultados 1 
console.log(soma1(3)) // Retorna 3 + 1 + 1 
console.log(soma1(1, 2, 3)) /// Retorna a soma dos 3 parametros
console.log(soma1(0, 0, 0)) /// retornou 3, desconsiderou o parametro 0


/// Estrategia para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1; //Se parametro != de undefined retorna a senao retorna 1
    b = 1 in arguments ? b : 1; // Indice 1 de arguments para (b), senao considera 1
    c = isNaN(c) ? 1 : c; // se (c) nao for numero considera 1, senao, considera c

    return a + b + c;

}
console.log(soma2(),  // Retorna a soma de resultados 1 
    soma2(3), // Retorna 3 + 1 + 1 
    soma2(1, 2, 3), /// Retorna a soma dos 3 parametros
    soma2(0, 0, 0)); /// agora considerou 0

/// ECMA2015 dessa versao para frente
/// Estrategia para gerar valor padrão
function soma3(a = 1, b = 1, c = 1) {

    return a + b + c;
}


console.log(soma3(),  // Retorna a soma de resultados 1 
    soma3(3), // Retorna 3 + 1 + 1 
    soma3(1, 2, 3), /// Retorna a soma dos 3 parametros
    soma3(0, 0, 0)); /// agora considerou 0
