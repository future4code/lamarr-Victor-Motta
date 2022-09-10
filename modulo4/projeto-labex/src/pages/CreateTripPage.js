import React from "react";
import { goToListTripsPage, goToPageHome } from "../components/Coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "../hooks/useForm";
import { useProtectedPage } from "../hooks/useProtectPage";
import {
  GeneralButton,
  GeneralH1,
  GeneralInputs,
  GeneralStyle,
  CardContainer,
  ButtonsContainer,
  GeneralSelect,
} from "../components/Styled";

export function CreateTripPage() {
  const navigate = useNavigate();
  useProtectedPage();

  const [form, onChange, clear] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      auth: token,
    },
  };

  const createTrip = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-motta-lamarr/trips",
        form,
        headers
      )
      .then((response) => console.log(response.data), alert("Viagem enviada!"))
      .catch((error) => console.log(error.message));
    clear();
  };

  return (
    <GeneralStyle>
      <CardContainer>
        <GeneralH1>Create Trip Page</GeneralH1>
        <form onSubmit={createTrip}>
          <GeneralInputs
            name="name"
            id="name"
            placeholder="Nome da Viagem"
            value={form.name}
            onChange={onChange}
            type="text"
            minLength={5}
            required
          ></GeneralInputs>
          <br />
          <GeneralSelect
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
            <option key="Júpiter" value="Júpiter">
              Júpiter
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
          </GeneralSelect>
          <br />
          <GeneralInputs
            name="date"
            id="date"
            placeholder="Data"
            value={form.date}
            onChange={onChange}
            type="date"
            min="2022-08-18"
            max="2100-08-18"
            required
          ></GeneralInputs>
          <br />
          <GeneralInputs
            name="description"
            id="description"
            placeholder="Descreva a viagem"
            value={form.description}
            onChange={onChange}
            type="text"
            minLength={30}
            maxLength={100}
            required
          ></GeneralInputs>
          <br />
          <GeneralInputs
            name="durationInDays"
            id="durationInDays"
            placeholder="Duracao em dias"
            value={form.durationInDays}
            onChange={onChange}
            type="number"
            min="50"
            required
          ></GeneralInputs>
          <br />
          <ButtonsContainer>
            <GeneralButton
              onClick={() => {
                goToPageHome(navigate);
              }}
            >
              Logout
            </GeneralButton>
            <GeneralButton
              onClick={() => {
                goToListTripsPage(navigate);
              }}
            >
              Lista
            </GeneralButton>
            <GeneralButton type="submit">Enviar</GeneralButton>
          </ButtonsContainer>
        </form>
      </CardContainer>
    </GeneralStyle>
  );
}
