import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import { Typography } from "../Typography/Typography";
import { CardSecurityCodeInput } from "./CardSecurityInput";
import { CardValidationDateInput } from "./CardValidationDateInput";
import { CardnumberInput } from "./CardnumberInput";
import { CPFInput } from "./CpfInput";

import { CheckoutFormFields } from "../../types/types";
import { CreditCardHolderInput } from "./CreditCardHolderInput";
import { InputContainer, StyledInput } from "./Input.styled";

interface InputProps {
  labelText?: string;
  customPlaceholder?: string;
  type:
    | "Cardnumber"
    | "CardValidationDate"
    | "Cardsecuritycode"
    | "CPF"
    | "Custom"
    | "CreditCardHolder";
  formRegister: Control<CheckoutFormFields>;
}

const Input = ({
  labelText = "",
  type,
  customPlaceholder = "",
  formRegister,
}: InputProps) => {
  switch (type) {
    case "Cardnumber": {
      return <CardnumberInput formRegister={formRegister} />;
    }
    case "CardValidationDate": {
      return <CardValidationDateInput formRegister={formRegister} />;
    }

    case "Cardsecuritycode": {
      return <CardSecurityCodeInput formRegister={formRegister} />;
    }
    case "CPF": {
      return <CPFInput formRegister={formRegister} />;
    }
    case "CreditCardHolder": {
      return <CreditCardHolderInput formRegister={formRegister} />;
    }
    default: {
      return (
        <InputContainer>
          <Typography type="InputLabel" textValue={labelText} />
          <Controller
            control={formRegister}
            name={"couponCode"}
            rules={{
              required: false,
              minLength: {
                value: 1,
                message: "Campo não pode ser vazio",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <>
                <StyledInput
                  fielderror={!!error?.message ?? false}
                  placeholder={customPlaceholder}
                />

                {error?.message && (
                  <Typography type="ErrorLabel" textValue={error.message} />
                )}
              </>
            )}
          />
        </InputContainer>
      );
    }
  }
};

export { Input };
