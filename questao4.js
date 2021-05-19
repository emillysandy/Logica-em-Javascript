//Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.
let quilômetros  = 100
let dias = 20

TotalQuilometros = quilômetros * (15/100)
TotalDias = dias * 60

TotalPagar = TotalDias + TotalQuilometros

console.log(`O total a pagar pela locação do carro é ${TotalPagar}`)
