import { Link } from "react-router-dom";
import styled from "styled-components";
import { Line } from "../Or";
import { useState } from "react";

// Img
import logo from "../../Images/logo.svg";
import user from "../../Images/userHeader.svg";
import message from "../../Images/messageHeader.svg";
import heart from "../../Images/heartHeader.svg";
import cart from "../../Images/cartHeader.svg";
import product from "../../Images/window.svg";
import list from "../../Images/listResponsive.svg";
import VectorBottom from "../../Images/VectorBottom.svg";
import DE from "../../Images/DEFlag.svg";
// img Responsive
import listResponsive from "../../Images/listResponsive.svg";
import CartResponsive from "../../Images/CartResponsive.svg";
import AvtarResponsive from "../../Images/AvtarResponsive.svg";
import AdminResponsive from "../../Images/AdminResponsive.svg";
import HomeResponsive from "../../Images/HomeResponsive.svg";
import categoriesResponsive from "../../Images/categoriesResponsive.svg";
import heartResponsive from "../../Images/heartResponsive.svg";
import orderResponsive from "../../Images/orderResponsive.svg";
import earth from "../../Images/earth.svg";
import contactResponsive from "../../Images/contactResponsive.svg";
import aboutResponsive from "../../Images/aboutResponsive.svg";
import { SearchResponsive } from "../SearchResponsive";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 0;
  background: #ffffff;
  display: ${(props) => (props.none ? "none" : "")}; //for cart page
  @media (max-width: 992px) {
    display: none;
  }
`;

export const Navigation = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  list-style: none;
`;

export const NavigationItem = styled.li``;
export const LinkHeader = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.productColor ? "#8B96A5" : ""}; // For Product Link color
`;

export const Img = styled.img`
  object-fit: contain;
  mix-blend-mode: ${(props) =>
    props.productbg ? "multiply" : ""}; // For img in page Product
`;

export const P = styled.p`
  font-size: ${(props) => (props.dark ? "16px" : "12px")};
  color: ${(props) =>
    props.dark ? props.theme.colors.dark : props.theme.colors.secondary[500]};
  margin-top: 4px;
  font-weight: ${(props) => (props.dark ? "bold" : "normal")};
  margin-left: 6px;
  line-height: 19px;
`;
const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  flex-grow: 1;
  border: 2px solid ${({ theme }) => theme.colors.primary[500]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: ${(props) => (props.none ? "none" : "")}; //for Cart Page
`;
const SearchInput = styled.input`
  padding: 10px;
  border: none;
  font-size: 16px;
  outline: none;
  flex-grow: 1;
  cursor: context-menu;
`;

const SearchSelect = styled.select`
  padding: 10px;
  border: none;
  font-size: 16px;
  outline: none;
  margin-right: 10px;
  background-color: #fff;
  border-left: 2px solid ${({ theme }) => theme.colors.primary[500]};
  height: 100%;
  &:focus {
    outline: none;
  }
`;
const SearchButton = styled.button`
  padding: 12px 24px 11px;
  border: none;
  background: linear-gradient(rgb(18, 127, 255) 0%, rgb(0, 103, 255) 100%);
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  height: 100%;

  &:hover {
    background: rgb(18, 127, 255) 0%;
  }
`;
const Div = styled.div`
  display: flex;
  gap: 16px;
`;
const LinkNav = styled(Link)`
  text-decoration: none;
  display: flex;
  gap: 8px;
  align-items: baseline;
  justify-content: center;
  align-items: center;
`;
/* -------------------------------------------------------------- start Responsive AppBar and Sidebar -------------------------------------------------------------- */
const HeaderContainerResponsive = styled.header`
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 10px;
  background: #ffffff;
  display: none;

  @media (max-width: 992px) {
    display: flex;
  }
`;
const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 200px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  background-color: #ffff;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 99;
`;

const SidebarHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background-color: #eff2f4;
  padding: 20px;
`;
const Avatar = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`;

const Username = styled.span`
  font-weight: bold;
  cursor: pointer;
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
  margin-bottom: ${(props) => (props.noMP ? "0" : "10px")};
  padding: ${(props) => (props.noMP ? "0" : "0 20px")};

  &:hover {
    font-weight: 500;
  }
