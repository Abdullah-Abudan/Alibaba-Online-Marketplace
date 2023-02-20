import React from "react";
import styled from "styled-components";
import Container from "../../../Component/Container";
import { Img } from "../../Header";
import { P } from "../../Header";
import { Link } from "react-router-dom";
import Background from "../../BackgroundLogSign";
// Img
import logo from "../../../Images/logo.svg";
import facebook from "../../../Images/facebookFooter.svg";
import twitter from "../../../Images/twitterFooter.svg";
import linkedln from "../../../Images/LinkedlnFooter.svg";
import instagram from "../../../Images/instagramFooter.svg";
import youtube from "../../../Images/youtubeFooter.svg";
import US from "../../../Images/USFlag.svg";
import VectorTop from "../../../Images/VectorTop.svg";
import appstore from "../../../Images/appstore.svg";
import googleplay from "../../../Images/googleplay.svg";

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 2fr repeat(5, 1fr);
  background-color: ${(props) => props.theme.colors.light};
  font-size: 14px;
  padding: 20px 0;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const DivContainer1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding-right: 20px;
  @media (max-width: 992px) {
    align-items: center;
  }
  @media (max-width: 492px) {
    align-items: center;
    text-align: center;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  & img:hover {
    background-color: #6a6969;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #434344;
  }
`;

const ImgE = styled(Img)`
  width: fit-content;
`;
const PE = styled(P)`
  font-size: 16px;
  font-weight: ${(props) => (props.Nav ? "600" : "400")};
  margin-top: ${(props) => (props.Nav ? "0" : "10px")};
  color: ${(props) => (props.Nav ? "rgb(28, 28, 28)" : "#606060")};
  line-height: 24px;
  margin-left: 0;
`;

const FooterCopyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 492px) {
    flex-direction: column;
  }
`;
const DivCopyright1 = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #606060;
`;
const DivCopyright2 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const SelectLang = styled.select`
  padding: 10px;
  border: none;
  font-size: 16px;
  outline: none;
  flex-grow: 1;
  cursor: context-menu;
  background-color: ${(props) => props.theme.colors.transparent};
  appearance: none; // hide vector
`;
const Navigation = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 12px;
  @media (max-width: 992px) {
    display: none;
  }
`;
const NavigationItem = styled.li`
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;
  & a:hover {
    font-weight: bold;
  }
`;
const NavigationLink = styled(Link)`
  text-decoration: none;
  color: rgb(139, 150, 165);
  font-weight: 400;
  font-size: 16px;
`;
const Footer2 = () => (
  <>
    <Container>
      <FooterContainer>
        <DivContainer1>
          <ImgE src={logo} />
          <PE dark>
            Best information about the company gies here but now lorem ipsum is
          </PE>
          <Div>
            <Link
              to="https://www.facebook.com/Alibaba.comGlobal?spm=a2700.8293689-ar_SA.0.0.3cea2cefdYZDTA&file=Alibaba.comGlobal"
              target="_blank"
            >
              <Img src={facebook} />
            </Link>
            <Link
              to="https://twitter.com/AlibabaB2B?spm=a2700.8293689-ar_SA.0.0.3cea2cefdYZDTA"
              target="_blank"
            >
              <Img src={twitter} />
            </Link>
            <Link
              to="https://www.linkedin.com/company/alibaba-com?spm=a2700.8293689-ar_SA.0.0.3cea2cefdYZDTA"
              target="_blank"
            >
              <Img src={linkedln} />
            </Link>
            <Link
              to="https://www.instagram.com/alibaba.com_official/?spm=a2700.8293689-ar_SA.0.0.3cea2cefdYZDTA"
              target="_blank"
            >
              <Img src={instagram} />
            </Link>
            <Link
              to="https://www.youtube.com/channel/UCSoIxtP6J6oNo_d1njSluxw?spm=a2700.8293689-ar_SA.0.0.3cea2cefdYZDTA"
              target="_blank"
            >
              <Img src={youtube} />
            </Link>
          </Div>
        </DivContainer1>
        <Navigation>
          <PE Nav>About</PE>
          <NavigationItem>
            <NavigationLink>About Us</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink>Find store</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink>Categories</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink>Blogs</NavigationLink>
          </NavigationItem>
        </Navigation>

        <Navigation>
          <PE Nav>Partnership</PE>
          <NavigationItem>
            <NavigationLink>About Us</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink>Find store</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink>Categories</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink>Blogs</NavigationLink>
          </NavigationItem>
        </Navigation>

        <Navigation>
          <PE Nav>Information</PE>
          <NavigationItem>
            <NavigationLink>Help Center</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink>Money Refund</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink>Shipping</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink>Contact us</NavigationLink>
          </NavigationItem>
        </Navigation>

        <Navigation>
          <PE Nav>For users</PE>
          <NavigationItem>
            <NavigationLink>Login</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink>Register</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink>Settings</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink>My Orders</NavigationLink>
          </NavigationItem>
        </Navigation>

        <Navigation>
          <PE Nav>Get App</PE>
          <NavigationItem>
            <NavigationLink
              to="https://apps.apple.com/us/app/alibaba-for-iphone/id503451073?spm=a271h.11855717.jde82vki.2.18a23103Tnoeki"
              target="_blank"
            >
              {" "}
              <ImgE src={appstore} />{" "}
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink
              to="https://play.google.com/store/apps/details?spm=a271h.11855717.jde82vki.3.18a23103Tnoeki&id=com.alibaba.intl.android.apps.poseidon&referrer=pcmaindownload"
              target="_blank"
            >
              {" "}
              <ImgE src={googleplay} />{" "}
            </NavigationLink>
          </NavigationItem>
        </Navigation>
      </FooterContainer>
    </Container>

    <Background secondary>
      <Container>
        <FooterCopyright>
          <DivCopyright1>&copy; 2023 Ecommerce.</DivCopyright1>
          <DivCopyright2>
            <Img src={US} width="28px" height="20px" />
            <SelectLang>
              <option value="" selected>
                English
              </option>
            </SelectLang>
            <ImgE src={VectorTop} />
          </DivCopyright2>
        </FooterCopyright>
      </Container>
    </Background>
  </>
);
export default Footer2;
