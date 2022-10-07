console.log("exercício 2");
//Cadastro cliente
const clientesJaCadastrados = [
	{ id: 1, nome: "Fulano" },
	{ id: 2, nome: "Ciclano" },
	{ id: 3, nome: "Beltrano" },
	{ id: 4, nome: "Fulana" }
]

const cadastraCliente = (id,nome) => {
    let novosClientes =  [].concat(clientesJaCadastrados);
    novosClientes.push({id,nome});
    console.log(novosClientes)
}
cadastraCliente(5,"Victor");

// Tabuada e validação
tabledNumber = "5";

if (tabledNumber === String(tabledNumber))
  console.log(`Erro. Parâmetro inválido (deve ser digitado um número).`);
else if (tabledNumber > 10)
  console.log("Erro. Parâmetro inválido (número precisa valer entre 1 e 10).");
else {
  for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${tabledNumber} = ${i * tabledNumber}`);
  }
}