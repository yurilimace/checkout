import { PaymentMethod } from "../PaymentMethod/PaymentMethod";
import { Typography } from "../Typography/Typography";
import { CheckoutFormContainer } from "./CheckoutForm.styled";

const CheckoutForm = () => {
  return (
    <CheckoutFormContainer>
      <Typography type={"Title"} textValue="Estamos quase lá!" />
      <Typography
        type={"Subtitle"}
        textValue="Insira seus dados de pagamento abaixo:"
      />
      <PaymentMethod />
      <input />
      <input />
      <input />
      <input />
    </CheckoutFormContainer>
  );
};

export { CheckoutForm };
