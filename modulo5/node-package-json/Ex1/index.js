//Ex1
//a) **Responda como comentário no seu código:** como fazemos para acessar os parâmetros passados na linha de comando para o Node?
//Resp: Atraves do comando process.argv

//b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

const nome = process.argv[2]
const sobrenome = process.argv[3]
const idade =Number (process.argv[4])

function nomeCompleto(nome,sobrenome,idade){
    return `Olá, ${nome} ${sobrenome}! Você tem ${idade} anos. Em sete anos você terá ${idade+7} anos;`
}
const resposta1=nomeCompleto("Victor","Motta",27)
console.log(resposta1)

//Ex2
//Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.
const operation=(process.argv[5])
const n1=Number(process.argv[6])
const n2=Number(process.argv[7])


switch (operation){
    case somar:
function somar(n1,n2){
    return n1+n2;
}
break;
case subtr:
function subtr(n1,n2){
    return n1-n2;
}
break;}

const respostaSoma=somar(n1,n2)
const respostaSubtr=subtr(n1,n2)

console.log(resposta2);