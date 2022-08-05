import { GlobalStyleComponent } from "styled-components"
import styled from "styled-components"
import { Container, ButtonYes, ButtonNo, Buttons, ProfilePhoto } from "./Style"
import { useEffect, useState } from "react"
import { getProfile } from "../constantes/Constantes"
import { Header } from "../header/Header"


export function MatchCards(){
    
    const [profile, setProfile] = useState([])

    useEffect(() =>{  
      getProfile(setProfile)
    },[])

return(
    <Container>
        <Header/>
        <ProfilePhoto src={profile.photo}/>
        <h2>{profile.name}, {profile.age}</h2>
        <p>{profile.bio}</p>
           <Buttons>
        <ButtonYes>Yes</ButtonYes>
        <ButtonNo>No</ButtonNo>
        </Buttons>
    </Container>

)
}