import styled from "styled-components";

export const Container = styled.div`

width: 100%;
height: 100vh;
display: grid;

grid-auto-rows: 3.125rem auto 11.375rem;
grid-template-areas:
    'header'
    'content'
    'footer';

header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: none;
    border: none;
  }

}

h2 {
    color: #fff;
  }


`;

export const Content = styled.div`

width: 90%;
margin-left: auto;
margin-right: auto;



#about {
  display: flex;
  flex-direction: column;

  .container {


  }

  .banner {
    display: flex;
    justify-content: space-between;
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
      border-radius: 50% 50% 19% 81% / 58% 45% 55% 42%;
      background: radial-gradient(circle, rgba(7,0,119,1) 15%, rgba(0,0,255,1) 35%, rgba(0,237,255,1) 55%);
      cursor: pointer;
      animation: scaleDelayed 1s 6.5s;
      max-width: 100%;
      transition: 0.2s;

  }
  }


  .buttons {

    display: flex;
    gap: 2rem;
    margin-top: 2rem;

    a {
      text-align: center;
    }


    :nth-child(1) {
      color: #fff;
      background: rgb(0,105,145);
      background: linear-gradient(90deg, rgba(0,105,145,1) 0%, rgba(2,55,197,1) 32%);
      padding: 0.625rem 1.25rem;
      border-radius: 1.25rem;    

    }

    :nth-child(2) {
      color: #fff;
      background: none;
      border: 1px solid #14FFEC;
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

  p {
    line-height: 180%;
  }

  h2 {
    color: #fff;
  }
}


#skills {

  h2 {
    text-align: center;
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}


`;