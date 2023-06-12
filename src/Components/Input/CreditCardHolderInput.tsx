import { Controller } from "react-hook-form";
import { CheckoutFormFieldsRegister } from "../../types/types";
import { Typography } from "../Typography/Typography";
import { InputContainer, StyledInput } from "./Input.styled";

const CreditCardHolderInput = ({
  formRegister,
}: CheckoutFormFieldsRegister) => {
  return (
    <InputContainer>
      <Typography type="InputLabel" textValue={"Nome impresso no cartão"} />

      <Controller
        control={formRegister}
        name={"creditCardHolder"}
        rules={{
          required: true,
          minLength: {
            value: 1,
            message: "Campo não pode ser vazio",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <StyledInput
              onChange={(e) => field.onChange(e.target.value)}
              fielderror={!!error?.message ?? false}
              placeholder={"Seu Nome"}
            />

            {error?.message && (
              <Typography type="ErrorLabel" textValue={error.message} />
            )}
          </>
        )}
      />
    </InputContainer>
  );
};

export { CreditCardHolderInput };
