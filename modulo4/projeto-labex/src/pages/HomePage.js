import React from "react";
import { goToListTripsPage, goToLoginPage } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"
import { BackbroundVideo, GeneralButton, GeneralTitle, XColor } from "../components/Styled";
import UniverseVideo from "../components/Media/2160p.mp4"


export function Homepage() {
    const navigate=useNavigate();

    return (
      <div>
        <BackbroundVideo src={UniverseVideo}loop autoPlay muted/>
         <GeneralTitle><p>Labe<XColor>X</XColor></p>
        <GeneralButton onClick={()=>{goToListTripsPage(navigate)}}>Viagens</GeneralButton>
        <GeneralButton onClick={()=>{goToLoginPage(navigate)}}>Admin</GeneralButton>
        </GeneralTitle>
      </div>
    );
  }