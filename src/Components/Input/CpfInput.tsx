import { Typography } from "../Typography/Typography";
import { InputContainer, StyledInput } from "./Input.styled";
import InputMask from "react-input-mask";

const CPFInput = () => {
  return (
    <InputContainer>
      <Typography type="InputLabel" textValue={"CPF"} />

      <InputMask
        mask="999.999.999-99"
        placeholder="000.000.000-00"
        maskPlaceholder={null}
      >
        <StyledInput fielderror={true} />
      </InputMask>
    </InputContainer>
  );
};

export { CPFInput };
