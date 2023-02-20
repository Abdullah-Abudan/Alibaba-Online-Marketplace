import styled from "styled-components";
import { Img, P } from "../../../../Component/Header";
import Container from "../../../../Component/Container";
import { H4 } from "../../Sections/section-1-Home";
import TileHome from "../../../../Component/TitleHome";
// img
import tshirt from "../../../../Images/tshirt.svg";
import jacketInformal from "../../../../Images/jaketinformal.svg";
import jacketformal from "../../../../Images/jaketformal.svg";
import jensBag from "../../../../Images/jensBag.svg";
import modernBag from "../../../../Images/modernBag.svg";
import short from "../../../../Images/short.svg";
import headfoneWhite from "../../../../Images/headphoneWhite.svg";
import pot from "../../../../Images/pot.svg";
import termos from "../../../../Images/termos.svg";

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid rgb(227, 232, 238);
  border-radius: 6x;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.light};
  @media (max-width: 768px) {
    text-align: center;
  }
  .imgAuto {
    @media (max-width: 768px) {
      margin: auto;
    }
  }
`;
const PEdit = styled(P)`
  color: ${(props) => props.theme.colors.secondary[500]};
  font-size: 16px;
`;
const Section6H = () => {
  return (
    <Container>
      <TileHome>Recommended items</TileHome>
      <Div>
        <Card>
          <Img className="imgAuto" src={tshirt} width="170px" height="170px" />
          <H4>$10.30</H4>
          <PEdit>T-shirts with multiple colors, for men</PEdit>
        </Card>
        <Card>
          <Img
            className="imgAuto"
            src={jacketInformal}
            width="170px"
            height="170px"
          />
          <H4>$10.30</H4>
          <PEdit>Jeans shorts for men blue color</PEdit>
        </Card>

        <Card>
          <Img
            className="imgAuto"
            src={jacketformal}
            width="170px"
            height="170px"
          />
          <H4>$10.30</H4>
          <PEdit>Brown winter coat medium size</PEdit>
        </Card>
        <Card>
          <Img className="imgAuto" src={jensBag} width="170px" height="170px" />
          <H4>$12.50</H4>
          <PEdit>Leather wallet</PEdit>
        </Card>
        <Card>
          <Img
            className="imgAuto"
            src={modernBag}
            width="170px"
            height="170px"
          />
          <H4>$34.00</H4>
          <PEdit>Jeans bag for travel for men</PEdit>
        </Card>
        <Card>
          <Img className="imgAuto" src={short} width="170px" height="170px" />
          <H4>$99.00</H4>
          <PEdit>Canon camera black, 100x zoom</PEdit>
        </Card>
        <Card>
          <Img
            className="imgAuto"
            src={headfoneWhite}
            width="170px"
            height="170px"
          />
          <H4>$9.99</H4>
          <PEdit>Headset for gaming with mic</PEdit>
        </Card>
        <Card>
          <Img
            className="imgAuto"
            src={modernBag}
            width="170px"
            height="170px"
          />
          <H4>$8.99</H4>
          <PEdit>Smartwatch silver color modern</PEdit>
        </Card>
        <Card>
          <Img className="imgAuto" src={pot} width="170px" height="170px" />
          <H4>$10.30</H4>
          <PEdit>T-shirts with multiple colors, for men</PEdit>
        </Card>
        <Card>
          <Img className="imgAuto" src={termos} width="170px" height="170px" />
          <H4>$80.95</H4>
          <PEdit>Jeans bag for travel for men</PEdit>
        </Card>
      </Div>
    </Container>
  );
};
export default Section6H;
