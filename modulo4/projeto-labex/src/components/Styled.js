import styled from "styled-components";

export const GeneralStyle = styled.div `
background-image:url(https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80);
background-repeat: repeat;
background-size: cover;
width:100vw;
height: 100vh;

`
export const GeneralTitle = styled.section `
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  color: whitesmoke;
  font-size: 150px;
  text-shadow: 0 10px 7px black;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,
 
`
export const GeneralH1 = styled.h1`
font-size: 50px;
color: whitesmoke;
  text-shadow: 0 10px 7px black;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,

`

export const XColor = styled.span`
color: #614385;

`
export const GeneralCards =styled.div `
  background-color: #15172b;
  border-radius: 15px;
  height: 40vh;
  padding: 15px;
  margin:10px;
  width: 30vw;
  
 
  p{
    color: white;
    padding:10px;
    height: 30px;
  
  }

`
export const CardContainer = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;


`
export const GeneralInputs = styled.input`
 

`
export const GeneralButton = styled.button`
background-image: linear-gradient(to right, #614385 0%, #516395  51%, #614385  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
            cursor: pointer;
            
          

        :hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
    }
`
         
