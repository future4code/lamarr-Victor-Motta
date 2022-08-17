import React from "react";
import {  goToBack } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"
import { useForm } from "../hooks/useForm";
import { axios } from "axios";

export function ApplicationFormPage() {
  const navigate=useNavigate();
  const [form, onChange, clear] = useForm({name: "",age:"",applicationText:"", profession:"", country:""})

  const aplicationForm = (event) => {
    event.preventDefault()
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-motta-lamarr/trips/:id/apply",
    form)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error.message))
    clear();
  }


    return (
      <div >
        ApplicationFormPage.js → Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
        <form onSubmit={aplicationForm}>
          <ul>
          <li><select
                //consumo de api?
                /></li>
          <li><input
                    name="name" 
                    id="name" 
                    placeholder="Nome"
                    value={form.name}
                    onChange={onChange}
                    type="text" 
                    required 
                /></li>
          <li><input
                    name="age" 
                    id="age" 
                    placeholder="Idade"
                    value={form.age}
                    onChange={onChange}
                    type="number" 
                    required 
                /></li>
          <li><input
                    name="applicationText" 
                    id="applicationText" 
                    placeholder="Diga seus desejos pra gente!"
                    value={form.applicationText}
                    onChange={onChange}
                    type="text" 
                    required 
                /></li>
          <li><input
                    name="profession" 
                    id="profession" 
                    placeholder="Profissao"
                    value={form.profession}
                    onChange={onChange}
                    type="text" 
                    required 
                /></li>
          <li><input
                    name="country" 
                    id="country" 
                    placeholder="Pais"
                    value={form.country}
                    onChange={onChange}
                    type="text" 
                    required 
                /></li>
                 <li><select 
                //consumo de api?
                /></li>
          </ul>
        </form>
        
        <button onClick={()=>{goToBack(navigate)}}>Voltar</button>
        <button type="submit">Enviar</button>
      </div>
    );
  }