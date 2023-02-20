import React from "react";
import styled from "styled-components";
const Input = styled.input`
  margin: 16px 0;
`;
const Label = styled.label`
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 4px;
  margin-left: 10px;
`;
const Flex = styled.div`
  display: inline-block;
  margin-right: 8px;
`;
const InputCheckbox = (props) => {
  return (
    <Flex>
      <Input
        id={props.id}
        type={props.type}
        onChange={props.onChange}
        name={props.name}
      />
      <Label htmlFor={props.id} style={{ fontWeight: props.fw }}>
        {props.labelText}
      </Label>
    </Flex>
  );
};
export default InputCheckbox;
