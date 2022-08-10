import React from "react";
import { goToPageHome } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"

export function CreateTripPage() {
  const navigate=useNavigate();
    return (
      <div >
        <p>CreateTripPage.js → Formulário para o administrador criar uma nova viagem
        </p>
        <ul>
          <li><input></input></li>
          <li><input></input></li>
          <li><input></input></li>
          <li><input></input></li>
        </ul>
        <button onClick={()=>{goToPageHome(navigate)}}>Logout</button>
        <button>Enviar</button>
      </div>
    );
  }