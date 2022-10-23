import React from 'react';
import Card from '../Card';

import { MangaContext } from '../../context/MangaContext';
import { MangaContextType } from '../../@types/manga';
import { Container, Previous, Cards, Next } from './styles';
import { getTop } from '../../services/MangaTop';

const Catalogue: React.FC = () => {
  
  const {mangas} = React.useContext(MangaContext) as MangaContextType
  
  return (
    <Container>

        <Previous>P</Previous>

        <Cards>
            {mangas.current.map((test:any, k:any) => {
              return <Card image={test.image} key={k}/>
            })}
        </Cards>

        <Next>N</Next>
    </Container>
  );
}

export default Catalogue;