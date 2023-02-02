import { Container, Form, Avatar } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Buttons'
import { Header } from '../../components/Header/'
import { Input } from '../../components/Input/'
import { Note } from '../../components/Note/'
import { Section } from '../../components/Section/'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'
import {Link} from 'react-router-dom'

export function Profile() {
  return(
    <Container>
      <header>
        <Link to='/'>
      <FiArrowLeft></FiArrowLeft>
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
          src ='https://github.com/kinhoreis2000.png'
          alt='Foto do usuário'/>
          <label htmlFor='avatar'>
            <FiCamera/>

            <input 
            id='avatar'
            type='file'/>
          </label>

          
        </Avatar>
      <Input
      placeholder='nome'
      type='text'
      icon={FiUser}/>
      <Input
      placeholder='e-mail'
      type='text'
      icon={FiMail}/>
      <Input
      placeholder='senha atual'
      type='password'
      icon={FiLock}/>
      <Input
      placeholder='Nova senha '
      type='password'
      icon={FiLock}/>
      <Button title='Salvar'></Button>
      </Form>

    </Container>
  )
}