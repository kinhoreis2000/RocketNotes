import { Container, Form, Background } from './styles'
import { Button } from '../../components/Buttons'
import { Input } from '../../components/Input'
import { FiMail, FiLock,FiUser} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {api} from '../../services/api'



export function SignUp() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
function handleSignUp() {

  if(!name || !email || !password  ){
    return alert('preencha todos os campos')
  }

  api.post('/users', {name, email, password}).then(()=> {alert('usuário cadastrado com sucesso')}).catch((error)=> {if(error.response) {
    alert(error.data.message) }else {
      alert('Não foi possível cadastrar')
    }
  })
}
  return(
    <Container>
     <Background></Background>

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Crie sua conta</h2>

        <Input onChange = {e => setName(e.target.value)} placeholder='nome' type='text' icon={FiUser}/>
        <Input onChange = {e => setEmail(e.target.value)} placeholder='email' type='text' icon={FiMail}/>
        <Input onChange = {e => setPassword(e.target.value)} placeholder='senha' type='password' icon={FiLock}/>

        <Button title ='Cadastrar' onClick={handleSignUp}></Button>

        <Link to='/'>Voltar para o Login</Link>
      </Form>


    </Container>
  )
}