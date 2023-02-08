import { Container, Form } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Buttons'
import { NoteItem } from '../../components/NoteItem'
import { Header } from '../../components/Header/'
import { Input } from '../../components/Input/'
import { TextArea } from '../../components/TextArea/'
import { Section } from '../../components/Section/'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {api} from '../../services/api'
import {useNavigate} from 'react-router-dom'

export function NewNote() {
  const [title, setTitle] = useState('')
  const [description, setDescription] =useState('')

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] =useState('')


  const [tags, setTags] = useState([])
  const [newTag, setNewTag] =useState('')

  const navigate = useNavigate()

  
  function handleAddLink( ) {
    setLinks(prevstate=> [...prevstate,newLink]) 
    setNewLink('')
  }

  function handleRemoveLink(deleted) {
  setLinks(prevState => prevState.filter(link => link!==deleted))
  setNewLink('')
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }
  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))

  }
  async function handleNewNote() {
    if(!title) {
      return alert ('Digite o título da nota')
    }
    if(newTag){
      return alert('Você não adiciounou a tag')
    }
    if(newLink) {
      return alert ('Você não adicionou o link')
    }
      await api.post('/notes', {
        title,
        description,
        tags,
        links
      })

      alert('Nota criada com sucesso')
      navigate('/')


  }
  return(
    <Container>
      <Header></Header>

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to='/'>Voltar</Link>
          </header>

          <Input 
          placeholder='Título'
          onChange = {e => setTitle(e.target.value)}></Input>
          <TextArea 
          placeholder='Observações'
          onChange = {e => setDescription(e.target.value)}
          ></TextArea>
          <Section title='Links Úteis'>
            {
              links.map((link,index)=> (<NoteItem 
                key = {String(index)} 
                value = {link}
                onClick = {()=> {handleRemoveLink(link)}}
                ></NoteItem> ))

            }

          <NoteItem 
          placeholder='Novo Link' 
          isNew
          value = {newLink}
          onChange = {e => setNewLink(e.target.value)}
          onClick = {handleAddLink}
          ></NoteItem>




          </Section>
      <Section title='marcadores'>
        <div className='tags'>

          {
            tags.map((tag, index) => (
            <NoteItem
              key = {String(index)}
              value={tag}
              onClick = {() => handleRemoveTag(tag)}
              ></NoteItem>)
              )
            
            
          }
      
          
          <NoteItem 
          placeholder='Nova tag'
           isNew
           onChange = {e => setNewTag(e.target.value)}
           value = {newTag}
           onClick = {handleAddTag}>
           </NoteItem>
        
          </div>
      </Section>
        <Button 
        title='Salvar'
        onClick = {handleNewNote}></Button>
        </Form>
      </main>

    </Container>
  )
}