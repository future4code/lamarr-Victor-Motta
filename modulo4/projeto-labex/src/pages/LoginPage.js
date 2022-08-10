import React from "react";
import {  goToAdminHomePage, goToBack } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"

export function LoginPage() {
  const navigate=useNavigate();
  return (
    <div >
      <p>LoginPage.js → Para fazermos login como administrador</p>
      <button onClick={()=>{goToBack(navigate)}}>Voltar</button>
      <button onClick={()=>{goToAdminHomePage(navigate)}}>Entrar</button>
    </div>
   
  );
}