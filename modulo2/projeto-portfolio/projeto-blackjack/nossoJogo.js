/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   //Inicializacao
   

console.log("Boas vindas ao jogo de Blackjack!")

      let iniciarRodada =  confirm("Quer iniciar uma nova rodada?")

if (iniciarRodada===true){
   let usuarioCarta1 = comprarCarta()
   let usuarioCarta2 = comprarCarta()
   let pcCarta1 = comprarCarta()
   let pcCarta2 = comprarCarta()

let somaUsuario = usuarioCarta1.valor+usuarioCarta2.valor
let somaPc = pcCarta1.valor+pcCarta2.valor

console.log(`Usuario - cartas : ${usuarioCarta1.texto} ${usuarioCarta2.texto}`)
console.log (`Computador - cartas : ${pcCarta1.texto} ${pcCarta2.texto}`)

if (somaUsuario>somaPc){console.log(`O usuario Ganhou!`)}
else if (somaPc>somaUsuario){console.log('O computador Ganhou!')}
else if (somaUsuario===somaPc){console.log(`EMPATE! KKK`)}
}
   else {(console.log("O jogo acabou"))}
   