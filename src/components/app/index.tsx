import React from "react";
import BannerCarousel from "../bannerCarousel";
import Catalogue from "../catalogue";
import Header from "../header";
import MangaProvider, { MangaContext } from "../../context/MangaContext";

import {
  Container,
  FloatCard,
  LeftLine,
  RightLine,
  Card,
  CardText,
} from "./styles";
import { getTop } from "../../services/MangaTop";
import { MangaContextType } from "../../@types/manga";

const App: React.FC = () => {

  return (
    <MangaProvider>
      <div className="App">
        <Container>
          <Header />

          <BannerCarousel />

          <FloatCard>
            <LeftLine></LeftLine>
            <Card>
              <CardText>Populares da Semana</CardText>
            </Card>
            <RightLine></RightLine>
          </FloatCard>

          <Catalogue />

          {/* <Footer />         */}
        </Container>
      </div>
    </MangaProvider>
  );
};

export default App;
