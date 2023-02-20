import React from "react";
import styled from "styled-components";
import { Img } from "../../../../Component/Header";
import { LinkE } from "../Features";

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HeartTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #1c1c1c;
`;
const Heart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: rgb(255, 255, 255);
  border: 1px solid #e3e8ee;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border-radius: 6px;
  user-select: none;
  &:active {
    background: #afd0ff;
  }
`;

const Price = styled.p`
  display: flex;
  gap: 6px;
`;
const PriceAfterDiscount = styled.p`
  font-size: 18px;
  color: #4c4c4c;
`;
const PriceBeforeDiscount = styled.span`
  font-size: 16px;
  color: #9b9b9b;
  text-decoration: line-through;
`;
const Navigation = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  list-style: none;
`;
const NavigationItem = styled.li`
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  cursor: pointer;
  padding: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #ff9017;
  &:hover {
    font-weight: bold;
  }
`;
const ProductInfo = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #505050;
`;

const Content = (props) => (
  <ProductContent>
    <HeartTitle>
      <Title>{props.title}</Title>
      <Heart>
        <Img src={props.HeartSrc} />
      </Heart>
    </HeartTitle>
    <Price>
      <PriceAfterDiscount>{props.PriceAfterDiscount}</PriceAfterDiscount>
      <PriceBeforeDiscount>{props.priceBeforeDiscount}</PriceBeforeDiscount>
    </Price>

    <Navigation>
      <NavigationItem>
        <Img src={props.star1} />
        <Img src={props.star2} />
        <Img src={props.star3} />
        <Img src={props.star4} />
        <Img width="20px" height="18px" src={props.star5} />
        <Span>{props.rate} </Span>
      </NavigationItem>
      <NavigationItem>
        <Img src={props.dot} />
      </NavigationItem>
      <NavigationItem style={{ color: "#8B96A5" }}>
        {props.order}
      </NavigationItem>
      <NavigationItem>
        <Img src={props.dot} />
      </NavigationItem>
      <NavigationItem style={{ color: "rgb(0, 181, 23)" }}>
        {props.free}
      </NavigationItem>
      <Navigation />
    </Navigation>
    <ProductInfo>{props.info}</ProductInfo>
    <LinkE>{props.link}</LinkE>
  </ProductContent>
);

export default Content;
