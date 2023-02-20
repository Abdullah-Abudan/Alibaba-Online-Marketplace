import styled from "styled-components";
const Title = styled.h3`
  font-size: ${({ theme }) => theme.fonts.h3.size};
  font-weight: ${({ theme }) => theme.fonts.h3.weight};
  line-height: ${({ theme }) => theme.fonts.h3.lh};
  letter-spacing: ${({ theme }) => theme.fonts.h3.spacing};
  margin: 16px 0;
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    font-size: ${({ theme }) => theme.fonts.h4.size};
    font-weight: ${({ theme }) => theme.fonts.h4.weight};
    line-height: ${({ theme }) => theme.fonts.h4.lh};
    letter-spacing: ${({ theme }) => theme.fonts.h4.spacing};
  }
`;
export default Title;
