import { Container } from "./styles";

export function Skill({title, icon}){
  return ( 
    <Container>
      <span>{title}</span>
      {icon ? icon : null}
    </Container>
  )
}