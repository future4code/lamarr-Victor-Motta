import React, { useEffect } from "react";
import { goToPageHome } from "../components/Coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "../hooks/useForm";
import { useProtectedPage } from "../hooks/useProtectPage";

export function CreateTripPage() {
  const navigate = useNavigate();
  useProtectedPage();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-motta-lamarr/trip/NoIFVcOiSgTKTIPVZwXS",
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  }, []);

  const createTrip = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-motta-lamarr/trips",
        form
      )
      .then((response) => console.log(response.data), alert("Viagem enviada!"))
      .catch((error) => console.log(error.message), alert("Erro!"));
    clear();
  };
  const [form, onChange, clear] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const data = new Date();
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();
  const dataAtual = dia + "/" + mes + "/" + ano;

  return (
    <div>
      <p>
        CreateTripPage.js → Formulário para o administrador criar uma nova
        viagem
      </p>
     
      <form onSubmit={createTrip}>
        <input
          name="name"
          id="name"
          placeholder="Nome"
          value={form.name}
          onChange={onChange}
          type="text"
          pattern={"(.*[a-z]){5}"}
          required
        ></input>
        <br />{" "}
        <select
          placeholder={"Planeta"}
          onChange={onChange}
          value={form.planet}
          name={"planet"}
          type={"text"}
          required
        >
          <br />
          <option key="Mercúrio" value="Mercúrio">
            Mercúrio
          </option>
          <option key="Vênus" value="Vênus">
            Vênus
          </option>
          <option key="Terra" value="Terra">
            Terra
          </option>
          <option key="Marte" value="Marte">
            Marte
          </option>
          <option key="Júpter" value="Júpter">
            Júpter
          </option>
          <option key="Saturno" value="Saturno">
            Saturno
          </option>
          <option key="Urano" value="Urano">
            Urano
          </option>
          <option key="Netuno" value="Netuno">
            Netuno
          </option>
          <option key="Plutão" value="Plutão">
            Plutão
          </option>
        </select>
        <br />
        <input
          name="date"
          id="date"
          placeholder="Data"
          value={form.date}
          onChange={onChange}
          type="date"
          min={dataAtual}
          required
        ></input>
        <br />
        <input
          name="description"
          id="description"
          placeholder="Min 30 letras"
          value={form.description}
          onChange={onChange}
          type="text"
          pattern={".{30,100}$"}
          required
        ></input>
        <br />
        <input
          name="durationInDays"
          id="durationInDays"
          placeholder="Duracao em dias"
          value={form.durationInDays}
          onChange={onChange}
          type="number"
          min="50"
          required
        ></input>
        <br />
        <button
          onClick={() => {
            goToPageHome(navigate);
          }}
        >
          Logout
        </button>
        <button type="submit">Enviar</button>
        
      </form>
    
    </div>
  );
}
