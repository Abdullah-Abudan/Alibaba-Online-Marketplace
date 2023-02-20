import React from "react";
import styled from "styled-components";
import { Img } from "../../../../Component/Header";

// img
import cancel from "../../../../Images/cancel.svg";
import { LinkE } from "../Features";
const ClearContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: transparent;
  border: 0;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  background: #ffffff;
  border: 1px solid #0d6efd;
  border-radius: 5px;
  padding: 8px;
  cursor: pointer;
  @media (max-width: 1058px) {
    &:nth-child(odd) {
      display: none;
    }
    gap: 6px;
  }
`;
const P = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #505050;
  &:hover {
    font-weight: bold;
  }
`;

const Filters = () => {
  return (
    <ClearContainer>
      <Div>
        <P>Samsung</P>
        <Img src={cancel} />
      </Div>
      <Div>
        <P>Apple</P>
        <Img src={cancel} />
      </Div>
      <Div>
        <P>Poco</P>
        <Img src={cancel} />
      </Div>
      <Div>
        <P>Metallic</P>
        <Img src={cancel} />
      </Div>
      <Div>
        <P>4 star</P>
        <Img src={cancel} />
      </Div>
      <Div>
        <P>3 star</P>
        <Img src={cancel} />
      </Div>
      <LinkE>Clear of filter</LinkE>
    </ClearContainer>
  );
};

export default Filters;
