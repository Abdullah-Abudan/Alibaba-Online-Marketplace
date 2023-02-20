import styled from "styled-components";
import { Img, P } from "../../../../Component/Header";
import Container from "../../../../Component/Container";
import { H4 } from "../../Sections/section-1-Home";
import ButtonElement from "../../../../Component/Button";

// img
import outdoor from "../../../../Images/homeOutdoor.svg";
import softCharis from "../../../../Images/softChairs.svg";
import softChari from "../../../../Images//sofaChair.svg";
import kitchenDishes from "../../../../Images/kitchenDishes.svg";
import pot from "../../../../Images/pot.svg";
import kitchenMixer from "../../../../Images/kitchenMixer.svg";
import blenders from "../../../../Images/blenders.svg";
import homeAppliance from "../../../../Images/homeAppliance.svg";
import coffeMaker from "../../../../Images/coffeMaker.svg";

export const Div = styled.div`
  border: 1px solid rgb(227, 232, 238);
  border-radius: 8px;
  display: flex;
  @media (max-width: 992px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  margin-top: 20px;
  background-color: #ffffff;
`;

export const Div2Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #ffffff;
  width: 80%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const SubDiv2Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  border-left: 0;
  border-top: 0;
  border: 1px solid rgb(227, 232, 238);
  height: auto;
  width: 25%;
  @media (max-width: 992px) {
    width: 50%;
  }
`;

export const DivFImg = styled.div`
  background-size: cover;
  background-position: center;
  padding: 60px 45px;
  background-image: linear-gradient(
      0deg,
      rgba(255, 232, 186, 0.4),
      rgba(255, 232, 186, 0.4)
    ),
    url(${outdoor});
  opacity: 0.8;
  width: 20%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const SubDiv2ContainerText = styled.div``;
const Section3H = () => {
  return (
    <Container>
      <Div>
        <DivFImg>
          <H4>
            Home and <br /> outdoor
          </H4>
          <ButtonElement weight light>
            Source now
          </ButtonElement>
        </DivFImg>
        <Div2Container>
          <SubDiv2Container>
            <SubDiv2ContainerText>
              <H4>Soft chairs</H4>
              <P>
                From <br /> USD 19
              </P>
            </SubDiv2ContainerText>
            <Img src={softCharis} width="75px" height="75px" />
          </SubDiv2Container>
          <SubDiv2Container>
            <SubDiv2ContainerText>
              <H4>
                Sofa & <br /> chair
              </H4>
              <P>
                From <br /> USD 19
              </P>
            </SubDiv2ContainerText>
            <Img src={softChari} width="75px" height="75px" />
          </SubDiv2Container>
          <SubDiv2Container>
            <SubDiv2ContainerText>
              <H4>
                Kitchen <br /> dishes
              </H4>
              <P>
                From <br /> USD 19
              </P>
            </SubDiv2ContainerText>
            <Img src={kitchenDishes} width="75px" height="75px" />
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
            <Img src={pot} width="75px" height="75px" />
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
            <Img src={kitchenMixer} width="75px" height="75px" />
          </SubDiv2Container>
          <SubDiv2Container>
            <SubDiv2ContainerText>
              <H4>Blenders</H4>
              <P>
                From <br /> USD 19
              </P>
            </SubDiv2ContainerText>
            <Img src={blenders} width="75px" height="75px" />
          </SubDiv2Container>
          <SubDiv2Container>
            <SubDiv2ContainerText>
              <H4>
                Home <br /> appliance
              </H4>
              <P>
                From <br /> USD 19
              </P>
            </SubDiv2ContainerText>
            <Img src={homeAppliance} width="75px" height="75px" />
          </SubDiv2Container>
          <SubDiv2Container>
            <SubDiv2ContainerText>
              <H4>
                Coffee <br /> maker
              </H4>
              <P>
                From <br /> USD 19
              </P>
            </SubDiv2ContainerText>
            <Img src={coffeMaker} width="75px" height="75px" />
          </SubDiv2Container>
        </Div2Container>
      </Div>
    </Container>
  );
};
export default Section3H;
