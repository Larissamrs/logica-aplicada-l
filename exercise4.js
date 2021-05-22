//Exercise 4
//Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. 
//Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let distance = 50;
let days = 7;
const result = (days * 60) + (distance * 0.15);

console.log(`O preço a ser pago é: R$ ${result} reais.`);
