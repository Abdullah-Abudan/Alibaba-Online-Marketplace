import styled from "styled-components";
import Container from "../../../Component/Container";
import { Img } from "../../../Component/Header";
import {
  DivColumn,
  H4,
  ImgDivContainer,
  P,
  Span,
} from "../../Product/Sections/Section-3";
import { Link } from "react-router-dom";
import { Select } from "../../List/Common/Swap";
import { PaymentOption, SubContainer } from "../../../Component/FooterForm";
import { ButtonHome } from "../../Home/Sections/section-1-Home";

// img
import tshirt from "../../../Images/tshirt.svg";
import modernBag from "../../../Images/modernBag.svg";
import softChairs from "../../../Images/softChairs.svg";
import { Line } from "../../List/Common/Range";
import americanCard from "../../../Images/americaCard.svg";
import card from "../../../Images/card.svg";
import paypal from "../../../Images/paypal.svg";
import visa from "../../../Images/visa.svg";
import pay from "../../../Images/pay.svg";
import VectorShop from "../../../Images/VectorShop.svg";

export const Div = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 18px;
  @media (max-width: 1199px) {
    grid-template-columns: 1fr;
  }
`;
export const Div1 = styled.div`
  margin-top: ${(props) =>
    props.Nomargin ? "0px" : "20px"}; // Nomargin for div2conttainer div1
  padding: ${(props) =>
    props.padding
      ? "18px 4px"
      : " 0px 18px"}; //0 now but i put 18px top-bottom in Div1Container for line
  background-color: #ffffff;
  border: ${(props) =>
    props.Noborder
      ? "0px"
      : " 1px solid rgb(227, 232, 238)"}; // Noborder for div2container div1
  border-radius: 8px;
`;
export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: ${(props) => (props.red ? "rgb(250, 52, 52)" : "#0D6EFD")};
  height: ${(props) =>
    props.height ? "53.33px" : ""}; //For button in Div2Container
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border-radius: ${(props) =>
    props.height ? "0" : "6px"}; //For button in Div2Container
  border: 1px solid rgb(227, 232, 238);
  background: rgb(255, 255, 255);
  padding: 10px 12px;
  width: fit-content;
  text-decoration: none;
  &:hover {
    font-weight: bold;
  }
  margin-bottom: 10px;
`;
export const ButtonGreen = styled(Link)`
  background-color: rgb(0, 181, 23);
  border: ${({ theme }) => theme.borders.none};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${(props) => props.theme.colors.light};
  transition: ${".5s ease-in-out 0s"};
  font-weight: 500;
  box-shadow: ${({ theme }) => theme.shadow.Cbtn};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 10px;
  font-size: 18px;
  margin: ${(props) => (props.NoMargin ? "" : "20px 0")};
  text-decoration: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: rgb(0 181 24 / 90%);
  }
`;
const Div2 = styled(Div1)`
  height: fit-content;
`;
export const Div1Container = styled.div`
  display: flex;
  gap: 13px;
  border-bottom: ${(props) =>
    props.NoBorder
      ? "0"
      : "1px solid #e3e8ee"}; //NoBorder for Div1Container "Saved to later"
  padding: 18px 0;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
const Div2Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 992px) {
    width: 100%;
    margin: auto;
  }
`;
export const FlexRow = styled.div`
  display: flex;
  gap: 8px;
`;
const Input = styled.input`
  border-radius: 2px;
  outline: none;
  border: 1px solid #e0e0e0;
  padding: 10px;
  height: 53.33px;
`;

