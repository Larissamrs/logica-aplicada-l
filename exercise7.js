//Exercise 7
//Elabore um algoritmo que receba dois números e determine qual é o maior entre eles.
//Se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

let number1 = 10
let number2 = 10

if (number1 < number2) {
    console.log(`${number1} é menor que ${number2}`)
} else if (number1 > number2) {
    console.log(`${number2} é menor que ${number1}`)
} else if (number1 === number2) {
    console.log(`os números ${number1} e ${number2} são iguais!`)
} else {
    console.log(`Informe entradas válidas`)
}