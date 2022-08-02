import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {

    const [users, setUsers] = useState([])
    const [addName, setAddName] = useState("")
    const [addEmail, setAddEmail] = useState("")

    const userName = (event) => {
      setAddName(event.target.value)
    }
    const userEmail = (event) => {
      setAddEmail(event.target.value)
    }

  const componentList = users.map((item, index) => {
    return (<div key={index}>
        <li>{item.name}</li>
    </div>)
})
  
useEffect(() => {
  getUserById()
}, [])


const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const myHeaders = {
        headers: {
            Authorization: "victor-motta-lamarr"
        }
    }

    const getUserById = () => {
      axios.get(url, myHeaders).then((response) => {
        setUsers(response.id.name)
      }).catch(
          (erro) => {
              console.log(erro.response);
          })
  }

  const body = {
    "name": addName,
    "email": addEmail,
}

  const postNewUser = (event) => {
    event.preventDefault()
    axios.post(url, body, myHeaders).then(() => {
        alert("Usuario adicionado com sucesso!")
        getUserById()
    }).catch((erro) => {
        alert("Aff deu Ruim!")
    })
    setAddName("")
}

const deleteUser = (event) => {
  event.preventDefault()
  const delUser = users.filter((item) => item.name === addName)
  console.log(delUser[0].id);

  axios.delete(url + "/" + delUser[0].id, myHeaders).then((response) => {
      alert("Usuario deletado com sucesso!")
      getUserById()
    
  }).catch((erro) => {
      alert("Aff deu Ruim!!")
      console.log(erro.response);
  })
  setAddName("")
}

return (
    <div>
        <h1> Clubinho dos irados</h1>
        <div>
            {componentList}
        </div>
        <div>
            <input type="text" value={addName} placeholder="Nome" onChange={userName} />
            <input type="email" value={addEmail} placeholder="Email" onChange={userEmail} />
            <button onClick={postNewUser}>
                Adicionar Usuário
            </button>
            <button onClick={deleteUser}>
                Excluir Usuário
            </button>
        </div>
    </div>
)
}

export default App;