// Ex Interpretacao de codigo

//Ex1
//a.
//Matheus Natchtergaele
//Virginia Cavendish
//canal : "Globo", horario "14h"

//Ex2
//b.
//nome:"Juca",
// idade: 3,
// raca:"SRD"


//nome:"Juba", 
//idade: 3,
// raca:"SRD"

//nome:"Jubo"
//idade: 3,
// raca"SRD"

//b. Replica o objeto anterior e permite fazer algumas alteracoes.

//Ex3
//False
//Undefined 
// No primeiro console.log ele acessou se a pessoa era backender, e retornou false.
//Na segunda, altura nao estava declarada.


//Ex escrita de codigo

//Ex1

const pessoa = {
    nome: "Victor",
    apelidos: ["Vitu","Vitinho","ou Vitao."],
    
}
const  imprimirNomeApelido = (pessoa) => {
    const fraseNomeApelido = 
    (`Eu sou ${pessoa.nome}, mas ponde me chamar de: ${pessoa.apelidos}`)
  return fraseNomeApelido}
console.log(imprimirNomeApelido(pessoa))

//Ex2

const copiaPessoa ={...pessoa, apelidos: ["Vic","Porps","ou Caicara"]}
console.log(imprimirNomeApelido(copiaPessoa))


// // Ex2

const pessoa1 = {
    nome: "Victor",
    idade: 26,
    profissao: "Estudante",}

    const pessoa2 = {
        nome: "Joao",
        idade: 25,
        profissao: "Professor",}

    const Impressora = (obj) => {

        let arrayInfos = [obj.nome, obj.nome.length,obj.idade,obj.profissao,obj.profissao.length]
return arrayInfos
    }

console.log(Impressora(pessoa1))
console.log(Impressora(pessoa2))
    
//Ex3
let carrinho = []

const fruta1 = {
    nome:"morango",
    disponibilidade:true,
}
const fruta2 = {
    nome:"banana",
    disponibilidade:true,
}
const fruta3 = {
    nome:"kiwi",
    disponibilidade:true,
}
const colocarFrutaCarrinho = (fruta) =>{

    carrinho.push(fruta)

}

colocarFrutaCarrinho(fruta1)
colocarFrutaCarrinho(fruta2)
colocarFrutaCarrinho(fruta3)

console.log(carrinho)

// FICOU MUITO DIFICIL, PATY ME SALVA SOS