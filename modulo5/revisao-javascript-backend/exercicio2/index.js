console.log("exercício 2");
//Cadastro cliente
const arr = [
	{ id: 1, nome: "Fulano" },
	{ id: 2, nome: "Ciclano" },
	{ id: 3, nome: "Beltrano" },
	{ id: 4, nome: "Fulana" }
]

function addClient(arr, name) {
  const {length} = arr;
  const id = length + 1;
  const found = arr.some(el => el.nome === name);
  if(!found) {arr.push({id,nome: name});}
  else {console.log(`Usuario "${name}" ja existente`)}
  return arr;
}
console.log(addClient(arr,"Fulano"));


// function cadastraCliente (id,nome) {
//   let index = clientesJaCadastrados.findIndex
//   (c => c.id == id)
//   if (index=id){
//     clientesJaCadastrados.push({ id: id, nome: nome});
//   }else {
//     return `Erro. Parâmetro inválido (id:${id} já existe)`
// }
// console.log(clientesJaCadastrados)
// }
// cadastraCliente(1, "Joao")

// const cadastraCliente = (id,nome) => {
//     let novosClientes =  [].concat(clientesJaCadastrados);
//     novosClientes.push({id,nome});
//     console.log(novosClientes)
// }
// cadastraCliente(5,"Victor");

// Tabuada e validação
// tabledNumber = "5";

// if (tabledNumber === String(tabledNumber))
//   console.log(`Erro. Parâmetro inválido (deve ser digitado um número).`);
// else if (tabledNumber > 10)
//   console.log("Erro. Parâmetro inválido (número precisa valer entre 1 e 10).");
// else {
//   for (let i = 0; i <= 10; i++) {
//     console.log(`${i} x ${tabledNumber} = ${i * tabledNumber}`);
//   }
// }