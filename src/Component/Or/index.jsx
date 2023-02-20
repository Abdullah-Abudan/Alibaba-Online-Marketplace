import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: #ccc;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  display: ${(props) => (props.none ? "none" : "")}; //for Cart Page
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #a9acb0;
`;

const OrLine = (props) => {
  return (
    <Container>
      <Line />
      <Text>OR</Text>
      <Line />
    </Container>
  );
};

export default OrLine;
