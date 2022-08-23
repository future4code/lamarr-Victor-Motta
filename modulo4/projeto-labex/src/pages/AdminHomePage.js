import React from "react";
import {  goToAdminHomePage, goToCreateTripPage, goToLoginPage } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import { useEffect } from "react";
import { useProtectedPage } from "../hooks/useProtectPage";


export function AdminHomePage() {
  useProtectedPage()
  const navigate=useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-motta-lamarr/trip/NoIFVcOiSgTKTIPVZwXS",
    {
        headers: {
            auth: token
        }
    }).then((response) => {
        console.log(response.data)
    }).catch((error) => {
        console.log("Error: ", error.response)
    })
}, [])
    return (
      <div>
        <p>AdminHomePage.js → Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</p>
        <button onClick={()=>{goToAdminHomePage(navigate)}}>Voltar</button>
        <button onClick={()=>{goToCreateTripPage(navigate)}}>Criar Viagem</button>
        <button onClick={()=>{goToLoginPage(navigate)}}>Logout</button>
      </div>
     
    );
  }