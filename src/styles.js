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
  justify-content: flex-end;
}

h1, p {
  text-align: center;
}


`;

export const Content = styled.div`

 .img-content {
  display: flex;
  justify-content: center;

  img {
    width: 10.625rem;
    height: 10.625rem;
  }
}

.text-content{
  display: flex;
  flex-direction: column;

  gap: 20px;

  button {
    color: ${({theme}) => theme.COLORS.WHITE};
    background: #3A98B9;
    border: none;
    border-radius: 5px;
    padding: 14px;
    margin: 0 auto
  }
}


`;