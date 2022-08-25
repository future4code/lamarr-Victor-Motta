import React from "react";
import {  goToCreateTripPage, goToLoginPage, goToPageHome } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"
import { useProtectedPage } from "../hooks/useProtectPage";
import { ButtonsContainer, GeneralButton, GeneralCards, GeneralH1, GeneralStyle, GeneralTitle} from "../components/Styled";
import { BASE_URL } from "../constants/Constants";
import { useRequestDataGet } from "../hooks/useRequestData";


export function AdminHomePage() {
  useProtectedPage()
  const navigate=useNavigate();
  const [dataTrip] = useRequestDataGet(
    `${BASE_URL}trips`
  );
  
  const RequisitonTrip = dataTrip&&dataTrip.trips.map((data) => {
    return <GeneralCards>
      <p key={data.id}>{data.name}</p>

      </GeneralCards>
})


    return (
      <GeneralStyle>
        <GeneralTitle>
        <GeneralH1>Admin Home-Page
        </GeneralH1>
        {RequisitonTrip}
        <ButtonsContainer>
        <GeneralButton onClick={()=>{goToPageHome(navigate)}}>Voltar</GeneralButton>
        <GeneralButton onClick={()=>{goToCreateTripPage(navigate)}}>Criar Viagem</GeneralButton>
        <GeneralButton onClick={()=>{goToLoginPage(navigate)}}>Logout</GeneralButton>
        </ButtonsContainer>
        </GeneralTitle>
      </GeneralStyle>
     
    );
  }