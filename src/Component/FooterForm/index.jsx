import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import americanCard from "../../Images/americaCard.svg";
import card from "../../Images/card.svg";
import paypal from "../../Images/paypal.svg";
import visa from "../../Images/visa.svg";
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  padding: 30px 50px;
  background-color: ${({ theme }) => theme.colors.light};
  margin-top: 20px;
`;

export const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  margin-right: 6px;

  img {
    height: 30px;
    @media (max-width: 767px) {
      display: none;
    }
  }
`;
export const SubContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SpanText = styled(Link)`
  display: flex;
  margin-right: 20px;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary[800]};
`;

const FooterForm = () => (
  <FooterContainer>
    <SubContainer>
      <PaymentOption>
        <img src={americanCard} alt="American Card logo" />
      </PaymentOption>
      <PaymentOption>
        <img src={card} alt="card logo" />
      </PaymentOption>
      <PaymentOption>
        <img src={paypal} alt="Paypal logo" />
      </PaymentOption>
      <PaymentOption>
        <img src={visa} alt="visa logo" />
      </PaymentOption>
    </SubContainer>

    <SubContainer>
      <SpanText to="https://www.alibaba.com/premium/live_chat_support.html">
        Support
      </SpanText>
      <SpanText to="https://rulechannel.alibaba.com/icbu?type=detail&ruleId=2034&cId=1306#/rule/detail?cId=1306&ruleId=2034">
        Privacy & Cookies
      </SpanText>
      <SpanText to="https://www.alibabahoboken.com/accessibility-statement/">
        Accessibility
      </SpanText>
    </SubContainer>
  </FooterContainer>
);

export default FooterForm;
