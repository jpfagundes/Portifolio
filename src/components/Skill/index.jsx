import { Container } from "./styles";

export function Skill({title, icon}){
  return ( 
    <Container>
      <span>{title}</span>
      <div className="icon">{icon ? icon : null}</div>
      <div className="bar"></div>
    </Container>
  )
}