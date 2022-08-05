import styled from "styled-components"

export const Container= styled.div`
border: 1px solid grey;
display: block;
border-radius: 2%;
align-items: center;
text-align: center;
width:30vw ;

`
export const ProfilePhoto= styled.img`
width: 60%;
border-radius: 8%;
`
export const Buttons = styled.section`
display: flex;
justify-content: space-around;
`

export const ButtonYes= styled.button`
height: 30px;
width: 70px;
margin: 10px;

background-color: green;
    :hover{
        background-color: lightgreen;
    }

`
export const ButtonNo= styled.button`
height: 30px;
width: 70px;
margin: 10px;
background-color:red;
:hover{
        background-color: pink;}
`
