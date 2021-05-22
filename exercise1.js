//Exercise 1
//Solicite o preço de uma mercadoria e o percentual de desconto 20%. 
//Exiba no console o valor do desconto e o preço a pagar.

let price = 20;
const discount = price * (10/100);
let buy = price - discount;

console.log(`O desconto é R$ ${discount} reais, e o valor a ser pago é R$ ${buy} reais.`);