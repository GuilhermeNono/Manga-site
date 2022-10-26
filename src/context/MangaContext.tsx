import * as React from "react";
import { MangaContextType } from "../@types/manga";
import LoadingPage from "../pages/Loading";
import { getTop } from "../services/MangaTop";

interface Props {
  children: React.ReactNode;
}

export const MangaContext = React.createContext<MangaContextType | null>(null);

const MangaProvider: React.FC<Props> = ({ children }) => {
  const mangas = React.useRef<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    getTop()
      .then((response: any) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        mangas.current = data;
      })
      .catch((err) => {
        console.error("error: " + err);
      })
      .finally(() => {
        return setLoading(false);
      });
  }, []);

  return (
    <MangaContext.Provider value={{ mangas }}>
      {loading === true ? (<LoadingPage />) : children}
    </MangaContext.Provider>
  );
};

export default MangaProvider;
