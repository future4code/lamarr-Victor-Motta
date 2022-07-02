import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'vitinho'}
            fotoUsuario={'https://media-exp2.licdn.com/dms/image/C4D03AQFFZSK7Q-8pTg/profile-displayphoto-shrink_200_200/0/1545754980434?e=1661990400&v=beta&t=pIB-Z6j22gRDCjSybHMgHKOlntDe23P5HBKPqvoWyx8'}
            fotoPost={'https://images.unsplash.com/photo-1559244673-9cee88d551f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=855&q=80'}
          />
           <Post
            nomeUsuario={'leozinho'}
            fotoUsuario={'https://media-exp2.licdn.com/dms/image/C5103AQG1P5ma_6sqyg/profile-displayphoto-shrink_200_200/0/1517275479726?e=1661990400&v=beta&t=RCtF2soLzoO2E7zqRNh4hIe3NDrFMRAl2PG1vyae9q4'}
            fotoPost={'https://images.unsplash.com/photo-1564994069859-0d8d5a9365bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'}
          />
           <Post
            nomeUsuario={'guizinho'}
            fotoUsuario={'https://media-exp2.licdn.com/dms/image/D4E03AQG1BARsxH3h9Q/profile-displayphoto-shrink_200_200/0/1648414713849?e=1661990400&v=beta&t=H2y-Jwau1pW8vf7OpjnRty2Vwatg5bPD-amV8nnOybY'}
            fotoPost={'https://images.unsplash.com/photo-1588844467563-df6c1fa2a2bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'}
          />
  </div>
)

}


export default App;
