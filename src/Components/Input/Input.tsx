import { Typography } from "../Typography/Typography";
import { StyledInput } from "./Input.styled";

const Input = () => {
  return (
    <>
      <Typography type="InputLabel" textValue={"Número do cartão"} />
      <StyledInput fieldError={true} placeholder="0000 0000 0000 0000" />
    </>
  );
};

export { Input };
