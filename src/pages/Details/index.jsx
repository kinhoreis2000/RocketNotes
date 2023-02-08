import {Container} from './styles.js'
import {Content} from './styles.js'
import {Button} from '../../components/Buttons'
import {ButtonText} from '../../components/ButtonText'
import {Header} from '../../components/Header/'
import {Section} from '../../components/Section/'
import {Tags} from '../../components/Tags/'
import {Links} from './styles.js'
import {useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {api} from '../../services/api'

export function Details() {
  const [data, setData] = useState(null);
  const params = useParams() 
  const navigate = useNavigate()

  function handleBack() {
    navigate('/')
  }

  function handleNoteDelete() {
    const confirm = window.confirm('Deseja realmente apagar a nota? ')
    if(confirm){
    
      try{

      async function fetchNote() {
        
        const response = await api.get(`/notes/${params.id}`)
        const note_id = response.data.id 

        api.delete(`/notes/${note_id}`)
        alert('nota deletada com sucesso')
        navigate('/')


      }

        fetchNote()
      }

      catch{
      alert(`Não foi possível excluir a nota`) 
      }
    }
  }
  useEffect(()=>{
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNote()

  }, [])
  return(
    <Container>
      <Header/>  
      {
        data &&
      <main>
        <Content>
          <div className = 'head'>
        <h1>{data.title}</h1>
        <ButtonText onClick = { handleNoteDelete} title = 'Excluir a nota'/>
        </div>
        <p>{data.description}</p>

    {  data.links && 
       <Section title='Links úteis'>
          
          <Links>
      { data.links.map(link => (

        <li key = {String(link.id)}> 
          <a 
          href={link.url}
          target = '_blank'>{link.url}</a>
          </li>
        
      ))    
          }       
          </Links>
        


        </Section>}
      { data.tags &&
        <Section title='Marcadores'>
        {     data.tags.map(tag => (
          <Tags
          key = {tag.id} 
          title = {tag.name}>

          </Tags>

        ))
        }
          
        </Section>}

        <Button onClick ={handleBack} title ='Voltar'/>

      </Content>
      </main>
      }
    </Container>
  )
} 