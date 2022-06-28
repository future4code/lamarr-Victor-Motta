import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp2.licdn.com/dms/image/C4D03AQFFZSK7Q-8pTg/profile-displayphoto-shrink_800_800/0/1545754980434?e=1661385600&v=beta&t=7mOg6GfJ3mySIZztyWxXw9flvr--tjKNVHIr11J3i8g" 
          nome="Victor Motta" 
          descricao="Oi, eu me chamo Victor! Sou o estudante de Desenvolvimento Full-stack pela Labenu. Gosto muito de pesquisar e café. Sempre quero aprender um botãozinho bonito novo.
          Estou em um processo de transição de carreira."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
        imagem="https://cdn-icons-png.flaticon.com/512/331/331389.png"
        texto="vmotta95@gmail.com"/>
      </div>
      <div className="page-section-container">
        <CardPequeno
        imagem="https://cdn-icons-png.flaticon.com/512/1479/1479518.png"
        texto="Ubatuba-SP/ Brasil"/>
        </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://institutoargonauta.org/2014/wp-content/uploads/2014/08/logo-argonauta.png" 
          nome="Instituto Argonauta" 
          descricao="Meu primeiro trabalho na área ambiental, fui monitor de educação ambiental marinha em uma hidronave de fundo transparente." 
        />
        
        <CardGrande 
          imagem=" https://institutoargonauta.org/2014/wp-content/uploads/2020/06/Deixar-Fundo-Transparente-Logo-Aqua.jpg"
          nome="Aquario de Ubatuba" 
          descricao="Monitor de educação ambiental marinha e costeira, o foco era passar conhecimento e informações para os visitantes, palestras interativas e criação de material didático." 
        />
        <CardGrande 
          imagem="https://media.glassdoor.com/sqll/2489104/funda%C3%A7%C3%A3o-florestal-squarelogo-1552023913818.png" 
          nome="Fundação Florestal" 
          descricao="Monitor ambiental no Parque Estadual da Serra do Mar, núcleo Picinguaba. Dou suporte para as áreas de uso público dentro do núcleo, acompanho escolas,acompanho láudos técnicos, vistorias e auxílio a pesquisadores e etc." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        

      <ImagemButton 
          imagem="https://t.ctcdn.com.br/eXQweorgzzB_ARsw7I9Bvp4O_Qg=/400x400/smart/filters:format(webp)/i489927.jpeg" 
          texto="Instagram" 
        />      
    <ImagemButton 
          imagem="https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg" 
          texto="Github" 
        />        
      
      </div>
    </div>
  );
}

export default App;
