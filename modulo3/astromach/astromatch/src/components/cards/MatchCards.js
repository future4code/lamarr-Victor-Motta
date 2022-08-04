import { GlobalStyleComponent } from "styled-components"
import styled from "styled-components"
import { Container } from "./Style"
import axios from "axios"
import { useEffect, useState } from "react"
import { getProfile } from "../constantes/Constantes"


export function InfoCards(){
    const [userImg, setUserImg] = useState ()
    // const [userName, setUserName] = useState("")
    // const [userAge, setUserAge] = useState("")
    // const [userDescription, setUserDescription] = useState("")


useEffect(() => {
 axios.get(getProfile)
.then((response) => 
    setUserImg(response.userImg.profile.photo)
    .catch((err) => {
        console.error("errror"+ err);
    })
)})

return(
    console.log (userImg)
//     <Container>
//   ({userImg.profile.photo})
//     </Container>
)
}
// export function MatchCards () {

//     return(
//         <Container>
//        {userImg.photo}
       
        {/* <img src="https://s1.r29static.com/bin/entry/7e8/340x408,85/2138124/image.webp" alt="user photo"></img>
        <h2>Nome</h2>
        <h2>idade</h2>
        <p>Descricao</p>
        <button>Yes</button>
        <button>No</button> */}
    //     </Container>
    // )
      
    