import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  gap: 10px;
  margin: 0px 0 10px;
`;
const Select = styled.select`
  width: 35%;
  height: 40px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  user-select: none;
  outline: none;
  &:focus {
    outline: none;
  }
`;

const Input = styled.input`
  width: 55%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  &::placeholder {
    font-family: "Courier New", Courier, monospace;
  }
`;

const InputSelect = () => {
  return (
    <>
      <InputContainer>
        <Input type="number" placeholder="Quantity" />

        <Select>
          <option value="" hidden selected>
            Price/Prices
          </option>
          <option value="Bag">Bag/Bags</option>
          <option value="Barrel">Barrel/Barrels</option>
          <option value="Bushel">Bushel/Bushels</option>
        </Select>
      </InputContainer>
    </>
  );
};
export default InputSelect;
