import React from "react";
import styled from "styled-components";

import ImgProduct from "../../../../Pages/List/Common/Products/img";
import ContentProduct from "../../../../Pages/List/Common/Products/content";
import Pagination from "../../Common/Paginate";
// img
import ElectricKattle from "../../../../Images/ElectricKattle.svg";
import canonCamera from "../../../../Images/canonCamera.svg";
import smartphone from "../../../../Images/smartphone.svg";
import laptop from "../../../../Images/laptop.svg";
import smartwatch from "../../../../Images/smartwatch.svg";
import headphoneWhite from "../../../../Images/headphoneWhite.svg";
import heart from "../../../../Images/heartList.svg";
import star from "../../../../Images/star.svg";
import starEmpty from "../../../../Images/starEmpty.svg";
import iphoneGenzare from "../../../../Images/iphoneGenzare.svg";
import goproCamera from "../../../../Images/goproCamera.svg";

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  padding: 20px;
`;
const DivGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  @media (max-width: 579px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 579px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Content1 = (props) => (
  <>
    <DivGrid>
      <ProductContainer>
        <ImgProduct src={ElectricKattle} alt="ElectricKattle" mAuto="auto" />
        <ContentProduct
          HeartSrc={heart}
          PriceAfterDiscount="$998.00"
          priceBeforeDiscount="$1128.00"
          star1={star}
          star2={star}
          star3={star}
          star4={star}
          star5={starEmpty}
          rate="7.5"
          info="GoPro HERO6 4K Action Camera - Black"
        />
      </ProductContainer>
      <ProductContainer>
        <ImgProduct src={iphoneGenzare} alt="ElectricKattle" mAuto="auto" />
        <ContentProduct
          HeartSrc={heart}
          PriceAfterDiscount="$998.00"
          priceBeforeDiscount="$1128.00"
          star1={star}
          star2={star}
          star3={star}
          star4={star}
          star5={starEmpty}
          rate="7.5"
          info="GoPro HERO6 4K Action Camera - Black"
        />
      </ProductContainer>

      <ProductContainer>
        <ImgProduct src={canonCamera} alt="ElectricKattle" mAuto="auto" />
        <ContentProduct
          HeartSrc={heart}
          PriceAfterDiscount="$998.00"
          priceBeforeDiscount="$1128.00"
          star1={star}
          star2={star}
          star3={star}
          star4={star}
          star5={starEmpty}
          rate="7.5"
          info="GoPro HERO6 4K Action Camera - Black"
        />
      </ProductContainer>

      <ProductContainer>
        <ImgProduct src={smartphone} alt="ElectricKattle" mAuto="auto" />
        <ContentProduct
          HeartSrc={heart}
          PriceAfterDiscount="$998.00"
          priceBeforeDiscount="$1128.00"
          star1={star}
          star2={star}
          star3={star}
          star4={star}
          star5={starEmpty}
          rate="7.5"
          info="GoPro HERO6 4K Action Camera - Black"
        />
      </ProductContainer>

      <ProductContainer>
        <ImgProduct src={laptop} alt="ElectricKattle" mAuto="auto" />
        <ContentProduct
          HeartSrc={heart}
          PriceAfterDiscount="$998.00"
          priceBeforeDiscount="$1128.00"
          star1={star}
          star2={star}
          star3={star}
          star4={star}
          star5={starEmpty}
          rate="7.5"
          info="GoPro HERO6 4K Action Camera - Black"
        />
      </ProductContainer>

      <ProductContainer>
        <ImgProduct src={iphoneGenzare} alt="ElectricKattle" mAuto="auto" />
        <ContentProduct
          HeartSrc={heart}
          PriceAfterDiscount="$998.00"
          priceBeforeDiscount="$1128.00"
          star1={star}
          star2={star}
          star3={star}
          star4={star}
          star5={starEmpty}
          rate="7.5"
          info="GoPro HERO6 4K Action Camera - Black"
        />
      </ProductContainer>

      <ProductContainer>
        <ImgProduct src={smartwatch} alt="ElectricKattle" mAuto="auto" />
        <ContentProduct
          HeartSrc={heart}
          PriceAfterDiscount="$998.00"
          priceBeforeDiscount="$1128.00"
          star1={star}
          star2={star}
          star3={star}
          star4={star}
          star5={starEmpty}
          rate="7.5"
          info="GoPro HERO6 4K Action Camera - Black"
        />
      </ProductContainer>

      <ProductContainer>
        <ImgProduct src={headphoneWhite} alt="ElectricKattle" mAuto="auto" />
        <ContentProduct
          HeartSrc={heart}
          PriceAfterDiscount="$998.00"
          priceBeforeDiscount="$1128.00"
          star1={star}
          star2={star}
          star3={star}
          star4={star}
          star5={starEmpty}
          rate="7.5"
          info="GoPro HERO6 4K Action Camera - Black"
        />
      </ProductContainer>
      <ProductContainer>
        <ImgProduct src={goproCamera} alt="ElectricKattle" mAuto="auto" />
        <ContentProduct
          HeartSrc={heart}
          PriceAfterDiscount="$998.00"
          priceBeforeDiscount="$1128.00"
          star1={star}
          star2={star}
          star3={star}
          star4={star}
          star5={starEmpty}
          rate="7.5"
          info="GoPro HERO6 4K Action Camera - Black"
        />
      </ProductContainer>
    </DivGrid>
    <Pagination />
  </>
);

export default Content1;
