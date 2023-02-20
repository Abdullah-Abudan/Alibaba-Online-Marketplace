import React, { useState } from "react";

import TitleForm from "../../Component/TitleForm";
import ContainerLogSign from "../../Component/ContainerLogSign";
import FormContainer from "../../Component/FormContainer";
import InputWithLabel from "../../Component/InputLabel";
import InputCheckbox from "../../Component/InputCheckbox";
import Button from "../../Component/Button";
import SwapLogSign from "../../Component/SwapLogReg";
import FooterForm from "../../Component/FooterForm";
import Background from "../../Component/BackgroundLogSign";
import Flex from "../Signup/Flex";
import CombinedInput from "./InputSelect ";
import { Line } from "../../Component/Or";
import { StyledRegister } from "../../Component/SwapLogReg";
// img
import eye from "../../Images/eyeLogin.svg";
import eyehide from "../../Images/eyehide.svg";

function Signup() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <Background>
      <ContainerLogSign>
        <FormContainer>
          <TitleForm>Register</TitleForm>
          <form>
            <Flex>
              <InputWithLabel
                width="100%"
                id="name"
                type="text"
                placeholder="Type Here"
                labelText="Username"
              />
              <InputWithLabel
                width="100%"
                id="surname"
                type="text"
                placeholder="Type here"
                labelText="Surname"
              />
            </Flex>
            <InputWithLabel
              width="100%"
              id="email"
              type="email"
              placeholder="example@mail.com"
              labelText="Your e-mail "
              value={email}
              onChange={handleEmailChange}
            />
            <CombinedInput />
            <InputWithLabel
              id="password"
              type="password"
              placeholder="At Least 6 Charachter"
              labelText="Password"
              src={eye}
              hide={eyehide}
              alt="eye"
            />
            <InputWithLabel
              id="repassword"
              type="password"
              placeholder="Type Here"
              labelText="Repeat Password"
              src={eye}
              hide={eyehide}
              alt="eye"
            />
            <Button width="100%">Register Now</Button>
            <InputCheckbox
              id="checkbox"
              type="checkbox"
              labelText="I agree with"
            />
            <StyledRegister
              to="https://activity.alibaba.com/pc/11fb7e54.html"
              target="_blank"
            >
              Terms and Conditions
            </StyledRegister>
            <Line />
            <SwapLogSign
              path="/Login"
              text="Already have an accaunt?"
              swap="Log in"
              weight="bold"
            />
          </form>
        </FormContainer>
      </ContainerLogSign>
      <FooterForm />
    </Background>
  );
}
export default Signup;
