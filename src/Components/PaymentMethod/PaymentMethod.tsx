import { UseFormGetValues } from "react-hook-form";
import { LugoIcon } from "../../assets/icons/Lugo";
import { PaymentMethodConstants } from "../../constants/PaymentMethodContants";
import { Typography } from "../Typography/Typography";
import {
  OverlayContent,
  PaymentMethodContainer,
  PaymentMethodSection,
  SpoonserSection,
} from "./PaymentMethod.styled";

import { useContext } from "react";
import { OffersContext } from "../../Context/OffersContext/OffersContext";

const PaymentMethod = () => {
  const context = useContext(OffersContext);
  const SelectCard = (index: number) => {
    if (context?.creditCardNumber == "0123" && index === 0) {
      return false;
    }
    if (context?.creditCardNumber == "1234" && index === 1) {
      return false;
    }
    if (context?.creditCardNumber == "2345" && index === 2) {
      return false;
    }
    if (context?.creditCardNumber == "3456" && index === 3) {
      return false;
    }
    if (context?.creditCardNumber == "6789" && index === 4) {
      return false;
    }
    return true;
  };
  return (
    <PaymentMethodContainer>
      <PaymentMethodSection>
        {PaymentMethodConstants.map((x, index) => (
          <>
            {SelectCard(index) && <OverlayContent index={index} />}
            {x.component}
          </>
        ))}
      </PaymentMethodSection>
      <SpoonserSection>
        <Typography type="Spoonser" textValue="Pagamentos por" />
        <LugoIcon />
      </SpoonserSection>
    </PaymentMethodContainer>
  );
};

export { PaymentMethod };
