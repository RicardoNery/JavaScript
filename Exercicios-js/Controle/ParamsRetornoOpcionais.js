/// flexibilidade de retono ou nao de uma funcao
function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`);
    }
    else {
        return area;
    }
}

console.log(area(2,2)); /// retorna valor area
console.log(area(2)); /// passando somente 1 parametro NaN
console.log(area()); /// passando nenhum valor para a funcao NaN
console.log(area(2,2,4,5,6)); /// Passando multiplos valores 
console.log(area(5,6)); /// retorna o valor da area, porem tb retornou undefined
