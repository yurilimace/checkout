import { Controller } from "react-hook-form";
import { CheckoutFormFieldsRegister } from "../../types/types";
import { Typography } from "../Typography/Typography";
import { CardDateValidationInput, InputContainerColumn } from "./Input.styled";
import InputMask from "react-input-mask";

const CardSecurityCodeInput = ({
  formRegister,
}: CheckoutFormFieldsRegister) => {
  return (
    <InputContainerColumn>
      <Typography type="InputLabel" textValue={"CCV"} />
      <Controller
        control={formRegister}
        name="creditCardCVV"
        rules={{
          required: true,
          maxLength: { value: 3, message: "CCV deve ser de 3 digitos" },
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <InputMask
              mask="999"
              placeholder="000"
              maskPlaceholder={null}
              onChange={(e) => field.onChange(e.target.value)}
            >
              <CardDateValidationInput fielderror={!!error?.message ?? false} />
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

export { CardSecurityCodeInput };
