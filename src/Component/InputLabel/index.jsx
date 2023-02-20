import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const Label = styled.label`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 4px;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Span = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary[500]};
  margin-bottom: 4px;
`;
const Flex = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  right: 12px;
  top: 12px;
  cursor: pointer;
`;
export const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: 0;
  height: 73px;
`;
const InputWithLabel = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <Flex>
        <Label htmlFor={props.id}>{props.labelText}</Label>
        <Span to="/">{props.forget}</Span>
      </Flex>

      <Flex>
        <Input
          style={{ width: props.width || "100% " }}
          ref={inputRef}
          id={props.id}
          type={showPassword ? "text" : props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          name="input"
        />
        <Image
          src={showPassword ? props.hide : props.src}
          alt={props.alt}
          onClick={togglePasswordVisibility}
        />
      </Flex>
    </div>
  );
};

export default InputWithLabel;
