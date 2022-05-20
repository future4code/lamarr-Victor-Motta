// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

function retornaTamanhoArray(array) {
   const tamanhoArray = array.length
   return tamanhoArray
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const arrayInvertido = array.reverse()
      return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const arrayOrdenado = array.sort(function(a,b){
        return a-b
    })
      return arrayOrdenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
 function numPares(array){
     return array % 2 === 0
 }
 let pares = array.filter(numPares)
return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let array2 = []
    for (let num of array){
      if(array.length >=0){
        if(num%2 ===0)
        array2.push(num**2)
      }
    }
return array2
  }


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = 0 
  for (let i = 0; i<array.length; i ++){
  let numeroInicial = array[i]
  if (numeroInicial > maiorNumero){
      maiorNumero = array[i]
  } }
    return maiorNumero
}
 
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let numeros = {
   maiorNumero : Math.max(num1,num2),
   maiorDivisivelPorMenor : Math.max(num1,num2)%Math.min(num1,num2)===0,
   diferenca : (Math.max(num1,num2)- Math.min(num1,num2))}
   return numeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let array = []

    for (let i=0; array.length<n; i++){
      if (i%2===0){array.push(i)
      }
    }
return array
    }
  

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  let triangulo 
  if (ladoA === ladoB && ladoB === ladoC && ladoA === ladoC ){triangulo = "Equilátero"}
  // else if (ladoA === ladoB&&ladoB === ladoC && ladoA !== ladoC){triangulo = "Isósceles"}
  else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){triangulo = "Escaleno"}
  else {triangulo = "Isósceles"}
return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  function novoArray (a,b){
    return a-b;
  }
array.sort(novoArray)

let maior2 = array[array.length-2]
let menor2 = array[1]
return[maior2,menor2]

}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join([separador = `, `] )}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  //tentativa 1, com o .map
  // let novaPessoa = {...pessoa}
  // let arrayNomeAnonimo = novaPessoa.map((nome) => {
  // return nome.nome = "ANÔNIMO"})
  // return arrayNomeAnonimo

    let novaPessoa = {
      ...pessoa,
    nome : "ANÔNIMO" }
    return novaPessoa
  }
   

// EXERCÍCIO 13A
//primeira tentativa cod
function retornaPessoasAutorizadas(pessoas) {
  let podeEntrarNoBrinquedo = []
  for (let pessoaAutorizada of pessoas){
    if (pessoaAutorizada.altura>= 1.5&&pessoaAutorizada.idade>14&&pessoaAutorizada.idade<Number(60)
    ){
      podeEntrarNoBrinquedo.push(pessoaAutorizada)}
    
  }
  return podeEntrarNoBrinquedo
}
// return pessoas.filter(pessoaAutorizada =>{
// return (
//   pessoaAutorizada.altura>=1.5&&
//   pessoaAutorizada.idade>14&&
//   pessoaAutorizada.idade<60)
// })

// }

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let naoPodeEntrarNoBrinquedo = []
  for (let pessoaNaoAutorizada of pessoas){
    if (pessoaNaoAutorizada.altura<= 1.5||pessoaNaoAutorizada.idade<=14||pessoaNaoAutorizada.idade>60
    ){
      naoPodeEntrarNoBrinquedo.push(pessoaAutorizada)}
    
  }
  return naoPodeEntrarNoBrinquedo
}


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  
for (let c of contas)
{
let somaCompras = 0
for (let i=0; i<c.compras.length; i++){
   somaCompras += c.compras[i];}
c.saldoTotal -=somaCompras;
c.compras =[]
}
return contas
}



// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  let arrayOrdenado = consultas.sort(function(a,b){
    if (a.nome>b.nome){return 1;}
    if (a.nome<b.nome){return-1;}
  })
  return arrayOrdenado
}


// EXERCÍCIO 15B
// function retornaArrayOrdenadoPorData(consultas) {
//   let arrayOrdenado = consultas.sort(function(a,b){
//    return a.dataDaConsulta < b.dataDaConsulta
// })
// return arrayOrdenado 
// } 
   
