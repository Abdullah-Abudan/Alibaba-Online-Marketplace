import styled from "styled-components";
import { Img, LinkHeader } from "../../../../Component/Header";
import Container from "../../../../Component/Container";
import { Line } from "../../../List/Common/Range";
import { useState } from "react";
// img
import correct from "../../../../Images/trueGray.svg";
import jacketInformal from "../../../../Images/jaketinformal.svg";
import tshirt from "../../../../Images/tshirt.svg";
import jacketformal from "../../../../Images/jaketformal.svg";
import tshirtBlue from "../../../../Images/tshirtBlue.svg";

const Div = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 18px;
  @media (max-width: 1199px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
const Div1 = styled.div`
  margin-top: 20px;
  padding: 18px;
  background-color: #ffffff;
  border: 1px solid rgb(227, 232, 238);
  border-radius: 8px;
`;
const Div2 = styled(Div1)`
  height: fit-content;
`;
const Div1Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Navigation = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 26px;
`;
const NavigationItem = styled.li`
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;
  margin-bottom: 9px; //For Line
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 992px) {
    &:nth-child(2){
      display:none
    }
    &:nth-child(4){
      display:none
    }
  }
`;
const Link = styled(LinkHeader)`
  color: ${(props) => (props.isActive ? "#0D6EFD" : "")};
`;
const DescrProduct = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #505050;
`;
const DivTabel = styled.div`
  border: 1px solid #eff2f4;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 20px 0;
`;
const Div1Tabel = styled.div`
  background: #eff2f4;
  color: #505050;
  padding: 10px;
  border: 1px solid rgb(230 230 230);
  border-top: 0;
  border-left: 0;
  width: 40%;
`;
const Div2Tabel = styled.div`
  background: #ffffff;
  color: #505050;
  padding: 10px;
  border: 1px solid rgb(239, 242, 244);
  border-top: 0;
  border-left: 0;
  border-right: 0;
  width: 60%;
`;
const Div2Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 1199px) {
    width: 100%;
    margin: auto;
  }
`;
const ImgDiv2Container = styled.div`
  border: 1px solid rgb(227 232 238);
  border-radius: 4px;
`;

const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.gapLike ? "16px" : "6px")};
  margin: ${(props) => (props.margin ? "16px 0" : "0px")};
`;
const Span = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: ${(props) => (props.gray ? "#8b96a5" : "#505050")};
`;
const DivRow = styled.div`
  display: flex;
  gap: 18px;
`;
const P = styled(Span)`
  color: #1c1c1c;
`;
export const H4 = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #1c1c1c;
  user-select: none;
`;
 const DivResponsive = styled.div`
  display: grid;
  gap: 10px;
  @media (max-width: 1199px) {
    grid-template-columns: 1fr;
  }
`;
const Section2P = () => {
  const [activePage, setActivePage] = useState(1);
  return (
    <Container>
      <Div>
        <Div1>
          <Div1Container>
            <Navigation>
              <NavigationItem>
                <Link
                  productColor
                  onClick={() => setActivePage(1)}
                  isActive={activePage === 1}
                >
                  Description
                </Link>
              </NavigationItem>
              <NavigationItem>
                <Link
                  productColor
                  onClick={() => setActivePage(2)}
                  isActive={activePage === 2}
                >
                  Reviews
                </Link>
              </NavigationItem>
              <NavigationItem>
                <Link
                  productColor
                  onClick={() => setActivePage(3)}
                  isActive={activePage === 3}
                >
                  Shipping
                </Link>
              </NavigationItem>
              <NavigationItem>
                <Link
                  productColor
                  onClick={() => setActivePage(4)}
                  isActive={activePage === 4}
                >
                  About company
                </Link>
              </NavigationItem>
            </Navigation>
            <Line />
            <DescrProduct>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </DescrProduct>
            <DivTabel>
              <Div1Tabel>Model</Div1Tabel>
              <Div2Tabel>#8786867</Div2Tabel>
              <Div1Tabel>Style</Div1Tabel>
              <Div2Tabel>Classic style</Div2Tabel>
              <Div1Tabel>Certificate</Div1Tabel>
              <Div2Tabel>ISO-898921212</Div2Tabel>
              <Div1Tabel>Size</Div1Tabel>
              <Div2Tabel>34mm x 450mm x 19mm</Div2Tabel>
              <Div1Tabel>Memory</Div1Tabel>
              <Div2Tabel>36GB RAM</Div2Tabel>
            </DivTabel>
            <DivFlex>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Img src={correct} />
                <Span>Some great feature name here</Span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Img src={correct} />
                <Span>Lorem ipsum dolor sit amet, consectetur</Span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Img src={correct} />
                <Span>Duis aute irure dolor in reprehenderit</Span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Img src={correct} />
                <Span>Some great feature name here</Span>
              </div>
            </DivFlex>
          </Div1Container>
        </Div1>
        <Div2>
          <Div2Container>
            <DivFlex gapLike>
              <H4>You my like</H4>

              <DivResponsive>
                <DivRow>
                  <ImgDiv2Container>
                    <Img width="55px" height="55px" src={jacketformal} />
                  </ImgDiv2Container>
                  <DivFlex>
                    <P>Apple Watch Series Space Gray</P>
                    <Span>$7.00 - $99.50</Span>
                  </DivFlex>
                </DivRow>
                <DivRow>
                  <ImgDiv2Container>
                    <Img width="55px" height="55px" src={tshirt} />
                  </ImgDiv2Container>
                  <DivFlex>
                    <P>Apple Watch Series Space Gray</P>
                    <Span>$7.00 - $99.50</Span>
                  </DivFlex>
                </DivRow>
                <DivRow>
                  <ImgDiv2Container>
                    <Img width="55px" height="55px" src={jacketInformal} />
                  </ImgDiv2Container>
                  <DivFlex>
                    <P>Apple Watch Series Space Gray</P>
                    <Span>$7.00 - $99.50</Span>
                  </DivFlex>
                </DivRow>
                <DivRow>
                  <ImgDiv2Container>
                    <Img width="55px" height="55px" src={tshirtBlue} />
                  </ImgDiv2Container>
                  <DivFlex>
                    <P>Apple Watch Series Space Gray</P>
                    <Span>$7.00 - $99.50</Span>
                  </DivFlex>
                </DivRow>
                <DivRow>
                  <ImgDiv2Container>
                    <Img width="55px" height="55px" src={tshirt} />
                  </ImgDiv2Container>
                  <DivFlex>
                    <P>Apple Watch Series Space Gray</P>
                    <Span>$7.00 - $99.50</Span>
                  </DivFlex>
                </DivRow>
              </DivResponsive>
            </DivFlex>
          </Div2Container>
        </Div2>
      </Div>
    </Container>
  );
};
export default Section2P;
