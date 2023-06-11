import { Typography } from "../Typography/Typography";
import { CardSecurityCodeInput } from "./CardSecurityInput";
import { CardValidationDateInput } from "./CardValidationDateInput";
import { CardnumberInput } from "./CardnumberInput";
import { CPFInput } from "./CpfInput";
import { StyledInput } from "./Input.styled";

interface InputProps {
  labelText?: string;
  customPlaceholder?: string;
  type:
    | "Cardnumber"
    | "CardValidationDate"
    | "Cardsecuritycode"
    | "CPF"
    | "Custom";
}

const Input = ({
  labelText = "",
  type,
  customPlaceholder = "",
}: InputProps) => {
  switch (type) {
    case "Cardnumber": {
      return <CardnumberInput />;
    }
    case "CardValidationDate": {
      return <CardValidationDateInput />;
    }

    case "Cardsecuritycode": {
      return <CardSecurityCodeInput />;
    }
    case "CPF": {
      return <CPFInput />;
    }
    default: {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingBottom: "30px",
          }}
        >
          <Typography type="InputLabel" textValue={labelText} />
          <StyledInput fielderror={true} placeholder={customPlaceholder} />
        </div>
      );
    }
  }
};

export { Input };
