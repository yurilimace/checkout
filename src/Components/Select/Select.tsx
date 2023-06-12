import { useContext } from "react";
import { InputContainer } from "../Input/Input.styled";
import { Typography } from "../Typography/Typography";
import { StyledSelect } from "./Select.styled";
import { OffersContext } from "../../Context/OffersContext/OffersContext";
import { CheckoutFormFieldsRegister } from "../../types/types";
import { Controller } from "react-hook-form";

const SelectOptions = [
  { label: "1x", value: "1" },
  { label: "2x", value: "2" },
  { label: "3x", value: "3" },
  { label: "4x", value: "4" },
  { label: "5x", value: "5" },
  { label: "6x", value: "6" },
  { label: "7x", value: "7" },
  { label: "8x", value: "8" },
  { label: "9x", value: "9" },
  { label: "10x", value: "10" },
];

const Select = ({ formRegister }: CheckoutFormFieldsRegister) => {
  const context = useContext(OffersContext);
  const options =
    context?.selectedPlan?.installments === 1
      ? [{ label: "1x", value: "1" }]
      : SelectOptions;
  return (
    <InputContainer>
      <Typography type="InputLabel" textValue={"Número de parcelas"} />

      <Controller
        control={formRegister}
        name={"installments"}
        render={({ field, fieldState: { error } }) => (
          <>
            <StyledSelect
              onChange={(e) => field.onChange(e.target.value)}
              disabled={context?.selectedPlan ? false : true}
            >
              {options.map((option) => (
                <option value={option.value}> {option.label} </option>
              ))}
            </StyledSelect>

            {error?.message && (
              <Typography type="ErrorLabel" textValue={error.message} />
            )}
          </>
        )}
      />
    </InputContainer>
  );
};

export { Select };
