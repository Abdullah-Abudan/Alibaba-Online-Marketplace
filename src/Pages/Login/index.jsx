import React, { useState } from "react";

import TitleForm from "../../Component/TitleForm";
import FormContainer from "../../Component/FormContainer";
import InputWithLabel from "../../Component/InputLabel";
import InputCheckbox from "../../Component/InputCheckbox";
import Button from "../../Component/Button";
import OrLine from "../../Component/Or";
import ContainerLogSign from "../../Component/ContainerLogSign";
import ContinueButton from "../../Component/ContinButton";
import SwapLogSign from "../../Component/SwapLogReg";
import FooterForm from "../../Component/FooterForm";
import Background from "../../Component/BackgroundLogSign";
// img
import eye from "../../Images/eyeLogin.svg";
import eyehide from "../../Images/eyehide.svg";
import googleIcon from "../../Images/googleLogin.svg";
import facebookIcon from "../../Images/facebookLogin.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();


  };
  return (
    <Background>
      <ContainerLogSign>
        <FormContainer>
          <TitleForm>Sign in</TitleForm>
          <form onSubmit={handleSubmit}>
            <InputWithLabel
              width="100%"
              id="email"
              type="email"
              placeholder="Email Or Phone"
              labelText="Username"
              value={email}
              onChange={handleEmailChange}
            />
            <InputWithLabel
              width="100%"
              id="password"
              type="password"
              placeholder="Type here"
              labelText="Password"
              pass="Forgot Password"
              forget="Forget Password"
              src={eye}
              hide={eyehide}
              alt="eye"
            />
            <InputCheckbox
              id="checkbox"
              type="checkbox"
              labelText="Remember Me"
              fw="bold"
            />
            <Button width="100%">Login</Button>
            <OrLine />
            <ContinueButton
              path="https://www.google.com" //props to
              white="true"
              continueText="Continue With Google"
              src={googleIcon}
              alt="google icon"
            />
            <ContinueButton
              path="https://www.facebook.com/v2.9/dialog/oauth?client_id=124207444332529&redirect_uri=https%3A%2F%2Fpassport.alibaba.com%2Foauth_sign.htm%3Ftype%3Dfacebook&display=popup&response_type=code&scope=email,public_profile,user_work_history&state=idc_8f3ZkJirfn9TYRAm5cRanBg"
              continueText="Continue With Facebook"
              src={facebookIcon}
              alt="facebook icon"
            />
            <SwapLogSign
              path="/Signup"
              text="Don’t have an account?"
              swap="Register now"
              weight="bold"
            />
          </form>
        </FormContainer>
      </ContainerLogSign>
      <FooterForm />
    </Background>
  );
}
export default Login;
