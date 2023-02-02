import { Container, Form } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Buttons'
import { NoteItem } from '../../components/NoteItem'
import { Header } from '../../components/Header/'
import { Input } from '../../components/Input/'
import { TextArea } from '../../components/TextArea/'
import { Section } from '../../components/Section/'
import {Link} from 'react-router-dom'


export function NewNote() {
  return(
    <Container>
      <Header></Header>

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to='/'>Voltar</Link>
          </header>

          <Input placeholder='Título'></Input>
          <TextArea placeholder='Observações'></TextArea>
          <Section title='Links Úteis'>
          <NoteItem value='https://rocketseat.com.br' ></NoteItem>
          <NoteItem placeholder='Novo Link' isNew></NoteItem>
          </Section>
      <Section title='marcadores'>
        <div class='tags'>
          <NoteItem value='react' ></NoteItem>
          <NoteItem placeholder='Nova tag' isNew></NoteItem>
          </div>
      </Section>
        <Button title='Salvar'></Button>
        </Form>
      </main>

    </Container>
  )
}