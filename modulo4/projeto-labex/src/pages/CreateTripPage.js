import React from "react";
import { goToPageHome } from "../components/Coordinator";
import {useNavigate} from "react-router-dom"
import { axios } from "axios";
import { useForm } from "../hooks/useForm";

export function CreateTripPage() {
  const navigate=useNavigate();
  const [form, onChange, clear] = useForm({name: "",planet:"",date:"", description:"", durationInDays:""})

  const createTrip = (event) => {
    event.preventDefault()
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-motta-lamarr/trips",
    form)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error.message))
    clear();
  }

    return (
      <div >
        <p>CreateTripPage.js → Formulário para o administrador criar uma nova viagem
        </p>
        <form onSubmit={createTrip}>
        <ul>
          <li><input name="name" 
                    id="name" 
                    placeholder="Nome"
                    value={form.name}
                    onChange={onChange}
                    type="text" 
                    required >
                    </input>
            </li>
          <li><select
          value={form.planet}/>
            </li>
          <li><input name="date" 
                    id="date" 
                    placeholder="Data"
                    value={form.date}
                    onChange={onChange}
                    type="date" 
                    required >
                    </input>
            </li>
          <li><input name="description" 
                    id="description" 
                    placeholder="Descricao"
                    value={form.description}
                    onChange={onChange}
                    type="text" 
                    required >
                    </input>
            </li>
          <li><input name="durationInDays" 
                    id="durationInDays" 
                    placeholder="Duracao em dias"
                    value={form.durationInDays}
                    onChange={onChange}
                    type="text" 
                    required >
                    </input>
            </li>
        </ul>
        <button onClick={()=>{goToPageHome(navigate)}}>Logout</button>
        <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }