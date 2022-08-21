import styled from "styled-components";

export const GeneralStyle = styled.div `
background-image:url(https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80);
background-repeat: no-repeat;
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
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif

`
export const GeneralCards =styled.div `
 background-color: #15172b;
  border-radius: 20px;
  box-sizing: border-box;
  height: 500px;
  padding: 20px;
  width: 320px;
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
         
