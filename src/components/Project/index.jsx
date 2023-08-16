import { Container } from "./styles";

export function Project({title, icon, background}){
  return (
    <Container>
      <div className="box" style={{backgroundImage: `url(${background})`}}>
        
        <div className="details">
          <span>{title}</span>
          <div className="icons">{icon ? icon : null}</div>
          <div className="bar"></div>
        </div>
      </div>

    </Container>
  );
}