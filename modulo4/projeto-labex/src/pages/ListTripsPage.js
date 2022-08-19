import React from "react";
import {goToBack,goToApplicationFormPage } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"
import { BASE_URL } from "../constants/Constants";
import {useRequestDataGet} from "../hooks/useRequestData";
import { GeneralCards} from "../components/Styled";


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
      </GeneralCards>
          

  })

    return (
      <div>
        <h1> Lista de viagens</h1>
       <p>ListTripsPage.js → Para vermos todas as viagens</p>
       {isLoadingUser&&"...Carregando!"}
        <ul>
        {!isLoadingUser&&dataTripList&&tripList}
        </ul>
        {!isLoadingUser&&!dataTripList&&erroUser}
       <button onClick={()=>{goToBack(navigate)}}>Voltar</button>
        <button onClick={()=>{goToApplicationFormPage(navigate)}}>Inscrever-se</button>
      </div>
    );
  }