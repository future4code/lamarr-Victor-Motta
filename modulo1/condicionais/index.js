//Ex interpretacao de codigo

//1.a.
// Ele analisa o numero inserido no prompt, se o resto da divisão for
// igual a zero, ele imprime o resultado "Passou no teste", caso o contrário, 
// ele irá imprimir "Não passou no teste"

//b. numeros que o resto da divisao são = a 0, ou seja, números pares.

//c. numeros que o resto da divisão não são = a 0, ou seja, números impares.


//2.a
// O código analisa a fruta inserida no prompt e percorre o código para retornar o preço dela.
// Quando ele acha, ele retorna no console a mensagem "O preço da fruta ", fruta, " é ", "R$ ", preco"

//b. O preço da fruta maça é R$ 2.25
//c. Sem o break ele rodaria até o default, assim o valor da pera seria impresso como 5.

//3.a
// Está declarando a constante "numero", com o valor de um prompt que seja um número.

// b. "mensagem não está definida", "mensagem não está definida"

//b. Haverá um erro no console, pois a variável "mensagem" não está no escopo global,
//ela está no escopo local e não foi usado o comando return, para exportar para fora 
// o resultado.


// //Ex escrita de código
// //1.
let idade = Number(prompt("Qual sua idade?"))
if (idade >= 18) {console.log("voce vode dirigir!")}
else {console.log("Voce nao pode dirigir")
}

// //2.
let turno = (prompt(" Em qual periodo vc estuda ? Utilize = M (matutino) ou V (Vespertino) ou N (Noturno)"))

if (turno === "M"){console.log("Bom dia")}
else if (turno === "V") {console.log("Boa tarde")}
else if (turno === "N"){console.log("Boa noite")}
else {console.log("Error, favor inserir carcatere correto")}

// //3.

let turno1 = prompt(" Em qual periodo vc estuda ? Utilize = M (matutino) ou V (Vespertino) ou N (Noturno)")
let mensagem
switch (turno1) {
    case "M":
    mensagem = "Bom dia"
    break;
    case "V":
    mensagem = "Boa tarde"
    break;
    case "N":
    mensagem = "Boa noite"
    break;
    default: 
    mensagem = "Error, favor inserir caracatere correto"
}
console.log(mensagem)

// //4.

let genero = prompt(" Qual genero do filme")
let valorIngresso = Number(prompt("Qual preco do ingresso?"))
if  (genero === "fantasia" && valorIngresso <= 15){ console.log("Bom filme!")}
else {console.log("Escolha outro filme :(")}

// //Desafios
//1.
let genero1 = prompt(" Qual genero do filme")
let valorIngresso1 = Number(prompt("Qual preco do ingresso?"))
let lanchinho = prompt(" Qual lanchinho vc vai comprar?")
if  (genero1 === "fantasia" && valorIngresso1 <= 15){ console.log(`Bom filme!`),
console.log(`Aproveite o seu ${lanchinho}`)}
else {console.log("Escolha outro filme :(")}

//2.
let nomeUsuario = prompt("Insira seu nome")
let jogoIntenacinalOuDomestico = prompt("Para jogo internacional insira IN | Para jogo domestico insira DO")
let etapaDoJogo = prompt("Para Semi-final insira SF | Para decisao de terceiro lugar insira DT| Para final sinria FI")
let categoria = prompt( "Insira categoria (1,2,3 ou 4)")
let quantidade = Number(prompt("Quantidade de ingressos"))
let valor = Number()
let todasInfos = [jogoIntenacinalOuDomestico,etapaDoJogo,categoria]

let imprimirJogoInOuDom
let imprimirEtapaJogo


switch (jogoIntenacinalOuDomestico){
    case "IN":
        imprimirJogoInOuDom = "Internacional"
        break;
        case "DO":
        imprimirJogoInOuDom = "Domestico"
        break;
        default : "Erro tipo de jogo"
}
switch (etapaDoJogo){
    case "SF":
        imprimirEtapaJogo = "Semi-final"
        break;
        case "DT":
        imprimirEtapaJogo = "Decisao terceiro lugar"
        break;
        case "FI":
        imprimirEtapaJogo = "Final"
        break;
        default : "Erro etapa do jogo"

}

