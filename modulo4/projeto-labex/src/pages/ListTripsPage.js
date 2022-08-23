import React from "react";
import {goToBack,goToApplicationFormPage } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"
import { BASE_URL } from "../constants/Constants";
import {useRequestDataGet} from "../hooks/useRequestData";
import { CardContainer, GeneralButton, GeneralCards, GeneralH1, GeneralStyle } from "../components/Styled";



export function ListTripsPage() {
  const navigate=useNavigate();

  const [dataTripList,isLoadingUser,erroUser]=useRequestDataGet(`${BASE_URL}trips`)

  const tripList =dataTripList&&dataTripList.trips.map((trip)=>{
    return <GeneralCards>
      <p key={trip.id}>Nome: {trip.name}</p> 
      <p key={trip.id}>Datas: {trip.date}</p> 
      <p key={trip.id}>Duracao: {trip.durationInDays}</p> 
      <p key={trip.id}>Planeta: {trip.planet}</p> 
      <p key={trip.id}>Descricao: {trip.description}</p> 
      <GeneralButton onClick={()=>{goToApplicationFormPage(navigate)}}>Inscrever-se</GeneralButton>
      </GeneralCards>
          

  })

    return (
      
      <GeneralStyle>
       <CardContainer>
        <GeneralH1> Lista de viagens</GeneralH1>
        <GeneralButton onClick={()=>{goToBack(navigate)}}>Voltar</GeneralButton>
        
       {isLoadingUser&&"...Carregando!"}
        {!isLoadingUser&&dataTripList&&tripList}
        {!isLoadingUser&&!dataTripList&&erroUser}
        </CardContainer>
      </GeneralStyle>
     
    );
  }