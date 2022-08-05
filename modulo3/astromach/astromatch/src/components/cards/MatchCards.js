import { GlobalStyleComponent } from "styled-components"
import styled from "styled-components"
import { Container, ButtonYes, ButtonNo, Buttons, ProfilePhoto } from "./Style"
import { useEffect, useState } from "react"
import { getProfile } from "../constantes/Constantes"
import { Header } from "../header/Header"
import axios from "axios"


export function MatchCards(){
    
    const [profile, setProfile] = useState([])

    useEffect(() =>{  
      getProfile(setProfile)
    },[]);

    async function CreateMatch(id) {
        try {
          const response = await axios.post(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme/choose-person",
            {
              id: id,
              choice: true,
            },
            {}
          );
          getProfile(setProfile);
        } catch (error) {
          console.log(error);
        }
      }






return(
    <Container>
        <Header/>
        <ProfilePhoto src={profile.photo}/>
        <h2>{profile.name}, {profile.age}</h2>
        <p>{profile.bio}</p>
           <Buttons>
        <ButtonNo  onClick={() => getProfile(setProfile)}>No</ButtonNo>
        <ButtonYes onClick={() => CreateMatch(profile.id)}>Yes</ButtonYes>
        </Buttons>
    </Container>

)
}