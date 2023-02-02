import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header/'
import { Input } from '../../components/Input/'
import { Note } from '../../components/Note/'
import { Section } from '../../components/Section/'
import {FiPlus, FiSearch} from 'react-icons/fi'

import {Link} from 'react-router-dom'

export function Home() {
  return(
    <Container>
      <Brand>
        <h1>Rocket Notes</h1>
      </Brand>
      
      <Header/>
      
      <Menu>
      
          <li><ButtonText title='Todos' isActive></ButtonText></li>
          <li><ButtonText title='React'></ButtonText></li>
          <li><ButtonText title='Node'></ButtonText></li>
      </Menu>

      <Search>
        <Input placeholder='pesquisar pelo titulo' icon={FiSearch}/>

      </Search>

      <Content>
        <Section title ='Minhas Notas'>
          <Note data={
            {title:'react', 
            tags: [
              {id:'1',name: 'react'},
              {id:'2',name: 'node'}
              ]
            }
          }></Note>
          <Note data={
            {title:'react', 
            tags: [
              {id:'1',name: 'react'},
              {id:'2',name: 'node'}
              ]
            }
          }></Note>
          <Note data={
            {title:'react', 
            tags: [
              {id:'1',name: 'react'},
              {id:'2',name: 'node'}
              ]
            }
          }></Note>
          <Note data={
            {title:'react', 
            tags: [
              {id:'1',name: 'react'},
              {id:'2',name: 'node'}
              ]
            }
          }></Note>
          <Note data={
            {title:'react', 
            tags: [
              {id:'1',name: 'react'},
              {id:'2',name: 'node'}
              ]
            }
          }></Note>
        </Section>
      </Content>

      <NewNote to='/newnote'>
      <FiPlus/>
      Criar nota
      </NewNote>

    </Container>
  )
}