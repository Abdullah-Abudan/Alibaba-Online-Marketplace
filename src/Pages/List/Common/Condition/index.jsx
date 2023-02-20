import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Navigation } from "../../../Home/Sections/section-1-Home";
import Title from "../Title";

// img
import vectorTop from "../../../../Images/VectorTop.svg";
import vectorBottom from "../../../../Images/VectorBottom.svg";
import { Line } from "../Range";
import InputRadio from "../../../../Component/InputCheckbox";

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

const Condition = () => {
  const [showTop, setShowTop] = useState(false);

  const handleClick = () => {
    setShowTop(!showTop);
  };
  return (
    <>
      <Title src={showTop ? vectorTop : vectorBottom} onClick={handleClick}>
        Condition
      </Title>
      <Navigation>
        <NavigationItem showTop={showTop}>
          <InputRadio id="Any" type="radio" name="name" labelText="Any" />
        </NavigationItem>
        <NavigationItem showTop={showTop}>
          <InputRadio
            id="Refurbished"
            type="radio"
            name="name"
            labelText="Refurbished"
          />
        </NavigationItem>
        <NavigationItem showTop={showTop}>
          <InputRadio
            id="Brand new"
            type="radio"
            name="name"
            labelText="Brand new"
          />
        </NavigationItem>
        <NavigationItem showTop={showTop}>
          <InputRadio
            id="Old items"
            type="radio"
            name="name"
            labelText="Old items"
          />
        </NavigationItem>
      </Navigation>
      <Line />
    </>
  );
};

export default Condition;
