import styled from "styled-components";
import { Img, P } from "../../../../Component/Header";
import Container from "../../../../Component/Container";
import TileHome from "../../../../Component/TitleHome";
import searchIcon from "../../../../Images/searchIcon.svg";
import customizeIcon from "../../../../Images/customizeIcon.svg";
import sendIcon from "../../../../Images/sendIcon.svg";
import productIcon from "../../../../Images/productIcon.svg";
import searchImg from "../../../../Images/searchImg.svg";
import customizeImg from "../../../../Images/customizeImg.svg";
import sendImg from "../../../../Images/sendImg.svg";
import productImg from "../../../../Images/productImg.svg";

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(227, 232, 238);
  border-radius: 6x;
`;
const DivImg = styled.img`
  width: 100%;
  height: auto;
  opacity: 0.5;
`;
const Div2 = styled.div`
  padding: 16px;
  background-color: ${(props) => props.theme.colors.light};
  position: relative;
`;
const Overly = styled.div`
  background: linear-gradient(rgb(68, 64, 68), rgb(77, 68, 68));
`;
const DivIcon = styled.div`
  width: 55px;
  height: 55px;
  background-color: #d1e7ff;
  border: 2px solid #ffffff;
  border-radius: 50%;
  position: absolute;
  top: -27.5px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    top: -34.5px;
    right: 8px;
  }
`;
const PEdit = styled(P)`
  color: ${(props) => props.theme.colors.dark};
  font-size: 16px;
  font-weight: 500;
`;
const Section7H = () => {
  return (
    <Container>
      <TileHome>Our extra services</TileHome>
      <Div>
        <ServiceCard>
          <Overly>
            <DivImg src={searchImg} />
          </Overly>
          <Div2>
            <PEdit>
              Source from <br /> Industry Hubs
            </PEdit>
            <DivIcon>
              <Img src={searchIcon} />
            </DivIcon>
          </Div2>
        </ServiceCard>
        <ServiceCard>
          <Overly>
            <DivImg src={customizeImg} />
          </Overly>
          <Div2>
            <PEdit>
              Customize Your <br /> Products
            </PEdit>
            <DivIcon>
              <Img src={customizeIcon} />
            </DivIcon>
          </Div2>
        </ServiceCard>
        <ServiceCard>
          <Overly>
            <DivImg src={sendImg} />
          </Overly>
          <Div2>
            <PEdit>
              Fast, reliable shipping <br /> by ocean or air
            </PEdit>
            <DivIcon>
              <Img src={sendIcon} />
            </DivIcon>
          </Div2>
        </ServiceCard>
        <ServiceCard>
          <Overly>
            <DivImg src={productImg} />
          </Overly>
          <Div2>
            <PEdit>
              Product monitoring <br /> and inspection
            </PEdit>
            <DivIcon>
              <Img src={productIcon} />
            </DivIcon>
          </Div2>
        </ServiceCard>
      </Div>
    </Container>
  );
};
export default Section7H;
