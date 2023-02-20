import styled from "styled-components";
import Container from "../../../Component/Container";
import { Img } from "../../../Component/Header";
import {
  DivColumn,
  H4,
  ImgDivContainer,
  Span,
} from "../../Product/Sections/Section-3";

// img
import lock from "../../../Images/lock.svg";
import messageHeader from "../../../Images/messageHeader.svg";
import bus from "../../../Images/bus.svg";
import smartphone from "../../../Images/smartphone.svg";
import iphoneGenzare from "../../../Images/iphoneGenzare.svg";
import smartwatch from "../../../Images/smartwatch.svg";
import laptop from "../../../Images/laptop.svg";
import cartBlue from "../../../Images/cartBlue.svg";
import { Button, Div, Div1, Div1Container, FlexRow } from "../Section-1";

const DivGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${({ theme }) => theme.screens.xs}) {
    grid-template-columns: 1fr;
  }
`;
export const DivContainer = styled(Div1Container)`
  border-bottom: 0;
  @media (max-width: 992px) {
    display: none;
  }
`;
const Section2C = () => {
  return (
    <Container>
      {/* Basic Card */}
      <Div>
        <DivContainer>
          <ImgDivContainer style={{ width: "48px", height: "48px" }} BasicCard>
            <Img productbg width="20px" height="20px" src={lock} />
          </ImgDivContainer>

          <DivColumn style={{ gap: "1px" }} growCart>
            <H4>Secure payment</H4>
            <Span gray>Have you ever finally just</Span>
          </DivColumn>
          <ImgDivContainer style={{ width: "48px", height: "48px" }} BasicCard>
            <Img productbg width="20px" height="20px" src={messageHeader} />
          </ImgDivContainer>

          <DivColumn style={{ gap: "1px" }} growCart>
            <H4>Customer support</H4>
            <Span gray>Have you ever finally just</Span>
          </DivColumn>
          <ImgDivContainer style={{ width: "48px", height: "48px" }} BasicCard>
            <Img productbg width="20px" height="20px" src={bus} />
          </ImgDivContainer>

          <DivColumn style={{ gap: "1px" }} growCart>
            <H4>Free delivery</H4>
            <Span gray>Have you ever finally just</Span>
          </DivColumn>
        </DivContainer>
        <></> {/*Until the Div takes 2 fraction and takes this 1 fraction */}
      </Div>

      <Div1>
        <H4 sizeCart Margin>
          Saved for later
        </H4>
        <DivGrid>
          <Div1Container NoBorder>
            <DivColumn Egap growCart>
              <ImgDivContainer style={{ width: "100%", height: "240px" }}>
                <Img productbg width="194px" height="194px" src={smartphone} />
              </ImgDivContainer>
              <H4>$99.50</H4>
              <Span gray>
                GoPro HERO6 4K Action
                <br /> Camera - Black Artel Market
              </Span>
              <FlexRow>
                <Button
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <Img src={cartBlue} />
                  Move to Cart
                </Button>
              </FlexRow>
            </DivColumn>
          </Div1Container>

          <Div1Container NoBorder>
            <DivColumn Egap growCart>
              <ImgDivContainer style={{ width: "100%", height: "240px" }}>
                <Img
                  productbg
                  width="194px"
                  height="194px"
                  src={iphoneGenzare}
                />
              </ImgDivContainer>
              <H4>$99.50</H4>
              <Span gray>
                GoPro HERO6 4K Action
                <br /> Camera - Black Artel Market
              </Span>
              <FlexRow>
                <Button
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <Img src={cartBlue} />
                  Move to Cart
                </Button>
              </FlexRow>
            </DivColumn>
          </Div1Container>

          <Div1Container NoBorder>
            <DivColumn Egap growCart>
              <ImgDivContainer style={{ width: "100%", height: "240px" }}>
                <Img productbg width="194px" height="194px" src={smartwatch} />
              </ImgDivContainer>
              <H4>$99.50</H4>
              <Span gray>
                GoPro HERO6 4K Action
                <br /> Camera - Black Artel Market
              </Span>
              <FlexRow>
                <Button
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <Img src={cartBlue} />
                  Move to Cart
                </Button>
              </FlexRow>
            </DivColumn>
          </Div1Container>

          <Div1Container NoBorder>
            <DivColumn Egap growCart>
              <ImgDivContainer style={{ width: "100%", height: "240px" }}>
                <Img productbg width="194px" height="194px" src={laptop} />
              </ImgDivContainer>
              <H4>$99.50</H4>
              <Span gray>
                GoPro HERO6 4K Action
                <br /> Camera - Black Artel Market
              </Span>
              <FlexRow>
                <Button
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <Img src={cartBlue} />
                  Move to Cart
                </Button>
              </FlexRow>
            </DivColumn>
          </Div1Container>
        </DivGrid>
      </Div1>
    </Container>
  );
};
export default Section2C;
