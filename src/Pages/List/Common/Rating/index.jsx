import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Navigation } from "../../../Home/Sections/section-1-Home";
import Title from "../Title";

// img
import vectorTop from "../../../../Images/VectorTop.svg";
import vectorBottom from "../../../../Images/VectorBottom.svg";
import InputCheckbox from "../../../../Component/InputCheckbox";
import star from "../../../../Images/star.svg";
import { Img } from "../../../../Component/Header";

const NavigationItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    font-weight: bold;
  }
  display: ${(props) => (props.showTop ? "inline" : "none")};
`;

const Rating = () => {
  const [showTop, setShowTop] = useState(false);

  const handleClick = () => {
    setShowTop(!showTop);
  };
  return (
    <>
      <Title src={showTop ? vectorTop : vectorBottom} onClick={handleClick}>
        Rating
      </Title>
      <Navigation>
        <NavigationItem showTop={showTop}>
          <InputCheckbox id="five" type="checkbox" />
          <Img src={star} />
          <Img src={star} />
          <Img src={star} />
          <Img src={star} />
          <Img src={star} />
        </NavigationItem>
        <NavigationItem showTop={showTop}>
          <InputCheckbox id="four" type="checkbox" />
          <Img src={star} />
          <Img src={star} />
          <Img src={star} />
          <Img src={star} />
        </NavigationItem>
        <NavigationItem showTop={showTop}>
          <InputCheckbox id="three" type="checkbox" />
          <Img src={star} />
          <Img src={star} />
          <Img src={star} />
        </NavigationItem>
        <NavigationItem showTop={showTop}>
          <InputCheckbox id="two" type="checkbox" />
          <Img src={star} />
          <Img src={star} />
        </NavigationItem>
      </Navigation>
    </>
  );
};

export default Rating;
