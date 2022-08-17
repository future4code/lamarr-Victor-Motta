import React from "react";
import {  goToAdminHomePage, goToBack } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import { useForm } from "../hooks/useForm";

export function LoginPage() {
  const navigate=useNavigate();

  const [form, onChange, clear] = useForm({email:"", password: ""})

  const loginStart = (event) => {
    event.preventDefault()
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-motta-lamarr/login",
    form)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error.message))
    clear();
  }

  return (
    <div>
      <p>LoginPage.js → Para fazermos login como administrador</p>
      <form onSubmit={loginStart}>
      <label htmlFor="email"> Email: </label>
        <input
        name="email"
        id="email"
        placeholder="E-mail"
        value={form.email}
        onChange={onChange}
        type="email"
        required
        />
      <label htmlFor="password"> Email: </label>
        <input
          name="password"
          id="password"
          placeholder="Password"
          value={form.password}
          onChange={onChange}
          pattern="^.{6,}$"
          type="password"
          title="your password must be 6 characters"
          required
          />
          <button onClick={()=>{goToBack(navigate)}}>Voltar</button>
      <button 
    
      type="submit">Enviar </button>
      </form>
       
      {/* <button onClick={()=>{goToAdminHomePage(navigate)}}>Entrar</button> */}
    </div>
   
  );
}