import {Container, Profile, Logout} from './styles.js';
import {RiShutDownLine} from 'react-icons/ri';


var nome = 'Luiz Henrique'
export function Header() {
  return (
    <Container>
      <Profile to='/profile'>
          <img 
          src = "https://github.com/kinhoreis2000.png" 
          alt = "Foto do usuário"/>
          
          <div>
            <span>Bem vindo</span>
            <strong>{nome}</strong>
          </div>

      </Profile>
          
        <Logout>
        <RiShutDownLine/>
        </Logout>
    </Container>

  )

}