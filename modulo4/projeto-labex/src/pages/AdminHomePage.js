import React from "react";
import {  goToCreateTripPage, goToLoginPage, goToPageHome } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"
import { useProtectedPage } from "../hooks/useProtectPage";
import { ButtonsContainer, GeneralButton, GeneralCards, GeneralH1, GeneralStyle, GeneralTitle} from "../components/Styled";
import { BASE_URL } from "../constants/Constants";
import { useRequestDataGet } from "../hooks/useRequestData";
import { CgTrash } from "react-icons/cg";
import axios from "axios";
import { clear } from "@testing-library/user-event/dist/clear";

export function AdminHomePage() {
  useProtectedPage()
  const navigate=useNavigate();
  const [dataTrip] = useRequestDataGet(
    `${BASE_URL}trips`
  );
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      auth: token,
    },
  };
  
  const deleteTrip = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-motta-lamarr/trips/${id}`, headers
      )
      .then((response) => console.log(response.data), alert("Viagem Apagada!"))
      .catch((error) => console.log(error.message));
    clear();
  };


  const RequisitonTrip = dataTrip&&dataTrip.trips.map((data) => {
    return  <GeneralCards key={data.id}>
      <p >{data.name}</p>
      <GeneralButton onClick={()=>{deleteTrip(data.id)}}><CgTrash/></GeneralButton>
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