import styled from "styled-components";
import { Img } from "../../../../Component/Header";
import Container from "../../../../Component/Container";
// img
import smartphone from "../../../../Images/smartphone.svg";
import smartwatch from "../../../../Images/smartwatch.svg";
import headphone from "../../../../Images/headphone.svg";
import laptop from "../../../../Images/laptop.svg";
import termos from "../../../../Images/termos.svg";
import iphoneGenzare from "../../../../Images/iphoneGenzare.svg";

export const MainColumn = styled.div`
  margin-top: 20px;
  padding: 18px;
  background-color: #ffffff;
  border: 1px solid rgb(227, 232, 238);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const MainRow = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  @media (max-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const ImgDivContainer = styled.div`
  border: 1px solid rgb(227 232 238);
  border-radius: ${(props) =>
    props.BasicCard ? "50%" : "4px"}; //props.BasicCard For basic card
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.cartImg ? "80px" : "155px")};
  height: ${(props) => (props.cartImg ? "80px" : "155px")};
  background-color: ${(props) =>
    props.BasicCard
      ? "#E3E8EE"
      : "rgb(238 238 238)"}; //props.BasicCard For basic card
  @media (max-width: 992px) {
    width: 80%;
    margin: auto;
    height: ${(props) => (props.cartImg ? "200px" : "155px")};
  }
  @media (max-width: 510px) {
    width: 100%;
  }
`;

const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.gapLike ? "16px" : "6px")};
  margin: ${(props) => (props.margin ? "16px 0" : "0px")};
  @media (max-width: 992px) {
    text-align:center;
  }
`;
export const Span = styled.span`
  font-style: normal;
  font-weight: ${(props) => (props.Weight ? "600" : "400")};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: ${(props) => (props.gray ? "#8b96a5" : "#505050")};
`;
export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.Egap ? "8px" : "18px")};
  flex-grow: ${(props) => (props.growCart ? "1" : "")};
`;
export const P = styled(Span)`
  color: #1c1c1c;
  font-weight: ${(props) =>
    props.weight ? "500" : "400"}; //weight For P in cart page
`;
export const H4 = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => (props.sizeCart ? "24px" : "20px")};
  line-height: 32px;
  color: #1c1c1c;
  user-select: none;
  margin: ${(props) => (props.Margin ? "18px 0 0" : "0px")};
`;

const Section3P = () => {
  return (
    <Container>
      <MainColumn>
        <H4>You my like</H4>

        <MainRow>
          <DivColumn>
            <ImgDivContainer>
              <Img productbg width="133px" height="133px" src={smartphone} />
            </ImgDivContainer>
            <DivFlex>
              <P>Xiaomi Redmi 8 Original</P>
              <Span gray>$32.00-$40.00</Span>
            </DivFlex>
          </DivColumn>
          <DivColumn>
            <ImgDivContainer>
              <Img productbg width="133px" height="133px" src={smartwatch} />
            </ImgDivContainer>
            <DivFlex>
              <P>Xiaomi Redmi 8 Original</P>
              <Span gray>$32.00-$40.00</Span>
            </DivFlex>
          </DivColumn>
          <DivColumn>
            <ImgDivContainer>
              <Img productbg width="133px" height="133px" src={headphone} />
            </ImgDivContainer>
            <DivFlex>
              <P>Xiaomi Redmi 8 Original</P>
              <Span gray>$32.00-$40.00</Span>
            </DivFlex>
          </DivColumn>
          <DivColumn>
            <ImgDivContainer>
              <Img productbg width="133px" height="133px" src={laptop} />
            </ImgDivContainer>
            <DivFlex>
              <P>Xiaomi Redmi 8 Original</P>
              <Span gray>$32.00-$40.00</Span>
            </DivFlex>
          </DivColumn>
          <DivColumn>
            <ImgDivContainer>
              <Img productbg width="133px" height="133px" src={termos} />
            </ImgDivContainer>
            <DivFlex>
              <P>Xiaomi Redmi 8 Original</P>
              <Span gray>$32.00-$40.00</Span>
            </DivFlex>
          </DivColumn>
          <DivColumn>
            <ImgDivContainer>
              <Img productbg width="133px" height="133px" src={iphoneGenzare} />
            </ImgDivContainer>
            <DivFlex>
              <P>Xiaomi Redmi 8 Original</P>
              <Span gray>$32.00-$40.00</Span>
            </DivFlex>
          </DivColumn>
        </MainRow>
      </MainColumn>
    </Container>
  );
};
export default Section3P;
