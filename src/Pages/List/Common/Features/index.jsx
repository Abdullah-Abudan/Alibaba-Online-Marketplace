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
import { Link } from "react-router-dom";

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
export const LinkE = styled(Link)`
  color: #0d6efd;
  text-decoration: none;
  padding: 12px 0;
  display: inline-block;
`;

const Features = () => {
  const [showTop, setShowTop] = useState(false);

  const handleClick = () => {
    setShowTop(!showTop);
  };
  return (
    <>
      <Title src={showTop ? vectorTop : vectorBottom} onClick={handleClick}>
        Features
      </Title>
      <Navigation>
        <NavigationItem showTop={showTop}>
          <InputCheckbox id="Metallic" type="checkbox" labelText="Metallic" />
        </NavigationItem>
        <NavigationItem showTop={showTop}>
          <InputCheckbox
            id="Plastic cover"
            type="checkbox"
            labelText="Plastic cover"
          />
        </NavigationItem>
        <NavigationItem showTop={showTop}>
          <InputCheckbox id="8GB Ram" type="checkbox" labelText="8GB Ram" />
        </NavigationItem>
        <NavigationItem showTop={showTop}>
          <InputCheckbox
            id="Super power"
            type="checkbox"
            labelText="Super power"
          />
        </NavigationItem>
        <NavigationItem showTop={showTop}>
          <InputCheckbox
            id="Large Memory"
            type="checkbox"
            labelText="Large Memory"
          />
        </NavigationItem>
        <NavigationItem showTop={showTop}>
          <LinkE to="">See all</LinkE>
        </NavigationItem>
      </Navigation>
      <Line />
    </>
  );
};

export default Features;
