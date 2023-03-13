import { Link } from "react-router-dom";
import styled from "styled-components";
import { Img } from "../../../../Component/Header";
import { P } from "../../../../Component/Header";
import H3 from "../../../..//Component/TitleForm";
import ButtonElement from "../../../../Component/Button";
import Container from "../../../../Component/Container";
// img
import electronic from "../../../../Images/trending.svg";
import avtar from "../../../../Images/Avatar.svg";
export const Div = styled.div`
  border: 1px solid rgb(227, 232, 238);
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 10px;
  margin-top: 20px;
  padding: 18px;
  background-color: #ffffff;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
export const Navigation = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  gap: 4px;
  @media (max-width: 992px) {
    display: none;
  }
`;
const NavigationItem = styled.li`
  cursor: pointer;
  padding: 12px;
  border-radius: 6px;
  transition: all 0.3s ease-in-out 0s;
  background-color: ${(props) => (props.primary ? "#E5F1FF" : "")};
  &:hover {
    background-color: #e5f1ff;
  }
`;
const LinkHeader = styled(Link)`
  text-decoration: none;
  color: rgb(28, 28, 28);
  font-weight: bold;
`;
const Div1Container = styled.div`
  background-color: #e3f0ff;
  border-radius: 6px;
  padding: 12px 8px;
  font-size: 16px;
  font-weight: 400;
  height: fit-content;
  @media (max-width: 992px) {
    display: none;
  }
`;
const SubDiv1Container = styled.div`
  display: flex;
  gap: 9px;
`;
const Div2Container = styled.div`
  background-color: #f38332;
  border-radius: 6px;
  padding: 12px 8px;
  @media (max-width: 992px) {
    display: none;
  }
`;
const Div3Container = styled.div`
  background-color: #55bdc4;
  border-radius: 6px;
  padding: 12px 8px;
  @media (max-width: 992px) {
    display: none;
  }
`;
const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DivFImg = styled.div`
  background-size: cover;
  background-position: center;
  background-size: cover;
  padding: 60px 45px;
  background-image: url(${electronic});
`;
export const H4 = styled.h4`
  font-size: ${({ theme }) => theme.fonts.h4.size};
  font-weight: ${({ theme }) => theme.fonts.h4.weight};
  line-height: ${({ theme }) => theme.fonts.h4.lh};
  letter-spacing: ${({ theme }) => theme.fonts.h4.spacing};
  color: ${(props) => (props.white ? "#FFFFFF" : "")};
  user-select: none;
  @media (max-width: 992px) {
    font-size: 18px;
  }
`;

const PHome = styled(P)`
  font-size: 16px;
  color: ${(props) => props.theme.colors.light};
  font-weight: bold;
`;
export const ButtonHome = styled(Link)`
  background-color: ${(props) =>
    props.white ? props.theme.colors.light : props.theme.colors.primary[500]};
  border: ${({ theme }) => theme.borders.Cbtn};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${(props) =>
    props.white ? props.theme.colors.secondary[800] : props.theme.colors.light};
  transition: ${".5s ease-in-out 0s"};
  font-weight: bold;
  box-shadow: ${({ theme }) => theme.shadow.Cbtn};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 10px;
  font-size: 16px;
  margin: ${(props) => (props.NoMargin ? "" : "10px 0")};
  text-decoration: none;
  cursor: pointer;
  width: ${(props) =>
    props.fitContent
      ? "fit-content"
      : "100%"}; // fit content for ButtonHome in section-1 cart

  &:hover {
    background-color: ${(props) =>
      props.white
        ? props.theme.colors.secondary[200]
        : props.theme.colors.primary[600]};
  }
`;
 const ButtonLogout = styled(ButtonHome)`
  background-color: ${(props) => props.theme.colors.dark};
  margin: ${(props) => (props.NoMargin ? "" : "10px 0")};

  &:hover {
    background-color: ${(props) => props.theme.colors.danger[500]};
  }
`;

const Section1H = (props) => {
  return (
    <Container>
      <Div>
        <Navigation>
          <NavigationItem primary>
            <LinkHeader>Automobiles</LinkHeader>
          </NavigationItem>
          <NavigationItem>
            <LinkHeader>Clothes and wear</LinkHeader>
          </NavigationItem>
          <NavigationItem>
            <LinkHeader>Home interiors</LinkHeader>
          </NavigationItem>
          <NavigationItem>
            <LinkHeader>Computer and tech</LinkHeader>
          </NavigationItem>
          <NavigationItem>
            <LinkHeader>Tools, equipments</LinkHeader>
          </NavigationItem>
          <NavigationItem>
            <LinkHeader>Sports and outdoor</LinkHeader>
          </NavigationItem>
          <NavigationItem>
            <LinkHeader>Animal and pets</LinkHeader>
          </NavigationItem>
          <NavigationItem>
            <LinkHeader>Machinery tools</LinkHeader>
          </NavigationItem>
          <NavigationItem>
            <LinkHeader>More category</LinkHeader>
          </NavigationItem>
          <NavigationItem>
            <LinkHeader>Clothes and wear</LinkHeader>
          </NavigationItem>
        </Navigation>
        <DivFImg>
          <H4>Latest trending</H4>
          <H3>Electronic items</H3>
          <ButtonElement weight light>
            Learn More
          </ButtonElement>
        </DivFImg>
        <DivFlex>
          <Div1Container>
            <SubDiv1Container>
              <Img src={avtar} />
              <P dark>
                Hi, User <br /> Let's Get Started
              </P>
            </SubDiv1Container>
            <ButtonHome NoMargin={props.NoMargin}>Join now</ButtonHome>{" "}
            {/*props.NoMargin For Product Page*/}
            <ButtonHome white NoMargin={props.NoMargin}>
              Log in
            </ButtonHome>
            <ButtonLogout
              onClick={props.onLogout}
            >
              Log out
            </ButtonLogout>
          </Div1Container>
          <Div2Container>
            <PHome>
              Get <br /> US $10 off with <br /> a new supplier
            </PHome>
          </Div2Container>
          <Div3Container>
            <PHome>
              Send <br /> quotes with supplier <br /> preferences
            </PHome>
          </Div3Container>
        </DivFlex>
      </Div>
    </Container>
  );
};
export default Section1H;
