import { styled } from "styled-components";

export const Container = styled.div`
  background: #212121;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 2.5rem;


  svg {
    width: 50px;
    height: 50px;
  }

  .bar {
    width: 100%;
    border: 1px solid;
    background-image: linear-gradient(90deg, #6cd636 0%, #131f17 92.32%);
  }

`;