//Valor local
 if (todasInfos ==="DO"&&"SF"&&"1"){ valor = 1320.00 }
 else if (todasInfos ==="DO"&&"SF"&&"2"){ valor = 880.00 }
 else if (todasInfos ==="DO"&&"SF"&&"3"){ valor = 550.00 }
 else if (todasInfos ==="DO"&&"SF"&&"4"){ valor = 220.00 }
 else if (todasInfos ==="DO"&&"DT"&&"1"){ valor = 660.00 }
 else if (todasInfos ==="DO"&&"DT"&&"2"){ valor = 440.00 }
 else if (todasInfos ==="DO"&&"DT"&&"3"){ valor = 330.00 }
 else if (todasInfos ==="DO"&&"DT"&&"4"){ valor = 170.00 }
 else if (todasInfos ==="DO"&&"FI"&&"1"){ valor = 1980.00 }
 else if (todasInfos ==="DO"&&"FI"&&"2"){ valor = 1320.00 }
 else if (todasInfos ==="DO"&&"FI"&&"3"){ valor = 880.00 }
 else if (todasInfos ==="DO"&&"FI"&&"4"){ valor = 330.00 }
 
//Valor Internacional
else if(todasInfos ==="IN"&&"SF"&&"1"){ valor = 1320.00*4.10 }
 else if (todasInfos ==="IN"&&"SF"&&"2"){ valor = 880.00*4.10 }
 else if (todasInfos ==="IN"&&"SF"&&"3"){ valor = 550.00*4.10 }
 else if (todasInfos ==="IN"&&"SF"&&"4"){ valor = 220.00*4.10 }
 else if (todasInfos ==="IN"&&"DT"&&"1"){ valor = 660.00*4.10 }
 else if (todasInfos ==="IN"&&"DT"&&"2"){ valor = 440.00*4.10 }
 else if (todasInfos ==="IN"&&"DT"&&"3"){ valor = 330.00*4.10 }
 else if (todasInfos ==="IN"&&"DT"&&"4"){ valor = 170.00*4.10 }
 else if (todasInfos ==="IN"&&"FI"&&"1"){ valor = 1980.00*4.10 }
 else if (todasInfos ==="IN"&&"FI"&&"2"){ valor = 1320.00*4.10 }
 else if (todasInfos ==="IN"&&"FI"&&"3"){ valor = 880.00*4.10 }
 else if (todasInfos ==="IN"&&"FI"&&"4"){ valor = 330.00*4.10 }



if (jogoIntenacinalOuDomestico==="DO"){
console.log("--- Dados da compra ---")
console.log(`Nome do cliente: ${nomeUsuario}`)
console.log(`Tipo do jogo: ${imprimirJogoInOuDom}`)
console.log(`Etapa do jogo ${imprimirEtapaJogo}`)
console.log(`Categoria: ${categoria}`)
console.log(` Quantidade de Ingressos: ${quantidade} ingressos`)
console.log(`---Valores---`)
console.log(`valores do ingresso : R$ ${valor}`)
console.log(`Valor total : R$ ${valor}`)}

else if (jogoIntenacinalOuDomestico==="IN"){
    console.log("--- Dados da compra ---")
    console.log(`Nome do cliente: ${nomeUsuario}`)
    console.log(`Tipo do jogo: ${imprimirJogoInOuDom}`)
    console.log(`Etapa do jogo ${imprimirEtapaJogo}`)
    console.log(`Categoria: ${categoria}`)
    console.log(` Quantidade de Ingressos: ${quantidade} ingressos`)
    console.log(`---Valores---`)
    console.log(`valores do ingresso : U$ ${valor}`)
    console.log(`Valor total : U$ ${valor}`)}
    


