import React, { useState } from "react";

import TitleForm from "../../../Component/TitleForm";
import FormContainer from "../../../Component/FormContainer";
import InputWithLabel from "../../../Component/InputLabel";
import InputCheckbox from "../../../Component/InputCheckbox";
import Button from "../../../Component/Button";
import OrLine from "../../../Component/Or";
import ContinueButton from "../../../Component/ContinButton";
import SwapLogSign from "../../../Component/SwapLogReg";
import { object, string, boolean } from "yup"; // {object, string, ref} instead of (* as yup)
import Error from "../../../Component/Error";
import axios from "axios";
import { Navigate } from "react-router-dom";
// img
import eye from "../../../Images/eyeLogin.svg";
import eyehide from "../../../Images/eyehide.svg";
import googleIcon from "../../../Images/googleLogin.svg";
import facebookIcon from "../../../Images/facebookLogin.svg";



function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setIsChecked] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkedError, setCheckedError] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { value, id } = event.target;
    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);
  };

  const schema = object().shape({
    email: string().email().required("Email is required "),
    password: string()
      .min(8)
      .required("Password must be 8 characters or longer"),
    checked: boolean().oneOf([true], " Check the Checkbox").required(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    schema
      .validate(
        {
          email,
          password,
          checked,
        },
        { abortEarly: false }
      )
      .then(() => {
        axios
        .post("https://react-tt-api.onrender.com/api/users/login", {email,password,})
        .then((res) => {
          const token = res.data.token;
          localStorage.setItem("token", token);
          localStorage.setItem("email", res.data.email);
          setIsLoading(false);
          <Navigate to="/Home" /> ; // Redirect to the Home page
        })
        }
          )
      .catch((err) => {
        err.inner.forEach((e) => {
          if (e.path === "email") setEmailError(e.message);
          if (e.path === "password") setPasswordError(e.message);
          if (e.path === "checked") setCheckedError(e.message);
          setIsLoading(false);

        });
      });

    // Clear error messages
    setEmailError("");
    setPasswordError("");
    setCheckedError("");
  };

  return (
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
              onChange={handleInputChange}
            />
            {emailError && <Error message={emailError} />}

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
              value={password}
              onChange={handleInputChange}
            />
            {passwordError && <Error message={passwordError} />}

            <InputCheckbox
              id="checkbox"
              type="checkbox"
              labelText="Remember Me"
              fw="bold"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            {checkedError && <Error message={checkedError} />}

            <Button width="100%">
            {isLoading ? "Loading..." : "Login"}
            </Button>

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
  );
}
export default LoginForm;
