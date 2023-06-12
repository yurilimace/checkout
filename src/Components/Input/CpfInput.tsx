import { Controller } from "react-hook-form";
import { CheckoutFormFieldsRegister } from "../../types/types";
import { Typography } from "../Typography/Typography";
import { InputContainer, StyledInput } from "./Input.styled";
import InputMask from "react-input-mask";

const CPFInput = ({ formRegister }: CheckoutFormFieldsRegister) => {
  return (
    <InputContainer>
      <Typography type="InputLabel" textValue={"CPF"} />
      <Controller
        control={formRegister}
        name="creditCardCPF"
        rules={{
          required: true,
          pattern: {
            value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
            message: "Numero de cpf invalido",
          },
          minLength: { value: 1, message: "Campo cpf está vazio" },
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <InputMask
              mask="999.999.999-99"
              placeholder="000.000.000-00"
              maskPlaceholder={null}
              onChange={(e) => field.onChange(e.target.value)}
            >
              <StyledInput fielderror={!!error?.message ?? false} />
            </InputMask>
            {error?.message && (
              <Typography type="ErrorLabel" textValue={error?.message} />
            )}
          </>
        )}
      />
    </InputContainer>
  );
};

export { CPFInput };
