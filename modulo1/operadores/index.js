// Exercício Operadores lógicos

//Ex. 1

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado)


// Resultado 
/* O console irá imprimir 
a. false
b. false
c. true
d. boolean*/

//Ex. 2

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// Resultado
// o Console irá imprimir os dois resultados do prompt em sequencia,
//  no caso imprimir 15 ao invés de 1+5 ele está imprimindo 15.
// A varivável está declarada como string, por isso o console não consdeira os resultados como números.

// //Ex. 3


// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

//Resultado
// Aqui foi declarado que os resultados deveriam ser números
//Então adicionamos o comando "Number" na frente do prompt e resolvemos o problema.

//Exercício de escrita de código
// Ex. 1

let idadeDoUsuario = Number(prompt("Qual é sua idade?"))
let idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))
let comparacaoDeIdade = idadeDoUsuario > idadeMelhorAmigo
console.log ("Sua idade é maior do que a do seu melhor amigo?", comparacaoDeIdade )
let diferencaDeIdade = Number(idadeDoUsuario % idadeMelhorAmigo)
console.log (diferencaDeIdade)

//Ex. 2

let insiraNumeroPar = Number(prompt("Insira um número PAR"))
console.log( insiraNumeroPar % 2)

// Resultado
// O padrão é que todos os resultados são 0.
// Quando alteramos o valor de entrada para impar, todos os resultados serão 1.

//Ex. 3

let idadeUsuario2 = Number(prompt ("Qual sua idade?"))
console.log ("Sua idade em meses é =",idadeUsuario2*12)
console.log ("Sua idade em dias é =", idadeUsuario2*360)
console.log ("Sua diade em horas é =", (idadeUsuario2*24)*360)

//Ex. 4

let primeiroNumero = Number(prompt("Escolha um número"))
let segundoNumero = Number(prompt("Escolha outro numero"))

console.log ("O primeiro numero é maior que o segundo?", primeiroNumero > segundoNumero)
console.log ("O primeiro numero é igual os segundo?", primeiroNumero === segundoNumero)

let primeiroDivisivelSegundo = (primeiroNumero%segundoNumero)
let segundoDivisivelPrimeiro = (segundoNumero%primeiroNumero)

console.log ("O primeiro numero é divisivel pelo segundo?", primeiroDivisivelSegundo === 0 )
console.log (" O segundo numero é divisivel pelo primeiro?", segundoDivisivelPrimeiro === 0)

//Desafios

let farhenheit = 77
let celsius = 80

let farenheitToKelvin = (farhenheit - 32)*(5/9) + 273.15
let celsiusToFahrenheit = celsius*(9/5) + 32

console.log( farenheitToKelvin, "K°")
console.log( celsiusToFahrenheit,"F°")

let insiraCelsius = Number(prompt("Insiga uma temperatura em graus celsius"))
console.log ((insiraCelsius*(9/5) + 32), "F")

//Fim