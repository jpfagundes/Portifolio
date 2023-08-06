import { Container } from "./styles";

export function IconContact ({icon, title, info}) {
  return (
    <Container>
      <a>{icon ? icon : null}</a>
      <p>{title}</p>
      <span>{info}</span>
    </Container>
  )
}