import React, {useState} from "react";
import Etapa1 from './components/Etapa1';
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

function App() {

  return (
   <div>
    <Etapa1/>
    <button> Próxima etapa</button>
    
    </div>
  );
}

export default App;
