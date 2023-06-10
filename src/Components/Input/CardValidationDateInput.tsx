import { Typography } from "../Typography/Typography";
import { CardDateValidationInput, InputContainerColumn } from "./Input.styled";
import InputMask from "react-input-mask";

const CardValidationDateInput = () => {
  return (
    <InputContainerColumn>
      <Typography type="InputLabel" textValue={"Validade"} />

      <InputMask mask="99/99" placeholder="MM/AA" maskPlaceholder={null}>
        <CardDateValidationInput fielderror={true} />
      </InputMask>
    </InputContainerColumn>
  );
};

export { CardValidationDateInput };
