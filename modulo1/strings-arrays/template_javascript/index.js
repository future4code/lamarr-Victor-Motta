// Exercicios strings e arrays
//Interpretacao de codigo

//Ex 1
//a. undefined
//b. null
//c. 11
//d. 3
//e. 11
//f. 9

//Ex 2
//SUBI NUM ÔNIBUS EM MIRROCOS, 29
// 

//Escrita de código

//Ex1

let nomeDoUsuario = prompt("Digite seu nome")
let emailDoUsuario = prompt("Digite seu e-mail")
let respostaEmail = console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. 
Seja bem-vinda(o), ${nomeDoUsuario}!`)

//Ex 2
let cestaDoMercadoVitin = ["Haburguer Gourmet","Pastel","Morango","Macarrao","Picanha"]
console.log(cestaDoMercadoVitin)
console.log("Essas são minhas comidas preferidas:", cestaDoMercadoVitin)
//ou
console.log("Essas são minhas comidas preferidas:")
console.log(cestaDoMercadoVitin[0])
console.log(cestaDoMercadoVitin[1])
console.log(cestaDoMercadoVitin[2])
console.log(cestaDoMercadoVitin[3])
console.log(cestaDoMercadoVitin[4])

// Desafio
let rangoFavAmigo = prompt("Qual seu rango preferido bro?")
// cestaDoMercadoVitin[1] = rangoFavAmigo
cestaDoMercadoVitin.splice (1,1,rangoFavAmigo)
console.log(cestaDoMercadoVitin)


//Ex 3
let listaDeTarefas = []
let tarefa1 = prompt("Tarefa a realizar hoje 1")
let tarefa2 = prompt("Tarefa a realizar hoje 2")
let tarefa3 = prompt("Tarefa a realizar hoje 3")

listaDeTarefas = [tarefa1,tarefa2,tarefa3]
console.log("Hoje irei realizar estas tarefas:",listaDeTarefas)

let tarefasRealizadas = Number(prompt("Quantas tarefas você já realizou?"))
let retirandoTarefasRealizadas = listaDeTarefas.splice(tarefasRealizadas-1)
console.log(retirandoTarefasRealizadas)

//Desafio
// let escolhaUmafrase = prompt("Escolha uma frase")
// let frase = [escolhaUmafrase]
// console.log(escolhaUmafrase.trim())
// console.log("A frase contém abacaxi?", escolhaUmafrase.includes("Abacaxi"))
// console.log("Tamanho da frase =", escolhaUmafrase.length)
