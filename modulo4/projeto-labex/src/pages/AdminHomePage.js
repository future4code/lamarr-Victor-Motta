import React from "react";
import {  goToBack, goToCreateTripPage, goToPageHome } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"


export function AdminHomePage() {
  const navigate=useNavigate();
    return (
      <div>
        <p>AdminHomePage.js → Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</p>
        <button onClick={()=>{goToBack(navigate)}}>Voltar</button>
        <button onClick={()=>{goToCreateTripPage(navigate)}}>Criar Viagem</button>
        <button onClick={()=>{goToPageHome(navigate)}}>Logout</button>
      </div>
     
    );
  }