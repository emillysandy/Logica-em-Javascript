//Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
//-Se a média for igual ou maior que 7 – Aprovado 
//-Se a média for maior e igual a cinco e menor que 7 – Recuperação 
//-Se a média for menor que 5 – Reprovado

let nota1 = 5
let nota2 = 7
let nota3 = 1

media = (nota1 + nota2 +nota3)/3

if (media >= 7) {
console.log(`Aprovado`)

}else if (media >= 5 && media < 7){
    console.log(`Recuperação`)

}else {
    console.log(`Reprovado`)
}