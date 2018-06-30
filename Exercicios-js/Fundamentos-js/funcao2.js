//Armazenado uma funcao em uma variavel
const soma = function(a, b){
    console.log(a + b);
}
// a constante soma recebe o valor da funcao
soma(1,3);

// Armazenando uma funcao arrow em uma variavel
// Funcoes arrow é um conceito novo que vem A PARTIR do ecmascript 2015
// Esse conceto simplismente reduz a codificacao
const subtracao = (a, b) => {
    console.log(a - b);
} 
subtracao(5,2);

let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = (orderCount) => {
  return (getSubTotal(orderCount) * 0.06);
};

const getTotal = () => {
  return getSubTotal(orderCount) + getTax(orderCount);
};


//takeOrder('mushroom', 'thin crust');
//takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

console.log(getSubTotal(orderCount));
console.log(getTotal());
