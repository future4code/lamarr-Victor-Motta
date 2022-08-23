import React from "react";
import { goToListTripsPage, goToLoginPage } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"
import { GeneralButton, GeneralStyle,GeneralTitle, XColor } from "../components/Styled";


export function Homepage() {
    const navigate=useNavigate();

    return (
      <GeneralStyle>
         <GeneralTitle><p>Labe<XColor>X</XColor></p>
        <GeneralButton onClick={()=>{goToListTripsPage(navigate)}}>Viagens</GeneralButton>
        <GeneralButton onClick={()=>{goToLoginPage(navigate)}}>Admin</GeneralButton>
        </GeneralTitle>
      </GeneralStyle>
    );
  }