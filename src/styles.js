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


  p {
    color: #828282;
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

  .cards {
    
  }
}

#projects {

  h2 {
    text-align: center;
  }
}

#contact {
  h2 {
    text-align: center;
  }
}


`;