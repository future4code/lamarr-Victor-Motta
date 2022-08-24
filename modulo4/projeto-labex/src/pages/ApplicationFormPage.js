import React from "react";
import {  goToBack } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"
import { useForm } from "../hooks/useForm";
import { axios } from "axios";
import { BASE_URL } from "../constants/Constants";
import { useRequestDataGet } from "../hooks/useRequestData";
import { GeneralH1, GeneralInputs, GeneralStyle } from "../components/Styled";

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

  const [dataTrip] = useRequestDataGet(
    `${BASE_URL}trips`
  );
  
  const tripsSelect = dataTrip&&dataTrip.trips.map((data) => {
    return <option key={data.id}>{data.name}</option>
})


    return (
      <GeneralStyle>
        <GeneralH1>Application Form Page</GeneralH1>
        <form onSubmit={aplicationForm}>
        <select id="select">
          <option disabled>Escolha uma Viagem</option>
            {tripsSelect}
          </select>

          <GeneralInputs
                    name="name" 
                    id="name" 
                    placeholder="Nome"
                    value={form.name}
                    onChange={onChange}
                    pattern={"(.*[a-z]){3}"}
                    type="text" 
                    title= "O nome deve ter ao menos 3 letras"
                    required 
                />
          <GeneralInputs
                    name="age" 
                    id="age" 
                    placeholder="Idade"
                    value={form.age}
                    onChange={onChange}
                    type="number" 
                    min="18"
                    title= "você deve ter pelo menos 18 anos para se inscrever"
                    required 
                />
          <GeneralInputs
                    name="applicationText" 
                    id="applicationText" 
                    placeholder="Diga seus desejos pra gente!"
                    value={form.applicationText}
                    onChange={onChange}
                    type="text" 
                    pattern={"(.*[a-z]){30}"}
                    title= "O texto de candidatura deve ter ao menos 30 caracteres"
                    required 
                />
          <GeneralInputs
                    name="profession" 
                    id="profession" 
                    placeholder="Profissão"
                    value={form.profession}
                    onChange={onChange}
                    type="text" 
                    pattern={"(.*[a-z]){10}"}
                    title= "A profissão deve ter ao menos 10 caracteres"
                    required 
                />
         <GeneralInputs
                    name="country" 
                    id="country" 
                    placeholder="País"
                    value={form.country}
                    onChange={onChange}
                    type="text" 
                    required 
                />
                
         
        </form>
        
        <button onClick={()=>{goToBack(navigate)}}>Voltar</button>
        <button type="submit">Enviar</button>
      </GeneralStyle>
    );
  }