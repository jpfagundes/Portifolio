import { Container, Content } from './styles';
import ProfilePic from "./assets/images/prof.png";
import {Spin as Hamburger} from "hamburger-react";
import { useState } from 'react';
import { FaNodeJs, FaRegSun } from 'react-icons/fa';
import { DiCss3, DiHtml5, DiReact } from "react-icons/di";
import { SiJavascript, SiStyledcomponents } from "react-icons/si";
import { Skill } from './components/Skill';

export function App() {

  const [isOpen, setOpen ] = useState(false)

  return (
    <Container>

      <header>
        <Hamburger 
        class="menu"
        toggled={isOpen} 
        toggle={setOpen}
        color="#14FFEC"
        size ={25}
        rounded
        />

        <h2>Portifólio</h2>

        <button>
          <FaRegSun size={25} color="#14FFEC"/>
        </button>

      </header>

      <Content>
        <section id="about">
          <div className="banner">
            <div className="intro">
              <div className="title">
                <h1>Olá, eu sou o</h1>
                <span>João Pedro :)</span>
                <p>Desenvolvedor FullStack</p>
              </div>

            <div className="buttons">
              <a href="assets/cv/cv-joao-pedro.pdf">Download CV</a>
              <a href="mailto:jpsafagundes@hotmail.com">Entrar em contato</a>
            </div>

            </div>
            <div className="profile">
              <img src={ ProfilePic } alt="" />
            </div>


          </div>

          <div className="about-me">

          <h2>Sobre mim</h2>
          
          <p>
            Formado em Análise e Desenvolvimento de Sistemas, atuo no
            mercado como um desenvolvedor full stack júnior altamente
            qualificado na criação de aplicativos da web de alta
            qualidade. Especializado em ReactJS, NodeJS,
            desenvolvimento front-end e back-end. Minha maior paixão
            é aprender novas tecnologias e solucionar problemas
            complexos. Meu principal objetivo é sempre fornecer
            soluções inovadoras e eficazes que atendam às
            necessidades dos clientes e dos usuários finais.

          </p>

          </div>       

        </section>

        <section id="skills">
          <h2>Habilidades</h2>

          <div className="cards">
            <Skill
            title="HTML5"
            icon={<DiHtml5/>}         
            />

            <Skill
            title="CSS3"
            icon={<DiCss3/>}
            />

            <Skill
            title="JavaScript"
            icon={<SiJavascript/>}
            />

            <Skill 
            title="React"
            icon={<DiReact/>}
            />

            <Skill 
            title="Styled Components"
            icon={<SiStyledcomponents />}
            />

            <Skill 
            title="NodeJS"
            icon={<FaNodeJs/>}
            />

            

          </div>
        </section>


        </Content>

    </Container>
  )
}
