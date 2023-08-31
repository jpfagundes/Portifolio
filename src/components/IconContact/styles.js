import { styled } from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

a {

  display: flex;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  background: #212121;
  border-radius: 100%;

  svg {
    color: #6cd636;
    height: 32px;
    width: 32px;
  }

}


  p {
    color: #fff;
    margin: 8px
  }

  span {
    color: #fff;
  }
`;