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
max-width: 350px;
max-height:250px;
border-radius: 8%;
`
export const Buttons = styled.section`
display: flex;
justify-content: space-around;
`

export const ButtonYes= styled.button`
height: 40px;
width: 90px;
margin: 10px;
border: none;
border-radius:8px;

background-color: #3f5efb;
    :hover{
        background-color: lightgreen;
    }

`
export const ButtonNo= styled.button`
height: 40px;
width: 90px;
margin: 10px;
background-color:#fc466b;
border: none;
border-radius:8px;
:hover{
        background-color: pink;}
`
