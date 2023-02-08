import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header/'
import { Input } from '../../components/Input/'
import { Note } from '../../components/Note/'
import { Section } from '../../components/Section/'
import { useState, useEffect } from 'react'
import {FiPlus, FiSearch} from 'react-icons/fi'
import {api} from '../../services/api'
import {useNavigate} from 'react-router-dom'

export function Home() {
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [notes, setNotes] = useState([])
  const navigate = useNavigate()
  function handleDetails(id) {
    navigate(`/details/${id}`)
  }
  function handleTagSelected(tagName) {
    if(tagName === 'All') {
    return setTagsSelected([])
    }
    const alreadySelected = tagsSelected.includes(tagName)
    if(alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag!== tagName)
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected(prevState => [...prevState, tagName])

    }
  }
 
  useEffect(()=>{

    async function fetchTags() {
    const response = await api.get('/tags')
    setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(()=>{
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data)


    }
      fetchNotes()

  }, [tagsSelected, search])
  return(
    <Container>
      <Brand>
        <h1>Rocket Notes</h1>
      </Brand>
      
      <Header/>
      
      <Menu>
        <li><ButtonText title='Todos' 
        isActive = {tagsSelected.length === 0 }
        onClick = {() => handleTagSelected('All')}
        ></ButtonText></li>
          {
            tags && tags.map(tag => (
              <li key = {String(tag.id)}>
              <ButtonText 
              title={tag.name} 
              onClick = {() => handleTagSelected(tag.name)}
               isActive = {tagsSelected.includes(tag.name) }

              ></ButtonText></li>
              ))
          }
         
      </Menu>

      <Search>
        <Input 
        placeholder='pesquisar pelo titulo'
         icon={FiSearch}
         onChange ={(e) => setSearch(e.target.value)}/>

      </Search>

      <Content>
        <Section title ='Minhas Notas'>
         {
          notes.map(note => 
    (
          
          <Note 
          key = {String(note.id)}
          data= {note}
          onClick = {()=>handleDetails(note.id)}
          />
            )  )
          }
        </Section>

       
      </Content>

      <NewNote to='/newnote'>
      <FiPlus/>
      Criar nota
      </NewNote>

    </Container>
  )
}