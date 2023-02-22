import styled from "styled-components";
import { Label } from "../../Component/InputLabel";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 4px 0 10px;
`;
const Select = styled.select`
  width: 25%;
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
  width: 75%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
`;

const InputSelect = (props) => {
  return (
    <>
      <Label>Phone</Label>
      <InputContainer>
        <Select>
          <option value="UZ">UZ +998</option>
          <option value="PS">PS +972</option>
          <option value="TR">TR +976</option>
        </Select>
        <Input placeholder="00-000-00-00"
          id={props.id}
          type= "text"
          value={props.value}
          onChange={props.onChange}
          />
      </InputContainer>
    </>
  );
};
export default InputSelect;
