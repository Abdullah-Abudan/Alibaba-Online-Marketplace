import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) =>props.light ? props.theme.colors.light : props.theme.colors.primary[500]};
  border:${(props) =>props.light ? props.theme.borders.Cbtn : props.theme.borders.btn};
  border-radius:${( props ) => props.theme.borderRadius.sm};
  color:${(props) =>props.light ? props.theme.colors.dark : props.theme.colors.light} ;
  padding: 12px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  font-weight: ${(props) =>props.weight ? 'bold' : ""};
`;

const Button = (props) => {
  return <StyledButton position={props.position} light={props.light} style={{width:props.width,height:props.height}}>{props.children}</StyledButton>;
};

export default Button;