import { Container, Content } from './styles';
import ProfilePic from "./assets/images/profile-pic.png";
import {Spin as Hamburger} from "hamburger-react";
import { useState } from 'react';
import { FaRegSun } from 'react-icons/fa';

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
          <div className="container">
            <div className="banner">
              <div className="img-content">
                <img src={ ProfilePic } alt="" />
              </div>

              <div className="intro">
                <div className="title">
                  <h1>Olá, eu sou o</h1>
                  <span>João Pedro <br /> :)</span>
                  <p>Desenvolvedor FullStack</p>
                </div>
              </div>

              <div className="buttons">
                <a href="assets/cv/cv-joao-pedro.pdf">Download CV</a>
                <a href="mailto:jpsafagundes@hotmail.com">Entrar em contato</a>
              </div>

            </div>
          </div>


        </section>
        </Content>

    </Container>
  )
}
