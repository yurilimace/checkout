import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { PaymentMethod } from "../PaymentMethod/PaymentMethod";
import { Select } from "../Select/Select";
import { Typography } from "../Typography/Typography";
import { CheckoutFormContainer, CheckoutFormLine } from "./CheckoutForm.styled";

const CheckoutForm = () => {
  return (
    <CheckoutFormContainer>
      <Typography type={"Title"} textValue="Estamos quase lá!" />
      <Typography
        type={"Subtitle"}
        textValue="Insira seus dados de pagamento abaixo:"
      />
      <PaymentMethod />
      <Input type="Cardnumber" />
      <CheckoutFormLine>
        <Input type="CardValidationDate" />
        <Input type="Cardsecuritycode" />
      </CheckoutFormLine>
      <Input
        type="Custom"
        labelText="Nome impresso no cartão"
        customPlaceholder="Seu nome"
      />
      <Input type="CPF" labelText="CPF" />
      <Input type="Custom" labelText="Cupom" customPlaceholder="Insira aqui" />
      <Select />
      <Button />
    </CheckoutFormContainer>
  );
};

export { CheckoutForm };
