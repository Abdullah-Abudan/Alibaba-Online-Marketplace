import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin: 15px 0;
  font-size: 16px;
`;

const Text = styled.p`
  color: #333;
`;

export const StyledRegister = styled(Link)`
  color: #0d6efd;
  text-decoration: none;
`;

const SwapLogSign = (props) => {
  return (
    <Container>
      <Text>{props.text}</Text>
      <StyledRegister to={props.path} style={{ fontWeight: props.weight }}>
        {props.swap}
      </StyledRegister>
    </Container>
  );
};

export default SwapLogSign;
