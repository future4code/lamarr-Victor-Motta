import React from "react";
import {goToBack,goToTripDetailsPage } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"


export function ListTripsPage() {
    const navigate=useNavigate();
    return (
      <div >
        <h1> Lista de viagens</h1>
       <p>ListTripsPage.js → Para vermos todas as viagens</p>
       <button onClick={()=>{goToBack(navigate,)}}>Voltar</button>
        <button onClick={()=>{goToTripDetailsPage(navigate,)}}>Inscrever-se</button>
      </div>
    );
  }