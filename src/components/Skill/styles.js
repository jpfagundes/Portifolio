import { styled } from "styled-components";

export const Container = styled.div`
  width: 120px;
  height: 120px;
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2.5rem 0 0 0;

  span {
    color: yellowgreen;
  }

  svg {
    width: 50px;
    height: 50px;
    fill: "#14FFEC"
  }

`;