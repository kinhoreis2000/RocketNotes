import {Container} from './styles.js';
import {Tags} from '../Tags'

export function Note({data, ...rest}) {
  return (
    <Container {...rest}>

      <h1>{data.title}</h1>
      <p>{data.description}</p>


      {
        data.tags &&
        <footer>
        {
          data.tags.map(tag =><Tags 
            title={tag.name}
            key={tag.id}>

            </Tags>
        )
        }
        </footer>
      }
      
      </Container>
      )

}