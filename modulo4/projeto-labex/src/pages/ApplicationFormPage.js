import React from "react";
import {  goToBack } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"

export function ApplicationFormPage() {
  const navigate=useNavigate();
    return (
      <div >
        ApplicationFormPage.js → Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
        <ul>
          <li><input></input></li>
          <li><input></input></li>
          <li><input></input></li>
          <li><input></input></li>
          <li><input></input></li>
          <li><input></input></li>
        </ul>
        <button onClick={()=>{goToBack(navigate)}}>Voltar</button>
        <button>Enviar</button>
      </div>
    );
  }