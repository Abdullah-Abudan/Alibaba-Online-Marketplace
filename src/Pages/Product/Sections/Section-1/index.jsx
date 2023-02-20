import styled from "styled-components";
import { Img } from "../../../../Component/Header";
import Container from "../../../../Component/Container";
import { Line } from "../../../List/Common/Range";
import { ButtonHome } from "../../../Home/Sections/section-1-Home";

// img
import tshirtGray from "../../../../Images/tshirtGray.svg";
import tshirtGray1 from "../../../../Images/tshirtGray1.svg";
import tshirtGray2 from "../../../../Images/tshirtGray2.svg";
import tshirtGray3 from "../../../../Images/tshirtGray3.svg";
import tshirtGray4 from "../../../../Images/tshirtGray4.svg";
import True from "../../../../Images/true.svg";
import star from "../../../../Images/star.svg";
import starEmpty from "../../../../Images/starEmpty.svg";
import dot from "../../../../Images/Dot.svg";
import comment from "../../../../Images/comment.svg";
import king from "../../../../Images/king.svg";
import r from "../../../../Images/R.svg";
import germany from "../../../../Images/DEFlag.svg";
import verify from "../../../../Images/verify.svg";
import earth from "../../../../Images/earth.svg";
import heart from "../../../../Images/heartList.svg";
import { LinkE } from "../../../List/Common/Features";

export const Div = styled.div`
  border: 1px solid rgb(227, 232, 238);
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 18px;
  margin-top: 20px;
  padding: 18px;
  background-color: #ffffff;
  @media (max-width: 1199px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Navigation = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 6px;
  @media (max-width: 767px) {
    gap:0;
    }
`;
const NavigationItem = styled.li`
  cursor: pointer;
  border: 1px solid rgb(227 232 238);
  border-radius: 4px;
  flex-grow: 1;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    border: 2px solid rgb(227 232 238);
  }
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    border:0;
    gap:0;
    &:nth-child(5){
      display:none;
    }
  }

`;

const Div1Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 380px;
`;
const ImgDiv1Container = styled.div`
  border: 1px solid rgb(227 232 238);
  border-radius: 4px;
  @media (max-width: 767px) {
    width: 50%;
    margin:auto;
  }
`;

const Div2Container = styled.div`
  width: 430px;
  @media (max-width: 1199px) {
    width: 100%;
  }
`;
const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.Nogap ?  "0" : "6px")};
  margin: ${(props) => (props.margin ? "16px 0" : "0px")};
  position: relative; //For save for Later in Product

`;
const Span = styled.span`
  color: #00b517;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  display: flex;
  align-items: center;
  gap: 6px;
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 6px;
  padding: ${(props) => (props.padding ? "14px 0" : "0px")};
  @media (max-width: 579px) {
    gap:0;
  }
`;
const Li = styled.li`
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;
  flex-grow: 1;
  display: flex;
  gap: 4px;
  align-items: center;
  color: ${(props) => (props.dark ? "#505050" : "#8b96a5")};
  width: ${(props) =>
    props.width
      ? "50%"
      : ""}; //To parallel the elements (Li) each other in each line
  &:hover {
    font-weight: bold;
  }
  @media (max-width: 992px) {
    &:nth-child(2){
      display:none
    }
    &:nth-child(3){
      display:none
    }
  }
`;
const DivSalary = styled.div`
  display: flex;
  gap: 35px;
  background: #fff0df;
  padding: 20px 14px;
  margin-top: 16px;
`;
const H3 = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => (props.red ? " #FA3434" : "")};
`;
const DescrPrice = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #606060;
`;
const Div3Container = styled.div`
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  padding: 10px 16px;
  height: fit-content;  

  @media (max-width: 1199px) {
    width: 100%;
  }
`;
const DivR = styled.div`
  background: #c6f3f1;
  border-radius: 4px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SpanDiv3 = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: ${(props) => (props.secondary ? "#8B96A5" : "#1C1C1C")};
`;
const DivRow = styled.span`
  display: flex;
  gap: 20px;
  padding: 10px 0;
`;
const DivSave= styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    position: absolute;
    bottom: -18%;
    width: 100%;
    @media (max-width: 1199px) {
    position: relative;
  }
`;

export const H4 = styled.h4`
  font-size: ${({ theme }) => theme.fonts.h4.size};
  font-weight: ${({ theme }) => theme.fonts.h4.weight};
  line-height: ${({ theme }) => theme.fonts.h4.lh};
  letter-spacing: ${({ theme }) => theme.fonts.h4.spacing};
  color: ${(props) => (props.white ? "#FFFFFF" : "")};
  user-select: none;
