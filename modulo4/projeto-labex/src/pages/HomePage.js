import React from "react";
import { goToListTripsPage, goToLoginPage } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"
import { GeneralStyle,GeneralTitle } from "../components/Styled";


export function Homepage() {
    const navigate=useNavigate();

    return (
      <GeneralStyle>
         <GeneralTitle>LabeX</GeneralTitle>
        <p>HomePage.js  → Para o usuário escolher entre Área Administrativa e Lista de Viagens</p>
        <button onClick={()=>{goToListTripsPage(navigate)}}>Viagens</button>
        <button onClick={()=>{goToLoginPage(navigate)}}>Admin</button>
      </GeneralStyle>
    );
  }