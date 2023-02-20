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
import dot from "../../../../Images/Dot.svg";

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  padding: 20px;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const Content1 = (props) => (
  <>
    <ProductContainer>
      <ImgProduct src={ElectricKattle} alt="ElectricKattle" mAuto="auto" />
      <ContentProduct
        title="Canon Cmera EOS 2000, Black 10x zoom"
        HeartSrc={heart}
        PriceAfterDiscount="$998.00"
        priceBeforeDiscount="$1128.00"
        star1={star}
        star2={star}
        star3={star}
        star4={star}
        star5={starEmpty}
        rate="7.5"
        order="154 orders"
        free="Free Shipping"
        dot={dot}
        info="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        link="View details"
      />
    </ProductContainer>

    <ProductContainer>
      <ImgProduct src={canonCamera} alt="canonCamera" mAuto="auto" />
      <ContentProduct
        title="Canon Cmera EOS 2000, Black 10x zoom"
        HeartSrc={heart}
        PriceAfterDiscount="$998.00"
        priceBeforeDiscount="$1128.00"
        star1={star}
        star2={star}
        star3={star}
        star4={star}
        star5={starEmpty}
        rate="7.5"
        order="154 orders"
        free="Free Shipping"
        dot={dot}
        info="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        link="View details"
      />
    </ProductContainer>

    <ProductContainer>
      <ImgProduct src={smartphone} alt="smartphone" mAuto="auto" />
      <ContentProduct
        title="Canon Cmera EOS 2000, Black 10x zoom"
        HeartSrc={heart}
        PriceAfterDiscount="$998.00"
        priceBeforeDiscount="$1128.00"
        star1={star}
        star2={star}
        star3={star}
        star4={star}
        star5={starEmpty}
        rate="7.5"
        order="154 orders"
        free="Free Shipping"
        dot={dot}
        info="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        link="View details"
      />
    </ProductContainer>

    <ProductContainer>
      <ImgProduct src={laptop} alt="laptop" mAuto="auto" />
      <ContentProduct
        title="Canon Cmera EOS 2000, Black 10x zoom"
        HeartSrc={heart}
        PriceAfterDiscount="$998.00"
        priceBeforeDiscount="$1128.00"
        star1={star}
        star2={star}
        star3={star}
        star4={star}
        star5={starEmpty}
        rate="7.5"
        order="154 orders"
        free="Free Shipping"
        dot={dot}
        info="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        link="View details"
      />
    </ProductContainer>

    <ProductContainer>
      <ImgProduct src={smartwatch} alt="smartwatch" mAuto="auto" />
      <ContentProduct
        title="Canon Cmera EOS 2000, Black 10x zoom"
        HeartSrc={heart}
        PriceAfterDiscount="$998.00"
        priceBeforeDiscount="$1128.00"
        star1={star}
        star2={star}
        star3={star}
        star4={star}
        star5={starEmpty}
        rate="7.5"
        order="154 orders"
        free="Free Shipping"
        dot={dot}
        info="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        link="View details"
      />
    </ProductContainer>

    <ProductContainer>
      <ImgProduct src={headphoneWhite} alt="headphoneWhite" mAuto="auto" />
      <ContentProduct
        title="Canon Cmera EOS 2000, Black 10x zoom"
        HeartSrc={heart}
        PriceAfterDiscount="$998.00"
        priceBeforeDiscount="$1128.00"
        star1={star}
        star2={star}
        star3={star}
        star4={star}
        star5={starEmpty}
        rate="7.5"
        order="154 orders"
        free="Free Shipping"
        dot={dot}
        info="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        link="View details"
      />
    </ProductContainer>
    <Pagination />
  </>
);

export default Content1;
