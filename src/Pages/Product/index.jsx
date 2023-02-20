import React from "react";
import Container from "../../Component/Container";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer/FooterLastPages/Footer";
import Background from "../../Component/BackgroundLogSign";
import Navigator from "../../Component/Navigator";
import Section1P from "./Sections/Section-1";
import Section2P from "./Sections/Section-2";
import Section3P from "./Sections/Section-3";
function Product() {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <Background secondary>
        <Navigator />
        <Section1P />
        <Section2P />
        <Section3P />
      </Background>

      <Footer />
    </>
  );
}
export default Product;
