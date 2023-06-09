import { LugoIcon } from "../../assets/icons/Lugo";
import { PaymentMethodConstants } from "../../constants/PaymentMethodContants";
import { Typography } from "../Typography/Typography";
import {
  OverlayContent,
  PaymentMethodContainer,
  PaymentMethodSection,
  SpoonserSection,
} from "./PaymentMethod.styled";

const PaymentMethod = () => {
  return (
    <PaymentMethodContainer>
      <PaymentMethodSection>
        {PaymentMethodConstants.map((x, index) => (
          <>
            <OverlayContent index={index} />
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