const ImgR = styled(Img)`
  @media (max-width: 992px) {
    width: auto;
    height: 90%;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
const DivColumnResponsive = styled(DivColumn)`
  @media (max-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
const DivRowResponsive = styled(FlexContainer)`
  @media (max-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
`;
const Section1C = () => {
  return (
    <Container>
      <H4 sizeCart>My cart(3)</H4>
      <Div>
        <Div1>
          <Div1Container>
            <ImgDivContainer cartImg>
              <ImgR productbg width="60px" height="60px" src={tshirt} />
            </ImgDivContainer>
            <FlexContainer>
              <DivColumn Egap growCart>
                <H4>T-shirts with multiple colors, for men and lady</H4>
                <Span gray>
                  Size: medium, Color: blue, Material: Plastic <br /> Seller:
                  Artel Market
                </Span>
                <FlexRow>
                  <Button red>Remove</Button>
                  <Button>Save for later</Button>
                </FlexRow>
              </DivColumn>
              <DivColumn Egap>
                <DivColumnResponsive>
                  <P weight>$78.99</P>
                  <Select>
                    <option value="Qty: 9" selected>
                      Qty: 9
                    </option>
                    <option value="Qty: 6">Qty: 6</option>
                    <option value="Qty: 5">Qty: 5</option>
                  </Select>
                </DivColumnResponsive>
              </DivColumn>
            </FlexContainer>
          </Div1Container>

          <Div1Container>
            <ImgDivContainer cartImg>
              <ImgR productbg width="60px" height="60px" src={modernBag} />
            </ImgDivContainer>

            <FlexContainer>
              <DivColumn Egap growCart>
                <H4>T-shirts with multiple colors, for men and lady</H4>
                <Span gray>
                  Size: medium, Color: blue, Material: Plastic <br /> Seller:
                  Artel Market
                </Span>
                <FlexRow>
                  <Button red>Remove</Button>
                  <Button>Save for later</Button>
                </FlexRow>
              </DivColumn>

              <DivColumnResponsive Egap>
                <P weight>$39.00</P>
                <Select>
                  <option value="Qty: 3" selected>
                    Qty: 3
                  </option>
                  <option value="Qty: 6">Qty: 6</option>
                  <option value="Qty: 8">Qty: 8</option>
                </Select>
              </DivColumnResponsive>
            </FlexContainer>
          </Div1Container>

          <Div1Container>
            <ImgDivContainer cartImg>
              <ImgR productbg width="60px" height="60px" src={softChairs} />
            </ImgDivContainer>

            <FlexContainer>
              <DivColumn Egap growCart>
                <H4>T-shirts with multiple colors, for men and lady</H4>
                <Span gray>
                  Size: medium, Color: blue, Material: Plastic <br /> Seller:
                  Artel Market
                </Span>
                <FlexRow>
                  <Button red>Remove</Button>
                  <Button>Save for later</Button>
                </FlexRow>
              </DivColumn>

              <DivColumnResponsive Egap>
                <P weight>$170.50</P>
                <Select>
                  <option value="Qty: 1" selected>
                    Qty: 1
                  </option>
                  <option value="Qty: 3">Qty: 3</option>
                  <option value="Qty: 8">Qty: 8</option>
                </Select>
              </DivColumnResponsive>
            </FlexContainer>
          </Div1Container>
          <Div1Container>
            <DivRowResponsive>
              <ButtonHome
                to="/Product"
                NoMargin
                fitContent
                style={{ display: "flex", gap: "10px" }}
              >
                <Img src={VectorShop} />
                Back to shop
              </ButtonHome>
              <Button style={{ height: "100%" }}>Remove All</Button>
            </DivRowResponsive>
          </Div1Container>
        </Div1>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Div2>
            <Div2Container>
              <Div1 Nomargin Noborder padding>
                <Span>Have a coupon</Span>
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <Input
                    type="text"
                    placeholder="Add coupon"
                    style={{ flexGrow: 1 }}
                  />
                  <Button height style={{ flexGrow: 1 }}>
                    Apply
                  </Button>
                </div>
              </Div1>
            </Div2Container>
          </Div2>

          <Div2 Nomargin>
            <Div2Container>
              <Div1 Nomargin Noborder padding>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <Span>Subtotal:</Span>
                  <Span>$1403.97</Span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <Span>Discount</Span>
                  <Span style={{ color: "#FA3434" }}>- $60.00</Span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <Span>Tax</Span>
                  <Span style={{ color: "#00B517" }}>+ $14.00</Span>
                </div>
                <Line />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  <Span Weight>Total:</Span>
                  <Span Weight>$1357.97</Span>
                </div>
                <ButtonGreen>Checkout</ButtonGreen>
                <SubContainer style={{ justifyContent: "center" }}>
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
                  <PaymentOption>
                    <img src={pay} alt="pay logo" />
                  </PaymentOption>
                </SubContainer>
              </Div1>
            </Div2Container>
          </Div2>
        </div>
      </Div>
    </Container>
  );
};
export default Section1C;
