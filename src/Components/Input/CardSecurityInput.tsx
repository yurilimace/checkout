import { Typography } from "../Typography/Typography";
import { CardDateValidationInput, InputContainerColumn } from "./Input.styled";
import InputMask from "react-input-mask";

const CardSecurityCodeInput = () => {
  return (
    <InputContainerColumn>
      <Typography type="InputLabel" textValue={"CCV"} />
      <InputMask mask="999" placeholder="000" maskPlaceholder={null}>
        <CardDateValidationInput fielderror={true} />
      </InputMask>
    </InputContainerColumn>
  );
};

export { CardSecurityCodeInput };
