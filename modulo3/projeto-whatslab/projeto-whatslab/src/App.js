import styled from "styled-components";
import React, { useState } from "react";

const OrangeSquare = styled.div`
  background-color: orange;
  width: 20vw;
  display: flex;
  height: 100vh;
`;
const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  position:block;
  input,button,label{
    position: relative;
    margin: 0 10px;
  }
`;
const Main = styled.main`
  display: flex;
  align-items: flex-end;
`;
const Header = styled.header`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  justify-content: center;
  font-size: 70px;
  img {
    width: 100px;
  }
`;
const Footer = styled.footer`
  display: flex;
  background-color: grey;
  align-items: center;
  justify-content: center;
`;
const Msg = styled.span`
margin-bottom: 30px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`


function App() {

  //estados
  const [inputUser, setInputUser] = useState("")
  const [inputText, setInputText] = useState("")
  const [appMsgs,setAppMsgs] = useState([
    {}
  ])

//eventos
const handleInputUser = (event) => {
  setInputUser(event.target.value)
}
const handleInputText = (event) => {
  setInputText(event.target.value)
}
//adicionar msg
const addMsg =() => {
  const newMsg = {user:inputUser,text:inputText}
  const newFeedMsg = [...appMsgs,newMsg]
  setAppMsgs(newFeedMsg)
}

//Msg impressa saira aqui
const arrayAppMsgs = appMsgs.map((elemento) => {
  return (
    <div>
    {elemento.user}
    {elemento.text}
    </div>
  );
});

  return (
      <div>
        <Header>
          <img alt=""src="https://yt3.ggpht.com/ytc/AKedOLSH-PUg_wTvKW7xAKL4PsXFV85N9Ys341g0WSVd=s900-c-k-c0x00ffffff-no-rj"></img>
          LabZap
        </Header>
        <Main>
          <OrangeSquare/>
          <MainContent>
            <Msg>{arrayAppMsgs}</Msg>
            <div>
                <label>
                Nome:
                </label>
                <input type="text"
                 id="name"
                  value={inputUser}
                  onChange={handleInputUser}/>
               <label>
                Msg:
                </label>
                <input
                type="text"
                id="mensagem"
                value={inputText}
                onChange={handleInputText}/>
              <button
              onClick={addMsg}>Enviar Mensagem</button>
            </div>
          </MainContent>
          <OrangeSquare/>
        </Main>
        <Footer>Victor Motta 2022. Informacoes Labenu etc etc etc.</Footer>
      </div>
  );}


export default App;