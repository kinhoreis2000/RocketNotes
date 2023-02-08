import { Container, Form, Avatar } from './styles'
import { useState } from 'react'
import { Button } from '../../components/Buttons'
import { Input } from '../../components/Input/'
import {useAuth} from '../../hooks/auth'
import {api} from '../../services/api'
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'
import {Link} from 'react-router-dom'

export function Profile() {
  const {user, updateProfile} = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const avatarUrl = user.avatar? `${api.defaults.baseURL}files/${user.avatar}` : avatarPlaceHolder
  console.log(avatarUrl)
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const user = {
      name, 
      email, 
      password: newPassword,
      old_password: passwordOld,
    }

    await updateProfile({user, avatarFile})
  }

  async function hangleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

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
          src = {avatar}
          alt='Foto do usuário'/>
          <label htmlFor='avatar'>
            <FiCamera/>

            <input 
            id='avatar'
            type='file'
            onChange = {hangleChangeAvatar}/>
          </label>

          
        </Avatar>
      <Input
      placeholder='nome'
      type='text'
      icon={FiUser}
      value = {name}
      onChange = {e => setName(e.target.value)}
      />
      <Input
      placeholder='e-mail'
      type='text'
      icon={FiMail}
      value = {email}
      onChange = {e => setEmail(e.target.value)}/>
      <Input
      placeholder='senha atual'
      type='password'
      icon={FiLock}
      onChange = {e => setPasswordOld(e.target.value)}/>
      <Input
      placeholder='Nova senha '
      type='password'
      icon={FiLock}
      onChange = {e => setNewPassword(e.target.value)}/>
      <Button title='Salvar' onClick = {handleUpdate} ></Button>
      </Form>

    </Container>
  )
}