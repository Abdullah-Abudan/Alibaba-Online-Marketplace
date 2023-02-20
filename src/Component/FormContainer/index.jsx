import styled from "styled-components";

const FormContainer = styled.div`
  height: auto;
  width: 387px;
  padding: ${({ theme }) => theme.padding.p4};
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: rgb(32 32 32 / 10%) 0px 3px 10px;
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export default FormContainer;
