import styled from "styled-components";

export const GeneralStyle = styled.div `
background-image:url(https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80);
width:100vw;
height:100vh;
background-size:cover;
`
export const GeneralStyleCards = styled.div `
background-image:url(https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80);
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
`

export const GeneralTitle = styled.section `
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
   p{
  color: whitesmoke;
  font-size: 150px;
  text-shadow: 0 8px 7px black;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,
  }

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
  height: 30vh;
  width: 30vw;
  padding: 15px;
  margin:10px;
  justify-content:center;
  align-items:center;
  display:flex;
  text-align:center;
  flex-direction: column;
  
  p{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 17px;
    color: white;
    
  }

`
export const CardContainer = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
h2{
  color:white;
}


`
export const GeneralInputs = styled.input`
 font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: whitesmoke;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #614385;
  }

`

export const GeneralButton = styled.button`

background-image: linear-gradient(to right, #614385 0%, #516395  51%, #614385  100%);
            margin: 10px;
            font-size: 17px;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            padding: 12px 25px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
            border: none;
            cursor: pointer;
            
        :hover {
            background-position: right center;
            color: #fff;
            text-decoration: none;
    }
`

         
