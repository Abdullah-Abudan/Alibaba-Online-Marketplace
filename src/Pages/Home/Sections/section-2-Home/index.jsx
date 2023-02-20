import styled from "styled-components";
import { P } from "../../../../Component/Header";
import Container from "../../../../Component/Container";
import { H4 } from "../../Sections/section-1-Home";
import { Img } from "../../../../Component/Header";

// img
import smartWatch from "../../../../Images/smartwatch.svg";
import smGoproCamera from "../../../../Images/smGoproCamera.svg";
import headphone from "../../../../Images/headphone.svg";
import smlaptop from "../../../../Images/smLaptop.svg";
import smCanonCamera from "../../../../Images/smCanonCamera.svg";

const Div = styled.div`
  border: 1px solid rgb(227, 232, 238);
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 20px;
  margin-top: 20px;
  padding: 18px;
  background-color: #ffffff;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    margin: auto;
  }
`;

const Div1Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 992px) {
    margin: auto;
  }
`;
const DivCardContainer = styled(Div1Container)`
  align-items: center;
  text-align: center;
  gap: 8px;
  padding: 20px;
  flex-grow: 1;
  border-left: 2px solid ${(props) => props.theme.colors.secondary[200]};
  @media (max-width: 992px) {
    margin: auto;
    border: 0;
  }
`;

const Span = styled.span`
  font-size: 16px;
  color: ${(props) =>
    props.white ? props.theme.colors.light : props.theme.colors.secondary[500]};
  margin-bottom: ${(props) => (props.dark ? "" : "4px")};
  font-weight: ${(props) => (props.bold ? "bold" : 400)};
  line-height: 19px;
`;
const DivFlex = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 6px;
  @media (max-width: 992px) {
    margin: auto;
  }
`;

const DivTimer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #606060;
  padding: 6px;
  border-radius: 4px;
  width: 55px;
  height: 55px;
`;
const Div2Container = styled.div`
  display: flex;
  overflow: hidden;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
const DivDiscount = styled.div`
  padding: 5px 13px 6px;
  background: ${(props) => props.theme.colors.danger[100]};
  color: rgb(235, 0, 27);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 992px) {
    margin: auto;
  }
`;
const DivImg = styled.div`
  margin: auto;
`;

const Section2H = () => {
  return (
    <Container>
      <Div>
        <Div1Container>
          <H4>Deals and offers</H4>
          <Span>Hygiene equipments</Span>
          <DivFlex>
            <DivTimer>
              <Span white bold>
                04
              </Span>
              <Span white>Days</Span>
            </DivTimer>
            <DivTimer>
              <Span white bold>
                13
              </Span>
              <Span white>Hour</Span>
            </DivTimer>
            <DivTimer>
              <Span white bold>
                34
              </Span>
              <Span white>Min</Span>
            </DivTimer>
            <DivTimer>
              <Span white bold>
                56
              </Span>
              <Span white>Sec</Span>
            </DivTimer>
          </DivFlex>
        </Div1Container>

        <Div2Container>
          <DivCardContainer>
            <Img width="130px" height="130px" src={smartWatch} />
            <P dark>Smart watches</P>
            <DivDiscount>-25%</DivDiscount>
          </DivCardContainer>
          <DivCardContainer>
            <DivImg>
              <Img width="130px" height="130px" src={smlaptop} />
            </DivImg>
            <P dark>Laptops</P>
            <DivDiscount>-15%</DivDiscount>
          </DivCardContainer>
          <DivCardContainer>
            <DivImg>
              <Img width="130px" height="130px" src={smGoproCamera} />
            </DivImg>
            <P dark>GoPro cameras</P>
            <DivDiscount>-40%</DivDiscount>
          </DivCardContainer>
          <DivCardContainer>
            <DivImg>
              <Img width="130px" height="130px" src={headphone} />
            </DivImg>
            <P dark>Headphones</P>
            <DivDiscount>-25%</DivDiscount>
          </DivCardContainer>
          <DivCardContainer>
            <DivImg>
              <Img width="130px" height="130px" src={smCanonCamera} />
            </DivImg>
            <P dark>Canon camreras</P>
            <DivDiscount>-25%</DivDiscount>
          </DivCardContainer>
        </Div2Container>
      </Div>
    </Container>
  );
};
export default Section2H;
