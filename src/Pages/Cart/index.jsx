import Container from "../../Component/Container";
import React from "react";
import Background from "../../Component/BackgroundLogSign";
import FooterE1 from "../../Component/Footer/FooterLastPages";
import Header from "../../Component/Header";
import Section1C from "./Section-1";
import Section2C from "./Section-2";
import Footer2 from "../../Component/Footer/Footer-2";

function Cart() {
  return (
    <>
      <Container>
        <Header none />
      </Container>

      <Background secondary>
        <Section1C />
        <Section2C />
      </Background>
      <FooterE1 />
      <Footer2 />
    </>
  );
}
export default Cart;
