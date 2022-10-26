import React from "react";
import BannerCarousel from "../../components/Home/bannerCarousel";
import Catalogue from "../../components/Home/catalogue";
import Header from "../../components/layout/Header/header";

import {
  Container,
  FloatCard,
  LeftLine,
  RightLine,
  Card,
  CardText,
} from "./styles";

const Home: React.FC = () => {
  return (
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
  );
}

export default Home;