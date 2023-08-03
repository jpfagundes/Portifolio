import { Container, Content } from './styles';
import ProfilePic from "./assets/images/profile-pic.png";
import Hamburger from "hamburger-react";
import { useState } from 'react';



export function App() {

  const [isOpen, setOpen ] = useState(false)

  return (
    <Container>

      <header>
        <Hamburger 
        class="menu"
        toggled={isOpen} 
        toggle={setOpen}
        color="#FFF6E0"
        size ={25}
        rounded
        />

      </header>

      <Content>


        <div className="img-content">
          <img src={ ProfilePic } alt="" />
        </div>


        <div className="text-content">
          <h1>Olá! Eu sou João Pedro, Desenvolvedor Fullstack.</h1>

          <p>Formado em Análise e Desenvolvimento de Sistemas, atuo no
            mercado como um desenvolvedor full stack júnior altamente
            qualificado na criação de aplicativos da web de alta
            qualidade. Especializado em ReactJS, NodeJS,
            desenvolvimento front-end e back-end. Minha maior paixão
            é aprender novas tecnologias e solucionar problemas
            complexos. Meu principal objetivo é sempre fornecer
            soluções inovadoras e eficazes que atendam às
            necessidades dos clientes e dos usuários finais.
          </p>

          <button>
            Baixar Currículo
          </button>

        </div>
        </Content>

    </Container>
  )
}
