//Exercício laços

//Ex Interpretação de código

//1. O código esta realizando um laço, onde o valor só ira parar quando atingir o numero 5, depois ele retorna o valor+=i,
//imprimindo no console 10.

//2.a.
//19, 21, 23, 25, 27, 30
//

//2.b Sim
// trocar por = for (let numero = 0; numero<numero.length-1; numero ++)

//3. Ele ira ira imprimiruma arvore de * ate a linha ter 4 asteriscos
//*
//** 
//*** 
//**** 

//Ex escrita de código

//1. 
let quantBichosEstimacao = Number(prompt("Quantos bichos de estimacao vc tem?"))
let nomeDosPets = []
if (quantBichosEstimacao===0 ) {
    console.log("Que pena! Você pode adotar um pet!")}
else{
    for(let i =0; i<quantBichosEstimacao; i++){
        let perguntarNome = prompt("Qual nome dos seus pets?")
        nomeDosPets.push(perguntarNome)
    }
    console.log(` meus bichinhos sao ${nomeDosPets}`)
}
//tentativa com for of
    // else  (quantBichosEstimacao>0)
    //  {
    //       let nomeDosPets=[]
    //       nomeDosPets = prompt("Nome dos pets")
    //           {for (let imprimirNomePets of nomeDosPets)
    //             console.log(imprimirNomePets)
    // }


    //2.
    let arrayOriginal = [10,20,55,80,92,107]

//a.
function imprimirValorDoArrayOriginal (arrayOriginal){
    for (let valor of arrayOriginal) {
        console.log(valor)
    }
}
imprimirValorDoArrayOriginal(arrayOriginal)
//b
function imprimirValorDoArrayOriginal (arrayOriginal){
for (let valor of arrayOriginal) {
    console.log(valor/10)}
}

imprimirValorDoArrayOriginal(arrayOriginal)

//c.
    function imprimeValoresPares (arrayOriginal){
        let arrayPares =[]
            for (let i = 0; i<arrayOriginal.length; i++){
                if (arrayOriginal[i] % 2 ===0) {
                    arrayPares.push(arrayOriginal[i])
                }
            }
            console.log(arrayPares)}
            imprimeValoresPares(arrayOriginal)
            
//d.
function imprimirArrayComIndex (arrayOriginal){
    let indexArray = []
    let i = 0
        for(let valor of arrayOriginal){
            indexArray.push(`O elemento index ${i} é ${valor}`)
            i++
        }
           console.log(indexArray)
}

imprimirArrayComIndex(arrayOriginal)


//e. 
function retirarMaiorNumeroOuMenorNumero (arrayOriginal){
let numeroMaior = 0
let numeroMenor = Infinity 
for (let i=0; i<arrayOriginal.length;i++){

    if(arrayOriginal[i]<numeroMenor){
        numeroMenor =arrayOriginal[i]
    }    else if(arrayOriginal[i]>numeroMaior){
            numeroMaior= arrayOriginal[i]

        }
    }
    console.log("O maior numero é:", numeroMaior)
    console.log("O menor numero é:", numeroMenor)
}
retirarMaiorNumeroOuMenorNumero(arrayOriginal)

//Oi Paty! <3
//Refiz o exercicio com ajuda da lista do notion, ainda estou com dificuldade
//para implementar, principalemnte esse exercicio e.
//Mas to tentando e sei que vou conseguir! 