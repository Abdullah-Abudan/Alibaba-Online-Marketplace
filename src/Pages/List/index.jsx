import React from "react";
import Container from "../../Component/Container";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer/Footer";
import Background from "../../Component/BackgroundLogSign";
import PriceRange from ".//Common/Range";
import { ContainerDiv1, ContainerDiv2, ContainerGrid } from "./Container";
import Navigator from "../../Component/Navigator";
import Category from "./Common/Category";
import Brands from "./Common/Brands";
import Features from "./Common/Features";
import Condition from "./Common/Condition";
import Rating from "./Common/Rating";
import Swap from "./Common/Swap";
function List() {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <Background secondary>
        <Navigator />
        <Container>
          <ContainerGrid>
            <ContainerDiv1>
              <Category />
              <Brands />
              <Features />
              <PriceRange />
              <Condition />
              <Rating />
            </ContainerDiv1>

            <ContainerDiv2>
              <Swap />
            </ContainerDiv2>
          </ContainerGrid>
        </Container>
      </Background>
      <Footer />
    </>
  );
}
export default List;
