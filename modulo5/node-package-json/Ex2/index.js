//Ex2
//Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

const operation=(process.argv[2])
const n1=Number(process.argv[3])
const n2=Number(process.argv[4])


switch (operation){
    case somar:
function soma(n1,n2){
    return console.log(n1+n2);
}
break;
case subtr:
function subtracao(n1,n2){
    return console.log(n1-n2);
}
break;
default:
 console.log('Invalid operator');
        break;}

