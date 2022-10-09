console.log("exercicio 3");
const contas = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]

function Login() {
    const emailValidator = (email) => {
      const emailValid = /\S+@\S+\.\S+/;
      return emailValid.test(email);
    };
    const passwordValidator = (password) => {
      const passwordValid = /.{6,}/;
      return passwordValid.test(password);
    };
  
    if (!emailValidator("victor@email.com")) {
      return `Email inválido.`;
    } else if(!passwordValidator("c123456")) {
      return `Senha deve possuir no mínimo 6 caracteres.`;
    }else {
      return "Login bem sucedido.";
    }
  }
  
  console.log(Login("bananinha@gmail.com"));