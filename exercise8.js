//Exercise 8
//Crie um algoritmo que receba três notas de um aluno, calcule sua média. 
//Mostre as seguintes mensagens de acordo com cada situação:

//Se a media for igual ou maior que 7 - Aprovado
//Se a media for maior e igual a cinco e menor que 7 - Recuperação
//Se a media for menor que 5 - Reprovado

let exam1 = 8
let exam2 = 6
let exam3 = 7

const result = (exam1 + exam2 + exam3)/3

if (result >= 7) {
    console.log('Parabéns, você foi aprovado!')
} else if (result >= 5 && result < 7){
    console.log(`Sua média foi ${result}, você está de recuperação.`)
} else if (acerto < 7)
    console.log(`Sua média foi ${result}, você foi reprovado.`)