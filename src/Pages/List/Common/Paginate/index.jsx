import React, { useState } from "react";
import styled from "styled-components";
import { Img } from "../../../../Component/Header";

// img
import VectorRight from "../../../../Images/VectorRight.svg";
import vectorLeft from "../../../../Images/vectorLeft.svg";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 1rem 0;
  gap: 15px;
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
const Select = styled.select`
  padding: 12px;
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

const Pagination = () => {
  const [activePage, setActivePage] = useState(1);
  return (
    <PaginationContainer>
      <Select>
        <option value="" hidden selected>
          Show 10
        </option>
        <option value="9">Show 9</option>
        <option value="6">Show 6</option>
        <option value="all">Show All</option>
      </Select>
      <Navigation>
        <PageNumber>
          <Img src={vectorLeft} />
        </PageNumber>
        <PageNumber
          onClick={() => setActivePage(1)}
          isActive={1 === activePage}
        >
          1
        </PageNumber>
        <PageNumber
          onClick={() => setActivePage(2)}
          isActive={2 === activePage}
        >
          2
        </PageNumber>
        <PageNumber
          onClick={() => setActivePage(3)}
          isActive={3 === activePage}
        >
          3
        </PageNumber>
        <PageNumber>
          <Img src={VectorRight} />
        </PageNumber>
      </Navigation>
    </PaginationContainer>
  );
};
export default Pagination;
