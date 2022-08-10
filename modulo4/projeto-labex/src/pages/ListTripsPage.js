import React from "react";
import {goToBack,goToApplicationFormPage } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"


export function ListTripsPage() {
    const navigate=useNavigate();
    return (
      <div >
        <h1> Lista de viagens</h1>
       <p>ListTripsPage.js → Para vermos todas as viagens</p>
       <button onClick={()=>{goToBack(navigate)}}>Voltar</button>
        <button onClick={()=>{goToApplicationFormPage(navigate)}}>Inscrever-se</button>
      </div>
    );
  }