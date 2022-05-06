//Ex Call back e funcoes

//Ex de interpretacao de cod

//1.Ele ira imprimir o item, depois a posicao dele no array, e depois o array inteiro.

//2. Ele ira imprimir apenas nos nomes dos usuarios

//3. Ele ira imprimir apenas os itens que os são apelidos diferentes de "Chijo", ou seja
// "Mandi" e "Laura"



//Ex de escrita
 //a.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},]

  let apenasNome =  pets.map((nomeDog) => {
    return nomeDog.nome
 })
  console.log (apenasNome)

  //b.

 let apenasSalsichas =  pets.filter((racaSalcicha) => {
    return racaSalcicha.raca ==="Salsicha"
})
    console.log (apenasSalsichas)

//c.

let apenasPoodles = pets.filter((racaPoodles) => {
return racaPoodles.raca ==="Poodle"
})

let nomeDosPoodles = apenasPoodles.map((nomePoodle) => {
    return nomePoodle.nome 
})

// let arrayPoodles = nomeDosPoodles (Testamos com as duas formas)

for (let i=0;i<nomeDosPoodles.length;i++){

if (nomeDosPoodles>=0) {
   
}
console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomeDosPoodles[i]}!`)
}

//2.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a.
let nomeProduto = produtos.map((item) => {
    return item.nome
})
console.log(nomeProduto)

//b.
let precosProdutos = produtos.map((item) =>{
let produtoComDesconto = item.preco*0.95
let arrayDoDesconto = [item.nome, produtoComDesconto]
  return  arrayDoDesconto
})
console.log(arrayDoDesconto)

//c.
let apenasBebidas =  produtos.filter((indice) => {
    return indice.categoria ==="Bebidas"
})
    console.log (apenasBebidas)

//d. 
let apenasYpe =  produtos.filter((indice) => {
    return indice.nome.includes("Ypê")
})
    console.log (apenasYpe)
//e.

let msgYpe = apenasYpe.map((indice) =>{
    return `Compre ${indice.nome}, por ${indice.preco}`
})
console.log(msgYpe)

//Desafio

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 //a.

let oredemAlfabetica = pokemons.map((indice) =>{
    return indice.nome
})
console.log(oredemAlfabetica.sort())

//b.

