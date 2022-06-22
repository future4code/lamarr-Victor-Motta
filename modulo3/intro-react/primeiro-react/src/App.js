import foto_victor from './img/victor-foto.jpg';
import './App.css';

function App() {

const onClickBotao = ( ) =>{
  alert(`Boa noite galerinha! #Labelovers 😎 `)
}

  return (
    <div className="App">
        <h1>Olá! Me chamo Victor!</h1>
        <img src={foto_victor} className="App-foto" alt="foto-perfil-victor" />
        <p>
         Esse é meu <b>primeiro</b> site em React 😭.</p>
      <button onClick={onClickBotao}>Aperte este botãozinho</button>
    </div>
  );
}

export default App;
