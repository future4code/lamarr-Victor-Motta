import React from "react";


function Etapa3() {
    return (
     <div>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
         <ul>
                <li>
                <label>1. Por que você não terminou um curso de graducação</label>
                <input type={Text}></input>
                </li>
                <li>
                <label>2. Você fez algum curso complementar?</label>
                <select>
                    <option>Selecione</option>
                        <option>Curso técnico</option>
                        <option>Cursos de inglês</option>
                        <option>Não fiz curso complementar</option>
                    </select>

                </li>
        </ul>
      </div>
    );
  }
  
  export default Etapa3;