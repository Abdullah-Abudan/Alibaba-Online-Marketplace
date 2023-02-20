import styled from "styled-components";
import { P } from "../../../../Component/Header";
import Container from "../../../../Component/Container";
import { H4 } from "../../Sections/section-1-Home";
import { Textarea } from "../../Sections/../../../Component/InputLabel";
import InputSelect from "../../InputSelect ";
import ButtonElement from "../../../../Component/Button";
import Input from "../../../../Component/InputLabel";
// img
import suppliers from "../../../../Images/suppliers.svg";

const Div = styled.div`
  border: 1px solid rgb(227, 232, 238);
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
  padding: 18px;
  background-size: cover;
  background-position: center;
  background-image: url(${suppliers});
  background-attachment: fixed;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Div1Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Div2Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.25);
  border-radius: 6px;
`;
const PEdit = styled(P)`
  color: #ffffff;
  font-size: 16px;
`;

const Section5H = () => {
  return (
    <Container>
      <Div>
        <Div1Container>
          <H4 white>
            An easy way to send <br /> requests to all suppliers
          </H4>
          <PEdit>
            Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit, sed
            do eiusmod tempor incididunt.
          </PEdit>
        </Div1Container>
        <Div2Container>
          <H4>Send quote to suppliers</H4>
          <Input type="text" placeholder="What item you need?" />
          <Textarea placeholder="Type more details" />
          <InputSelect />
          <ButtonElement width="fit-content">Send inquiry</ButtonElement>
        </Div2Container>
      </Div>
    </Container>
  );
};
export default Section5H;
