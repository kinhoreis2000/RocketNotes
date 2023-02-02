import {Container} from './styles'

export function Tags({title,isActive = false, ...rest}) {
  return(
  <Container>
    {title}
  </Container>
  )
}