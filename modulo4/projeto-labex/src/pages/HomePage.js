import React from "react";
import {  goToAdminHomePage, goToListTripsPage } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"


export function Homepage() {
    const navigate=useNavigate();

    return (
      <div>
        <h1>LabeX</h1>
        <p>HomePage.js  → Para o usuário escolher entre Área Administrativa e Lista de Viagens</p>
        <button onClick={()=>{goToListTripsPage(navigate,)}}>Viagens</button>
        <button onClick={()=>{goToAdminHomePage(navigate,)}}>Admin</button>
      </div>
    );
  }