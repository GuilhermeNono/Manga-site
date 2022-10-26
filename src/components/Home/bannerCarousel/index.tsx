import React from "react";

import { Container, Pages, Page, Previous, Carousel, Next} from "./styles";

const BannerCarousel: React.FC = () => {
  return (
    <Container>
        <Previous></Previous>
        <Carousel src="img/onepiece-banner.jpg"></Carousel>
        <Next></Next>

      <Page>
        <Pages isOn></Pages>
        <Pages></Pages>
        <Pages></Pages>
        <Pages></Pages>
      </Page>
    </Container>
  );
};

export default BannerCarousel;
