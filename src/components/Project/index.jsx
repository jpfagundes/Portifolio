import { Container } from "./styles";

export function Project({title, icon, img}){
  return (
    <Container>
      <span>{title}</span>
      <div className="icons">{icon ? icon : null}</div>
      {img ? img : null}
      <div className="bar"></div>

    </Container>
  );
}