import { Container, Content } from './styles';
import ProfilePic from "./assets/images/prof.png";
import {Spin as Hamburger} from "hamburger-react";
import { Fragment, useState } from 'react';
import { FaNodeJs, FaRegMoon, FaRegSun, FaWordpress } from 'react-icons/fa';
import { DiCss3, DiHtml5, DiReact, DiSqllite } from "react-icons/di";
import { SiJavascript, SiStyledcomponents } from "react-icons/si";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { Skill } from './components/Skill';
import { Project } from './components/Project';
import { IconContact } from './components/IconContact';

export function App() {

  const [isOpen, setOpen ] = useState(false)

  const [isDarkMode, setIsDarkMode] = useState(true);

  function toggleMode() {
    setIsDarkMode(prevMode => !prevMode)
  };

  return (
    <Container >

      <header>
        <Hamburger 
        class="menu"
        toggled={isOpen} 
        toggle={setOpen}
        color="#6cd636"
        size ={20}
        rounded
        />

        <h2>Portifólio</h2>

        <button onClick={toggleMode}>
          <FaRegMoon size={20} color="#6cd636" className='moon-button'/>
        </button>

      </header>

      <Content className = {isDarkMode ? 'dark-mode' : 'light-mode'}>
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

            <Skill 
            title="WordPress"
            icon={<FaWordpress />}
            />

          </div>
        </section>

        <section id="projects">
          <h2>Projetos</h2>
          <Project 
          title="Food Explorer"
          icon={<Fragment>
            <DiHtml5 />
            <DiCss3 />
            <SiJavascript/>
            <DiReact/>
            <SiStyledcomponents/>
            <FaNodeJs/>
            <DiSqllite />
          </Fragment>}
          />

          <Project 
          title="Find A Friend"
          icon={<Fragment>
            <DiHtml5 />
            <DiCss3 />
            <SiJavascript/>
          </Fragment>}
          />

          <Project 
          title="Weather App"
          icon={<Fragment>
            <DiHtml5 />
            <DiCss3 />
            <SiJavascript/>
          </Fragment>}
          />

          <Project 
          title="Focus Timer"
          icon={<Fragment>
            <DiHtml5 />
            <DiCss3 />
            <SiJavascript/>
          </Fragment>}
          />
        </section>

        <section id="contact">
          <h2>Contato</h2>
          <div className="contacts">
            <IconContact 
            icon={<AiOutlineMail />}
            title="E-mail"
            info="jpsafagundes@hotmail.com"
            />

            <IconContact 
            icon={<AiOutlinePhone />}
            title="Telefone"
            info="(88) 9.9417-3552"
            />

            <IconContact 
            icon={<AiOutlineLinkedin />}
            title="LinkedIn"
            info="@jpfagundes"
            />

            <IconContact 
            icon={<AiOutlineGithub />}
            title="Github"
            info="@jpfagundes"
            />
          </div>
        </section>


        </Content>
    </Container>
  )
}