`;
const Section1P = () => {
  return (
    <Container>
      <Div>
        <Div1Container>
          <ImgDiv1Container>
            <Img src={tshirtGray} width="100%" height="100%" />
          </ImgDiv1Container>
          <Navigation>
            <NavigationItem>
              <Img width="48px" height="48px" src={tshirtGray} />
            </NavigationItem>
            <NavigationItem>
              <Img width="48px" height="48px" src={tshirtGray1} />
            </NavigationItem>
            <NavigationItem>
              <Img width="48px" height="48px" src={tshirtGray2} />
            </NavigationItem>
            <NavigationItem>
              <Img width="48px" height="48px" src={tshirtGray3} />
            </NavigationItem>
            <NavigationItem>
              <Img width="48px" height="48px" src={tshirtGray4} />
            </NavigationItem>
            <NavigationItem>
              <Img width="48px" height="48px" src={tshirtGray} />
            </NavigationItem>
          </Navigation>
        </Div1Container>
        <Div2Container>
          <DivFlex>
            <Span>
              <Img src={True} /> In stock
            </Span>
            <H4>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</H4>
            <Ul>
              <Li>
                <Img src={star} />
                <Img src={star} />
                <Img src={star} />
                <Img src={star} />
                <Img src={starEmpty} width="20px" height="18px" />
                <Span style={{ padding: "0 6px" }}>9.3</Span>
              </Li>
              <Li>
                <Img src={dot} />
              </Li>
              <Li>
                <Img src={comment} />
                32 reviews
              </Li>
              <Li>
                <Img src={dot} />
              </Li>
              <Li>
                <Img src={king} />
                154 sold
              </Li>
              <Navigation />
            </Ul>
          </DivFlex>
          <DivSalary>
            <DivFlex>
              <H3 red>$98.00</H3>
              <DescrPrice>50-100 pcs</DescrPrice>
            </DivFlex>
            <DivFlex
              style={{
                borderLeft: "1px solid rgb(189, 193, 200)",
                padding: "0 12px 0",
              }}
            >
              <H3>$90.00</H3>
              <DescrPrice>100-700 pcs</DescrPrice>
            </DivFlex>
            <DivFlex
              style={{
                borderLeft: "1px solid rgb(189, 193, 200)",
                padding: "0 12px 0",
              }}
            >
              <H3>$78.00</H3>
              <DescrPrice>700+ pcs</DescrPrice>
            </DivFlex>
          </DivSalary>

          <DivFlex margin>
            <Ul padding>
              <Li width>Price:</Li>
              <Li dark width>
                Classic Shoes
              </Li>
            </Ul>

            <Line />

            <Ul padding>
              <Li width>Material:</Li>
              <Li dark width>
                Plastic Material
              </Li>
            </Ul>
            <Ul padding>
              <Li width>Design:</Li>
              <Li dark width>
                Modern Nice
              </Li>
            </Ul>
            <Ul padding>
              <Li width>Customization:</Li>
              <Li dark width>
                Refund Policy
              </Li>
            </Ul>

            <Line />
            <Ul padding>
              <Li width>Customization:</Li>
              <Li dark width>
              Customized Logo And Design Custom Packages
              </Li>
            </Ul>
            <Ul padding>
              <Li width>Protection</Li>
              <Li dark width>
                Refund Policy
              </Li>
            </Ul>
            <Ul padding>
              <Li width>Warranty:</Li>
              <Li dark width>
                2 Years Full Warranty
              </Li>
            </Ul>
          </DivFlex>
          <Line />
        </Div2Container>
        <Div3Container>
          <DivFlex>
            <DivRow>
              <DivR>
                <Img src={r} />
              </DivR>
              <DivFlex Nogap >
                <SpanDiv3>Supplier</SpanDiv3>
                <SpanDiv3>Guanjoi Trading LLC</SpanDiv3>
              </DivFlex>
            </DivRow>
            <Line />
            <DivRow>
              <Img src={germany} />
              <SpanDiv3 secondary>Germany, Berlin</SpanDiv3>
            </DivRow>
            <DivRow>
              <Img src={verify} width="25px" height="18px" />
              <SpanDiv3 secondary>Verified Seller</SpanDiv3>
            </DivRow>
            <DivRow>
              <Img src={earth} width="25px" height="18px" />
              <SpanDiv3 secondary>Worldwide shipping</SpanDiv3>
            </DivRow>

            <ButtonHome NoMargin>Send inquiry</ButtonHome>
            <ButtonHome white NoMargin>
            Seller’s profile
            </ButtonHome>
            <DivSave>
          <Img src={heart} />
          <LinkE>Save for Later</LinkE>
        </DivSave>
          </DivFlex>
        </Div3Container>
      </Div>
    </Container>
  );
};
export default Section1P;
