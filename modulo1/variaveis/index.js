// Exercicios Variaveis
//Ex 1

//let a = 10
//let b = 10

//console.log(b)

//b = 5
//console.log(a, b)

/* Resultado
  console.log (b) -> 10
  console.log (a,b) -> 10, 5 */

//Ex 2
/*let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

/* Resultado
console.log(a,b,c) -> 10,10,10 */

//Ex 3

/*let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

/*Resultado

let cargaHoraria = prompt ("Quantas horas voce trabalha por dia?")
let salarioDiario = prompt ("Quanto voce recebe por dia?")*/

// Exercício de escrita de código
//.1

let nome
let idade 

console.log (typeof nome)
console.log (typeof idade)

// Foi impresso undefined em ambos console.log, foi impresso porque não atribuimos valor para as varivaies.

//let nome = prompt ("Qual é seu nome?")
//let idade = prompt ("Qual é sua idade")

// No console, ele comentou que o identificador já foi declarado

 nome = prompt ("Qual é seu nome?")
 idade = prompt ("Qual é sua idade")

 // O código rodou, porém os resultados continuam "undefined"

 console.log( " Olá", nome, ", você tem", idade, "anos" )

 //.2

let usandoRupaAzul
let tomouBanho
let colocouJoias

usandoRupaAzul = prompt ("Você está usando roupa azul hoje?")
tomouBanho = prompt ("Tomou banho antes?")
colocouJoias = prompt ("Colocou Joias?")

console.log ( "Você está usando roupa azul hoje? - ", usandoRupaAzul)
console.log ( "Tomou banho antes? - ", tomouBanho)
console.log ("Colocou Joias? - ", colocouJoias)

//.3

let a = prompt ("Adicione um número - ")
let b = prompt ("Adicione um número diferente - ")
console.log ("PEGADINHA! Trocamos os valores, agora", "a", "=", b, "e", "b","=", a)

// Fim da atividade