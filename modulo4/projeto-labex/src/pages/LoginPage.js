import React from "react";
import {  goToBack } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import { useForm } from "../hooks/useForm";
import { GeneralButton, GeneralH1, GeneralStyle, GeneralTitle } from "../components/Styled";



export function LoginPage() {
  const navigate=useNavigate();

  const [form, onChange, clear] = useForm({email:"", password: ""})

  const loginStart = (event) => {
    event.preventDefault()
    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-motta-lamarr/login",
    form)
    .then((response) => {
      localStorage.setItem("token",response.data.token);
      navigate("/admin/trips/list")
    })
    .catch((error) => alert(error.message))
    clear();
  };

  return (

    <GeneralStyle>
      <GeneralTitle>
      <GeneralH1>
      <GeneralH1>LoginPage</GeneralH1>
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
        <br/>
      <label htmlFor="password"> Password: </label>
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
          <GeneralButton onClick={()=>{goToBack(navigate)}}>Voltar</GeneralButton>

          <GeneralButton
      type="submit">Enviar</GeneralButton>
      </form>
      </GeneralH1>
      </GeneralTitle>
      {/* <button onClick={()=>{goToAdminHomePage(navigate)}}>Entrar</button> */}
      </GeneralStyle>
   
  );
}