import styled from "styled-components";

const ContainerLogSign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({ theme }) => theme.padding.p6};
  min-height: calc(100vh - 74px);
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    padding-top: ${({ theme }) => theme.padding.p4};
  }
`;
export default ContainerLogSign;
