import React, { useState } from "react";
import styled from "styled-components";
import { Img } from "../../../../Component/Header";
import InputCheckbox from "../../../../Component/InputCheckbox";
import Content1 from "../../Contents/content-1";
import Content2 from "../../Contents/content-2";
// img
import window from "../../../../Images/window.svg";
import list from "../../../../Images/list.svg";
import Filters from "../Filter";

const SwapContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  @media (max-width: 792px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 14px;
  }
`;

const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PageNumber = styled.li`
  padding: 12px;
  border: 1px solid rgb(227, 232, 238);
  font-weight: 500;
  cursor: pointer;
  list-style: none;
  user-select: none;
  background-color: ${(props) =>
    props.isActive ? "rgb(239, 242, 244)" : "#ffffff"};
  color: ${(props) => (props.isActive ? "rgb(139, 150, 165)" : "")};
`;
export const Select = styled.select`
  padding: 12px;
  width: 160px;
  background: white;
  color: #1c1c1c;
  font-size: 14px;
  border: 1px solid #ccc;
  user-select: none;
  outline: none;
  &:focus {
    outline: none;
  }
`;
const Div = styled.div`
  display: flex;
  gap: ${(props) => props.gap};
`;
const P = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.dark};
  font-weight: 400;
  line-height: 19px;
`;
const Span = styled(P)`
  font-weight: 600;
`;
const InputContainer = styled.div`
  @media (max-width: 992px) {
    display: flex;
  }
  @media (max-width: 492px) {
    display: none;
  }
`;
const Swap = () => {
  const [activePage, setActivePage] = useState(1);
  return (
    <>
      <Filters />
      <SwapContainer>
        <Div gap="6px">
          <P>12,911 items in</P>
          <Span>Mobile accessory</Span>
        </Div>
        <Div gap="10px">
          <InputContainer>
            <InputCheckbox
              type="checkbox"
              id="verify"
              labelText="Verified only"
              fw="500"
            />
          </InputContainer>
          <Select>
            <option value="" hidden selected>
              Featured
            </option>
            <option value="Category">Category</option>
            <option value="Rating">Rating</option>
          </Select>
          <Navigation>
            <PageNumber
              onClick={() => setActivePage(2)}
              isActive={activePage === 2}
            >
              <Img src={window} />
            </PageNumber>

            <PageNumber
              onClick={() => setActivePage(1)}
              isActive={activePage === 1}
            >
              <Img src={list} height="18px" />
            </PageNumber>
          </Navigation>
        </Div>
      </SwapContainer>
      {activePage === 1 ? <Content1 /> : <Content2 />}
    </>
  );
};
export default Swap;
