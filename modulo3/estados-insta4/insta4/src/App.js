import React, { useState } from "react";
import Post from "./components/Post/Post";
import "./style.css";
import styled from 'styled-components';

const Form = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding: 10px;
margin: 10px;
background-color:grey;

 label{
  padding:10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size:30px;
}
input{
  text-align: center;
  height:5vh;
  width:20vw;
  border-radius:20px;
  font-style:bold;
  
} 

button{
  font-weight:bold;
  font-size:large;
  margin-top:20px;
  width:15vw;
  height:7vh;
  border-radius:40px;

}
button:hover{
  cursor:pointer;
  background-color:lightcoral;
  
} 
`

function App() {

  //estados
  const [inputTexto1, setInputTexto1] = useState("")
  const [inputTexto2, setInputTexto2] = useState("")
  const [inputTexto3, setInputTexto3] = useState("")
  

  const [arrayPost,setArrayPost] = useState([
    {
      nomeUsuario: `vitinho`,
      fotoUsuario:
        "https://media-exp2.licdn.com/dms/image/C4D03AQFFZSK7Q-8pTg/profile-displayphoto-shrink_200_200/0/1545754980434?e=1661990400&v=beta&t=pIB-Z6j22gRDCjSybHMgHKOlntDe23P5HBKPqvoWyx8",
      fotoPost:
        "https://images.unsplash.com/photo-1559244673-9cee88d551f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=855&q=80",
    },
    {
      nomeUsuario: `leozinho`,
      fotoUsuario:
        "https://media-exp2.licdn.com/dms/image/C5103AQG1P5ma_6sqyg/profile-displayphoto-shrink_200_200/0/1517275479726?e=1661990400&v=beta&t=RCtF2soLzoO2E7zqRNh4hIe3NDrFMRAl2PG1vyae9q4",
      fotoPost:
        "https://images.unsplash.com/photo-1564994069859-0d8d5a9365bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
    {
      nomeUsuario: `guizinho`,
      fotoUsuario:
        "https://media-exp2.licdn.com/dms/image/D4E03AQG1BARsxH3h9Q/profile-displayphoto-shrink_200_200/0/1648414713849?e=1661990400&v=beta&t=H2y-Jwau1pW8vf7OpjnRty2Vwatg5bPD-amV8nnOybY",
      fotoPost:
        "https://images.unsplash.com/photo-1588844467563-df6c1fa2a2bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  ]);

  //eventos
  const handleInputTexto1 = (event) => {
    setInputTexto1(event.target.value)
  }
  const handleInputTexto2 = (event) => {
    setInputTexto2(event.target.value)
  }
  const handleInputTexto3 = (event) => {
    setInputTexto3(event.target.value)
  }

  // adicionat item
  const addTexto1 = () => {
    const novoTexto1 = {nomeUsuario: inputTexto1, fotoPost: inputTexto2,fotoUsuario: inputTexto3}
    const novaListaDeTexto = [...arrayPost,novoTexto1]
    setArrayPost(novaListaDeTexto)

  }

  
  const listaDePost = arrayPost.map((elemento, index) => {
    return (
      <Post
        nomeUsuario={elemento.nomeUsuario}
        fotoUsuario={elemento.fotoUsuario}
        fotoPost={elemento.fotoPost}
        key={index}
      />
    );
  });

  return (
  
  <div className="MainContainer">{listaDePost}
  <Form>
      <label>Nome</label>
      <input type="text"
        placeholder="Insira seu nome de usuario"
        value={inputTexto1}
        onChange={handleInputTexto1}
        /> 
      <label>Foto</label>
      <input type="img"
        placeholder="Insira um url de img"
        value={inputTexto2}
        onChange={handleInputTexto2}
        /> 
      <label>Foto de usuario</label>
      <input type="img"
        placeholder="Insira um url de img"
        value={inputTexto3}
        onChange={handleInputTexto3}
        /> 
         <button onClick={addTexto1}>Publicar</button>
       </Form>
        
        
        </div>)
        
    
}

export default App;
