import { styled } from "styled-components";

export const Container = styled.div`

.box {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  display: flex;
  flex-direction: column;
  text-align: center;
  
  .details span {
    color: #fff
  }
  
  .icons{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 0.2rem;
  }
  
  .bar {
    display: block;
    width: 100%;
    height: 2px;
    background-image: linear-gradient(90deg, #6cd636 0%, #1c482b 92.32%);
    bottom: -1px;
    left: 0;
  }
}
`;