`;

const SidebarIcon = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

const SidebarText = styled.span`
  font-size: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1c1c1c;
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: calc(100% - 200px);
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;
const Header = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen);
  return (
    <>
      <HeaderContainerResponsive>
        <div
          style={{
            display: "flex",
            gap: "18px",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Img
            height="20px"
            width="20px"
            src={listResponsive}
            alt="listLogo"
            onClick={handleSidebarToggle}
          />
          <LinkHeader to="/Home">
            <Img src={logo} alt="Alibaba Logo" />
          </LinkHeader>
        </div>

        {sidebarOpen && <Backdrop onClick={handleSidebarToggle} />}

        <SidebarContainer isOpen={sidebarOpen}>
          <SidebarHeader>
            <Avatar src={AdminResponsive} alt="avtarLogo" />
            <div>
              <Username>Sign in | </Username>
              <Username>Register</Username>
            </div>
          </SidebarHeader>
          <SidebarLink to="/Home">
            <SidebarIcon src={HomeResponsive} alt="Home" />
            <SidebarText>Home</SidebarText>
          </SidebarLink>

          <SidebarLink to="/Categories">
            <SidebarIcon src={categoriesResponsive} alt="Categories" />
            <SidebarText>Categories</SidebarText>
          </SidebarLink>

          <SidebarLink to="/Favorites">
            <SidebarIcon src={heartResponsive} alt="Favorites" />
            <SidebarText>Favorites</SidebarText>
          </SidebarLink>

          <SidebarLink to="/MyOrders">
            <SidebarIcon src={orderResponsive} alt="My Orders" />
            <SidebarText>My Orders</SidebarText>
          </SidebarLink>
          <div style={{ borderTop: "1px solid #ccc" }}></div>

          <SidebarLink to="/LanguageAndCurrency">
            <SidebarIcon src={earth} alt="English | USD" />
            <SidebarText>English | USD</SidebarText>
          </SidebarLink>

          <SidebarLink to="/ContactUs">
            <SidebarIcon src={contactResponsive} alt="Contact Us" />
            <SidebarText>Contact us</SidebarText>
          </SidebarLink>

          <SidebarLink to="/About">
            <SidebarIcon src={aboutResponsive} alt="About" />
            <SidebarText>About</SidebarText>
          </SidebarLink>
          <div style={{ borderTop: "1px solid #ccc" }}></div>

          <SidebarLink to="/UserAgreement">
            <SidebarText>User Agreement</SidebarText>
          </SidebarLink>

          <SidebarLink to="/UserAgreement">
            <SidebarText>Partnership</SidebarText>
          </SidebarLink>

          <SidebarLink to="/UserAgreement">
            <SidebarText>Privacy policy</SidebarText>
          </SidebarLink>
        </SidebarContainer>

        {/*------------------------ End Responsive AppBar and Sidebar -------------------------------- */}

        <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
          <LinkHeader to="/Cart">
            <Img
              height="20px"
              width="20px"
              src={CartResponsive}
              alt="cartLogo"
            />
          </LinkHeader>
          <LinkHeader to="/Profile">
            <Img
              height="20px"
              width="20px"
              src={AvtarResponsive}
              alt="avtarLogo"
            />
          </LinkHeader>
        </div>
      </HeaderContainerResponsive>
      <HeaderContainer>
        <LinkHeader to="/Home">
          <Img src={logo} alt="Alibaba Logo" />
        </LinkHeader>
        <SearchContainer none={props.none}>
          <SearchInput name="search" />
          <SearchSelect>
            <option value="" hidden selected>
              All Categories
            </option>
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
            <option value="3">Category 3</option>
          </SearchSelect>
          <SearchButton type="submit">Search</SearchButton>
        </SearchContainer>
        <Navigation>
          <NavigationItem>
            <LinkHeader to="/Profile">
              <Img src={user} />
              <P>Profile</P>
            </LinkHeader>
          </NavigationItem>
          <NavigationItem>
            <LinkHeader to="/Message">
              <Img src={message} />
              <P>Message</P>
            </LinkHeader>
          </NavigationItem>
          <NavigationItem>
            <LinkHeader to="/Order">
              <Img src={heart} />
              <P>Orders</P>
            </LinkHeader>
          </NavigationItem>
          <NavigationItem>
            <LinkHeader to="/Cart">
              <Img src={cart} />
              <P>My cart</P>
            </LinkHeader>
          </NavigationItem>
          <NavigationItem>
            <LinkHeader to="/Product">
              <Img src={product} />
              <P>Product</P>
            </LinkHeader>
          </NavigationItem>

        </Navigation>
      </HeaderContainer>
      <Line none={props.none} />
      <SearchResponsive />

      <HeaderContainer none={props.none}>
        <Div>
          <Navigation>
            <NavigationItem>
              <LinkNav to="">
                <Img src={list} />
                <P dark>All Category</P>
              </LinkNav>
            </NavigationItem>
          </Navigation>
          <Navigation>
            <NavigationItem>
              <LinkNav to="">
                <P dark>Hot offers</P>
              </LinkNav>
            </NavigationItem>
          </Navigation>
          <Navigation>
            <NavigationItem>
              <LinkNav to="">
                <P dark>Gift boxes</P>
              </LinkNav>
            </NavigationItem>
          </Navigation>
          <Navigation>
            <NavigationItem>
              <LinkNav to="">
                <P dark>Projects</P>
              </LinkNav>
            </NavigationItem>
            <NavigationItem>
              <LinkNav to="">
                <P dark>Menu item</P>
              </LinkNav>
            </NavigationItem>
            <NavigationItem>
              <LinkNav to="">
                <P dark>Help</P>
                <Img src={VectorBottom} />
              </LinkNav>
            </NavigationItem>
          </Navigation>
        </Div>
        <Div>
          <Navigation>
            <NavigationItem>
              <LinkNav to="">
                <P dark>English, USD</P>
                <Img src={VectorBottom} />
              </LinkNav>
            </NavigationItem>
            <NavigationItem>
              <LinkNav to="">
                <P dark>Ship to</P>
                <Img src={DE} width="25px" height="18px" />
                <Img src={VectorBottom} />
              </LinkNav>
            </NavigationItem>
          </Navigation>
        </Div>
      </HeaderContainer>
    </>
  );
};

export default Header;
