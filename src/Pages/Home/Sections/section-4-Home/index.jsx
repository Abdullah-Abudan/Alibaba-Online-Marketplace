import styled from "styled-components";
import { Img, P } from "../../../../Component/Header";
import Container from "../../../../Component/Container";
import { H4 } from "../../Sections/section-1-Home";
import ButtonElement from "../../../../Component/Button";
import {
  Div,
  Div2Container,
  DivFImg,
  SubDiv2Container,
  SubDiv2ContainerText,
} from "../section-3-Home";

// img
import consumer from "../../../../Images/consumerElectronic.svg";
import smartWatch from "../../../../Images/smartwatch.svg";
import GoproCamera from "../../../../Images/goproCamera.svg";
import headphoneWhite from "../../../../Images/headphoneWhite.svg";
import termos from "../../../../Images/termos.svg";
import headphoe from "../../../../Images/headphone.svg";
import laptop from "../../../../Images/laptop.svg";
import smartphones from "../../../../Images/smartphone.svg";
import ElectricKattle from "../../../../Images/ElectricKattle.svg";

const DivFImgE = styled(DivFImg)`
  background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url(${consumer});
  width: 20%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
const Section4H = () => {
  return (
    <Container>
      <Div>
        <DivFImgE>
          <H4>
            Consumer <br /> electronics and <br /> gadgets
          </H4>
          <ButtonElement weight light>
            Source now
          </ButtonElement>
        </DivFImgE>
        <Div2Container>
          <SubDiv2Container>
            <SubDiv2ContainerText>
              <H4>Smart watches</H4>
              <P>
                From <br /> USD 19
              </P>
            </SubDiv2ContainerText>
            <Img src={smartWatch} width="75px" height="75px" />
          </SubDiv2Container>
          <SubDiv2Container>
            <SubDiv2ContainerText>
              <H4>Cameras</H4>
              <P>
                From <br /> USD 19
              </P>
            </SubDiv2ContainerText>
            <Img src={GoproCamera} width="75px" height="75px" />
          </SubDiv2Container>
          <SubDiv2Container>
            <SubDiv2ContainerText>
              <H4>Headphones</H4>
              <P>
                From <br /> USD 19
              </P>
            </SubDiv2ContainerText>
            <Img src={headphoneWhite} width="75px" height="75px" />
          </SubDiv2Container>
          <SubDiv2Container>
            <SubDiv2ContainerText>
              <H4>
                Smart <br /> watches
              </H4>
              <P>
                From <br /> USD 19
              </P>
            </SubDiv2ContainerText>
            <Img src={termos} width="75px" height="75px" />
          </SubDiv2Container>
          <SubDiv2Container>
            <SubDiv2ContainerText>
              <H4>
                Kitchen <br /> mixer
              </H4>
              <P>
                From <br /> USD 19
              </P>
            </SubDiv2ContainerText>
            <Img src={headphoe} width="75px" height="75px" />
          </SubDiv2Container>
          <SubDiv2Container>
            <SubDiv2ContainerText>
              <H4>Laptops & PC</H4>
              <P>
                From <br /> USD 19
              </P>
            </SubDiv2ContainerText>
            <Img src={laptop} width="75px" height="75px" />
          </SubDiv2Container>
          <SubDiv2Container>
            <SubDiv2ContainerText>
              <H4>Smartphones</H4>
              <P>
                From <br /> USD 19
              </P>
            </SubDiv2ContainerText>
            <Img src={smartphones} width="75px" height="75px" />
          </SubDiv2Container>
          <SubDiv2Container>
            <SubDiv2ContainerText>
              <H4>Electric kattle</H4>
              <P>
                From <br /> USD 19
              </P>
            </SubDiv2ContainerText>
            <Img src={ElectricKattle} width="75px" height="75px" />
          </SubDiv2Container>
        </Div2Container>
      </Div>
    </Container>
  );
};
export default Section4H;
