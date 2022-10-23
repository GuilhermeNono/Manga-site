import React from 'react';
import { getTop } from '../../services/MangaTop';
import SearchBar from '../searchBar';

import { Container, Logo, Profile, Name, ProfilePicture, EmptySpace } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
        <Logo>Logo</Logo>

        <EmptySpace></EmptySpace>

        <SearchBar />

        <Profile>
            <Name>Entrar</Name>
            <ProfilePicture></ProfilePicture>
        </Profile>
    </Container>
  );
}

export default Header;