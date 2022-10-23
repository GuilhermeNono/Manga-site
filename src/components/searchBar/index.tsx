import React, { useEffect, useState } from 'react';
import { findAnime } from '../../services/MangaSearch';

import { Container, SearchField, Lupe} from './styles';

const SearchBar: React.FC = () => {

  const [value, setValue] = useState("")

  const handleSearchManga = async (e:any) => {
    if(e.key === "Enter"){
      
      const response = await fetch("http://localhost:4000/getTop?page=1", {headers:{'Content-Type': 'application/json'} , method: 'POST'})

      console.log(await response.json())
    }
  }

  console.log(value)

  return (
    <Container>
        <Lupe src='img/search-icon.svg'></Lupe>
        <SearchField type="text" onChange={(e) => setValue(e.target.value)} onKeyDown={e => handleSearchManga(e)} value={value}></SearchField>
    </Container>
  );
}

export default SearchBar;