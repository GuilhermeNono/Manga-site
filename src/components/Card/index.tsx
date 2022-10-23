import React from 'react';

import { Container, Capa} from './styles';


interface Props{
  image:string;
}

const Card: React.FC<Props> = ({image}) => {

  return (
    <Container>
          <Capa src={image}></Capa>
    </Container>
  );
}

export default Card;