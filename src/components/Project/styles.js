import { styled } from "styled-components";

export const Container = styled.div`
    background: #212121;
    display: flex;
    flex-direction: column;

    span {
      text-align: center;
      color: #fff
    }

  .icons{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 0.2rem;
  }
    
  .bar {
    width: 100%;
    border: 1px solid;
    background: #6cd636;
  }
`;