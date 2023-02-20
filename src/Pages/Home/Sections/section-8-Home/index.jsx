import styled from "styled-components";
import { P } from "../../../../Component/Header";
import Container from "../../../../Component/Container";
import TileHome from "../../../../Component/TitleHome";

import AE from "../../../../Images/AEFlag.svg";
import AU from "../../../../Images/AUFlag.svg";
import US from "../../../../Images/USFlag.svg";
import RU from "../../../../Images/RUFlag.svg";
import IT from "../../../../Images/ITFlag.svg";
import DK from "../../../../Images/DKFlag.svg";
import FR from "../../../../Images/FRFlag.svg";
import CN from "../../../../Images/CNFlag.svg";
import UK from "../../../../Images/UKFlag.svg";
import { Link } from "react-router-dom";

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 992px) {
    padding: 0 20px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Flag = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const FlagImg = styled.img`
  width: 28px;
  height: 20px;
`;
const FlagData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  user-select: none;
`;
const PEdit = styled(P)`
  color: ${(props) => props.theme.colors.dark};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;
const SpanLink = styled(Link)`
  color: ${(props) => props.theme.colors.secondary[500]};
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  text-decoration: none;
`;
const Section7H = () => {
  return (
    <Container>
      <TileHome>Suppliers by region</TileHome>
      <Div>
        <Flag>
          <FlagImg src={AE} />
          <FlagData>
            <PEdit>Arabic Emirates</PEdit>
            <SpanLink to="https://www.alibaba.com/showroom/shop-name.html">
              shopname.ae
            </SpanLink>
          </FlagData>
        </Flag>
        <Flag>
          <FlagImg src={AU} />
          <FlagData>
            <PEdit>Australia</PEdit>
            <SpanLink to="#">shopname.ae</SpanLink>
          </FlagData>
        </Flag>
        <Flag>
          <FlagImg src={US} />
          <FlagData>
            <PEdit>United States</PEdit>
            <SpanLink to="#">shopname.ae</SpanLink>
          </FlagData>
        </Flag>
        <Flag>
          <FlagImg src={RU} />
          <FlagData>
            <PEdit>Russia</PEdit>
            <SpanLink to="#">shopname.ae</SpanLink>
          </FlagData>
        </Flag>
        <Flag>
          <FlagImg src={IT} />
          <FlagData>
            <PEdit>Italy</PEdit>
            <SpanLink to="#">shopname.ae</SpanLink>
          </FlagData>
        </Flag>
        <Flag>
          <FlagImg src={DK} />
          <FlagData>
            <PEdit>Denmark</PEdit>
            <SpanLink to="#">shopname.ae</SpanLink>
          </FlagData>
        </Flag>
        <Flag>
          <FlagImg src={FR} />
          <FlagData>
            <PEdit>France</PEdit>
            <SpanLink to="#">shopname.ae</SpanLink>
          </FlagData>
        </Flag>
        <Flag>
          <FlagImg src={AE} />
          <FlagData>
            <PEdit>Arabic Emirates</PEdit>
            <SpanLink to="#">shopname.ae</SpanLink>
          </FlagData>
        </Flag>
        <Flag>
          <FlagImg src={CN} />
          <FlagData>
            <PEdit>China</PEdit>
            <SpanLink to="https://www.alibaba.com/showroom/shop-name.html">
              {" "}
              shopname.ae
            </SpanLink>
          </FlagData>
        </Flag>
        <Flag>
          <FlagImg src={UK} />
          <FlagData>
            <PEdit>Great Britain</PEdit>
            <SpanLink to="#">shopname.ae</SpanLink>
          </FlagData>
        </Flag>
      </Div>
    </Container>
  );
};
export default Section7H;
