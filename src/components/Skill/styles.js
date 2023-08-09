import { styled } from "styled-components";

export const Container = styled.div`
  background: #212121;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-top-left-radius: 2.5rem;


  span {
    margin-top: 5px;
  }

  .icon {
    margin: 5px 0;

    svg {
      width: 50px;
      height: 50px;
    }
  }

  .bar {
    width: 100%;
    border: 1px solid;
    background-image: linear-gradient(90deg, #6cd636 0%, #131f17 92.32%);
  }

`;