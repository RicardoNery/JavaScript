// Funcao sem retorno
// Como a linguagem é fracamente tipada, nao é preciso indicar os valores que a funcao recebe
function imprimirSoma(a, b){
    console.log(a + b);
}
imprimirSoma(1,2);
// Isso també é possivel, porém a funcao retorna um NaN
imprimirSoma(1); 
// O java script também aceita passar mais valores na chamada da funcao
// o compilador nao vai dar erro, pois considera apenas os dois parametros e ignora o restante.
imprimirSoma(1,2,3,4,5,6); 


//Funcao com retorno
function soma(a,b){
    return a + b;
}
//Funcao com retorno, parametro B com valor padrao 3
function subtracao(a, b = 3 ){
    return a - b;
}
// Para imprimir o resultado nesse caso é preciso chamar a funcao dentro de console.log;
console.log(soma(10,20));
// Imprime valor 2
console.log(subtracao(5));
