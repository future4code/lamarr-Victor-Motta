// Exercicio funcoes

//Ex Interpretacao de codigo

//Ex1
// 10
// 20
// As informacoes ficariam guardadas porem nao seriam impressas no console

//Ex2
// Essa funcao tem como objetivo conferir se o texto inserido
// tem a palavra "cenoura" incluida na string, independente do case
// pois ela usa a funcao toLowerCase para padronizar transformando tudo em minusculo.
//true
//true
//true

// Ex escrita de codigo

//Ex1
// function sobreMim (){
//    "Eu sou Victor,tenho 26 anos, moro em Ubatuba e sou estudante Labenu"
   
// }
// console.log(sobreMim)

// const sobreMim2 = function (nome,idade,cidade,profissao){

// let impressaoSobreMim = console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)

// }

// sobreMim2("Victor","26","Ubatuba","Estudante Labenu")

//Ex2
//a.
// const numerosSoma = function (num1,num2){
// let soma = (num1+num2)
// console.log(soma)
// return numerosSoma
// }

// numerosSoma(1,10)

// //b.
// const numeroComparacao = function (num1,num2){
// let comparacao = (num1>=num2)
// console.log(comparacao)

// }
// numeroComparacao(prompt("Numero 1"),prompt("Numero 2"))

// //c.

// const parOuImpar = function (num1,num2) {
// let comparacao = (num1%num1===0)
// console.log( "O numero é par? = "+ comparacao)

// }
// parOuImpar(10)

// d.
// function string (nome){
// let fraseRecebidaTamanho = nome.length
// let fraseRecebidaAumento = nome.toUpperCase()
// console.log(fraseRecebidaTamanho)
// console.log(fraseRecebidaAumento)

// }
// string("Queria muito um chocolate")

//Ex3

function soma (num1,num2){
    let somando = (num1+num2)
    console.log(`resultado soma = ${somando}`)   
}

function subtracao(num1,num2){
    let subtracao = (num1-num2)
    console.log(`resultado subtracao = ${subtracao}`)
}
function multiplicacao(num1,num2){
    let mult = (num1*num2)
  console.log(`resultado multiplicacao = ${mult}`)
}
function divisao(num1,num2){
    let div = (num1/num2)
  console.log(`resultado divisao = ${div}`)
}

// soma (prompt("Escolha 1 numero para somar"),(prompt("Escolha outro numero para somar")))

//O resultado quando estou usando prompt da errado, pois a funcao nao entende que 
//os parametros sao numeros. Achei o comando "parseInt" porem o exercicio nao permite usar


soma (10,20)
subtracao(10,20)
multiplicacao(10,20)
divisao(10,20)

