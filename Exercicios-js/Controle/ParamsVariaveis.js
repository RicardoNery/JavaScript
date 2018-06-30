
/// Funcao nao recebe nenhum parametro, pprém nao significa que voce nao pode passar parametros.
/// Recuperar parametros usando a propriedade arguments
/// Toda funcao tem o arguments.
/// usado antes da versao ecma2015
function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    }
    return soma;
}


console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3)); /// parametros variaveis
console.log(soma('a', 'b', 'c')); /// nao restringe o tipo de parametro informado

