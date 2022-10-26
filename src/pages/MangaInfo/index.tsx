import React from 'react';
import {useParams} from 'react-router-dom'
import { getManga } from '../../services/Manga';
import LoadingPage from '../Loading';
import { Container } from './styles';

const MangaInfo: React.FC = () => {

    const {id} = useParams();

    const [mangaInfo, setMangaInfo] = React.useState();
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        if(!id) return 
        getManga(id).then((response:any) => {
            if(response.ok){
                return response.json();
            }
            throw response;
        }).then((data) => {
            setMangaInfo(data);
        }).catch((err) => {
            console.error(err)
        }).finally(() => setLoading(false))
    }, [])

    console.log(mangaInfo)

  return (
    <Container>
        {loading && (<LoadingPage />)}
        {JSON.stringify(mangaInfo)}
    </Container>
  );
}

export default MangaInfo;