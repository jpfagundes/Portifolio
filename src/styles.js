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


`;

export const Content = styled.div`


.container {
  margin-left: auto;
  margin-right: auto;
  width: 90%;

}

.banner {
  padding: 40px;
}

 .img-content {
  display: flex;
  justify-content: center;

  img {
    width: 10.625rem;
    height: 10.625rem;
  }
}

.title{
  display: flex;
  flex-direction: column;
  text-align: center;

  margin-top: 2rem;
  gap: 15px;

  h1 {
    margin: 0;
  }

  h1, span {
    font-size: 32px;
  }


}

.buttons {

  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-top: 2rem;

  a {
    text-align: center;
  }


  :nth-child(1) {
    color: #000;
    background: ${({theme}) => theme.COLORS.BLUE};
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



`;