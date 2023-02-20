import React from "react";
import styled from "styled-components";
import { Img } from "../../../../Component/Header";
const Div = styled.div`
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const P = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.dark};
  font-weight: 600;
  line-height: 19px;
`;
export default function Title(props) {
  return (
    <Div>
      <P>{props.children}</P>
      <Img
        src={props.src}
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
      />
    </Div>
  );
}
