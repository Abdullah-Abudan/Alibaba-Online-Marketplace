import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Button = styled(Link)`
  background-color:  ${(props) => (props.white) ? props.theme.colors.light : props.theme.colors.primary[600]};
  border: ${({ theme }) => theme.borders.Cbtn};
  border-radius:${({ theme }) => theme.borderRadius.sm} ;
  color:${(props) => (props.white) ? props.theme.colors.secondary[800] : props.theme.colors.light} ;
  transition:${'.5s ease-in-out 0s'};
  font-weight: bold;
  box-shadow: ${({ theme }) => theme.shadow.Cbtn};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 10px;  
  font-size: 16px;
  margin: 10px 0;
  text-decoration: none;
  cursor: pointer;
  width: 100%;

  &:hover {
  background-color: ${(props) => (props.white) ? props.theme.colors.secondary[200] : props.theme.colors.primary[500]};
}
`;

const GoogleIcon = styled.img`
  width: 8%;
  text-align: center;
  @media (max-width:260px) {
    display:none;
}
`;
const Span = styled.span`
    position: relative;
    right: 80px;
    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      right: 0px;
}
@media (max-width:${({ theme }) => theme.screens.xs}) {
    font-size:15px;
}
`;

const ContinueButton = (props) => {
  return (
    <Button to={props.path} white={props.white}>
      <GoogleIcon src={props.src} alt={props.alt}/>
      <Span >{props.continueText}</Span>
      
    </Button>
  );
};

export default ContinueButton;