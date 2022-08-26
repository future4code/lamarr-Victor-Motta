import React from "react";
import {goToBack,goToApplicationFormPage } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"
import { BASE_URL } from "../constants/Constants";
import {useRequestDataGet} from "../hooks/useRequestData";
import { CardContainer, GeneralButton, GeneralCards, GeneralH1, GeneralStyleCards } from "../components/Styled";




export function ListTripsPage() {
  const navigate=useNavigate();

  const [dataTripList,isLoadingUser,erroUser]=useRequestDataGet(`${BASE_URL}trips`)

  const tripList =dataTripList&&dataTripList.trips.map((trip)=>{
    return <GeneralCards>
      <h2 key={trip.id}> {trip.name}</h2> 
      <br/>
      <p key={trip.id}>Datas: {trip.date}</p> 
      <p key={trip.id}>Duracao: {trip.durationInDays}</p> 
      <p key={trip.id}>Planeta: {trip.planet}</p> 
      <p key={trip.id}>Descrição: {trip.description}</p> 
      <GeneralButton onClick={()=>{goToApplicationFormPage(navigate)}}>Inscrever-se</GeneralButton>
      </GeneralCards>
          

  })

    return (
      <GeneralStyleCards>
       <CardContainer>
        <GeneralH1> Lista de viagens</GeneralH1>
        <GeneralButton onClick={()=>{goToBack(navigate)}}>Voltar</GeneralButton>
        {isLoadingUser&&"loading..."}
        {!isLoadingUser&&dataTripList&&tripList}
        {!isLoadingUser&&!dataTripList&&erroUser}
        </CardContainer>
      </GeneralStyleCards>
     
    );
  }