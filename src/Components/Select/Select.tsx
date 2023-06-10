import { InputContainer } from "../Input/Input.styled";
import { Typography } from "../Typography/Typography";
import { StyledSelect } from "./Select.styled";

const SelectOptions = [
  { label: "1x", value: "1" },
  { label: "2x", value: "2" },
  { label: "3x", value: "3" },
  { label: "4x", value: "4" },
  { label: "5x", value: "5" },
  { label: "6x", value: "6" },
  { label: "7x", value: "7" },
  { label: "8x", value: "8" },
  { label: "9x", value: "9" },
  { label: "10x", value: "10" },
];

const Select = () => {
  return (
    <InputContainer>
      <Typography type="InputLabel" textValue={"Número de parcelas"} />
      <StyledSelect>
        {SelectOptions.map((option) => (
          <option value={option.value}> {option.label} </option>
        ))}
      </StyledSelect>
    </InputContainer>
  );
};

export { Select };
