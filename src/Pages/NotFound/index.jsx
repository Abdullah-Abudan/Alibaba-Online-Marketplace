import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// img
import error from "../../Images/error.webp";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-y: hidden;
`;
const ErrorSVGContainer = styled.div`
  width: 519px;
  height: 200px;
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    width: auto;
  }
`;

const ErrorSVG = styled.svg`
  width: 100%;
  height: 100%;
  fill: none;
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    display: none;
  }
`;

const ErrorImg = styled.img`
  display: none;
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Heading = styled.h1`
  margin: 24px 0;
  font-size: 2em;
  color: #626262;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.math};
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    font-size: 1.5em;
  }
`;
const ArrowSVG = styled.svg`
  width: 24px;
  height: 24px;
  fill: none;
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    width: 16px;
    height: 16px;
  }
`;

const Btn = styled(Link)`
  font-size: 1.5em;
  color: #666;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #222222;
  border-radius: 40px;
  padding: 10px;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    border: 3px solid #222222;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    font-size: 1em;
    padding: 8px;
  }
`;

const Arrow = styled.span`
  display: flex;
  align-items: center;
  justify-content: baseline;
`;

const NotFoundTxt = styled.span`
  padding: 0 8px;
  color: ${({ theme }) => theme.colors.secondary[600]};
  font-family: ${({ theme }) => theme.fontFamily.math};
`;

const NotFound = () => {
  return (
    <Container>
      <ErrorSVGContainer>
        <ErrorSVG>
          <path
            d="M2 111.728L80.624 6.32H129.584V119.216H160.4V153.2H129.584V193.232H90.416V153.2H2V111.728ZM90.416 47.792L37.136 119.216H90.416V47.792ZM221.29 99.92C221.29 109.712 222.058 118.736 223.594 126.992C225.13 135.056 227.722 141.872 231.37 147.44C234.25 152.048 237.994 155.792 242.602 158.672C247.21 161.36 252.874 162.704 259.594 162.704C266.506 162.704 272.17 161.36 276.586 158.672C281.002 155.792 284.65 152.048 287.53 147.44C291.37 141.872 294.058 135.056 295.594 126.992C297.13 118.736 297.898 109.712 297.898 99.92C297.898 90.128 297.13 81.2 295.594 73.136C294.058 64.88 291.37 57.968 287.53 52.4C284.65 47.792 281.002 44.144 276.586 41.456C272.17 38.576 266.506 37.136 259.594 37.136C252.874 37.136 247.21 38.576 242.602 41.456C237.994 44.144 234.25 47.792 231.37 52.4C227.722 57.968 225.13 64.88 223.594 73.136C222.058 81.2 221.29 90.128 221.29 99.92ZM181.546 99.92C181.546 87.824 182.697 76.208 185.001 65.072C187.305 53.744 191.626 43.184 197.962 33.392C204.106 24.176 212.265 16.688 222.441 10.928C232.617 4.976 245.002 2 259.594 2C274.186 2 286.474 4.976 296.458 10.928C306.634 16.688 314.793 24.176 320.938 33.392C327.273 43.184 331.593 53.744 333.897 65.072C336.393 76.208 337.642 87.824 337.642 99.92C337.642 112.016 336.393 123.728 333.897 135.056C331.593 146.192 327.273 156.656 320.938 166.448C314.793 175.664 306.634 183.248 296.458 189.2C286.474 194.96 274.186 197.84 259.594 197.84C245.002 197.84 232.617 194.96 222.441 189.2C212.265 183.248 204.106 175.664 197.962 166.448C191.626 156.656 187.305 146.192 185.001 135.056C182.697 123.728 181.546 112.016 181.546 99.92ZM358.625 111.728L437.249 6.32H486.209V119.216H517.025V153.2H486.209V193.232H447.041V153.2H358.625V111.728ZM447.041 47.792L393.761 119.216H447.041V47.792Z"
            stroke="#222222"
            stroke-width="3"
          ></path>
        </ErrorSVG>
        <ErrorImg src={error} alt="Error" />
      </ErrorSVGContainer>

      <Heading>Sorry, The page you???re looking for doesn???t exist.</Heading>
      <Btn to="/Login">
        <Arrow>
          <ArrowSVG>
            <path
              d="M4 12L3.77514 11.0256C3.32141 11.1303 3 11.5343 3 12C3 12.4657 3.32141 12.8697 3.77514 12.9744L4 12ZM10.9744 6.22486C11.0986 5.68672 10.763 5.1498 10.2249 5.02561C9.68672 4.90142 9.1498 5.237 9.02561 5.77514L10.9744 6.22486ZM9.02561 18.2249C9.1498 18.763 9.68672 19.0986 10.2249 18.9744C10.763 18.8502 11.0986 18.3133 10.9744 17.7751L9.02561 18.2249ZM4.30754 12.071L4.08268 13.0454L4.30754 12.071ZM4.30754 11.929L4.5324 12.9034L4.30754 11.929ZM4.22486 12.9744L4.5324 12.9034L4.08268 10.9546L3.77514 11.0256L4.22486 12.9744ZM10.9034 6.5324L10.9744 6.22486L9.02561 5.77514L8.95464 6.08268L10.9034 6.5324ZM10.9744 17.7751L10.9034 17.4676L8.95464 17.9173L9.02561 18.2249L10.9744 17.7751ZM4.5324 11.0966L4.22486 11.0256L3.77514 12.9744L4.08268 13.0454L4.5324 11.0966ZM10.9034 17.4676C10.1725 14.3005 7.69952 11.8275 4.5324 11.0966L4.08268 13.0454C6.5046 13.6043 8.39573 15.4954 8.95464 17.9173L10.9034 17.4676ZM4.5324 12.9034C7.69952 12.1725 10.1725 9.69952 10.9034 6.5324L8.95464 6.08268C8.39573 8.5046 6.5046 10.3957 4.08268 10.9546L4.5324 12.9034Z"
              fill="#222222"
            ></path>
            <path
              d="M5.875 12H20.875"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
          </ArrowSVG>
        </Arrow>
        <NotFoundTxt>Go to Login Page</NotFoundTxt>
      </Btn>
    </Container>
  );
};

export default NotFound;
