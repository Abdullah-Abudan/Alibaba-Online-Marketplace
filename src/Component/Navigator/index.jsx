import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import vectorRight from "../../Images/vectorR.svg";
import Container from "../Container";
import { Img } from "../Header";
const NavigatorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const NavigatorItem = styled(Link)`
  font-size: 14px;
  color: rgb(139, 150, 165);
  text-decoration: none;
  @media (max-width: 992px) {
    &:nth-child(3){
      display:none
    }
  }
`;

const NavigatorSeparator = styled.span`
  margin: 0 10px;
  @media (max-width: 992px) {
    &:nth-child(2){
      display:none
    }
  }
`;
const Navigator = () => (
  <Container>
    <NavigatorContainer>
      <NavigatorItem to="/Home">Home</NavigatorItem>
      <NavigatorSeparator>
        <Img src={vectorRight} />
      </NavigatorSeparator>

      <NavigatorItem to="">Clothings</NavigatorItem>
      <NavigatorSeparator>
        <Img src={vectorRight} />
      </NavigatorSeparator>

      <NavigatorItem to="">Men's wear</NavigatorItem>
      <NavigatorSeparator>
        <Img src={vectorRight} />
      </NavigatorSeparator>
      <NavigatorItem to="">Summer clothing</NavigatorItem>
    </NavigatorContainer>
  </Container>
);

export default Navigator;
