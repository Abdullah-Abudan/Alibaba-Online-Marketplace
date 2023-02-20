import styled from "styled-components";
import { H4 } from "../../../Pages/Home/Sections/section-1-Home";
import Button from "../../Button";
import email from "../../../Images/emailIcon.svg";
const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: rgb(239, 242, 244);
  padding: 38px 0px;
  @media (max-width: 492px) {
    display: none;
  }
`;
const Span = styled.span`
  color: ${(props) => props.theme.colors.dark};
  font-weight: 400;
  line-height: 16px;
  font-size: 1rem;
  letter-spacing: -0.2px;
`;
const Div = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;
const Img = styled.img`
  position: absolute;
  top: 17px;
  left: 6px;
`;
const Input = styled.input`
  padding: 10px 33px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  &::placeholder {
    font-family: "Courier New", Courier, monospace;
  }
`;

const Footer1 = () => {
  return (
    <DivContainer>
      <H4>Subscribe on our newsletter</H4>
      <Span>
        Get daily news on upcoming offers from many suppliers all over the world
      </Span>
      <Div>
        <Input type="email" placeholder="Email" />
        <Button height="40.72px">Subscribe</Button>
        <Img src={email} />
      </Div>
    </DivContainer>
  );
};
export default Footer1;
