import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Navigation } from "../../../Home/Sections/section-1-Home";
import Title from "../Title";

// img
import vectorTop from "../../../../Images/VectorTop.svg";
import vectorBottom from "../../../../Images/VectorBottom.svg";
import { Line } from "../Range";
import InputCheckbox from "../../../../Component/InputCheckbox";
import { LinkE } from "../Features";

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

const Brands = () => {
  const [showTop, setShowTop] = useState(false);

  const handleClick = () => {
    setShowTop(!showTop);
  };
  return (
    <>
      <Title src={showTop ? vectorTop : vectorBottom} onClick={handleClick}>
        Brands
      </Title>
      <Navigation>
        <NavigationItem showTop={showTop}>
          <InputCheckbox id="Samsung" type="checkbox" labelText="Samsung" />
        </NavigationItem>
        <NavigationItem showTop={showTop}>
          <InputCheckbox id="Apple" type="checkbox" labelText="Apple" />
        </NavigationItem>
        <NavigationItem showTop={showTop}>
          <InputCheckbox id="Huawei" type="checkbox" labelText="Huawei" />
        </NavigationItem>
        <NavigationItem showTop={showTop}>
          <InputCheckbox id="Pocco" type="checkbox" labelText="Pocco" />
        </NavigationItem>
        <NavigationItem showTop={showTop}>
          <InputCheckbox id="Lenovo" type="checkbox" labelText="Lenovo" />
        </NavigationItem>
        <NavigationItem showTop={showTop}>
          <LinkE>See all</LinkE>
        </NavigationItem>
      </Navigation>
      <Line />
    </>
  );
};

export default Brands;
