import styled from "styled-components";
import React from "react";

const OrangeSquare = styled.div`
  background-color: orange;
  width: 20vw;
  display: flex;
  height: 100vh;
`;
const MainContent = styled.div`
  width: 100%;
  display: flex;
  height: 4vh;
  justify-content: center;
  align-items:center;
  margin: 10px;
  margin-top: 850px;

  input,button,label{
    margin: 0 10px;
  }
`;
const Main = styled.main`
  display: flex;
  align-items: center;

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

function App() {
  return (
    <div>
      <Header>
        <img src="https://yt3.ggpht.com/ytc/AKedOLSH-PUg_wTvKW7xAKL4PsXFV85N9Ys341g0WSVd=s900-c-k-c0x00ffffff-no-rj"></img>
        LabZap
      </Header>
      <Main>
        <OrangeSquare/>
        <MainContent>
          <label>
            Nome:
            <input type="text" id="name"/>
          </label>
          <label>
            Msg:
            <input type="text" id="mensagem" />
          </label>
          <button>Enviar Mensagem</button>
        </MainContent>
        <OrangeSquare/>
      </Main>
      <Footer>Victor Motta 2022. Informacoes Labenu etc etc etc.</Footer>
    </div>
  );
}

export default App;
