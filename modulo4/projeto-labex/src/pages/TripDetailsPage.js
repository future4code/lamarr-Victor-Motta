import React, { useEffect } from "react";
import { goToBack } from "../components/Coordinator";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectPage";
import axios from "axios";

export function TripDetailsPage() {
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
  return (
    <div>
      TripDetailsPage.js → Para o administrador ver o detalhe de uma viagem
      específica, bem como os candidatos que aplicaram para ela
      <button
        onClick={() => {
          goToBack(navigate);
        }}
      >
        Voltar
      </button>
      <button>Aprovar</button>
      <button>Reprovar</button>
    </div>
  );
}
