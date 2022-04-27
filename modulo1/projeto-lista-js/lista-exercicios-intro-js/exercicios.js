// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

  let alturaRetantgulo = Number(prompt ("Insira o valor da aultura do retangulo"))
  let larguraDoRetangulo = Number(prompt ("Insira a largura do retangulo"))
  console.log (alturaRetantgulo*larguraDoRetangulo )

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

let anoAtual = Number(prompt("Em que ano estamos?"))
let anoNascimentoUsuario = Number (prompt("Em que ano você nasceu?"))
// let impressoraDeIdade = (anoAtual-anoNascimentoUsuario)
console.log (anoAtual-anoNascimentoUsuario)
// return impressoraDeIdade
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 
let calculadoraDeImc = (peso / (altura*altura))
console.log (calculadoraDeImc)
return calculadoraDeImc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  let nome = (prompt("Insira seu nome"))
  let idade = (prompt("Insira sua Idade"))
  let email = (prompt("Insira seu e-mail"))

  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let cor1 = (prompt("Escolha uma cor"))
let cor2 = (prompt("Escolha outra cor"))
let cor3 = (prompt("Escolha mais uma cor"))
const cores = [cor1,cor2,cor3]
console.log (cores)
return cores
}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
 
  let stringMaiuscula = string.toUpperCase()
  console.log(stringMaiuscula)
  return stringMaiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
let valorXCusto = (custo/valorIngresso)
console.log(valorXCusto)
return valorXCusto
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let duasStrings = (string1.length===string2.length)
  console.log(duasStrings)
return duasStrings
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
let primeiroElemento = array[0]
console.log(primeiroElemento)
return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let ultimoElemento = array[array.length-1]
console.log(ultimoElemento)
return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

 let primeiroElemento = array [0]
 let ultimoElemento = array[array.length-1]
//  array.splice(0,1,ultimoElemento,primeiroElemento)
//  array.pop()
//Funcionou apenas com 2 elementos no array

array.splice(0,1,ultimoElemento)
array.pop()
array.push(primeiroElemento)

 console.log(array)
return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  
let tornaMaisucula1 = string1.toUpperCase()
let tornaMaiscula2 = string2.toUpperCase()
// let comparacao1 = Object.is(tornaMaisucula1.length,tornaMaiscula2.length)
let comparacao1 = Object.is(tornaMaisucula1,tornaMaiscula2)
return comparacao1

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}