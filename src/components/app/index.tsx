import React from 'react';
import BannerCarousel from '../bannerCarousel';
import Catalogue from '../catalogue';
import Header from '../header';

import { Container, FloatCard, LeftLine, RightLine, Card, CardText } from './styles';

const app: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <Header />

        <BannerCarousel />

        <FloatCard>
          <LeftLine></LeftLine>
          <Card>
            <CardText>Lorem Impsum</CardText>
          </Card>
          <RightLine></RightLine>
        </FloatCard>

        <Catalogue />

        {/* <Footer />         */}

      </Container>
    </div>
  );
}

export default app;