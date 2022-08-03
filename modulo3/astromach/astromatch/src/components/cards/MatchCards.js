import { GlobalStyleComponent } from "styled-components"
import styled from "styled-components"
import { Container } from "./Style"

export function MatchCards (props) {
    const {age,name,photo,bio} = props
    return(
        <Container>
        <img src="https://s1.r29static.com/bin/entry/7e8/340x408,85/2138124/image.webp" alt="user photo"></img>
        <h2>Nome</h2>
        <h2>idade</h2>
        <p>Descricao</p>
        <button>Yes</button>
        <button>No</button>
        </Container>
    )
      
}