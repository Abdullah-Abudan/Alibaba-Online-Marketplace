import styled from "styled-components";
import searchResponsive from "../../Images/searchResponsive.svg";
const SearchInput = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 8px;
  background: #f7fafc;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  display: none;
  @media (max-width: 992px) {
    display: flex;
  }
  .icon {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 10px 2px 10px 10px;
  }

  .icon img {
    width: 20px;
    height: 20px;
  }

  input {
    flex: 1;
    padding: 10px;
    border: none;
    outline: 0;
    background-color: transparent;
  }
`;

export const SearchResponsive = () => {
  return (
    <SearchInput>
      <button className="icon">
        <img src={searchResponsive} alt="Search Icon" />
      </button>
      <input value="" placeholder="Search" />
    </SearchInput>
  );
};
