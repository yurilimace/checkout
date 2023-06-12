import { Typography } from "../Typography/Typography";
import { InputContainer, StyledInput } from "./Input.styled";
import InputMask from "react-input-mask";
import { CheckoutFormFieldsRegister } from "../../types/types";
import { Controller } from "react-hook-form";
import { useContext } from "react";
import { OffersContext } from "../../Context/OffersContext/OffersContext";

const CardnumberInput = ({ formRegister }: CheckoutFormFieldsRegister) => {
  const context = useContext(OffersContext);
  return (
    <InputContainer>
      <Typography type="InputLabel" textValue={"Número do cartão"} />

      <Controller
        control={formRegister}
        name="creditCardNumber"
        rules={{
          required: true,
          minLength: {
            value: 16,
            message: "Numero de cartão deve ter 16 digitos",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <InputMask
              mask="9999 9999 9999 9999"
              placeholder="0000 0000 0000 0000"
              maskPlaceholder={null}
              value={field.value}
              onChange={(e) => {
                field.onChange(e.target.value);
                if (e.target.value.length === 5) {
                  context?.setCreditCardNumber(e.target.value.trim());
                }
                if (e.target.value.length === 0) {
                  context?.setCreditCardNumber("");
                }
              }}
            >
              <StyledInput fielderror={!!error?.message ?? false} />
            </InputMask>

            {error?.message && (
              <Typography type="ErrorLabel" textValue={error.message} />
            )}
          </>
        )}
      />
    </InputContainer>
  );
};

export { CardnumberInput };
