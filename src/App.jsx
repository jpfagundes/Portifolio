import { Container } from './styles';
import ProfilePic from "./assets/images/profile-pic.jpeg"


export function App() {

  return (
    <Container>
      <img src={ ProfilePic } alt="" />
    </Container>
  )
}
