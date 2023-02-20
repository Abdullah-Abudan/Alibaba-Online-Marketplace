import React from "react";
import styled from "styled-components";
import Title, { P } from "../Title";
import { useState } from "react";

// img
import vectorTop from "../../../../Images/VectorTop.svg";
import vectorBottom from "../../../../Images/VectorBottom.svg";

const PriceRangeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

const PriceRangeInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  display: ${(props) => (props.showTop ? "inline" : "none")};
  margin: 6px 0;
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.light ? props.theme.colors.light : props.theme.colors.primary[500]};
  border: ${(props) =>
    props.light ? props.theme.borders.Cbtn : props.theme.borders.btn};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  color: #1890ff;
  padding: 12px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  margin-bottom: 16px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  display: ${(props) => (props.showTop ? "inline" : "none")};
`;

const PE = styled(P)`
  font-weight: 400;
  display: ${(props) => (props.showTop ? "inline" : "none")};
  padding-top: 6px;
`;

const RangeInput = styled.input`
  width: 50%;
  appearance: none;
  background: #afd0ff;
  height: 4px;
  border-radius: 2px;
  outline: none;
  border: 2px solid transparent;
  display: ${(props) => (props.showTop ? "inline" : "none")};
  &::-webkit-slider-thumb {
    appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 1px solid #afd0ff;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(16, 0, 0, 0.1);
    cursor: pointer;
  }
`;
export const Line = styled.div`
  height: 1px;
  background-color: #ccc;
  display: flex;
`;
const PriceRange = () => {
  const [minValue, setMinValue] = useState(""); // "" not number .. to showing placeholedr
  const [maxValue, setMaxValue] = useState("");
  const [showTop, setShowTop] = useState(false);

  const handleClick = () => {
    setShowTop(!showTop);
  };
  return (
    <>
      <Title src={showTop ? vectorTop : vectorBottom} onClick={handleClick}>
        Price range
      </Title>
      <div>
        <RangeInput
          showTop={showTop}
          type="range"
          min="0"
          max="1000"
          value={minValue}
          onChange={(event) => setMinValue(event.target.value)}
        />
        <RangeInput
          showTop={showTop}
          type="range"
          min="0"
          max="1000"
          value={maxValue}
          onChange={(event) => setMaxValue(event.target.value)}
        />
      </div>
      <PriceRangeContainer>
        <DivFlex showTop={showTop}>
          <PE showTop={showTop}>Min</PE>

          <PriceRangeInput
            showTop={showTop}
            placeholder="0"
            type="number"
            value={minValue}
            onChange={(event) => setMinValue(event.target.value)}
          />
        </DivFlex>

        <DivFlex showTop={showTop}>
          <PE showTop={showTop}>Max</PE>
          <PriceRangeInput
            showTop={showTop}
            placeholder="999999"
            type="number"
            value={maxValue}
            onChange={(event) => setMaxValue(event.target.value)}
          />
        </DivFlex>
      </PriceRangeContainer>
      <Button light showTop={showTop}>
        Apply
      </Button>
      <Line />
    </>
  );
};

export default PriceRange;
