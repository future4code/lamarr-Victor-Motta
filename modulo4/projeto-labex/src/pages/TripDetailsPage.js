import React from "react";
import {  goToBack } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"

export function TripDetailsPage() {
  const navigate=useNavigate();
    return (
      <div >
        TripDetailsPage.js → Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela
        <button onClick={()=>{goToBack(navigate)}}>Voltar</button>
        <button>Aprovar</button>
        <button>Reprovar</button>
      </div>
    );
  }