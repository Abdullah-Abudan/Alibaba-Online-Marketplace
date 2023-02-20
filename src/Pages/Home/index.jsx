import React from "react";
import Container from "../../Component/Container";
import Header from "../../Component/Header";
import Background from "../../Component/BackgroundLogSign";

import Section1H from "./Sections/section-1-Home";
import Section2H from "./Sections/section-2-Home";
import Section3H from "./Sections/section-3-Home";
import Section4H from "./Sections/section-4-Home";
import Section5H from "./Sections/section-5-Home";
import Section6H from "./Sections/section-6-Home";
import Section7H from "./Sections/section-7-Home";
import Section8H from "./Sections/section-8-Home";
import Footer from "../../Component/Footer/Footer";
function Home() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Background secondary>
        <Section1H />
        <Section2H />
        <Section3H />
        <Section4H />
        <Section5H />
        <Section6H />
        <Section7H />
        <Section8H />
      </Background>
      <Footer />
    </>
  );
}
export default Home;
