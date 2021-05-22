//Exercise 6
//Days of the week
//Elabore um algoritmo que receba um número (1-7) e devolvar o dia da semana correspondente.

let number = 2

switch (number) {
    case 1:
        console.log('sunday')
        break //palavra para encerrar o bloco
    case 2:
        console.log('monday')
        break
    case 3:
        console.log('tuesday')
        break
    case 4:
        console.log('wednesday')
        break
    case 5:
        console.log('thursday')
        break
    case 6:
        console.log('friday')
        break
    case 7:
        console.log('saturday')
        break
    default: //é como se fosse o else
        console.log(`Informe uma entrada válida de (1-7)`)
}