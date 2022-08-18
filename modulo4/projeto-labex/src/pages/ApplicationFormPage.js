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
          <li><input
                    name="name" 
                    id="name" 
                    placeholder="Nome"
                    value={form.name}
                    onChange={onChange}
                    pattern={"(.*[a-z]){3}"}
                    type="text" 
                    title= "O nome deve ter ao menos 3 letras"
                    required 
                /></li>
          <li><input
                    name="age" 
                    id="age" 
                    placeholder="Idade"
                    value={form.age}
                    onChange={onChange}
                    type="number" 
                    min="18"
                    title= "você deve ter pelo menos 18 anos para se inscrever"
                    required 
                /></li>
          <li><input
                    name="applicationText" 
                    id="applicationText" 
                    placeholder="Diga seus desejos pra gente!"
                    value={form.applicationText}
                    onChange={onChange}
                    type="text" 
                    pattern={"(.*[a-z]){30}"}
                    title= "O texto de candidatura deve ter ao menos 30 caracteres"
                    required 
                /></li>
          <li><input
                    name="profession" 
                    id="profession" 
                    placeholder="Profissao"
                    value={form.profession}
                    onChange={onChange}
                    type="text" 
                    pattern={"(.*[a-z]){10}"}
                    title= "A profissão deve ter ao menos 10 caracteres"
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