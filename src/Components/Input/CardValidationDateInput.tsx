import { Controller } from "react-hook-form";
import { CheckoutFormFieldsRegister } from "../../types/types";
import { Typography } from "../Typography/Typography";
import { CardDateValidationInput, InputContainerColumn } from "./Input.styled";
import InputMask from "react-input-mask";

const CardValidationDateInput = ({
  formRegister,
}: CheckoutFormFieldsRegister) => {
  return (
    <InputContainerColumn>
      <Typography type="InputLabel" textValue={"Validade"} />

      <Controller
        control={formRegister}
        name="creditCardExpirationDate"
        rules={{
          required: true,
          minLength: { value: 5, message: "campo data deve conter mes/ano" },
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <InputMask
              mask="99/99"
              placeholder="MM/AA"
              maskPlaceholder={null}
              onChange={(e) => field.onChange(e.target.value)}
            >
              <CardDateValidationInput fielderror={!!error?.message} />
            </InputMask>
            {error?.message && (
              <Typography type="ErrorLabel" textValue={error?.message} />
            )}
          </>
        )}
      />
    </InputContainerColumn>
  );
};

export { CardValidationDateInput };
