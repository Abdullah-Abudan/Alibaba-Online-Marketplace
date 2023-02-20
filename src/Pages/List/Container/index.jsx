import styled from "styled-components";

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  @media (max-width: 992px) {
    grid-template-columns: 1fr; //Until the content takes full width when theContainerDiv1 in List disappears
  }
`;
export const ContainerDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 992px) {
    display: none;
  }
`;
export const ContainerDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
