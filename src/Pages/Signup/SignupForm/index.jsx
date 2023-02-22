import React, { useState } from "react";

import TitleForm from "../../../Component/TitleForm";
import FormContainer from "../../../Component/FormContainer";
import InputWithLabel from "../../../Component/InputLabel";
import InputCheckbox from "../../../Component/InputCheckbox";
import Button from "../../../Component/Button";
import SwapLogSign from "../../../Component/SwapLogReg";
import Flex from "../../Signup/Flex";
import CombinedInput from "./../InputSelect ";
import { Line } from "../../../Component/Or";
import { StyledRegister } from "../../../Component/SwapLogReg";
import { object, string, ref, boolean } from "yup"; // {object, string, ref} instead of (* as yup)
import Error from "../../../Component/Error";

// img
import eye from "../../../Images/eyeLogin.svg";
import eyehide from "../../../Images/eyehide.svg";

function SignupForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [checked, setIsChecked] = useState(true);

  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");
  const [checkedError, setCheckedError] = useState("");

  const handleInputChange = (event) => {
    const { value, id } = event.target;
    switch (id) {
      case "name":
        setName(value);
        break;
      case "surname":
        setSurname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "rePassword":
        setRepeatPassword(value);
        break;
      default:
        break;
    }
  };
  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);
  };

  const schema = object().shape({
    name: string().min(5).max(20).required(),
    surname: string().min(5).max(20).required(),
    email: string().email().required("Email is required "),
    phone: string()
      .matches(
        /^[0-9]{10}$/,
        "A phone number is required and must be 10 digits"
      )
      .required(),
    password: string().min(8, "password must be at least 8 numbers").required(),
    repeatPassword: string()
      .oneOf([ref("password")], "Your passwords do not match.")
      .required(),
    checked: boolean()
      .oneOf([true], "You must agree to the terms and conditions")
      .required(),
  });

  const handleSubmit = (event) => {
    event.preventDefault(); //no refresh
    schema
      .validate(
        {
          name,
          surname,
          email,
          phone,
          password,
          repeatPassword,
          checked,
        },
        { abortEarly: false }
      )
      .then(() => {
        console.log("Success");
      })
      .catch((err) => {
        err.inner.forEach((e) => {
          if (e.path === "name") setNameError(e.message);
          if (e.path === "surname") setSurnameError(e.message);
          if (e.path === "email") setEmailError(e.message);
          if (e.path === "phone") setPhoneError(e.message);
          if (e.path === "password") setPasswordError(e.message);
          if (e.path === "repeatPassword") setRePasswordError(e.message);
          if (e.path === "checked") setCheckedError(e.message);
        });
      });
    // Clear error messages
    setNameError("");
    setSurnameError("");
    setEmailError("");
    setPhoneError("");
    setPasswordError("");
    setRePasswordError("");
    setCheckedError("");
  };

  return (
    <FormContainer>
      <TitleForm>Register</TitleForm>
      <form onSubmit={handleSubmit}>
        <Flex>
          <InputWithLabel
            width="100%"
            id="name"
            type="text"
            placeholder="Type Here"
            labelText="Username"
            value={name}
            onChange={handleInputChange}
          />
          <InputWithLabel
            width="100%"
            id="surname"
            type="text"
            placeholder="Type here"
            labelText="Surname"
            value={surname}
            onChange={handleInputChange}
          />
        </Flex>
        {nameError || surnameError ? (<Error message={surnameError || nameError} />) : null}
        <InputWithLabel
          width="100%"
          id="email"
          type="email"
          placeholder="example@mail.com"
          labelText="Your e-mail "
          value={email}
          onChange={handleInputChange}
        />
        {emailError && <Error message={emailError} />}

        <CombinedInput id="phone" value={phone} onChange={handleInputChange} />
        {phoneError && <Error message={phoneError} />}

        <InputWithLabel
          id="password"
          type="password"
          placeholder="At Least 6 Charachter"
          labelText="Password"
          src={eye}
          hide={eyehide}
          alt="eye"
          value={password}
          onChange={handleInputChange}
        />
        {passwordError && <Error message={passwordError} />}

        <InputWithLabel
          id="rePassword"
          type="password"
          placeholder="Type Here"
          labelText="Repeat Password"
          src={eye}
          hide={eyehide}
          alt="eye"
          value={repeatPassword}
          onChange={handleInputChange}
        />
        {rePasswordError && <Error message={rePasswordError} />}

        <Button width="100%">Register Now</Button>
        <InputCheckbox
          id="checkbox"
          type="checkbox"
          labelText="I agree with"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <StyledRegister
          to="https://activity.alibaba.com/pc/11fb7e54.html"
          target="_blank"
        >
          Terms and Conditions
        </StyledRegister>
        {checkedError && <Error message={checkedError} />}

        <Line />
        <SwapLogSign
          path="/Login"
          text="Already have an accaunt?"
          swap="Log in"
          weight="bold"
        />
      </form>
    </FormContainer>
  );
}
export default SignupForm;
