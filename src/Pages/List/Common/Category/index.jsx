import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { Navigation } from "../../../Home/Sections/section-1-Home";
import Title from "../Title";

// img
import vectorTop from "../../../../Images/VectorTop.svg";
import vectorBottom from "../../../../Images/VectorBottom.svg";
import { Line } from "../Range";

const NavigationItem = styled.li`
  cursor: pointer;
  padding: 12px 0;
  display: ${(props) => (props.showTop ? "inline" : "none")};
`;
const LinkCategory = styled(Link)`
  text-decoration: none;
  user-select: none;
  color: rgb(28, 28, 28);
  font-weight: 400;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    font-weight: 600;
    font-size: 14px;
  }
`;
const Category = () => {
  const [showTop, setShowTop] = useState(false);

  const handleClick = () => {
    setShowTop(!showTop);
  };
  return (
    <>
      <Line />
      <Title src={showTop ? vectorTop : vectorBottom} onClick={handleClick}>
        Category
      </Title>
      <Navigation>
        <NavigationItem showTop={showTop}>
          <LinkCategory to="">Mobile accessory</LinkCategory>
        </NavigationItem>
        <NavigationItem showTop={showTop}>
          <LinkCategory to="">Electronics</LinkCategory>
        </NavigationItem>
        <NavigationItem showTop={showTop}>
          <LinkCategory to="">Smartphones</LinkCategory>
        </NavigationItem>
        <NavigationItem showTop={showTop}>
          <LinkCategory to="">Modern tech</LinkCategory>
        </NavigationItem>
        <NavigationItem showTop={showTop}>
          <LinkCategory to="" style={{ color: "#0D6EFD" }}>
            See all
          </LinkCategory>
        </NavigationItem>
      </Navigation>
      <Line />
    </>
  );
};

export default Category;
