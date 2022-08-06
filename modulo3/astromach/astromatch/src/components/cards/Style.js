import styled from "styled-components"

export const Container= styled.div`
border: 1px dashed grey;
display: block;
border-radius: 2%;
align-items: center;
text-align: center;
width:400px ;
background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);

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
color: whitesmoke;
height: 40px;
width: 90px;
margin: 10px;
border: none;
border-radius:8px;
font-family:Georgia, 'Times New Roman', Times, serif;
font-size: 30px;
background-color: #3f5efb;
    :hover{
        background-color: lightblue;
        cursor: pointer;
    }

`
export const ButtonNo= styled.button`
justify-content:center;
align-items:center;
text-align:center;
color: whitesmoke;
height: 40px;
width: 90px;
margin: 10px;
background-color:#fc466b;
border: none;
font-family:Georgia, 'Times New Roman', Times, serif;
font-size: 30px;
border-radius:8px;
:hover{
        background-color: pink;}
        cursor: pointer;
`
