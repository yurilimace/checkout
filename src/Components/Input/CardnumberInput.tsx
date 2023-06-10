import { Typography } from "../Typography/Typography";
import { InputContainer, StyledInput } from "./Input.styled";
import InputMask from "react-input-mask";

const CardnumberInput = () => {
  return (
    <InputContainer>
      <Typography type="InputLabel" textValue={"Número do cartão"} />

      <InputMask
        mask="9999 9999 9999 9999"
        placeholder="0000 0000 0000 0000"
        maskPlaceholder={null}
      >
        <StyledInput fielderror={true} />
      </InputMask>
    </InputContainer>
  );
};

export { CardnumberInput };
