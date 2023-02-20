import { Link } from "react-router-dom";
import styled from "styled-components";
import { H4 } from "../../../Pages/Home/Sections/section-1-Home";
import Container from "../../Container";

const MainContainer = styled.div`
  background-color: rgb(239, 242, 244);
  padding: 20px 0px 70px;
  @media (max-width: 768px) {
   overflow: hidden;
  }
`;

const MainColor = styled.div`
  background-color: #005ade;
  padding: 25px 20px;
  position: relative;
`;

const DivFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled(Link)`
  background: #ff9017;
  border-radius: ${(props) => props.theme.borderRadius.sm};
  color: ${(props) => props.theme.colors.light};
  padding: 12px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  z-index: 1;
  @media (max-width: 510px) {
   margin: auto;
  }
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.light};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  opacity: 0.7;
`;

const Clip = styled.div`
  background-color: #237cff;
  clip-path: polygon(75% 0%, 100% 0, 100% 100%, 50% 100%, 43% 0);
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 60%;
`;
 const DivResponsive = styled.div`
  @media (max-width: 510px) {
    display:none;
  }
`;
const FooterE1 = () => {
  return (
    <MainContainer>
      <Container>
        <MainColor>
          <DivFlex>
            <DivResponsive>
              <H4 white>Super discount on more than 100 USD</H4>
              <Span>Have you ever finally just write dummy info</Span>
            </DivResponsive>
            <Button to="/List">Shop now</Button>
          </DivFlex>
          <Clip />
        </MainColor>
      </Container>
    </MainContainer>
  );
};
export default FooterE1;
