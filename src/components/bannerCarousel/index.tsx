import React from "react";

import { Container, Pages, Page, EmptySpace } from "./styles";

const BannerCarousel: React.FC = () => {
  return (
    <Container>
        <EmptySpace></EmptySpace>
      Banner Show
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
