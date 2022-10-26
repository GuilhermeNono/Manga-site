import React from 'react';

import { Container, Capa} from './styles';


interface Props{
  image:string;
  id:string;
}

const Card: React.FC<Props> = ({image, id}) => {

  return (
    <Container>
          <Capa src={image} id={id}></Capa>
    </Container>
  );
}

export default Card;