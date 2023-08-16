import styled from "styled-components";

export const Container = styled.div`

width: 100%;
height: 100vh;
display: grid;

grid-auto-rows: 50px auto 11.375rem;
grid-template-areas:
    'header'
    'content'
    'footer';

header {
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: ${({theme}) => theme.COLORS.BACKGROUND_DARK};
  z-index: 1;

  
  h2 {
      color: #fff !important;
    }

    .menu-disabled {
      display: none;
    }



    .menu-active {
      position: fixed;
      background-color: rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(10px);
      width: 100%;
      height: 100vh;
      top: 50px;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 70px;

      h2 {
        font-size: 22px;
      }

      #title-light-mode {
        color: #6cd636 !important;
      }


      nav {
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 2rem;
        flex-direction: column;
        padding-top: 100px;
        gap: 50px;

        a {
        color: #f9f9f9;
        }
      }


    }
}
button {
  background: none;
  border: none;
}

header::after {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-image: linear-gradient(90deg, #6cd636 0%, #1c482b 92.32%);
    bottom: -2px;
    left: 0;


  }



`;

export const Content = styled.div`

grid-area: content;

width: 100%;
padding: 16px;

  p {
    color: #6e6e6e;
  }
    



#about {
  display: flex;
  flex-direction: column;

  .container {


  }

  .banner {
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    padding: 40px;
  }

  .intro {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .title{
    display: flex;
    flex-direction: column;
    text-align: center;

    margin-top: 2rem;
    gap: 15px;

    h1 {
      color: #fff;
      margin: 0;
    }

    h1, span {
      font-size: 32px;
    }


  }
  .profile {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      width: 100%;
    }


    img {
      width: 75%;
      height: 75%;
      border-radius: 50% 50% 19% 81% / 58% 45% 55% 42%;
      background: rgb(108,214,54);
      background: radial-gradient(circle, rgba(108,214,54,1) 0%, rgba(19,31,23,1) 100%);      cursor: pointer;
      animation: scaleDelayed 1s 6.5s;
      max-width: 100%;
      transition: 0.2s;

  }
  }


  .buttons {

    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    a {
      text-align: center;
    }


    :nth-child(1) {
      color: #fff;
      background: rgb(60,168,5);
      background: linear-gradient(90deg, rgba(60,168,5,1) 95%, rgba(31,219,30,1) 100%);
      padding: 0.625rem 1.25rem;
      border-radius: 1.25rem;    

    }

    :nth-child(2) {
      color: #fff;
      background: none;
      border: 1px solid #6cd636;
      border-radius: 1.25rem;
      padding: 0.625rem 1.25rem;
    }
  }
}

.about-me {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-bottom: 50px;

  p {
    line-height: 180%;
  }

  h2 {
    color: #fff;
  }
}


#skills {

  h2, span {
    text-align: center;
  }

  h2 {
    margin-bottom: 32px;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 48px;
    
  }
}

#projects {

  .cards-projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 48px;
    

  }

  margin: 50px 0 50px 0;

  h2 {
    text-align: center;
    margin-bottom: 32px;
  }
}

#contact {
  h2 {
    text-align: center;
    margin-bottom: 32px;

  }

  .contacts {
    display: flex;
    flex-wrap: wrap;
    align-items: center;;
    justify-content: space-evenly;
    gap: 50px;
  }
}


`;